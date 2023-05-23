import { DetailProduct } from '../../Components';
import { PRODUCTS } from '../../Constants';

const ProductDetail = ({ route }) => {
  const { productID } = route.params;

  const product = PRODUCTS.find((product) => product.id === productID);
  return <DetailProduct product={product} />;
};
export default ProductDetail;
