<script>
    import case1 from '../assets/case study - 1.png'
</script>

<section class="intro">
    <div class="text-column">
        <p>On the icy hills and coasts of the Antarctic peninsula, you will find all three of the continent’s flowering plants. <i>Deschampsia antarctica</i>, or the Antarctic hair grass, grows in small tufts, as the name suggests. <i>Colobanthus quitensis</i>, or the Antarctic pearlwort, could easily be mistaken for moss. <i>Poa annua</i>, or annual meadow grass, grows silver-pink flowers.</p>
    </div>

    <img src={case1} alt="A food web of plants in Antarctica, superimposed against a map of the Antarctic peninsula">

    <div class="text-column">
        <p>That last one, is the same kind of grass that are used on golf courses. </p>

        <p>It’s what scientists would call an <span class="key">◇ invasive</span> species, ‘aliens’ who are not originally from the <span class="key">○ native</span> ecosystem. It now makes up for a third of Antarctica’s grasses, and is set to outperform the other two.</p>

        <p>Invasives have always posed a <span class="dashed">threat</span> to natives for a number of reasons. They can compete for resources and wipe out native flora and fauna. They could carry pathogens that natives have not built defences for. More directly, they could be predators who have come upon easy prey.</p>

        <p>For the Antarctic natives, this is danger is heavily underlined. But before we understand why, we might ask how they get there in the first place.</p>
    </div>
</section>

<style>
    .intro {
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

    .dashed {
        font-weight: bold;
        text-decoration: underline;
        text-decoration-style: dashed;
        text-underline-offset: var(--spacing-025);
        text-decoration-thickness: var(--spacing-025);
    }
</style>