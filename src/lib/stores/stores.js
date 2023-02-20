import { writable } from 'svelte/store';

export const itemStore = writable([]);
export const collectionItemsStore = writable([]);
export const currentID = writable("");