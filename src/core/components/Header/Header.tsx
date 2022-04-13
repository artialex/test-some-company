import { Link } from "react-router-dom";
import css from "./Header.module.scss";

export const Header = () => (
  <header className={css.root}>
    <div className={css.logo}>
      <Link to="/">
        <img height={40} src="logo.png" alt="AUTO1 Group logo" />
      </Link>
    </div>
    <ul className={css.list}>
      <li>Purchase</li>
      <li>My orders</li>
      <li>Sell</li>
    </ul>
  </header>
);
