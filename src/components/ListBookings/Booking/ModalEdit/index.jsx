/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { checkBookingDates } from '../../../../utils';
import { Container, OuterContainer } from './styles';
import { update } from '../../../../store/slices/booking';
import Button from '../../../common/Button';
import Input from '../../../common/Input';

const ModalEdit = ({ onClose, booking }) => {
  const bookings = useSelector((state) => state.booking.bookings);
  const properties = useSelector((state) => state.property.properties);

  const [name, setName] = useState(booking.name);
  const [initialDate, setInitialDate] = useState(booking.initialDate);
  const [finalDate, setFinalDate] = useState(booking.finalDate);
  const [property, setProperty] = useState(booking.property);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

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
    <OuterContainer>
      <Container>
        <div className="close" onClick={onClose}>
          X
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name:"
            id="name-up"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={setName}
          />

          <Input
            label="Start date:"
            id="start-up"
            type="date"
            placeholder="Initial date"
            value={initialDate}
            min={new Date().toISOString().split('T')[0]}
            onChange={setInitialDate}
          />
          <Input
            label="End date:"
            id="final-up"
            type="date"
            placeholder="Final date"
            value={finalDate}
            min={initialDate || new Date().toISOString().split('T')[0]}
            onChange={setFinalDate}
          />
          <div className="properties">
            {properties.map((prop) => (
              <div
                className={`property ${
                  property && property.id === prop.id ? 'selected' : ''
                }`}
                key={prop.id}
                onClick={() => {
                  setProperty(prop);
                }}
              >
                <img src={prop.image} alt={prop.title} />
                <p>{prop.title}</p>
              </div>
            ))}
          </div>
          <Button type="submit">Update</Button>
        </form>
      </Container>
    </OuterContainer>
  );
};

export default ModalEdit;
