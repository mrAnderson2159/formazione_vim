<script>
    import bookCover from '$assets/book_cover.png';
    import phoneCover from '$assets/phone_cover.png';
    import { Button } from '$components';

    const { children } = $props();
</script>

<section class="hero">
    <div class="hero-showcase text-center bold">
        <h1 class="purple">MOVE TO</h1>
        <h1 class="purple mb-xs">SPAIN</h1>
        <h4 class="italic semi-bold">
            There's no need to make the same mistakes I made <br>
        </h4>
        <img src={bookCover} alt="Book Cover" class="book-cover">
        <img src={phoneCover} alt="Phone Cover" class="phone-cover">
    </div>
    <div class="hero-text white text-center">
        {#if children}
            {@render children()}
        {:else}
            <h1>THIS EBOOK WILL</h1>        
            <h1>SAVE YOU MONEY</h1>
            <h1 class="mb-m">TIME & NERVS</h1>
            <p class="light-grey">
                Moving to Spain has been a transformative experience for me. 
                I've found a perfect balance between work and leisure, 
                enjoying the beautiful landscapes and rich history. This book encapsulates my journey. 
                By sharing my experiences,
                Invest in this book to save time, money, and stress, and start your new life in Spain with confidence.
            </p>
            <Button class="mt-l">Purchase E-book for €10</Button>
        {/if}
    </div>
</section>

<style>
    .hero {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100vh;
        overflow-y: hidden;
    }

    .hero-showcase,
    .hero-text {
        flex: 1;
        padding: 100px 16px 0 16px;
    }

    .hero-showcase {
        background: linear-gradient(
            135deg,
            #e2cbff,
            #e2cbff 25%,
            #deeaff 50%,
            #ece5ff 75%,
            #927bce
        );

        position: relative;

    }

    .hero-text {
        background-color: black;
    }

    .book-cover {
        position: absolute;
        right: 2%;
        transform: translateY(30%);
        bottom: 0;
        width: 65%;
    }

    .phone-cover {
        position: absolute;
        right: 52%;
        bottom: 0;
        width: 35%;
        transform: translateY(25%);
    }
</style>