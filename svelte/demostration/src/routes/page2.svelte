<script lang='ts'>
    let username = $state('');

    $effect(() => {
        console.log('Username:', username);
    });

</script>

<input type="text" bind:value={username} placeholder="Enter your name" />

<h1>{username}</h1>

<p>Hello!</p>
<div class="container">
    <p>This is the left side</p>
    <p>This is the right side</p>
</div>

<style>
    h1 {
        color: blue;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
    }

    .container {
        display: flex;
        justify-content: space-between;
    }
</style>