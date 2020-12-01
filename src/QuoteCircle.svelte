<style>
  .quote-wrapper {
    height: 300px;
    position: relative;
    width: 300px;
    align-self: center;
    justify-self: center;
  }
  .text {
    background: radial-gradient(
      ellipse at center,
      rgba(0, 128, 172, 1) 0%,
      rgba(0, 128, 172, 1) 70%,
      rgba(0, 128, 172, 0) 70.3%
    );
    height: 100%;
    width: 100%;
    color: white;
    position: relative;
    margin: 0;
  }

  .text p {
    font-size: 14px;
    font-style: italic;
    height: 100%;
    line-height: 1.25;
    padding: 0;
    text-align: center;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3);
  }
  .text::before {
    content: "";
    float: left;
    height: 100%;
    width: 50%;
    shape-outside: polygon(
      0 0,
      98% 0,
      50% 6%,
      23.4% 17.3%,
      6% 32.6%,
      0 50%,
      6% 65.6%,
      23.4% 82.7%,
      50% 94%,
      98% 100%,
      0 100%
    );
    shape-margin: 7%;
  }
  .text p::before {
    content: "";
    float: right;
    height: 100%;
    width: 50%;
    shape-outside: polygon(
      2% 0%,
      100% 0%,
      100% 100%,
      2% 100%,
      50% 94%,
      76.6% 82.7%,
      94% 65.6%,
      100% 50%,
      94% 32.6%,
      76.6% 17.3%,
      50% 6%
    );
    shape-margin: 7%;
  }

  .quote-wrapper blockquote footer {
    bottom: 25px;
    font-size: 10px;
    font-style: italic;
    position: absolute;
    text-align: center;
    text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3);
    width: 100%;
  }
</style>

<svelte:options tag="s-quote" />
<div class="quote-wrapper">
  <blockquote
    class="text"
    cite="http://www.inspireux.com/category/quotes/jesse-james-garrett/">

    <p>
      <slot name="quote">
        Experience design is the design of anything, independent of medium, or
        across media, with human experience as an explicit outcome, and human
        engagement as an explicit goal.
      </slot>
    </p>
    <footer>
      <slot name="footer">– Jesse James Garrett</slot>
    </footer>
  </blockquote>
</div>
