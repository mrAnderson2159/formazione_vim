<script lang="ts">
    let userName = $state('Valerio');
    let isEditMode = $state(false);
</script>

{#snippet userInput(exempleString: string)}
    <div class="container">
        <h1>{exempleString}</h1>
        <h2>Your username</h2>

        {#if isEditMode}
            <div class="input_container">
                <input type="text" bind:value={userName} placeholder="Enter your name" />
            </div>
        {:else}
            <p>{userName}</p>
        {/if}
    </div>
{/snippet}

{@render userInput('Example 1')}

<button onclick={() => isEditMode = !isEditMode}>
    {isEditMode ? 'Save changes' : 'Edit fields'}
</button>

<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .input_container {
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>