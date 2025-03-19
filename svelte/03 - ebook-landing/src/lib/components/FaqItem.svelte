<!-- 03 - ebook-landing/src/lib/components/FaqItem.svelte -->

<script>
    import chevronDown from '$assets/icons/chevron-down.svg';
    import {fade, slide} from 'svelte/transition';

    const {FAQ} = $props();
    let active = $state(null);

    const handleToggle = (index) => {
        active = active === index ? null : index;
    }

</script>

<div class="buttons-container">
    {#each FAQ as {question, answer}, index}
        <button class="container" aria-label="Toggle FAQ" onclick={() => handleToggle(index)}>
            <div class="question-and-answer">   
                <p class="question mb-s">{question}</p>
                <!-- 
                    Questo div elimina il "saltino" che produce transition:slide a causa del cambiamento 
                    dell'altezza del button e la rimozione dal DOM di .answer 
                -->
                <div class="answer-wrapper"> 
                    {#if index === active}
                        <p class="answer" transition:slide>{ answer }</p>
                    {/if}
                </div>
            </div>
            <img 
                src={chevronDown} 
                alt="chevron-down" 
                id="chevron-down" 
                class:active={index === active}
            />
        </button>
    {/each}
</div>

<style lang="scss">
    .buttons-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
        width: 100%;
    }

    button.container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 2px solid #ccc;
        width: 100%;
    }

    .question-and-answer {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }

    .question {
        font-weight: bold;
    }

    .answer-wrapper {
        width: 100%;
        transition: all 0.3s ease;
    }

    .answer {
        font-family: 'Inter', sans-serif;
        width: 85%;
        text-align: left;
        margin-bottom: 10px;
        line-height: 1.5;
        color: #444;
    }

    #chevron-down {
        width: 24px;
        height: 24px;
        transition: transform 0.3s;

        &.active {
            transform: rotate(180deg);
        }
    }

   
</style>