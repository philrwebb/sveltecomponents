import { writable } from 'svelte/store'
export let tabsdata = writable({
  titles: [],
  selectedtab: '2',
})

export let selectedTabStore = writable('2');
