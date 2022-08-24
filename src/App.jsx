import CreateBooking from './components/CreateBooking';
import ListBookings from './components/ListBookings';
import Properties from './components/Properties';

const App = () => {
  return (
    <div>
      <Properties />
      <CreateBooking />
      <ListBookings />
    </div>
  );
};

export default App;
