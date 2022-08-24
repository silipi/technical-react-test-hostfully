import { useSelector, useDispatch } from 'react-redux';
import Booking from '../Booking';

const ListBookings = () => {
  const bookings = useSelector((state) => state.booking.bookings);

  return (
    <div>
      {bookings &&
        bookings.length > 0 &&
        bookings.map((booking) => <Booking key={booking.id} data={booking} />)}
    </div>
  );
};

export default ListBookings;
