import { SearchForm } from '../SearchForm/SearchForm';

export function TopLogoRow() {
  return (
    <div className="logoRowWrap">
      <div className="logoRow">
        <a href="/">
          <img src="" alt="RollerStore icon" />
        </a>
        <SearchForm />
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
