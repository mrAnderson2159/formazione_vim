<script lang='ts'>
    import Navbar from "$lib/components/navbar.svelte";

    const {data} = $props();
    $inspect(data);

    const {id, blogPost} = data;
</script>

<Navbar links={[{href: "/", text: "Home"}, {href: "/blog", text: "Blog"},
    {href: "", text: `Article ${parseInt(id) + 1}`}]} />


<h1>Blog Article</h1>
<p>{blogPost}</p>