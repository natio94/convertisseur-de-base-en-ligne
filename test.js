function dectobin() {
	let nb_de_depart = document.getElementById("test").value
	let nb_de_depart_int = Number.parseInt(nb_de_depart, 10)
	let nb_binaire = (nb_de_depart_int.toString(2))
 if (Number.isNaN(nb_de_depart_int)){
	alert("Ceci n'est pas un nombre décimal. Veuillez le changer.")
 }else{
	document.getElementsByClassName('rep').innerHTML = "Le nombre "+nb_de_depart+" en décimal équivaut à "+nb_binaire+" en binaire.";
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
		let para = document.createElement("p");
		para.textContent = "\""+str_de_depart+"\" équivaut à "+str_binaire+" en binaire."
		document.body.appendChild(para)
	}
 }
 function hexatobin() {
	let nb_de_depart = document.getElementById("test").value
	let nb_de_depart_int = Number.parseInt(nb_de_depart, 16)
	let nb_binaire = (nb_de_depart_int.toString(2))
 if (Number.isNaN(nb_de_depart_int)){
	 alert("Ceci n'est pas un nombre hexadécimal. Veuillez le changer.")
 }else{
	 let para = document.createElement('p');
 	 para.textContent = "Le nombre "+nb_de_depart+" en héxadécimal équivaut à "+nb_binaire+" en binaire."
	 document.body.appendChild(para)
 }
}




function bintodec() {
	let nb_de_depart = document.getElementById("test").value
	let nb_decimal= (Number.parseInt(nb_de_depart, 2))
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un nombre binaire. Veuillez le changer.")
 }else{
	 let para = document.createElement('p');
	 para.textContent = "Le nombre "+nb_de_depart+" en binaire "+" équivaut à "+nb_decimal+" en décimal."
	 document.body.appendChild(para)
 }
}
function hexatodec() {
	nb_de_depart = document.getElementById("test").value
	nb_decimal= (Number.parseInt(nb_de_depart, 16))
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un nombre hexadécimal. Veuillez le changer.")
 }else{
	 let para = document.createElement('p');
	 para.textContent = "Le nombre "+nb_de_depart+"en héxadecimal équivaut à "+nb_decimal+" en décimal."
	 document.body.appendChild(para)
 }
}
function strtodec() {
	nb_de_depart = document.getElementById("test").value
	nb_decimal= (Number.parseInt(nb_de_depart, 36))
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un texte. Veuillez le changer.")
 }else{
	 let para = document.createElement('p');
	 para.textContent = "Le nombre "+nb_de_depart+"en décimal équivaut à "+nb_decimal+" en décimal."
	 document.body.appendChild(para)
 }
}






function bintostr() {
	let str_de_depart=document.getElementById("test").value
	let str_de_depart_dec = (Number.parseInt(str_de_depart, 2))
	let binaire_str = str_de_depart_dec.toString(36)
	if(Number.isNaN(str_de_depart_dec)){
  	alert("Ceci n'est pas un nombre binaire. Veuillez le changer.")
	}else{
	 let para = document.createElement('p');
   para.textContent = "Le nombre "+str_de_depart+" en binaire équivaut à \""+binaire_str+"\"."
	 document.body.appendChild(para)
}
}
function dectostr() {
	let str_de_depart=document.getElementById("test").value
	let str_de_depart_dec = (Number.parseInt(str_de_depart, 10))
	let binaire_str = str_de_depart_dec.toString(36)
	if(Number.isNaN(str_de_depart_dec)){
  	alert("Ceci n'est pas un nombre binaire. Veuillez le changer.")
	}else{
	 let para = document.createElement('p');
   para.textContent = "Le nombre "+str_de_depart+" en decimal équivaut à \""+binaire_str+"\"."
	 document.body.appendChild(para)
}
}
function hexatostr() {
	let str_de_depart=document.getElementById("test").value
	let str_de_depart_dec = (Number.parseInt(str_de_depart, 16))
	let binaire_str = str_de_depart_dec.toString(36)
	if(Number.isNaN(str_de_depart_dec)){
  	alert("Ceci n'est pas un nombre héxadécimal. Veuillez le changer.")
	}else{
	 let para = document.createElement('p');
   para.textContent = "Le nombre "+str_de_depart+" en hexadecimal équivaut à \""+binaire_str+"\"."
	 document.body.appendChild(para)
}
}






function bintohexa() {
	nb_de_depart = document.getElementById("test").value
	nb_decimal= (Number.parseInt(nb_de_depart, 2))
	dechexa()
 if(Number.isNaN(nb_decimal)){
	alert("Ceci n'est pas un nombre binaire. Veuillez le changer.")
 }else{
	 let para = document.createElement('p');
	 para.textContent = "Le nombre "+nb_decimal+" en binaire "+" équivaut à "+nb_hexadecimal+" en héxadécimal."
	 document.body.appendChild(para)
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
	let para = document.createElement('p');
	para.textContent = "Le nombre "+nb_decimal+" équivaut à "+nb_hexadecimal+" en héxadécimal."
	document.body.appendChild(para)
 }
}
