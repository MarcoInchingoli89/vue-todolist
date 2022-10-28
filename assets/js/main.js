/* Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. */

//Creare un array di oggetti per la to do list con le proprietà text e done
//Creare una lista non ordinata con un list item in html
//Attraverso un v-for stampare in pagina i todo




const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks: [
            
            {
                text: "Fare la spesa",
                done: false
            },

            {
                text: "Porta fuori il cane",
                done: false
            },

            {
                text: "Fai l'esercitazione pomeridiana",
                done: false
            },

            {
                text: "Studia Javascript",
                done: false
            },

            {
                text: "Sessione D&D serale",
                done: false
            },
        ]
      }
    }
  }).mount('#app')