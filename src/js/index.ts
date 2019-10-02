let input: HTMLInputElement = <HTMLInputElement>document.getElementById("input");
let valg: HTMLSelectElement = <HTMLSelectElement>document.getElementById("valg");
let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("knap")
let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");

button.addEventListener("click", manipulate)

function manipulate(): void {
    if (valg.value === "UpperCase") {
        element.innerHTML = input.value.toUpperCase();
    }
    if (valg.value === "LowerCase") {
        element.innerHTML = input.value.toLowerCase();
    }
    if (valg.value === "DoNothing") {
        element.innerHTML = input.value;
    }
}
document.addEventListener("keypress", (e: KeyboardEvent) => {if (e.keyCode === 13) {
    manipulate();
}
 } );
