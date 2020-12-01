<script>
  export let bgcolor = 'lightgrey';
</script>

<style>
  .card {
    width: 400px;
    border: 1px solid #aaa;
    border-radius: 6px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 0.5em;
    align-self: center;
    justify-self: center;
  }

  h2 {
    padding: 0 0 0.2em 0;
    margin: 0 0 .25em 0;
    border-bottom: 1px solid darkblue;
  }
  .footer {
    padding-top: .5em;
    margin: .2em;
    border-top: 1px solid black;
    font-size: 12px;
  }
  .article {
    margin-bottom: 0.5em;
    font-size: 13px;
  }

  .missing {
    color: #999;
  }
</style>

<svelte:options tag="s-card" />
<article class="card" style="background-color:{bgcolor};">
  <h2 class="subject">
    <slot name="subject">
      <span class="missing">Unknown subject</span>
    </slot>
  </h2>

  <div class="article">
    <slot name="article">
      <span class="missing">Unknown address</span>
    </slot>
  </div>

  <div class="footer">
    <slot name="footer">
      <span class="missing">Unknown email</span>
    </slot>
  </div>
</article>
