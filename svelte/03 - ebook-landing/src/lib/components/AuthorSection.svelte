<script>
    import authorPic from '$assets/profile_pic.jpg';
</script>

<section class="author-section">
    <h2 class="mb-l">
        About the author
    </h2>
    <div class="author-container">
        <div class="paragraph">
            <p class="mb-xs">
                John Smith is a passionate writer and traveler who has spent years exploring the world. 
                His journey to Spain was a transformative experience that deeply influenced his work. 
                Immersing himself in the vibrant culture, he discovered a love for storytelling inspired by the rich history of the region. 
                From the bustling streets of Barcelona to the serene landscapes of Andalusia, John found endless inspiration. 
                He spent months learning the language and connecting with locals, which gave him a unique perspective on Spanish traditions. 

            </p>
            <p>

                His time in Spain also sparked his interest in culinary arts, as he explored the diverse flavors of Spanish cuisine. 
                John’s writings often reflect his adventures, blending vivid descriptions with heartfelt narratives. 
                He believes that travel is not just about seeing new places but also about understanding different ways of life. 
                Through his books, John aims to share the beauty and complexity of the world with his readers. 
                His journey to Spain remains one of the most cherished chapters of his life.
            </p>
        </div>
        <div class="picture">
            <img src={authorPic} alt="Author's profile picture" />
        </div>
    </div>
</section>

<style>

    .author-section {
        display: flex;
        flex-direction: column;
        padding: 100px 10%;
    }
    .author-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
     .picture, .paragraph {
        flex: 1;
        height: 60vh;
    }

    .picture {
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .picture img {
        width: 70%;
        border: 5px solid black;
        box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);
    }
</style>