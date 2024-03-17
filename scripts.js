let buttons = document.querySelectorAll("#choice button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log("Button clicked");
        // Add your button click logic here
    });
});
