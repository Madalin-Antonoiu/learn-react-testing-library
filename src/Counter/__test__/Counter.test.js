import React from "react";
import Counter from "../Counter"
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

var getByTestId;

beforeAll(() => {
    getByTestId = render(<Counter />).getByTestId;
})

test("header renders with correct text", () => {
    // const component = render(<Counter />);
    // const headerEl = component.getByTestId("header");
    const headerEl = getByTestId("header");
    expect(headerEl.textContent).toBe("My Counter");
})

test("counter initially starts with text of 0", () => {
    // const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
})

test("input initially starts with text of 1", () => {
    const inputEl = getByTestId("input");
    expect(inputEl.value).toBe("1");
})

test("add button renders with + sign", () => {
    const addBtn = getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+");
})

test("subtract button renders with - sign", () => {
    const subtractBtn = getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-");
})




