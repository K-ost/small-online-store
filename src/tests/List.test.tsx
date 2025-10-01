import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import List from "../components/List";
import { ProductFactory, Wrapper } from "./testUtilities";
import Item from "../components/Item";

const productFactory = new ProductFactory();
const mockedList = productFactory.createProductsList();

describe("List", () => {
  it("List is loading", () => {
    render(
      <List
        isLoading
        renderList={mockedList.map((el) => (
          <Item key={el.id} item={el} />
        ))}
      />
    );
    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("List has been rendered", () => {
    render(
      <Wrapper>
        <List
          isLoading={false}
          renderList={mockedList.map((el) => (
            <Item key={el.id} item={el} />
          ))}
        />
      </Wrapper>
    );
    expect(screen.getAllByRole("button", { name: "Buy" })).toBeDefined();
  });
});
