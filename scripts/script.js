	
	function tankClick(color) {	  
		   resetColor()
	       tankColor(color)
	
	}
		function tankColor(color) {
		// On met tous les Tanks dans la couleur en paramètre	
		var idName = ''
		var idCpt = 0
		for (var i = 0; i < 9; i++) {
		 idCpt++
         idName = "tank" + idCpt
		 if (document.getElementById(idName)) {
			document.getElementById(idName).style.color = color
		 }
        }	
	}
	function resetColor() {
		//On remet le texte en blanc
		tankColor('white')
		dpsColor('white')
		supportColor('white')
	}
	
	function dpsClick(color) {
		resetColor()
	    dpsColor(color)
	}
	function dpsColor(color) {
		// On met tous les dps dans la couleur en paramètre
		var idName = ''
		var idCpt = 0
		for (var i = 0; i < 18; i++) {
		 idCpt++
         idName = "dps" + idCpt
		 if (document.getElementById(idName)) {
			document.getElementById(idName).style.color = color
		 }
        }
	}
	function supportClick(color){
		resetColor()
		supportColor(color)
	}
	function supportColor(color){
		// On met tous les support dans la couleur en paramètre
		var idName = ''
		var idCpt = 0
		for (var i = 0; i < 8; i++) {
		 idCpt++
         idName = "support" + idCpt
		 if (document.getElementById(idName)) {
			document.getElementById(idName).style.color = color
		 }
        }
	}
	function controleClick() {
		//elle masque tout les carte qui ne sont pas de type controle
		this.resetImage()
		document.getElementById("image1").style.visibility="hidden"
		document.getElementById("image2").style.visibility="hidden"
		document.getElementById("image4").style.visibility="hidden"
		document.getElementById("image6").style.visibility="hidden"
		document.getElementById("image7").style.visibility="hidden"
		document.getElementById("image8").style.visibility="hidden"
	}
	
	function attaqueClick() {
		//elle masque tout les carte qui ne sont pas de type attaque
		resetImage()
		document.getElementById("image1").style.visibility="hidden"
		document.getElementById("image3").style.visibility="hidden"
		document.getElementById("image4").style.visibility="hidden"
		document.getElementById("image5").style.visibility="hidden"
		document.getElementById("image7").style.visibility="hidden"
		document.getElementById("image8").style.visibility="hidden"
	}
	
		function escorteClick() {
		//elle masque tout les carte qui ne sont pas de type escorte
		resetImage()
		document.getElementById("image1").style.visibility="hidden"
		document.getElementById("image2").style.visibility="hidden"
		document.getElementById("image3").style.visibility="hidden"
		document.getElementById("image5").style.visibility="hidden"
		document.getElementById("image6").style.visibility="hidden"
		document.getElementById("image8").style.visibility="hidden"
	}
	
		function hybrideClick() {
		//elle masque tout les carte qui ne sont pas de type hybride
		resetImage()
		document.getElementById("image2").style.visibility="hidden"
		document.getElementById("image3").style.visibility="hidden"
		document.getElementById("image4").style.visibility="hidden"
		document.getElementById("image5").style.visibility="hidden"
		document.getElementById("image6").style.visibility="hidden"
		document.getElementById("image7").style.visibility="hidden"
	}
	
	    function resetImage() {
			//il fait apparaitre toute les images 
			var idName = ''
			var idCpt = 0
			for (var i = 0; i < 9; i++) {
				idCpt++
				idName = "image" + idCpt
				if (document.getElementById(idName)) {
					document.getElementById(idName).style.visibility="visible"
				}
			}
	}