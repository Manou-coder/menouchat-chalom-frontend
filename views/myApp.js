// MONTRE
clock();

function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  let min = minutes * 6;
  min += 45;
  
  let hor = hours * 30;
  hor += 60;


  document.querySelector('.min').style.transform = `rotate(${min}deg)`;

  document.querySelector('.hor').style.transform = `rotate(${hor}deg)`;
}

setInterval(clock, 1000);
//

// OBJET JSON

const objet = {
  parashatAshavua: "קורח",
  adlaka: "19:11",
  dafAyomi: "יבמות קי'",
  evenement: "ראש חודש",
  dateHebreu: "יום ראשון כ' סיון תשפ''ב",

}

const date = new Date().toLocaleDateString();

let afficheDate = document.querySelector('.date');

console.log(afficheDate);

// afficheDate.forEach(element => {
//   element.innerHTML = date;
//   element.style.color = 'red';
//   element.style.marginTop = '0px';
//   element.style.marginBottom = '0px';
// });

let affiche_parasha = document.querySelector('.parasha');
let affiche_adlaka = document.querySelector('.adlaka');
let affiche_daf = document.querySelector('.daf');
let affiche_evenement = document.querySelector('.evenement');


affiche_parasha.innerHTML = objet.parashatAshavua;
affiche_adlaka.innerHTML = objet.adlaka;
affiche_daf.innerHTML = objet.dafAyomi;
affiche_evenement.innerHTML = objet.evenement;

let affiche_panneau_gauche = document.querySelectorAll('div.panneau_gauche p');

affiche_panneau_gauche.forEach(element => {
  element.style.color = 'red';
  element.style.marginTop = '0px';
  element.style.marginBottom = '0px';
});

// affiche_panneau_gauche.style.color = 'red';

// const array = [affiche_parasha, affiche_adlaka, affiche_daf, affiche_evenement]

// objet.forEach(element => {
//   console.log(element);
// });

// for (const key in objet) {
//   if (Object.hasOwnProperty.call(objet, key)) {
//     const element = objet[key];
//     console.log(element);
//     console.log(key);
//     array.forEach(e => {
//       affiche${e}.innerHTML = 
//     });
    
//   }
// }





// const retournImage = async () => {
//     fetch("http://localhost:3000/api/zmanim/pdf")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     console.log("coucou");
//     document.getElementById("myImg").src = `http://localhost:3000/${data.urlImage}`;
//     document.getElementById("myImg2").src = `http://localhost:3000/${data.urlImage}`;

  
//   });
//   }
  
  
  
//   retournImage()
  
  
  
  
  
  
      
  
  