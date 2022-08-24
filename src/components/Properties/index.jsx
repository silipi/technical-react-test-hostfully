import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProperty } from '../../store/slices/property';
import Property from '../Property';
import { Carrousel, Container } from './styles';

const Properties = () => {
  const dispatch = useDispatch();
  const propertiesData = useSelector((state) => state.property.properties);

  const handleClickProperty = (property) => {
    dispatch(setSelectedProperty(property));
  };

  return (
    <Container>
      <h2>Choose a property for booking it:</h2>
      <Carrousel>
        {propertiesData.map((property) => (
          <Property
            key={property.id}
            property={property}
            onClick={handleClickProperty}
          />
        ))}
      </Carrousel>
    </Container>
  );
};

export default Properties;
