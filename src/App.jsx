import { useState } from 'react';
import Booking from './components/Booking';
import Properties from './components/Properties';

const App = () => {
  const [bookings, setBookings] = useState([]);

  return (
    <div>
      <Properties />
      <Booking />
    </div>
  );
};

export default App;
