<script>
    import { Button, Tab } from '$components';

    const {chapters} = $props();

    let activeTab = $state(0);

    const handleTabChange = (index) => {
        activeTab = index;
    }
</script>

<section class="chapter-preview">
    <h2>What you're getting</h2>
    <div class="container">
        <div class="tabs">
            <menu>
                {#each chapters as chapter, i}
                    <Tab 
                        title={chapter.title} 
                        caption={chapter.caption} 
                        clickHandler = {() => handleTabChange(i)}
                        active={i === activeTab}
                        />
                {/each}
            </menu>
        </div>
        <div class="paragraph">
            <h3 class="italic">{chapters[activeTab].subtitle}</h3>
            <p>{chapters[activeTab].content}</p>
        </div>
    </div>
    <div class="btn-container">
        <Button>Purchase full book now</Button>
    </div>
</section>

<style>
    .chapter-preview {
        display: flex;
        flex-direction: column;
        padding: 100px 10%;
    }

    .container {
        margin-top: 75px;
        display: flex;
        flex-direction: row;
    }
    .tabs, .paragraph {
        flex: 1;
        height: 60vh;
    }

    .tabs {
        padding-right: 10%;
    }
</style>