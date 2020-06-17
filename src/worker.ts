import { expose } from "threads/dist-esm/worker";
import produce, { enableMapSet } from "immer";

console.log("worker thread");

// Test ImmerJS
enableMapSet();

const initial = new Set([1, 2, 3]);
const newSet = produce<Set<number>>(initial, (draft) => {
  draft.clear();
});

console.log("worker", initial !== newSet);

const echo = (num: number): number => num;

expose({ echo });
