
 let cartDB = JSON.parse(localStorage.getItem('cartProducts'))||[];

 cartDB.forEach(function(el){
     console.log(el[0].price);
 })
 
 displayData(cartDB);


 function displayData(data){
     
     let parent = document.querySelector('#cartproduct');

   
     parent.innerHTML = null;
     let tprice= document.querySelector("#tprice")

     let temp = 0;

    data.forEach(function (el) {
      temp += ( Number(el[0].price) * Number(el[1]))
      console.log(el[0].price ,el[1])
    })
    tprice.textContent = `$${temp}`;

     // we run forEach loop inside the array.
     data.forEach(function(el,i){
         // we create a card(div) first
         let card = document.createElement('div');
         let name = document.createElement('h3');
         let img = document.createElement('img');
         let price = document.createElement('p');
         let desc = document.createElement('p');
         let addBtn = document.createElement('button');
         let minBtn = document.createElement('button');
         let qty = document.createElement('span');
         let del = document.createElement('button');

         
         name.textContent = el[0].name;
         img.src = el[0].url;
         price.textContent =`$${el[0].price}`;
         desc.textContent = el[0].desc;
         addBtn.textContent = '+';
         minBtn.textContent = '-'
         qty.textContent = el[1];
         del.textContent = 'Delete'

         addBtn.addEventListener('click',function(){
           
             el[1]++;
             
             qty.textContent++;
             
             localStorage.setItem('cartProducts',JSON.stringify(data));

             let tprice= document.querySelector("#tprice")

             let temp = 0;
        
            data.forEach(function (el) {
              temp += ( Number(el[0].price) * Number(el[1]))
              console.log(el[0].price ,el[1])
            })
            tprice.textContent = `$${temp}`;
         })

         minBtn.addEventListener('click',function(){
             if(el[1]>1){
                 el[1]--;
                 qty.textContent--;
                 localStorage.setItem('cartProducts',JSON.stringify(data));

                 let tprice= document.querySelector("#tprice")

                 let temp = 0;
            
                data.forEach(function (el) {
                  temp += ( Number(el[0].price) * Number(el[1]))
                  console.log(el[0].price ,el[1])
                })
                tprice.textContent = `$${temp}`;


             }
             else{
                
                 data.splice(i,1);
                
                 localStorage.setItem('cartProducts',JSON.stringify(data));

                 let tprice= document.querySelector("#tprice")

                 let temp = 0;
            
                data.forEach(function (el) {
                  temp += ( Number(el[0].price) * Number(el[1]))
                  console.log(el[0].price ,el[1])
                })
                tprice.textContent = `$${temp}`;
             
                 displayData(data);
             }
         })
        
         
        
         card.append(img,name,desc,price,addBtn,qty,minBtn);
         parent.append(card);
         
     })
 }

 let logo = document.querySelector("#logo");
 logo.addEventListener("click",function(){
    window.location.assign('./index.html');
 })