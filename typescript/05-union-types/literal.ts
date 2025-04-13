let bin: 0 | 1 = 0;

bin = 1;

bin = 2;

function confirm(answer: "yes" | "no"): void {
    if (answer === "yes") {
        console.log("You confirmed");
    } else {
        console.log("You denied");
    }
}
