
import { Card } from 'antd';
import {useDispatch} from 'react-redux';
import Meta from 'antd/lib/card/Meta';
import StarButton from './StarButton';
import './PokemonList.css';
import {setFavorite} from '../slices/dataSlice';

const PokemonCard = ({ name, image , types, id, favorite}) => {
  const dispatch = useDispatch();
  const typesString= types.map(elem => elem.type.name).join(', ');

  const handleonFavorite = ((id)=> {
    dispatch(setFavorite({pokemonId:id}));

  });
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={()=> handleonFavorite(id)}></StarButton>}
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
