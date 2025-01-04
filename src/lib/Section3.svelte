<script>
    import findings from '../assets/findings.png';
    import timeline from '../assets/eradicationTimeline - desktop.png';
    import timelineMobile from '../assets/eradicationTimeline - mobile.png';
</script>

<section class="section-3">
    <div class="text-column">
        <h2>Antarctica has been getting milder</h2>
        <p>
            There’s not a lot more that can be done to prevent invasions, other than being more careful. 
        </p>
        <p>
            Just in the last two decades, there have been alarming findings from the polar region. 
        </p>
    </div>

        <img src={findings} alt="Findings from Antarctica">

    <div class="text-column">
        <p>
            All scientists on the continent understand the value of protecting the ecosystem they’re studying. Once an invasive species is detected, they take stringent lockdown and control measures to eradicate them. But control and eradication could also take a lot of effort, time and money.  
        </p>
        <p>
            Take a look at when the invasive species were eradicated after their date of observation. 
        </p>
    </div>

    <picture>
        <source srcset="{timelineMobile}" media="(max-width: 767px)">
        <img src="{timeline}" alt="A Gantt chart timeline how long it took to eradicate 7 invasive species">
    </picture>

    <div class="text-column">
        <p>
            Even after sustained efforts, there is no guarantee that eradication is definite. It takes careful monitoring and control to make sure they don’t make a reappearance. 
        </p>
    </div>
</section>

<style>
    .section-3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-6, 3rem);
    }

    img {
        width: 100%;
    }   
</style>