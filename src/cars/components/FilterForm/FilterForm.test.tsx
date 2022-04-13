import React from "react";

import { render, screen, within } from "../../../test-utils";
import userEvent from "@testing-library/user-event";

import App from "../../../App";

describe("FilterForm", () => {
  describe("Submit Button", () => {
    it("should [be disabled]", async () => {
      render(<App />);

      expect(screen.getByText("Filter")).toHaveAttribute("disabled");
    });

    it("should [be enabled] when [filter is changed]", async () => {
      render(<App />);

      userEvent.click(await screen.findByLabelText("Color"));

      userEvent.click(
        within(await screen.findByRole("listbox")).getByText("Red")
      );

      expect(screen.getByText("Filter")).not.toHaveAttribute("disabled");

      userEvent.click(await screen.findByLabelText("Color"));

      userEvent.click(
        within(await screen.findByRole("listbox")).getByText("All car colors")
      );

      expect(screen.getByText("Filter")).toHaveAttribute("disabled");
    });
  });
});
