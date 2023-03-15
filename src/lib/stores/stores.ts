import { writable } from 'svelte/store';

export const itemStore = writable([]);
export const collectionItemsStore = writable([]);
export const currentID = writable("");
export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);
export const currentPageSource: Writable<string> = writable('');

