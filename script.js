let div = document.createElement("div");


document.body.appendChild(div);

setInterval(function() {
    clock();
    console.log("Klockan ska uppdatera sig");
}, 1000);

function clock() {
    div.innerHTML = "";
let today = new Date();

div.insertAdjacentHTML("afterbegin", `${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()}`);
};
// Date() ger oss ett inbyggt objekt i Javacript med vilket vi kan hantera datum på olika sätt. Du kan behöva det om du exempelvis vill spara tiden för när en order är skickad i en webshop. Eller om vi vill visa hur lång tid det är kvar till en deadline till en uppgift.

// I denna övningen vill jag att du skall skapa en digital klocka.

// Du skall bara visa timmar:minuter:sekunder Välj ut ett typsnitt från google fonts som ser ut som en gammal retro digitalklocka. Du kommer behöva använda Date() samt setInterval() för att slutföra uppgiften.