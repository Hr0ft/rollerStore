import { ProductList } from '../ProductList/ProductList';

export function MainNavBar() {
  return (
    <div className="mainNavBarWrapper ">
      <div className="mainNavBar">
        <ul className="mainNavBar_list">
          <li className="mainNavBar_item">товары</li>
          <li className="mainNavBar_item">оплата</li>
          <li className="mainNavBar_item">контакты</li>
          <a href="/">
            <li className="mainNavBar_item">корзина</li>
          </a>
        </ul>
        <ProductList />
      </div>
    </div>
  );
}
