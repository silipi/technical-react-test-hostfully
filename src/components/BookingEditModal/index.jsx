/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { checkBookingDates } from '../../utils';
import { Container } from './styles';
import { update } from '../../store/slices/booking';

const BookingEditModal = ({ isOpen, onClose, booking }) => {
  const bookings = useSelector((state) => state.booking.bookings);
  const properties = useSelector((state) => state.property.properties);
  const [name, setName] = useState(booking.name);
  const [initialDate, setInitialDate] = useState(booking.initialDate);
  const [finalDate, setFinalDate] = useState(booking.finalDate);
  const [property, setProperty] = useState(booking.property);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !initialDate || !finalDate || !property) {
      return toast.error('Please fill all fields.');
    }

    if (
      checkBookingDates(
        { initialDate, finalDate, bookings, propertyId: property.id },
        booking.id
      )
    ) {
      return toast.error(
        'This place is already booked for within this interval.'
      );
    }

    const updated = {
      id: booking.id,
      name,
      initialDate,
      finalDate,
      property,
    };

    dispatch(update(updated));

    onClose();

    return toast.success('Booking successfully updated!');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
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
      </form>
      {properties.map((prop) => (
        <div
          onClick={() => {
            setProperty(prop);
          }}
        >
          <img src={prop.image} alt={prop.title} width="100px" />
          <p>{prop.title}</p>
        </div>
      ))}
    </Container>
  );
};

export default BookingEditModal;
