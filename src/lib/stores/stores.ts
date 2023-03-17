import { writable, derived } from 'svelte/store';

export const itemStore = writable([]);
export const collectionItemsStore = writable([]);
export const currentID = writable("");

export const selectedObject_store = writable({});
export const selectedList_store = derived(selectedObject_store, ($selectedObject_store) => $selectedObject.list);
// export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);
// export const currentPageSource: Writable<string> = writable('');

