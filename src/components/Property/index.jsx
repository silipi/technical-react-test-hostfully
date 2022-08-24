import { useSelector } from 'react-redux';
import { Container } from './styles';

const Property = ({ property, onClick }) => {
  const isSelected = useSelector(
    (state) => state.property.selectedProperty?.id === property.id
  );

  return (
    <Container isSelected={isSelected}>
      <img src={property.image} alt={property.title} />
      <div className="body">
        <div className="text">
          <h3>{property.title}</h3>
          <p>{property.description}</p>
        </div>
        <button type="button" onClick={() => onClick(property)}>
          Select
        </button>
      </div>
    </Container>
  );
};

export default Property;
