import { useState } from 'react';
import Properties from './components/Properties';

const App = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleClickProperty = (property) => {
    setSelectedProperty(property);
  };

  return (
    <div>
      <Properties onClickProperty={handleClickProperty} />
    </div>
  );
};

export default App;
