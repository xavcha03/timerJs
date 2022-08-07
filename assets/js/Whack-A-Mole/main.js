export class WhackAMole {
	constructor(Iddestination, nbrWidthElt, nbrHeightElt) {
		this.Iddestination = Iddestination;
		this.destinationNode = document.querySelector("#" + this.Iddestination);
		this.nbrWidthElt = nbrWidthElt;
		this.nbrHeightElt = nbrHeightElt;
		//Initialisation
		this.score = 0;
		this.scoreElt = null; //node d'affichage du score

		//Création des éléments de L'ui
		//Ajout de la feuille de style du jeu
		this.addGameStyle();
		//SCORE
		this.createScoreZone();
		//GAME
		this.createGameZone();

		//Game start
		this.gameStart();
	}

	//Démmarrage du jeu
	gameStart() {
		this.activeHole();
	}

	//active un trou
	activeHole

	//Ajout la feuille de style du jeu
	addGameStyle() {
		//création de l'élément
		let styleSheetElt = document.createElement("link");
		styleSheetElt.href = "assets/js/Whack-A-Mole/style.css";
		styleSheetElt.rel = "stylesheet";
		//insertion dans le DOM
		document.querySelector("head").appendChild(styleSheetElt);
		//Ajout de la classe principale au container
		this.destinationNode.classList.add("whackAMole");

		//Modification des variable css
		let r = document.querySelector(":root");
		let rs = getComputedStyle(r);
		r.style.setProperty("--rowNbr", this.nbrWidthElt);
	}

	//Création de la zone de jeu
	createGameZone() {
		//Création du container
		this.gameZone = document.createElement("section");
		this.gameZone.setAttribute("id", "game");
		this.gameZone.classList.add("whackAMole__game");

		//Création des cases
		for (let i = 0; i < this.nbrHeightElt * this.nbrWidthElt; i++) {
			let hole = document.createElement("div");
			hole.classList.add("whackAMole__hole");
			hole.addEventListener("click", this.holeClickEvent);
			//Insertion dans le container de jeu
			this.gameZone.appendChild(hole);
		}

		//Placement de la zone dans le DOM
		this.destinationNode.appendChild(this.gameZone);
		this.holesList = document.querySelector("#game").children;
		console.log(this.holesList);
	}

	holeClickEvent(e) {
		console.log(e.target);
	}

	//crée la zone d'affichage du score et la place dans le html
	createScoreZone() {
		//Création
		this.scoreElt = document.createElement("section");
		this.scoreElt.classList.add("whackAMole__score");

		//Placement de la zone dans le DOM
		this.destinationNode.appendChild(this.scoreElt);

		//insertion du score
		this.scoreUpdate();
	}

	//Met à jour le score dans
	scoreUpdate() {
		this.scoreElt.innerHTML = this.score;
	}

	//Ajoute des points au score
	addScore(scoreToAdd) {
		this.score = this.score + scoreToAdd;
		this.scoreUpdate();
	}
}
