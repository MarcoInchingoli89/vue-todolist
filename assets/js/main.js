/* Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no*/

//Milestone 1
//Creare un array di oggetti per la to do list con le proprietà text e done
//Creare una lista non ordinata con un list item in html
//Attraverso un v-for stampare in pagina i todo
//Inserisci su li tramite bootstrap la text decoration
//Usa un ternary operator su li. Se done è uguale a true, visualizza la text decoration altrimenti no

//Milestone 2
//Inserisci l'icona apposita accanto ai todo
//Aggiungi all'icona un evento a click
//Fai una funzione per rimuovere con splice un oggetto dell'array al click

//Milestone 3
//Inserisci un input nel markup
//Inserisci un button nel markup con scritto "aggiungi"
//Inserisci un evento a click sul pulsante
//Con v-model vai a reperire l'input dell'utente
//Crea una funzione al click prendi l'input e pushalo nell'array

/* Bonus:
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa) */

//Bonus 1
//Inserisco con keyup la funzione addTask sul tasto enter della tastiera per aggiungere l'input anche alla pressione del tasto

//Bonus 2
//Aggiungo un evento a click sull'item
//Creo una funzione al click che controlla con un ciclo if se done è vero o falso e lo imposta di conseguenza



const { createApp } = Vue

createApp({
    data() {
        return {

            newTask: {
                text: "",
                done: false
            },

            tasks: [

                {
                    text: "Fare la spesa",
                    done: false
                },

                {
                    text: "Porta fuori il cane",
                    done: true
                },

                {
                    text: "Fai l'esercitazione pomeridiana",
                    done: false
                },

                {
                    text: "Studia Javascript",
                    done: true
                },

                {
                    text: "Sessione D&D serale",
                    done: false
                },
            ]
        }
    },

    methods: {

        taskRemove(i) {
            //Rimuovo il todo al click dell'icona
            console.log('Ho cliccato sulla task con indice:', i);
            this.tasks.splice(i, 1);
        },

        addTask() {
            console.log('Ho cliccato sul pulsante');
            console.log(this.newTask)
            //Aggiungo l'input nell'oggetto
            this.tasks.unshift(this.newTask);
            //Svuoto l'oggetto
            this.newTask = '';
        },

        taskDone(i, task) {
            console.log('Ho cliccato sul testo:', i);
            console.log(task.done);
            if (task.done === true) {
                task.done = false;
            } else {
                task.done = true;
            }

        }
    }
}).mount('#app')