import Property from '../Property';
import { Card, Carrousel, Container } from './styles';

const PROPERTIES_DATA = [
  {
    id: 1,
    title: 'Beach House',
    description: 'Lorem ipsum dolor sit.',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&dl=vu-anh-TiVPTYCG_3E-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    price: 200,
  },
  {
    id: 2,
    title: 'Nice Looking House',
    description: 'Lorem ipsum dolor sit.',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&dl=vu-anh-TiVPTYCG_3E-unsplash.jpg&w=640&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    price: 150,
  },
];

const Properties = ({ onClickProperty }) => {
  return (
    <Container>
      <h2>Choose a property for booking it:</h2>
      <Carrousel>
        {PROPERTIES_DATA.map((property) => (
          <Property
            key={property.id}
            property={property}
            onClick={() => onClickProperty(property)}
          />
        ))}
      </Carrousel>
    </Container>
  );
};

export default Properties;
