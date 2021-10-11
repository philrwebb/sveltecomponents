<svelte:options tag="s-tabs" />
<script>
  import { tabsdata, selectedTabStore } from "./tabs.js";
  export let selectedtab;
  $: $tabsdata.selectedtab = selectedtab;
</script>

<div class="container">
  {#each $tabsdata.titles as { id, title }}
    <button
      class:selected={$tabsdata.selectedtab === id}
      on:click={() => {
        $tabsdata.selectedtab = id;
      }}
    >
      {title}
    </button>
  {/each}
</div>
<div class="content">
  <slot {selectedtab} />
</div>

<style>
  button.selected {
    background: black;
    color: white;
  }
  div {
    margin: 20px;
  }
  .container {
    display: flex;
    gap: 5px;
  }
  .content {
    display: grid;
    grid-template-columns: 1fr;
    /* justify-content: space-around; */
  }
  button {
    flex: 1;
  }
</style>
