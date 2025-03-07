<script>
    const { children, type = 'button', ...props } = $props();
</script>

<button class="base" class:button={type === 'button'} class:tab={type === 'tab'} {...props}>
    {@render children()}
</button>

<style>
    button.base {
        transition: all 0.3s;
        border: 2px solid aliceblue;
    }

    button.button {
        background-color: black;
        color: aliceblue;
        padding: 20px 24px;
        font-weight: normal;
        font-size: 22px;
        text-transform: uppercase;
    }

    button.button:hover {
        background-color: aliceblue;
        color: #333;
    }
</style>
