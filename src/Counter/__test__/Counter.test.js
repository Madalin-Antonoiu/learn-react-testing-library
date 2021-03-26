import React from "react";
import Counter from "../Counter"
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// ❌ ✅

test("header renders with correct text", () => {
    const { getByTestId } = render(<Counter />);
    const headerEl = getByTestId("header");
    expect(headerEl.textContent).toBe("My Counter");
})


test("counter initially starts with text of 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
})


test("input initially starts with text of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");
    expect(inputEl.value).toBe("1");
})


test("add button renders with + sign", () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+");
})


test("subtract button renders with - sign", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-");
})

test("change value of input work correctly", () => {
    const { getByTestId } = render(<Counter />);
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




