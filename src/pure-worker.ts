import { interval } from 'rxjs'
import produce, { enableMapSet } from "immer";

self.postMessage('init messsage')
interval(1000).subscribe(num => self.postMessage(num))

// Test ImmerJS
enableMapSet();

const initial = new Set([1, 2, 3]);
const newSet = produce<Set<number>>(initial, (draft) => {
  draft.clear();
});

console.log("worker", initial !== newSet);

