import React from "react";
import { Button } from "@mui/material";
import css from "./Pagination.module.scss";

interface PaginationProps {
  current: number;
  total: number;

  onFirstClick: () => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onLastClick: () => void;
}

export const Pagination = (props: PaginationProps) => (
  <div className={css.root}>
    <Button disabled={props.current === 1} onClick={props.onFirstClick}>
      First
    </Button>
    <Button disabled={props.current === 1} onClick={props.onPrevClick}>
      Previous
    </Button>
    <div>
      Page {props.current} of {props.total}
    </div>
    <Button
      disabled={props.current === props.total}
      onClick={props.onNextClick}
    >
      Next
    </Button>
    <Button
      disabled={props.current === props.total}
      onClick={props.onLastClick}
    >
      Last
    </Button>
  </div>
);
