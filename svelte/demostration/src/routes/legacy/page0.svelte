<script lang='ts'>
    function onclick() {
        console.log('The button has been click from this ' +
        'clear defined function in the script tag');
    }

    let number = 5;
</script>

<button {onclick}>
    Click me!
</button>

<h1>{number}</h1>
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