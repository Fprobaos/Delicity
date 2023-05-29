import { useSelector } from 'react-redux';

import { DetailProduct } from '../../Components';

const ProductDetail = () => {
  const product = useSelector((state) => state.products.selected);
  return <DetailProduct product={product} />;
};
export default ProductDetail;
