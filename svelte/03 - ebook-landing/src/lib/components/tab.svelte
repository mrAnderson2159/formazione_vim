<script>
    import { Button } from '$components';
    const { title, caption, ...props} = $props();
</script>

<li class="bold" {...props}><Button type='tab'>{title}: {caption}</Button></li>

<style>
    li {
        list-style: none;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
</style>