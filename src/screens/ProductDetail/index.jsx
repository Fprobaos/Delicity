import { useDispatch, useSelector } from 'react-redux';

import { DetailProduct } from '../../Components';
import { addToCart } from '../../store/actions/cart.actions';

const ProductDetail = () => {
  const product = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();
  const onAdd = () => {
    dispatch(addToCart(product));
  };
  return <DetailProduct product={product} onAdd={onAdd} />;
};
export default ProductDetail;
