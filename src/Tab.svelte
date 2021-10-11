<svelte:options tag="s-tab" />

<script>
  import { onDestroy, onMount } from "svelte";
  import { tabsdata } from "./tabs.js";
  export let title;
  export let id;
  $: registerTab({ id, title });
  onDestroy(() => {
    unregisterTab(id);
  });
  function registerTab(value) {
    const tabIndex = $tabsdata.titles.findIndex(
      (title) => title.id === value.id
    );
    if (
      tabIndex <= -1 &&
      typeof value.id != "undefined" &&
      typeof value.title != "undefined"
    ) {
      $tabsdata.titles = [
        ...$tabsdata.titles,
        { id: value.id, title: value.title },
      ];
    }
  }
  function unregisterTab(id) {
    const tabIndex = $tabsdata.titles.findIndex((title) => title.id === id);
    if (tabIndex > -1) {
      $tabsdata.titles.splice(tabIndex, 1);
      $tabsdata.titles = [...$tabsdata.titles];
    }
  }
</script>

<div class="container">
  {#if $tabsdata.selectedtab === id}
    <slot />
  {/if}
</div>

<style>
  .container {
    justify-self: space-around;
  }
</style>
