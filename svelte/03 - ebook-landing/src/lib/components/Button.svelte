<script>
    const {children, ...props} = $props();
</script>

<button {...props}>{@render children()}</button>

<style>
    button {
        background-color: black;
        color: aliceblue;
        padding: 20px 24px;
        font-weight: normal;
        font-size: 22px;
        text-transform: uppercase;
        transition: all 0.3s; /* Assicura che l'hover accada gradualmente */
        border: 2px solid aliceblue;
    }

    button:hover {
        background-color: aliceblue;
        color: #333;
    }
</style>