  // Fonction récursive pour écrire chaque lettre
  /*
  function effet() {
    const cible = document.getElementById("texte");
    const contenu = cible.innerHTML;


    if (index < contenu.length) {
      element.contenu += texte.charAt(index);
      index++;
      setTimeout(ecrireLettre, 50); // Vitesse d’écriture
    }
  }
  effet(); // Lancement
*/
 const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
     document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

//Effet de texte
 const source = document.getElementById("texte-complet");
    const cible = document.getElementById("effet");
    const contenuHTML = source.innerHTML;
    let index = 0;
    let affichage = "";
    let direction = 1; // 1 = écriture, -1 = effacement

    function ecrireEffacer() {
      if (direction === 1) {
        affichage += contenuHTML.charAt(index);
        cible.innerHTML = affichage;
        index++;
        if (index >= contenuHTML.length) {
          direction = -1;
          setTimeout(ecrireEffacer, 1000); // Pause avant effacement
          return;
        }
      } else {
        affichage = affichage.slice(0, -1);
        cible.innerHTML = affichage;
        index--;
        if (index <= 0) {
          direction = 1;
          setTimeout(ecrireEffacer, 500); // Pause avant réécriture
          return;
        }
      }
      setTimeout(ecrireEffacer, 50); // Vitesse de l’effet
    }

    ecrireEffacer();// Lancement