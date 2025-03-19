<!-- 03 - ebook-landing/src/routes/+page.svelte -->
<script>
    import { HeroSection, ChapterPreview, AuthorSection, FaqSection } from '$components';

    const {data} = $props();
</script>

<HeroSection />
<ChapterPreview chapters={data.chapters}/>
<AuthorSection />
<FaqSection FAQ={data.FAQ} />