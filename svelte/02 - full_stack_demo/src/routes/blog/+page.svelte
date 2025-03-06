<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";

    const articles = [0,1];
</script>

<Navbar links={[{href: "/", text: "Home"}, {href: "", text: "Blog"}]} />

<h1>Welcome to the blog!</h1>

<section class="articles">
{#each articles as article}
    <a href={`blog/${article}`}>Article {article + 1}</a>
{/each}
</section>

<style>
    .articles {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    a {
        text-decoration: none;
        color: blue;
    }
    a:hover {
        text-decoration: underline;
    }
</style>