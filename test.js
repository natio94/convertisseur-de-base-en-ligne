function dectobin() {
	let nb_de_depart = document.getElementById("test").value
	let nb_de_depart_int = Number.parseInt(nb_de_depart, 10)
	let nb_binaire = (nb_de_depart_int.toString(2))
 if (Number.isNaN(nb_de_depart_int)){
	alert("Ceci n'est pas un nombre décimal. Veuillez le changer.")
 }else{
	document.querySelector("#rep").innerHTML = "Le nombre "+nb_de_depart+" en décimal équivaut à "+nb_binaire+" en binaire.";
 }
}

function strtobin() {
	let str_de_depart=document.getElementById("test").value
	let str_de_depart_dec = Number.parseInt(str_de_depart, 10)
	if (!(Number.isNaN(str_de_depart_dec))){
    dectobin()
	}else{
		str_de_depart_dec = Number.parseInt(str_de_depart, 36)
		let str_binaire = (str_de_depart_dec.toString(2))
		document.getElementById("rep").innerHTML = "\""+str_de_depart+"\" équivaut à "+str_binaire+" en binaire."
	}
 }
 function hexatobin() {
	let nb_de_depart = document.getElementById("test").value
	let nb_de_depart_int = Number.parseInt(nb_de_depart, 16)
	let nb_binaire = (nb_de_depart_int.toString(2))
 if (Number.isNaN(nb_de_depart_int)){
	 alert("Ceci n'est pas un nombre hexadécimal. Veuillez le changer.")
 }else{
	 document.getElementById("rep").innerHTML = "Le nombre "+nb_de_depart+" en héxadécimal équivaut à "+nb_binaire+" en binaire."
 }
}




function bintodec() {
	let nb_de_depart = document.getElementById("test").value
	let nb_decimal= (Number.parseInt(nb_de_depart, 2))
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un nombre binaire. Veuillez le changer.")
 }else{
   document.getElementById("rep").innerHTML = "Le nombre "+nb_de_depart+" en binaire "+" équivaut à "+nb_decimal+" en décimal."
 }
}
function hexatodec() {
	nb_de_depart = document.getElementById("test").value
	nb_decimal= (Number.parseInt(nb_de_depart, 16))
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un nombre hexadécimal. Veuillez le changer.")
 }else{
  	document.getElementById("rep").innerHTML = "Le nombre "+nb_de_depart+"en héxadecimal équivaut à "+nb_decimal+" en décimal."
 }
}
function strtodec() {
	nb_de_depart = document.getElementById("test").value
	nb_decimal= (Number.parseInt(nb_de_depart, 36))
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un texte. Veuillez le changer.")
 }else{
	 document.getElementById("rep").innerHTML = "Le nombre "+nb_de_depart+"en décimal équivaut à "+nb_decimal+" en décimal."
 }
}






function bintostr() {
	let str_de_depart=document.getElementById("test").value
	let str_de_depart_dec = (Number.parseInt(str_de_depart, 2))
	let binaire_str = str_de_depart_dec.toString(36)
	if(Number.isNaN(str_de_depart_dec)){
  	alert("Ceci n'est pas un nombre binaire. Veuillez le changer.")
	}else{
  document.querySelector("#rep").innerHTML ="Le nombre "+str_de_depart+" en binaire équivaut à \""+binaire_str+"\"."

}
}
function dectostr() {
	let str_de_depart=document.getElementById("test").value
	let str_de_depart_dec = (Number.parseInt(str_de_depart, 10))
	let binaire_str = str_de_depart_dec.toString(36)
	if(Number.isNaN(str_de_depart_dec)){
  	alert("Ceci n'est pas un nombre binaire. Veuillez le changer.")
	}else{
		document.querySelector("#rep").innerHTML ="Le nombre "+str_de_depart+" en decimal équivaut à \""+binaire_str+"\"."
}
}
function hexatostr() {
	let str_de_depart=document.getElementById("test").value
	let str_de_depart_dec = (Number.parseInt(str_de_depart, 16))
	let binaire_str = str_de_depart_dec.toString(36)
	if(Number.isNaN(str_de_depart_dec)){
  	alert("Ceci n'est pas un nombre héxadécimal. Veuillez le changer.")
	}else{
		document.querySelector("#rep").innerHTML ="Le nombre "+str_de_depart+" en hexadecimal équivaut à \""+binaire_str+"\"."
}
}






function bintohexa() {
	nb_de_depart = document.getElementById("test").value
	nb_decimal= (Number.parseInt(nb_de_depart, 2))
	dechexa()
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un nombre binaire. Veuillez le changer.")
 }else{
	 document.querySelector("#rep").innerHTML ="Le nombre "+nb_decimal+" en binaire "+" équivaut à "+nb_hexadecimal+" en héxadécimal."
 }
}
function dechexa() {
	nb_hexadecimal = (nb_decimal.toString(16))
}
function dectohexa() {
	nb_de_depart = document.getElementById("test").value
	Number.parseInt(nb_de_depart, 10)
	nb_decimal= (Number.parseInt(nb_de_depart, 10))
	dechexa()
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un nombre. Veuillez le changer.")
 }else{
	document.querySelector("#rep").innerHTML = "Le nombre "+nb_decimal+" équivaut à "+nb_hexadecimal+" en héxadécimal."
 }
}
//Décommenter le texte suivant pour faire apparaitre une fonctionnalité secrète
let clic=0
let i = 0
let clicParSeconde
function compteurDeClic() {
	clicParSeconde=clic/10
	while (i++ < 1) {
		setTimeout('afficheResultat()', 10000)

	}
}
function ajouterUnLien() {
	let nouveauLien = document.createElement("a");
	nouveauLien.innerText = "Bravo, vous avez trouvé le lien pour la page secrète !";
	nouveauLien.setAttribute("href", "page_secrète.html");
	nouveauLien.setAttribute("target","_blank")
	document.body.appendChild(nouveauLien);
}
function afficheResultat() {
  alert("Vous avez cliquer "+clic+" fois en 10 secondes et environ "+clicParSeconde+" fois par seconde")
	clic=0
	i = 0
	clicParSeconde=0
	}
if (document.getElementById("test").value == 	112){
	 ajouterUnLien()
}
