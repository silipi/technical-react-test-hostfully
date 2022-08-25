import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { create } from '../../store/slices/booking';
import { checkBookingDates } from '../../utils';
import Button from '../common/Button';
import Input from '../common/Input';
import { Container } from './styles';
import { setSelectedProperty } from '../../store/slices/property';

const CreateBooking = () => {
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
      checkBookingDates({
        initialDate,
        finalDate,
        bookings,
        propertyId: selectedProperty.id,
      })
    ) {
      return toast.error(
        'This place is already booked for within this interval.'
      );
    }

    const booking = {
      id: uuidv4(),
      name,
      initialDate,
      finalDate,
      property: selectedProperty,
    };

    dispatch(create(booking));

    setName('');
    setInitialDate('');
    setFinalDate('');

    dispatch(setSelectedProperty(null));

    return toast.success('Booking successfully created!');
  };

  const handleCancel = () => {
    dispatch(setSelectedProperty(null));
    setName('');
    setInitialDate('');
    setFinalDate('');
  };

  return (
    <Container>
      <h2>Fill the information needed:</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          label="Name:"
          id="name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={setName}
        />
        <Input
          label="Start date:"
          id="initial"
          type="date"
          placeholder="Initial date"
          value={initialDate}
          min={new Date().toISOString().split('T')[0]}
          onChange={setInitialDate}
        />
        <Input
          label="End date:"
          id="final"
          type="date"
          placeholder="Final date"
          value={finalDate}
          min={initialDate || new Date().toISOString().split('T')[0]}
          onChange={setFinalDate}
        />

        <div className="actions">
          <Button type="submit">Create</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateBooking;
