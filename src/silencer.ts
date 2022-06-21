import { useEffect } from "react";

export const useSilenceKeysError = () =>
  useSilenceConsoleError(/Each child in a list should have a unique "key" prop/g);

export const useSilenceConsoleError = (...matchers: RegExp[]) => {
  const originalConsoleError = console.error;
  console.error = (...args: string[]) => {
    if (matchers.some(reg => reg.test(args[0]))) {
      // Do nothing
    } else {
      originalConsoleError(...args);
    }
  };
  useEffect(() => {
    console.error = originalConsoleError;
  });
};
