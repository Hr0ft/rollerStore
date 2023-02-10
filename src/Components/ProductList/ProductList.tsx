import { productsCategoryData } from '../../MokData/mokData';
import { ProductCategory } from '../ProductCategory/ProductCategory';

export function ProductList() {
  return (
    <div>
      <ul>
        {productsCategoryData.map((category) => {
          return <ProductCategory category={category} />;
        })}
      </ul>
    </div>
  );
}
