<script>
    import introTimeline from '../assets/timeline - desktop.png';
    import introTimelineMobile from '../assets/timeline-mobile.png';
    import establishment from '../assets/donut.png';
    import establishmentMobile from '../assets/donut - mobile.png';
</script>

<section class="section-1">
    <div class="text-column">
        <h2>Almost all invasive species are hitchhikers </h2>
        <p>
            There is no denying that human exploration has, intentionally or unintentionally, brought more aliens to the South. Take a look at this chart to see how species were introduced to the region. 
        </p>
    </div>
    
    <picture>
        <source srcset="{introTimelineMobile}" media="(max-width: 767px)">
        <img src="{introTimeline}" alt="A beeswarm timeline of how species were introduced to the Antarctic biome">
    </picture>

    <div class="text-column">
        <p>
            While species have been known to wander across lands and seas naturally, the rate at which they do this is much slower. 
        </p>
    </div>

    <picture>
        <source srcset="{establishmentMobile}" media="(max-width: 767px)">
        <img src="{establishment}" alt="A donut chart of the share of species that are introduced by human means in the Antarctic">
    </picture>

    <div class="text-column">
        <p>
            As explorers ventured further south, they took passengers of all kinds with them. Mice, rats, cats, ponies and wolves were some of the many aliens that made an appearance in the region. And some of these stayed to wreak all sorts of havoc on the local ecologies.
        </p>

        <p>
            From a first glance at this chart, it might be hard to understand why aliens would pose a problem if only a few are finally classified as invasive. 
        </p>

        <p>
            But, as we’ve seen across the world, and on many of these islands..
        </p>
    </div>
</section>

<style>
    .section-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-6, 3rem);
    }

    img {
        width: 100%;
    }
</style>