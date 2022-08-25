import { useSelector } from 'react-redux';
import Booking from '../Booking';
import { Container } from './styles';

const ListBookings = () => {
  const bookings = useSelector((state) => state.booking.bookings);

  return (
    <Container>
      {bookings &&
        bookings.length > 0 &&
        bookings.map((booking) => <Booking key={booking.id} data={booking} />)}
    </Container>
  );
};

export default ListBookings;
