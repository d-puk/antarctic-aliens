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

  <footer>
      <p>Species data sourced from <a href="https://figshare.com/articles/dataset/Introduced_and_invasive_alien_species_of_Antarctica_and_the_Southern_Ocean_Islands/22056647">Rachel Leihy et al (2023)</a> </p>
      <p>Made using Svelte, Observable Plot and Datawrapper</p>
  </footer>
</main>

<style>
    main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-10, 5rem);
    margin-bottom: var(--spacing-5, 2.5rem);
  }

  article {
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-6, 3rem);
  }

  footer {
      display: flex;
      width: 95%;
      padding: var(--spacing-2, 1rem) 0rem;
      justify-content: space-between;

      border-block: 1px solid var(--border-strong, #B0AFBA);
  }

  /* Tablet */
  @media (max-width: 1024px) and (min-width: 768px) {
    article {
      width: 80%;
    }
  }

  /* Phone */
  @media (max-width: 767px) {
    main {
      gap: var(--spacing-6);
    }

    article {
      width: 85%;
      /* padding-inline: var(--spacing-3); */
    }

    footer {
      flex-direction: column;
    }
  }
</style>
