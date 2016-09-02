/*Ici je fais une fonction qui englobe toute les autres*/
/*La fonction question_calcul() prend en compte la question pour l'utilisateur et une récursive que j'expliquerais par la suite*/
function question_calcul(){
	var question = prompt("Combien font :" + affiche_choix());
	resultats(affiche_choix());
	/*La fonction affiche_choix() contient un tableaux ainsi qu'une variable qui parcourt le tableaux et choisis aléatoirement un élément du tableaux puis l'afficheras*/
	function affiche_choix(){
		choix_array = [addition, soustraction, multiplication];
		return choixBis = choix_array[Math.floor(Math.random()*choix_array.length)];
	};
	/*Ici 3 fonctions pour chaque opération , qui comprend la génération des nombres entier aléatoire et la syntaxe des calculs*/
	function addition () {
		nombre1 = Math.round(Math.random()*10);
		nombre2 = Math.round(Math.random()*10);
		return (nombre1 + "+" + nombre2);
	};
	function soustraction () {
		nombre1 = Math.round(Math.random()*10);
		nombre2 = Math.round(Math.random()*10);
		return (nombre1 + "-" + nombre2);
	};
	function multiplication () {
		nombre1 = Math.round(Math.random()*10);
		nombre2 = Math.round(Math.random()*10);
		return (nombre1 + "*" + nombre2);
	};
	/*-----------------------------------------------*/
	
	/*Et enfin la derniere function qui permet simplement de comparer le calcul fais par l'ordinateur et l'utilisateur pour savoir si le calcul est juste ou faux*/
	function resultats () {
	if (question ==  eval(choixBis) ) { /*La fonction eval() permet d'évaluer du code JavaScript représenté sous forme d'une chaîne de caractères.*/
			alert("Bravo !!");
			return true;
		}
		else {
			alert("Faux!!");
			question_calcul();
			return false;
		}
	}
};
question_calcul();