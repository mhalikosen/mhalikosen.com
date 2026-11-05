"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function CurrentYear() {
  return useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
}
