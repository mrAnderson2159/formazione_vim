<script>
    import { HeroSection, ChapterPreview } from '$components';

    const {data} = $props();
</script>

<!-- <HeroSection /> -->
<ChapterPreview chapters={data.chapters}/>