import { ICategory } from '../../types/category.interface';

interface categoryProps {
  category: ICategory;
}

export function ProductCategory(props: categoryProps) {
  return <li key={props.category.id}>{props.category.name}</li>;
}
