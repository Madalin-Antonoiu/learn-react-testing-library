import React from "react";
import Counter from "../Counter"
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<Counter />);
    getByTestId = component.getByTestId;
})

test("header renders with correct text", () => {
    const headerEl = getByTestId("header");
    expect(headerEl.textContent).toBe("My Counter");
})
test("counter initially starts with text of 0", () => {
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
test("change value of input work correctly", () => {
    const inputEl = getByTestId("input");
    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    // To make this pass, i added onChange={(e) => setInput(e.target.value)} to input

    expect(inputEl.value).toBe("5");
})
test("clicking on plus button adds one to counter", () => {
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("1");
})
test("clicking on subtract button subtracts one from counter", () => {
    const subtractBtn = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("-1");
})




