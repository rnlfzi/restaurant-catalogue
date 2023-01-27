import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from './style/Card';
import Container from './style/Container';
import Image from './style/Image';

 
function RestaurantItem({ id, pictureId, name, description }) {
  return (
    <Card>
      <Image height="250px" src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`} alt={name} />
 
      <Container>
        <h2><Link href={`/detail/${id}`}>{name}</Link></h2>
        <p>{description.slice(0, 300) + (description.length > 300 ? '...' : '')}</p>
        <br />
      </Container>
    </Card>
  );
}
 
RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
 
export default RestaurantItem;