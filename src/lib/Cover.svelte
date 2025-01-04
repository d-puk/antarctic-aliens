<script>
    import coverImage from '../assets/cover.png'
</script>

<section class="cover">
    <img src={coverImage} alt="Antarctic hills with some grass between rocks">
    <div class="title">
        <h1>Antarctic aliens</h1>
        <h3>By Deepak Ramarao</h3>
    </div>
</section>

<style>
    .cover {
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-6);
    }

    img {
        width: 100%;
    }

    .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: var(--spacing-5);
    }

    /* Phone */
    @media (max-width: 767px) {
        .title {
            gap: var(--spacing-2);
            /* padding-inline: var(--spacing-3); */
        }
    }
</style>