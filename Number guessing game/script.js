// Zufallszahl zwischen 0 und 100 generieren
// Math.random() gibt eine Zahl zwischen 0 und 1 zurück
// Mit *100 wird der Wertebereich auf 0 bis 100 skaliert
// Math.round() rundet die Zahl auf eine ganze Zahl
let numberToGuess = Math.round(Math.random() * 100); 
let tries = 0; // Zähler für die Anzahl der Versuche


function guessTheNumber(){
  // Jede Funktion wird aufgerufen, wenn das Formular abgeschickt wird

  tries = tries + 1; // Bei jedem Versuch den Zähler um 1 erhöhen
  displayTries.innerHTML = 'Versuche: ' + tries; // Die aktuelle Anzahl der Versuche in das HTML-Element mit der ID displayTries einfügen

  // Wenn die geratene Zahl korrekt ist
  if(numberToGuess == myNumber.value){
    headline.innerHTML = 'Du hast gewonnen!!! 😍'; 
    // Bei einem Gewinn die Überschrift ändern und Konfetti auslösen
    let jsConfetti = new JSConfetti();
    jsConfetti.addConfetti(); // Konfetti-Effekt auslösen
  }
  
  // Wenn die geratene Zahl zu niedrig ist
  if (numberToGuess > myNumber.value) {
    headline.innerHTML = "Die Zahl ist grösser"; 
  }

  // Wenn die geratene Zahl zu hoch ist
  if (numberToGuess < myNumber.value) {
    headline.innerHTML = "Die Zahl ist kleiner"; 
  }

  // Eingabefeld nach jedem Versuch zurücksetzen
  myNumber.value = '';
}

// alert(numberToGuess); // Debugging: Mit dieser Zeile könnte ich die zufällige Zahl in einem Pop-up-Fenster anzeigen lassen
