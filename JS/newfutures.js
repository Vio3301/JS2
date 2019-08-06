



// destructuring



// structuring
//compact1) - old school
// var styles = {
//     color:"red",
//     fontSize:20,
//     textAlign:"right"
// }
// alert(styles.color)
// ca sa nu scrim mai mult
// var color = styles.color..
// alert(color)

//new age 2) - destructuring
// var {color,fontSize,textAlign} = styles
// alert(`hhfhhhfhhfhf${color}ddsdsdsds${fontSize}`)



//////////////
// Clase In jS | reprezinta o grupa /categorie cu structura asemanatoare 
//Classa (este o schema care descrie obiectele)/este un tip de datete custumizat care permite sa creezi mai multe exzempleare 



////obiec - o structura dibn care consta din Proprietati si Metode


// ex:Clase mai multe obiecte edentice

//ES6+

//declar o clasa
class car{//numele clasei
    //structura/schema

    //proprietati - only modern brauzers
    // brand = "BMW"
    // color = "red"
    // year = 2019
    
//----------------------------------
    constructor(color){
        this.model = "bmw"
        this.color = color
        this.year = 2019

    }

// metode
move(){
    alert("absajsajsa")
}




}

//creiez un obiect de tip clas
 var c1 = new car("black");//instance of car
 var c2 = new car("red");//instance of car
 var c3 = new car("white");//instance of car   //new - un obiect nou din classa Car
 var c = {} // obiect literar//simplu
 