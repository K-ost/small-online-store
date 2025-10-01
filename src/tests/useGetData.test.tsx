import { renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import useGetData from "../hooks/useGetData";
import { API_URL } from "../constants";
import { Wrapper } from "./testUtilities";
import { mockedList } from "./Filter.test";

describe("useGetData hook", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Loading data", () => {
    const { result } = renderHook(() => useGetData({ keys: ["loading"], url: API_URL }), {
      wrapper: Wrapper,
    });
    expect(result.current.isLoading).toBe(true);
  });

  it("Catching an error", async () => {
    globalThis.fetch = vi.fn().mockRejectedValueOnce(new Error("Error"));

    const { result } = renderHook(
      () => useGetData({ keys: ["list"], url: "wrong-url", retry: false }),
      { wrapper: Wrapper }
    );

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
  });

  it("Getting data", async () => {
    globalThis.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: async () => mockedList,
      })
    );

    const { result } = renderHook(
      () => useGetData({ keys: ["data"], url: "correct.url", retry: true }),
      { wrapper: Wrapper }
    );

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toHaveLength(5);
    });
  });
});
