<script lang='ts'>
    const data = $props();
</script>

<header>
    This is Page's Header
</header>

<div class="main-container">
{@render data.children()}
</div>

<footer>
    This is Page's Footer
</footer>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');

    * {
        font-family: "Inter", sans-serif;
    }

    div.main-container {
        margin: 0;
        padding: 0;
        height: 80vh;
    }

    header {
        background-color: lightblue;
        padding: 1rem;
    }

    footer {
        background-color: lightblue;
        padding: 1rem;
    }
</style>