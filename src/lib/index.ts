import { writable } from "svelte/store";

let turnOffNav = writable(false);

export { turnOffNav }