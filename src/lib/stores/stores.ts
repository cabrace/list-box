import { writable, derived } from 'svelte/store';

export const itemStore = writable([]);
export const collectionItemsStore = writable([]);
export const currentID = writable("");

export const selectedObject = writable({});
export const selectedList = derived(selectedObject, ($selectedObject) => $selectedObject.list);
// export const storeCurrentUrl: Writable<string | undefined> = writable(undefined);
// export const currentPageSource: Writable<string> = writable('');

