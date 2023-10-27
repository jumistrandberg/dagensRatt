const btn = document.getElementById("sendDish");
btn.addEventListener("click", createMenu);
function createMenu(event){ 
    // Stoppar refresh vid knapptryck
event.preventDefault();
// 1. Hämta data från ID för att skapa lokala variabler
let veckoDag = document.getElementById("weekDay").value;
let dagensRatt = document.getElementById("todayDish").value;
let ingredienser = document.getElementById("contentDish").value;
let pris = document.getElementById("priceDish").value;
console.log(veckoDag, dagensRatt, ingredienser, pris);


// 2. Skapa element för alla variabler

const articleElement = document.createElement('article');
// OM vi behövt klass på artikeln. articleElement.classList.add("klassnamn"); 
const veckoDagElement = document.createElement('h2');
const dagensRattElement = document.createElement('h3');
const ingredienserElement = document.createElement('p');
const prisElement = document.createElement('h4');

veckoDagElement.textContent = veckoDag;
dagensRattElement.textContent = dagensRatt;
ingredienserElement.textContent = ingredienser;
prisElement.textContent = pris + " kr";

// 3. Alla nya element publiseras via appendChild till diven

articleElement.appendChild(veckoDagElement);
articleElement.appendChild(dagensRattElement);
articleElement.appendChild(ingredienserElement);
articleElement.appendChild(prisElement);

const menuDiv = document.getElementById('menu');

menuDiv.appendChild(articleElement);

// veckoDag.value =" ";
document.getElementById("weekDay").value="";
document.getElementById("todayDish").value="";
document.getElementById("contentDish").value="";
document.getElementById("priceDish").value="";

}

