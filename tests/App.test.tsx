import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import App from "../src/App";

describe("App", () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	test("loads and displays greeting", async () => {
		render(<App delay={200} />);
		await screen.findAllByText("Loading...");
		await userEvent.click(screen.getByText("Load Greeting"));

		expect(screen.getByText("Loading")).toHaveTextContent("Loading...");

		await vi.runAllTimersAsync();

		await screen.findByRole("heading");

		expect(screen.getByRole("heading")).toHaveTextContent("hello there");
		expect(screen.getByRole("button")).toBeDisabled();
	});
});
