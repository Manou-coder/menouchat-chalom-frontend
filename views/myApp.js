clock();

function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;


  let second2 = seconds * 6;

  second2 += 225;
  
  
  document.querySelector('.heure').style.transform = `rotate(${hour}deg)`;

  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;

  document.querySelector('.seconde').style.transform = `rotate(${second}deg)`;

  document.querySelector('.aiguille').style.transform = `rotate(${second2}deg)`;
}

setInterval(clock, 1000);




// const retournImage = async () => {
//     fetch("http://localhost:3000/api/zmanim/pdf")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//     console.log("coucou");
//     document.getElementById("myImg").src = `http://localhost:3000/${data.urlImage}`;

  
//   });
//   }
  
  
  
//   retournImage()
  
  
  
  
  
  
      
  
  