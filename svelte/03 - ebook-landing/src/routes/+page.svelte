<script>
    import { HeroSection, ChapterPreview, AuthorSection } from '$components';

    const {data} = $props();
</script>

<HeroSection />
<ChapterPreview chapters={data.chapters}/>
<AuthorSection />