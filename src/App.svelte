<script>
  import Cover from './lib/Cover.svelte';
  import End from './lib/End.svelte';
  import Intro from './lib/Intro.svelte';
  import Section1 from './lib/Section1.svelte';
  import Section2 from './lib/Section2.svelte';
  import Section3 from './lib/Section3.svelte';
</script>

<main>
  <Cover />

  <article>
    <Intro />
    <Section1 />
    <Section2 />
    <Section3 />
    <End />
  </article>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-10, 5rem);
    margin-bottom: var(--spacing-12, 6rem);
  }

  article {
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-6, 3rem);
  }
</style>
