<script>
    import { Button } from '$components';
    const { title, caption, clickHandler, active, ...props} = $props();
</script>

<li class="bold" class:active = {active} {...props}>
    <Button onclick={clickHandler} active={active} type='tab'>
        {title}: {caption}
    </Button>
</li>

<style>
    li {
        list-style: none;
        border-bottom: 1px solid #ccc;
        padding: 0;
    }
</style>