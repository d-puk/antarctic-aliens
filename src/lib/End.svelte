<section class="end">
    <hr>
    <div class="text-column">
        <p>
            So far, there haven’t been many successful colonisations by the aliens on the mainland. That’s largely due to the severity of the cold. But foreign species will always be dangerous in this part of the world, and especially so.
        </p>
        <p>
            Species in the Antarctic ecosystem evolved to keep up with the extreme climate. Competition or defence were not the first biological priorities in the evolutionary timeline. Whatever life exists, does so on the sub-Antarctic islands or on the ice-free fringes of the main continent. 
        </p>
        <p>
            As the climate warms and human presence increases, it’s been getting easier for plants, animals and insects to get to Antarctica, and establish a presence. This could alter the delicate ecosystem forever, sterilising the last known wilderness on the planet. 
        </p>
    </div>

    <footer>
        <p>Species data sourced from <a href="https://figshare.com/articles/dataset/Introduced_and_invasive_alien_species_of_Antarctica_and_the_Southern_Ocean_Islands/22056647">Rachel Leihy et al (2023)</a> </p>
        <p>Made using Svelte, Observable Plot and Datawrapper</p>
    </footer>
</section>

<style>
    .end {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-6, 3rem);
    }

    hr {
        border: 1px solid var(--border-inactive);
	    margin: 0%;
	    width: 60%;
    }

    footer {
        display: flex;
        width: 100%;
        padding: var(--spacing-2, 1rem) 0rem;
        justify-content: space-between;

        border-block: 1px solid var(--border-strong, #B0AFBA);
    }
</style>