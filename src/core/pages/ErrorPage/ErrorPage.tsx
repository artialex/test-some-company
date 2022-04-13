import { Link } from "react-router-dom";
import css from "./ErrorPage.module.scss";

export const ErrorPage = () => (
  <div className={css.root}>
    <div>
      <img height={40} src="logo.png" alt="AUTO1 Group logo" />
    </div>
    <h1>404 - Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p>
      You can always go back to the <Link to="/">homepage</Link>
    </p>
  </div>
);
