<script lang='ts'>
	import type { Snippet } from "svelte";

    interface UserInputProps {
        children: Snippet;
        username: string;
    }

    let { username, children }: UserInputProps = $props();
</script>

<input type="text" bind:value={username} placeholder="Enter your name" />

<h1>{username}</h1>

<p>
    {@render children()}
</p>