<script lang="ts">
    const { links } = $props(); 
</script>

<nav>
    <ul>
        {#each links as link, index}
            <li>
                {#if link.href === ""}
                    {link.text}
                {:else}
                    <a href={link.href}>{link.text}</a>
                {/if}
            </li>
            {#if index !== links.length - 1}
                <span class="separator">></span>
            {/if}
        {/each}
    </ul>
</nav>

<style>
    nav {
        padding: 1rem;
        padding-left: 0;
    }

    ul {
        display: flex;
        gap: 1rem;
        list-style-type: none;
        padding-left: 16px;
    }

    li {
        text-decoration: none;
    }

    a {
        text-decoration: none;
        color: blue;
    }

    a:hover {
        text-decoration: underline;
    }

    span.separator {
        /* Pass */
    }
</style>