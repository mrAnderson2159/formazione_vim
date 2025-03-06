<script lang="ts">
    let userName = $state('Valerio');
</script>

{#snippet userInput(exempleString: string)}
    <h1>{exempleString}</h1>
    <h2>Your username</h2>
    <input type="text" bind:value={userName} placeholder="Enter your name" />
    <p>{userName}</p>
{/snippet}

{@render userInput('Example 1')}