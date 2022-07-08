// MONTRE

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

setInterval(() => {
  clock()
}, 1000);
//

// donne heure et minutes sans les secondes

const modifierHeure = (heure) => {
  return new Date(heure).toLocaleTimeString().substring(0, 5);
}

// ZMANEI TEFILA H'OL

const displayTefChol = (async () => {
  let ZmanTefChol = await fetch('http://localhost:3000/api/zmanim/zman-chol');
  ZmanTefChol = await ZmanTefChol.json();
  let arvitOfChol = document.querySelector('#arvit')
  arvitOfChol.innerHTML = ZmanTefChol.arvitChol;
  let shacharitOfChol = document.querySelector('#shacharit')
  shacharitOfChol.innerHTML = ZmanTefChol.shacharitChol;
  let minchaOfChol = document.querySelector('#mincha')
  minchaOfChol.innerHTML = ZmanTefChol.minchaChol;

});


setInterval(() => {
  displayTefChol()
}, 1000);



// ZMANEI AYOM

const displayZmaneiAyom = (async () => {
  let ZmaneiAyom = await fetch('http://localhost:3000/api/zmanim/jerusalem');
  ZmaneiAyom = await ZmaneiAyom.json();
  // console.log(ZmaneiAyom.zmanJerusalem);
  ZmaneiShabat = ZmaneiAyom.zmanJerusalem.HadlakAndTzais;
  ZmaneiAyom = ZmaneiAyom.zmanJerusalem.BasicZmanim;
  let AlosHashachar = document.querySelector('#AlosHashachar')
  AlosHashachar.innerHTML = modifierHeure(ZmaneiAyom.AlosHashachar);
  let Sunrise = document.querySelector('#Sunrise')
  Sunrise.innerHTML = modifierHeure(ZmaneiAyom.Sunrise);
  let SofZmanShmaMGA = document.querySelector('#SofZmanShmaMGA')
  SofZmanShmaMGA.innerHTML = modifierHeure(ZmaneiAyom.SofZmanShmaMGA);
  let SofZmanShmaGRA = document.querySelector('#SofZmanShmaGRA')
  SofZmanShmaGRA.innerHTML = modifierHeure(ZmaneiAyom.SofZmanShmaGRA);
  let Chatzos = document.querySelector('#Chatzos')
  Chatzos.innerHTML = modifierHeure(ZmaneiAyom.Chatzos);
  let Sunset = document.querySelector('#Sunset')
  Sunset.innerHTML = modifierHeure(ZmaneiAyom.Sunset);
  let Tzais = document.querySelector('#Tzais')
  Tzais.innerHTML = modifierHeure(ZmaneiAyom.Tzais);
  let hadlaka = document.querySelector('#hadlaka')
  hadlaka.innerHTML = modifierHeure(ZmaneiShabat.hadlaka);
  let Tzais72 = document.querySelector('#Tzais72')
  Tzais72.innerHTML = modifierHeure(ZmaneiShabat.Tzais72);
  let TzaisShabat = document.querySelector('#TzaisShabat');
  // ajout d'une minute
  ZmaneiShabat.Tzais = new Date(ZmaneiShabat.Tzais).getTime() + 60000;
  TzaisShabat.innerHTML = new Date(ZmaneiShabat.Tzais).toLocaleTimeString().substring(0, 5);
});

setInterval(() => {
  displayZmaneiAyom();
}, 1000);

// ZMANEI SHABAT minchaShbt

const displayZmaneiShabat= async () => {
  let ZmaneiShabat= await fetch('http://localhost:3000/api/zmanim/zman-shabat');
  ZmaneiShabat= await ZmaneiShabat.json();
  // console.log(ZmaneiShabat);
  let shirAshirim = document.querySelector('#shirAshirim')
  shirAshirim.innerHTML = ZmaneiShabat.shirAshirim;
  let minchaErevShbt = document.querySelector('#minchaErevShbt')
  minchaErevShbt.innerHTML = ZmaneiShabat.minchaErevShbt;
  let shaharitShbt = document.querySelector('#shaharitShbt')
  shaharitShbt.innerHTML = ZmaneiShabat.shaharitShbt;
  let minchaShbt = document.querySelector('#minchaShbt')
  minchaShbt.innerHTML = ZmaneiShabat.minchaShbt;

};


setInterval(() => {
  displayZmaneiShabat();
}, 1000);





// INFO DAF PARASHA ET AUTRES

const displayInfo = (async () => {
  let info = await fetch('http://localhost:3000/api/zmanim/info');
  info = await info.json();
  // console.log(info);
  // console.log(info.eventsByDate.ParashatAshavua);
  let ParashatAshavua = document.querySelector('#ParashatAshavua')
  ParashatAshavua.innerHTML = `פרשת ${info.eventsByDate.ParashatAshavua}`;
  let daf = document.querySelector('#daf')
  daf.innerHTML = info.eventsByDate.DafYomiEvent.render;
  let dateH = document.querySelector('#dateH')
  dateH.innerHTML = info.eventsByDate.HebrewDateEvent.render;
  

});

setInterval(() => {
  displayInfo();
}, 1000);





// AFFICHAGE IMAGE

const retournImage = async () => {
    fetch("http://localhost:3000/api/zmanim/pdf")
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    // console.log("coucou");
    document.getElementById("myImg").src = `http://localhost:3000/${data.urlImage}`;
  });
  }
  
  
  setInterval(() => {
    retournImage()
  }, 1000);

  
  
 // DATE en francais
 
 
let date = new Date().toLocaleDateString();
date = date.split('/')
let date2 = date[2].split('').slice(-2).join('');
date[2] = date2;
date = date.join('/')
console.log(date);
let afficheDate = document.querySelector('#dateFr');
afficheDate.innerHTML = date;

  
  
  
      
  
  