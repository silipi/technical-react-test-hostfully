import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { create } from '../../store/slices/booking';
import { checkBookingDates } from '../../utils';

const Booking = () => {
  const dispatch = useDispatch();
  const selectedProperty = useSelector(
    (state) => state.property.selectedProperty
  );
  const bookings = useSelector((state) => state.booking.bookings);

  const [name, setName] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedProperty) {
      return toast('Select a property first!');
    }

    if (!name || !initialDate || !finalDate) {
      return toast.error('Please fill all fields.');
    }

    if (
      checkBookingDates(initialDate, finalDate, bookings, selectedProperty.id)
    ) {
      return toast.error(
        'This place is already booked for within this interval.'
      );
    }

    const booking = {
      name,
      initialDate,
      finalDate,
      property: selectedProperty,
    };

    dispatch(create(booking));

    return toast.success('Booking successfully created!');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Initial date"
        value={initialDate}
        min={new Date().toISOString().split('T')[0]}
        onChange={(e) => setInitialDate(e.target.value)}
      />
      <input
        type="date"
        placeholder="Final date"
        value={finalDate}
        min={initialDate || new Date().toISOString().split('T')[0]}
        onChange={(e) => setFinalDate(e.target.value)}
      />
      <button type="submit">Submit</button>
      {JSON.stringify(bookings, null, 2)}
    </form>
  );
};

export default Booking;
