<script>
    import case2 from '../assets/case study - 2.png';
    import Globe from './Globe.svelte';
</script>

<section class="section-2">
    <div class="text-column">
        <h2>It only takes a few</h2>
        <p>
            Somewhere between the coasts of New Zealand and Antarctica, lies a small island named Macquarie. This was one of the sites of a sealing and whaling trade, where hunters stopped to gather their bounty. They brought rats, cats and rabbits with them, much to the demise of the native birds and vegetation.
        </p>
        <p>
            The cats preyed on mice, rats, rabbits and the seabirds, many of whom were used to breeding on land without any true predators to guard against. The rabbits fed on the tussock grass and mega-herbs, which caused wide scale erosion. This meant the breeding birds lost more of their habitat, becoming easier prey for the cats. 
        </p>
    </div>

    <img src={case2} alt="A food web of animals on Macquarie Islands, superimposed against a map of the island">

    <div class="text-column">
        <p>
            Two bird species were driven to <span class="key">⍉ extinction</span> and many more were endangered. As scientists began to conserve the island and end the seal trade, a rabbit eradication program, started in the 1960s, was somewhat successful. As rabbit numbers dwindled because of an introduced virus, the cats turned once more to the birds. Then the cats were hunted, starting in the 1980s. This brought the return of the rabbits, which meant more leaf cover lost. 
        </p>
        <p>
            The island was finally declared pest free in 2014, two centuries and more than $24m dollars later.
        </p>
        <p>
            These are lessons on how the most subtle interventions could have the most drastic and unseen outcomes. But that might not be immediately apparent if we look at where most of these introductions happen. 
        </p>
    </div>

    <!-- <iframe width="100%" height="944" frameborder="0" src="https://observablehq.com/embed/@dpuk/antarctic-aliens@1314?cells=viewof+rotate%2CbubbleMap" title="Bubble map"></iframe> -->

    <Globe />

    <div class="text-column">
        <p>
            While cats and other animals cannot cope with polar extremities, the warming climate means that smaller marine animals, plants and microbes can start to find a home on the continent. If we can learn anything from invasion cases around the world (and from the planet’s history), it’s that given the right conditions, life can take root anywhere. 
        </p>
    </div>
</section>

<style>
    .section-2 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-6, 3rem);
    }

    img {
        width: 100%;
    }

    .key {
       text-transform: uppercase;
       font-weight: bold;
    }
</style>