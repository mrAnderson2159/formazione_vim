<script lang='ts'>
    let number = $state(0);
    let userInformation = $derived.by(() => calculateUserInfo(number));
    function onclick() {
        number++;
    }
    function calculateUserInfo(number: number) {
        switch (number) {
            case 0:
                return "Hey! Why don't you try to click the button";
            case 1:
                return "You clicked exactly one time";
            default:
                return `You clicked ${number} times`;
        }
    }
</script>

<button {onclick}>
    Click me!
</button>

<h1>{number}</h1>
<p>{userInformation}</p>

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