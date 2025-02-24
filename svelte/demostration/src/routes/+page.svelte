<script lang='ts'>
    let number = 0;
    function onclick() {
        number++;
    }
</script>

<button {onclick}>
    Click me!
</button>

<h1>{number}</h1>
<p>{number === 0 ? 
"Hey! Why don't you try to click the button" :
`You clicked ${number} times`}</p>

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