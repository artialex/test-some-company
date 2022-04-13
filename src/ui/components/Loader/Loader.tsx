import { CircularProgress } from "@mui/material";
import css from "./Loader.module.scss";

export const Loader = () => (
  <div className={css.root}>
    <CircularProgress />
  </div>
);
