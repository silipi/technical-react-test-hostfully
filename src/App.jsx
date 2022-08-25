import { useSelector } from 'react-redux';

import CreateBooking from './components/CreateBooking';
import ListBookings from './components/ListBookings';
import Properties from './components/Properties';

const App = () => {
  const selectedProperty = useSelector(
    (state) => state.property.selectedProperty
  );

  return (
    <div className="container">
      <Properties />
      {selectedProperty && <CreateBooking />}
      <ListBookings />
    </div>
  );
};

export default App;
