import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Wrapper } from "./testUtilities";
import App from "../App";

describe("App", () => {
  it("App renders", () => {
    render(
      <Wrapper>
        <App />
      </Wrapper>
    );
    expect(screen.getByText("Product Catalog")).toBeDefined();
  });
});
