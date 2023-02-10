import { IProductCategory } from '../../models';

interface categoryProps {
  category: IProductCategory;
}

export function ProductCategory(props: categoryProps) {
  return <li key={props.category.id}>{props.category.name}</li>;
}
