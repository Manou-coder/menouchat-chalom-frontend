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
  hor += 50;


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

let afficheDate = document.querySelectorAll('.date');

console.log(afficheDate);

afficheDate.forEach(element => {
  element.innerHTML = date;
  element.style.color = 'red';
  element.style.marginTop = '0px';
  element.style.marginBottom = '0px';
});






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
  
  
  
  
  
  
      
  
  