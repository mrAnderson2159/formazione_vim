<!-- 03 - ebook-landing/src/lib/components/FaqSection.svelte -->

<script>
    import {FaqItem, Button} from '$components';
    import twitterIcon from '$assets/icons/twitter.webp';

    const {FAQ} = $props();
</script>

<section class="faq-section">
    <h2 class="mb-l">Frequently Asked Questions</h2>
    <div class="faq-container">
        <FaqItem FAQ={FAQ}/>
    </div>
    <div class="additional-info">
        <Button class="mt-m">Buy Now</Button>
        <p class="mt-m">Any other questions?</p>
        <a href="zhttps://x.com/KIZO_ES">
            <p>
                Hit me up on Twitter <img src={twitterIcon} alt="Twitter Icon" class="twitter-icon"/>
            </p>
        </a>
    </div>
</section>

<style lang="scss">
    .faq-section {
        display: flex;
        flex-direction: column;
        padding: 150px 10%;
        gap: 20px;
        width: 100%;
    }

    .faq-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }

    .additional-info {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        color: #666;
    }

    .twitter-icon {
        width: 16px;
        height: 16px;
    }
</style>