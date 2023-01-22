
let signbt = document.getElementById("signbtn");
console.log(signbt)

let present="true";
signbt.addEventListener("click", function () {
  let signin = document.getElementById("sigin")
if (present == "true"){
    signin.style.display = "block";
    present="false"
    console.log(1)
}
else if(present == "false"){
  signin.style.display = "none";
  present="true"
  console.log(0)
}
})



function slideshowFun(images) {

  let i = 0;
  setInterval(() => {
    let img = document.createElement("img");
    img.setAttribute("src", images[i]);
    document.getElementById("slideshow").innerHTML = null;
    document.getElementById('slideshow').append(img);
    i++;
    if (i >= images.length) i = 0;
  }, 2000);

}

// Use the following data for slideshow
var autopartImages = [

  "https://www.autozone.com/cdn/images/B2C/US/media/FY23/P0506/Heroes/_fy23p0506-superhero-rewards-d.jpg",
  "https://www.autozone.com/cdn/images/B2C/US/media/FY23/P0506/Heroes/_fy23p0506-superhero-gumout-d.jpg",
  "https://www.autozone.com/cdn/images/B2C/US/media/FY23/P0506/Heroes/_fy23p0506-superhero-brake-job-d.jpg",
  "https://www.autozone.com/cdn/images/B2C/US/media/FY23/P0506/Heroes/_fy23p0506-superhero-battery-d.jpg",
  "https://www.autozone.com/cdn/images/quot/prod/AutoZone/ExxonMobilCorporation/SF263876_ExxonMobil_AutoZone_NAU-544x447-V1-R1.jpg"

]

slideshowFun(autopartImages);

// admin javascript 

let productDB = JSON.parse(localStorage.getItem('productDB'));


displayData(productDB);




function displayData(data) {

  let parent = document.querySelector('#products');


  parent.innerHTML = null;


  data.forEach(function (el) {

    let card = document.createElement('div');
    let name = document.createElement('h3');
    let img = document.createElement('img');
    let price = document.createElement('p');
    let desc = document.createElement('p');
    let cartBtn = document.createElement('button');


    name.textContent = el.name;
    img.src = el.url;
    price.textContent = `$${el.price}`;
    desc.textContent = el.desc;
    cartBtn.textContent = 'Add to Cart'

    cartBtn.addEventListener('click', function () {

      let cartDB = JSON.parse(localStorage.getItem('cartProducts')) || [];

      cartDB.push([el, 1]);

      localStorage.setItem('cartProducts', JSON.stringify(cartDB));
      alert('added to cart!')
    })


    card.append(img, name, desc, price, cartBtn);
    parent.append(card);

  })
}

//cart buttton 

let cartbtn= document.querySelector("#cartbtn");

cartbtn.addEventListener("click",function(){
    window.location.assign('./cart.html');
})

let signinpage =document.getElementById("sig");
console.log(signinpage)

signinpage.addEventListener("click" ,function(){
  window.location.assign('./signin.html');
  console.log(1)
})