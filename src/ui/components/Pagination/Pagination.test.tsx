import React from "react";

import { render, screen, within } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import App from "../../../App";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("should [have 'First' and 'Previous' buttons disabled] when [on the page 1]", async () => {
    render(
      <Pagination
        current={1}
        total={10}
        onFirstClick={() => {}}
        onNextClick={() => {}}
        onPrevClick={() => {}}
        onLastClick={() => {}}
      />
    );

    expect(screen.getByText("First")).toHaveAttribute("disabled");
    expect(screen.getByText("Previous")).toHaveAttribute("disabled");
    expect(screen.getByText("Next")).not.toHaveAttribute("disabled");
    expect(screen.getByText("Last")).not.toHaveAttribute("disabled");
  });

  it("should [have all buttons enabled] when [on any page between 1 and last]", async () => {
    render(
      <Pagination
        current={2}
        total={10}
        onFirstClick={() => {}}
        onNextClick={() => {}}
        onPrevClick={() => {}}
        onLastClick={() => {}}
      />
    );

    expect(screen.getByText("First")).not.toHaveAttribute("disabled");
    expect(screen.getByText("Previous")).not.toHaveAttribute("disabled");
    expect(screen.getByText("Next")).not.toHaveAttribute("disabled");
    expect(screen.getByText("Last")).not.toHaveAttribute("disabled");
  });

  it("should [have 'Next' and 'Last' buttons enabled] when [on the last page]", async () => {
    render(
      <Pagination
        current={10}
        total={10}
        onFirstClick={() => {}}
        onNextClick={() => {}}
        onPrevClick={() => {}}
        onLastClick={() => {}}
      />
    );

    expect(screen.getByText("First")).not.toHaveAttribute("disabled");
    expect(screen.getByText("Previous")).not.toHaveAttribute("disabled");
    expect(screen.getByText("Next")).toHaveAttribute("disabled");
    expect(screen.getByText("Last")).toHaveAttribute("disabled");
  });
});
