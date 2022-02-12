/* Code below is for the slideshow of the ecoins and the big tech companies */
let forWords = document.querySelector('.text0');
let forWords2 = document.querySelector('.text1');

let images = [];
let nextImages = [];

images[1]="images/LITECOIN.jpeg";
images[0]="images/ETHEREUM.jpeg";
images[2]="images/bitcoin.jpg_fit=scale";
setInterval("changeImage()", 2000);
let x = 0;

nextImages[1]="images/facebookOffice.jpeg";
nextImages[0]="images/netflixOffice.jpeg";
nextImages[2]="images/googleOffice.jpeg";
setInterval("changeImage2()", 2000);
let w = 0;

function changeImage(){
    let show1 = document.querySelector('.img1');
    show1.src = images[x];

    if(x == 1){
      forWords.innerHTML=`<b style="background-color:lightgray;">Market cap:</b> US$8.7 billion (January 2022)
<b style="background-color:lightgray;"><br>Supply limit:</b> 84,000,000 LTC
<b style="background-color:lightgray;"><br>Developer(s):</b> Litecoin Core Development Team
`;
    }

    if(x == 0){
      forWords.innerHTML=`<b style="background-color:lightgray;">Market cap:</b> 367.641B yahoo.com
<b style="background-color:lightgray;"><br>Initial release date:</b> July 30, 2015
<b style="background-color:lightgray;"><br>Original author(s):</b> Vitalik Buterin; Gavin Wood
`;

    }

    if(x == 2){
      forWords.innerHTML=`<b style="background-color:lightgray;">Market cap:</b> US$775 billion
<b style="background-color:lightgray;"><br>Supply limit:</b> ₿21,000,000
<b style="background-color:lightgray;"><br>Original author(s):</b>	Satoshi Nakamoto
`;

    }
    x++;
    if((images.length)==x){
        x = 0;
    }
}

function changeImage2(){
    let show2 = document.querySelector('.img2');
    show2.src = nextImages[w];

    if(w == 2){
      forWords2.innerHTML=`<b style="background-color:white;">Revenue:</b> $182.53 billion USD (2020)
<b style="background-color:white;"><br>CEO:</b> Sundar Pichai (Dec 3, 2019–)
<b style="background-color:white;"><br>Type of business:</b> Public
`;
    }

    if(w == 0){
      forWords2.innerHTML=`<b style="background-color:white;">Revenue:</b> $29.7 billion USD (2021)
<b style="background-color:white;"><br>Co-CEOs:</b> Reed Hastings (Sep 1998–), Ted Sarandos (Jul 16, 2020–)
<b style="background-color:white;"><br>Type of business:</b> Public
`;
    }

    if(w == 1){
      forWords2.innerHTML=`<b style="background-color:white;">Revenue:</b> $85.97 billion USD (2020)
<b style="background-color:white;"><br>CEO:</b> Mark Zuckerberg (Feb 4, 2004–)
<b style="background-color:white;"><br>Type of business:</b> Public
`;
    }
    w++;
    if((nextImages.length)==w){
        w = 0;
    }
}
/* Code above is for the slideshow of the ecoins and the big tech companies */



/* Code below allows for the search box to operate */
function search_stocks(){
  let input0 = document.querySelector('#searchbar');
  if(input0 === document.activeElement){
    document.querySelector('#stockList').style.display = "block";
  }
  document.querySelector('.productContainer').addEventListener("click", function(){
    document.querySelector('#stockList').style.display = "none";
  });
  let input = document.querySelector('#searchbar').value;
  input = input.toLowerCase()
  let x = document.getElementsByClassName('stocks');
  for(let i = 0; i < x.length; i++){
    if (!x[i].innerHTML.toLowerCase().includes(input)){
      x[i].style.display="none";
    }
    else {
      x[i].style.display="list-item";
    }
  }
}
/* Code above allows for search box to operate */



/* Code below allows "ADD 1 SHARE" button to increment share amount by 1 for the shopping cart */
let box1 = document.querySelector('.hold1 p');
let box2 = document.querySelector('.hold2 p');
let box3 = document.querySelector('.hold3 p');
let box4 = document.querySelector('.hold4 p');
let box5 = document.querySelector('.hold5 p');
let box6 = document.querySelector('.hold6 p');

let btn1 = document.querySelector('.button1');
let btn2 = document.querySelector('.button2');
let btn3 = document.querySelector('.button3');
let btn4 = document.querySelector('.button4');
let btn5 = document.querySelector('.button5');
let btn6 = document.querySelector('.button6');

let price1 = 0;
let amount1 =0;
let price2 = 0;
let amount2 =0;
let price3 = 0;
let amount3 =0;
let price4 = 0;
let amount4 =0;
let price5 = 0;
let amount5 =0;
let price6 = 0;
let amount6 =0;

btn1.onclick = function(){
  if(amount1 === 0){
    price1+=327;
    ++amount1;
    let text = `<br>Price: $${price1}<br>[${amount1} share(s) added into cart]`;
    box1.innerHTML += text;
  }
  else{
    price1+=327;
    ++amount1;
    let text = `<br>Price: $${price1}<br>[${amount1} share(s) added into cart]`;
    box1.innerHTML = `BTC: ${text}`;
  }
}
btn2.onclick = function(){
  if(amount2 === 0){
    price2+=11.95;
    ++amount2;
    let text = `<br>Price: $${price2}<br>[${amount2} share(s) added into cart]`;
    box2.innerHTML += text;
  }
  else{
    price2+=11.95;
    ++amount2;
    let text = `<br>Price: $${price2}<br>[${amount2} share(s) added into cart]`;
    box2.innerHTML = `ETH: ${text}`;
  }
}
btn3.onclick = function(){
  if(amount3 === 0){
    price3+=3.86;
    ++amount3;
    let text = `<br>Price: $${price3}<br>[${amount3} share(s) added into cart]`;
    box3.innerHTML += text;
  }
  else{
    price3+=3.86;
    ++amount3;
    let text = `<br>Price: $${price3}<br>[${amount3} share(s) added into cart]`;
    box3.innerHTML = `LTC: ${text}`;
  }
}
btn4.onclick = function(){
  if(amount4 === 0){
    price4+=54.16;
    ++amount4;
    let text = `<br>Price: $${price4}<br>[${amount4} share(s) added into cart]`;
    box4.innerHTML += text;
  }
  else{
    price4+=54.16;
    ++amount4;
    let text = `<br>Price: $${price4}<br>[${amount4} share(s) added into cart]`;
    box4.innerHTML = `GOOGL: ${text}`;
  }
}
btn5.onclick = function(){
  if(amount5 === 0){
    price5+=1.21;
    ++amount5;
    let text = `<br>Price: $${price5}<br>[${amount5} share(s) added into cart]`;
    box5.innerHTML += text;
  }
  else{
    price5+=1.21;
    ++amount5;
    let text = `<br>Price: $${price5}<br>[${amount5} share(s) added into cart]`;
    box5.innerHTML = `NFLX: ${text}`;
  }
}
btn6.onclick = function(){
  if(amount6 === 0){
    price6+=38.23;
    ++amount6;
    let text = `<br>Price: $${price6}<br>[${amount6} share(s) added into cart]`;
    box6.innerHTML += text;
  }
  else{
    price6+=38.23;
    ++amount6;
    let text = `<br>Price: $${price6}<br>[${amount6} share(s) added into cart]`;
    box6.innerHTML = `FB: ${text}`;
  }
}
/* Code above= allows "ADD 1 SHARE" button to increment share amount by 1 for the shopping cart */



/* Code below makes sure the multi-purchase operates and only operates works once */
let form2 = document.querySelector('.myForm2');
let name2 = document.querySelector('#searchbar');
let open = document.querySelector('.opened');
let first = document.querySelector('#modalWindow4');
let opening = document.querySelector('.hyper');
let oneTime1 = 0;
let oneTime2 = 0;
let oneTime3 = 0;
let oneTime4 = 0;
let oneTime5 = 0;
let oneTime6 = 0;

form2.addEventListener('submit', function(e){

  e.preventDefault();
  let newNameForm = name2.value;

  if (newNameForm === 'Bitcoin' || newNameForm === 'bitcoin' || newNameForm === 'BITCOIN'){
    if(oneTime1 === 0){
    opening.href=parseInt(prompt(`How many BTC shares would you like? [1-100][inclusive]`));
    let add = opening.href;
    add = add.substr(add.indexOf('e/') + 2,add.length);
    if((!isNaN(add)) && add >= 1 && add <= 100 && oneTime1 === 0){
      alert(`${add} BTC share(s) added to cart :) \n[click on shopping cart to see what you have]`);
      ++oneTime1;
      if(amount1 === 0){
        price1+=(327*add);
        amount1=add;
        let text = `<br>Price: $${price1}<br>[${amount1} share(s) added into cart]`;

        box1.innerHTML += text;
        opening.href="#modalWindow1";
        open.src = "images/aBitcoin.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
      else{
        price1+=(327*add);
        amount1=(price1/327);
        let text = `<br>Price: $${price1}<br>[${amount1} share(s) added into cart]`;

        box1.innerHTML = `BTC:${text}`;
        opening.href="#modalWindow1";
        open.src = "images/aBitcoin.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
    }
  }
    if (oneTime1 > 0){
      opening.href="#modalWindow1";
      open.src = "images/aBitcoin.png";
      opening.style.display = "block";
      setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
    }
  }


  else if (newNameForm === 'Ether' || newNameForm === 'ether' || newNameForm === 'ETHER'){
    if(oneTime2 === 0){
    opening.href=parseInt(prompt(`How many ETH shares would you like? [1-100][inclusive]`));
    let add = opening.href;
    add = add.substr(add.indexOf('e/') + 2,add.length);
    if((!isNaN(add)) && add >= 1 && add <= 100 && oneTime2 === 0){
      alert(`${add} ETH share(s) added to cart :) \n[click on shopping cart to see what you have]`);
      ++oneTime2;
      if(amount2 === 0){
        price2+=(11.95*add);
        amount2=add;
        let text = `<br>Price: $${price2}<br>[${amount2} share(s) added into cart]`;

        box2.innerHTML += text;
        opening.href="#modalWindow2";
        open.src = "images/anEthereum.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
      else{
        price2+=(11.95*add);
        amount2=(price2/11.95);
        let text = `<br>Price: $${price2}<br>[${amount2} share(s) added into cart]`;

        box2.innerHTML = `ETH:${text}`;
        opening.href="#modalWindow2";
        open.src = "images/anEthereum.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
    }
  }
    if (oneTime2 > 0){
      opening.href="#modalWindow2";
      open.src = "images/anEthereum.png";
      opening.style.display = "block";
      setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
    }
  }


  else if (newNameForm === 'Litecoin' || newNameForm === 'LITECOIN' || newNameForm === 'litecoin'){
    if(oneTime3 === 0){
    opening.href=parseInt(prompt(`How many LTC shares would you like? [1-100][inclusive]`));
    let add = opening.href;
    add = add.substr(add.indexOf('e/') + 2,add.length);
    if((!isNaN(add)) && add >= 1 && add <= 100 && oneTime3 === 0){
      alert(`${add} LTC share(s) added to cart :) \n[click on shopping cart to see what you have]`);
      ++oneTime3;
      if(amount3 === 0){
        price3+=(3.86*add);
        amount3=add;
        let text = `<br>Price: $${price3}<br>[${amount3} share(s) added into cart]`;

        box3.innerHTML += text;
        opening.href="#modalWindow3";
        open.src = "images/aLitecoin.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
      else{
        price3+=(3.86*add);
        amount3=(price3/3.86);
        let text = `<br>Price: $${price3}<br>[${amount3} share(s) added into cart]`;

        box3.innerHTML = `LTC:${text}`;
        opening.href="#modalWindow3";
        open.src = "images/aLitecoin.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
    }
  }
    if (oneTime3 > 0){
      opening.href="#modalWindow3";
      open.src = "images/aLitecoin.png";
      opening.style.display = "block";
      setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
    }
  }


  else if (newNameForm === 'Google' || newNameForm === 'google' || newNameForm === 'GOOGLE'){
    if(oneTime4 === 0){
    opening.href=parseInt(prompt(`How many GOOGL shares would you like? [1-100][inclusive]`));
    let add = opening.href;
    add = add.substr(add.indexOf('e/') + 2,add.length);
    if((!isNaN(add)) && add >= 1 && add <= 100 && oneTime4 === 0){
      alert(`${add} GOOGL share(s) added to cart :) \n[click on shopping cart to see what you have]`);
      ++oneTime4;
      if(amount4 === 0){
        price4+=(54.16*add);
        amount4=add;
        let text = `<br>Price: $${price4}<br>[${amount4} share(s) added into cart]`;

        box4.innerHTML += text;
        opening.href="#modalWindow4";
        open.src = "images/aGoogle.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
      else{
        price4+=(54.16*add);
        amount4=(price4/54.16);
        let text = `<br>Price: $${price4}<br>[${amount4} share(s) added into cart]`;

        box4.innerHTML = `GOOGL:${text}`;
        opening.href="#modalWindow4";
        open.src = "images/aGoogle.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
    }
  }
    if (oneTime4 > 0){
      opening.href="#modalWindow4";
      open.src = "images/aGoogle.png";
      opening.style.display = "block";
      setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
    }
  }


  else if (newNameForm === 'Netflix' || newNameForm === 'netflix' || newNameForm === 'NETFLIX'){
    if(oneTime5 === 0){
    opening.href=parseInt(prompt(`How many NFLX shares would you like? [1-100][inclusive]`));
    let add = opening.href;
    add = add.substr(add.indexOf('e/') + 2,add.length);
    if((!isNaN(add)) && add >= 1 && add <= 100 && oneTime5 === 0){
      alert(`${add} NFLX share(s) added to cart :) \n[click on shopping cart to see what you have]`);
      ++oneTime5;
      if(amount5 === 0){
        price5+=(1.21*add);
        amount5=add;
        let text = `<br>Price: $${price5}<br>[${amount5} share(s) added into cart]`;

        box5.innerHTML += text;
        opening.href="#modalWindow5";
        open.src = "images/aNetflix.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
      else{
        price5+=(1.21*add);
        amount5=(price5/1.21);
        let text = `<br>Price: $${price5}<br>[${amount5} share(s) added into cart]`;

        box5.innerHTML = `NFLX:${text}`;
        opening.href="#modalWindow5";
        open.src = "images/aNetflix.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
    }
  }
    if (oneTime5 > 0){
      opening.href="#modalWindow5";
      open.src = "images/aNetflix.png";
      opening.style.display = "block";
      setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
    }
  }


  else if (newNameForm === 'Meta' || newNameForm === 'meta' || newNameForm === 'META'){
    if(oneTime6 === 0){
    opening.href=parseInt(prompt(`How many FB shares would you like? [1-100][inclusive]`));
    let add = opening.href;
    add = add.substr(add.indexOf('e/') + 2,add.length);
    if((!isNaN(add)) && add >= 1 && add <= 100 && oneTime6 === 0){
      alert(`${add} FB share(s) added to cart :) \n[click on shopping cart to see what you have]`);
      ++oneTime6;
      if(amount6 === 0){
        price6+=Math.ceil((38.23*add));
        amount6=add;
        let text = `<br>Price: $${price6}<br>[${amount6} share(s) added into cart]`;

        box6.innerHTML += text;
        opening.href="#modalWindow6";
        open.src = "images/aFacebook.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
      else{
        price6+=(38.23*add);
        amount6=(price6/38.23);
        let text = `<br>Price: $${price6}<br>[${amount6} share(s) added into cart]`;

        box6.innerHTML = `FB:${text}`;
        opening.href="#modalWindow6";
        open.src = "images/aFacebook.png";
        opening.style.display = "block";
        setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
      }
    }
  }
    if (oneTime6 > 0){
      opening.href="#modalWindow6";
      open.src = "images/aFacebook.png";
      opening.style.display = "block";
      setTimeout(function(){opening.style.display = "none"; document.querySelector('#stockList').style.display = "none";}, 4000);
    }
  }


  else{
    alert(`Error: misspelled word`);
  }
});
/* Code above makes sure the multi-purchase operates and only operates works once */



/* Code below is for the direct buy button only to appear when there are items ready to buy */
let websiteCart = document.querySelector('.cart');
let checkoutButton = document.querySelector('#submit_bt');
websiteCart.onclick = function(){
  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}
/* Code above is for the direct buy button only to appear when there are items ready to buy */



/* Code below is for removing items from the cart */
let minus10BTC = document.querySelectorAll('.minus1 input')[0];
let minus1BTC = document.querySelectorAll('.minus1 input')[1];
let minusAllBTC = document.querySelectorAll('.minus1 input')[2];

let minus10ETH = document.querySelectorAll('.minus2 input')[0];
let minus1ETH = document.querySelectorAll('.minus2 input')[1];
let minusAllETH = document.querySelectorAll('.minus2 input')[2];

let minus10LTC = document.querySelectorAll('.minus3 input')[0];
let minus1LTC = document.querySelectorAll('.minus3 input')[1];
let minusAllLTC = document.querySelectorAll('.minus3 input')[2];

let minus10GOOGL = document.querySelectorAll('.minus4 input')[0];
let minus1GOOGL = document.querySelectorAll('.minus4 input')[1];
let minusAllGOOGL = document.querySelectorAll('.minus4 input')[2];

let minus10NFLX = document.querySelectorAll('.minus5 input')[0];
let minus1NFLX = document.querySelectorAll('.minus5 input')[1];
let minusAllNFLX = document.querySelectorAll('.minus5 input')[2];

let minus10FB = document.querySelectorAll('.minus6 input')[0];
let minus1FB = document.querySelectorAll('.minus6 input')[1];
let minusAllFB = document.querySelectorAll('.minus6 input')[2];

minus10BTC.onclick = function(){
  if(amount1 >= 10){
    amount1-=10;
    price1-=(10*327);
    let text = `<br>Price: $${price1}<br>[${amount1} share(s) added into cart]`;
    box1.innerHTML = `BTC:${text}`;
  }

  if(amount1===0){
    box1.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus10ETH.onclick = function(){
  if(amount2 >= 10){
    amount2-=10;
    price2-=(10*11.95);
    let text = `<br>Price: $${price2}<br>[${amount2} share(s) added into cart]`;
    box2.innerHTML = `ETH:${text}`;
  }

  if(amount2===0){
    box2.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus10LTC.onclick = function(){
  if(amount3 >= 10){
    amount3-=10;
    price3-=(10*3.86);
    let text = `<br>Price: $${price3}<br>[${amount3} share(s) added into cart]`;
    box3.innerHTML = `LTC:${text}`;
  }

  if(amount3===0){
    box3.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
    box3.innerHTML = ``;
  }
}

minus10GOOGL.onclick = function(){
  if(amount4 >= 10){
    amount4-=10;
    price4-=(10*54.16);
    let text = `<br>Price: $${price4}<br>[${amount4} share(s) added into cart]`;
    box4.innerHTML = `GOOGL:${text}`;
  }

  if(amount4===0){
    box4.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus10NFLX.onclick = function(){
  if(amount5 >= 10){
    amount5-=(10);
    price5-=(10*1.21);
    let text = `<br>Price: $${price5}<br>[${amount5} share(s) added into cart]`;
    box5.innerHTML = `NFLX:${text}`;
  }

  if(amount5===0){
    box5.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus10FB.onclick = function(){
  if(amount6 >= 10){
    amount6-=10;
    price6-=(10*38.23);
    let text = `<br>Price: $${price6}<br>[${amount6} share(s) added into cart]`;
    box6.innerHTML = `FB:${text}`;
  }

  if(amount6===0){
    box6.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
    box6.innerHTML = ``;
  }
}

minus1BTC.onclick = function(){
  if(amount1 >= 1){
    amount1--;
    price1-=(1*327);
    let text = `<br>Price: $${price1}<br>[${amount1} share(s) added into cart]`;
    box1.innerHTML = `BTC:${text}`;
  }

  if(amount1===0){
    box1.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus1ETH.onclick = function(){
  if(amount2 >= 1){
    amount2--;
    price2-=(1*11.95);
    let text = `<br>Price: $${price2}<br>[${amount2} share(s) added into cart]`;
    box2.innerHTML = `ETH:${text}`;
  }

  if(amount2===0){
    box2.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus1LTC.onclick = function(){
  if(amount3 >= 1){
    amount3--;
    price3-=(1*3.86);
    let text = `<br>Price: $${price3}<br>[${amount3} share(s) added into cart]`;
    box3.innerHTML = `LTC:${text}`;
  }

  if(amount3===0){
    box3.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus1GOOGL.onclick = function(){
  if(amount4 >= 1){
    amount4--;
    price4-=(1*54.16);
    let text = `<br>Price: $${price4}<br>[${amount4} share(s) added into cart]`;
    box4.innerHTML = `GOOGL:${text}`;
  }

  if(amount4===0){
    box4.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus1NFLX.onclick = function(){
  if(amount5 >= 1){
    amount5--;
    price5-=(1*1.21);
    let text = `<br>Price: $${price5}<br>[${amount5} share(s) added into cart]`;
    box5.innerHTML = `NFLX:${text}`;
  }

  if(amount5===0){
    box5.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minus1FB.onclick = function(){
  if(amount6 >= 1){
    amount6--;
    price6-=(1*38.23);
    let text = `<br>Price: $${price6}<br>[${amount6} share(s) added into cart]`;
    box6.innerHTML = `FB:${text}`;
  }

  if(amount6===0){
    box6.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minusAllBTC.onclick = function(){
  if(amount1 >= 1){
    amount1=0;
    price1=0;
    box1.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minusAllETH.onclick = function(){
  if(amount2 >= 1){
    amount2=0;
    price2=0;
    box2.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minusAllLTC.onclick = function(){
  if(amount3 >= 1){
    amount3=0;
    price3=0;
    box3.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minusAllGOOGL.onclick = function(){
  if(amount4 >= 1){
    amount4=0;
    price4=0;
    box4.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minusAllNFLX.onclick = function(){
  if(amount5 >= 1){
    amount5=0;
    price5=0;
    box5.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}

minusAllFB.onclick = function(){
  if(amount6 >= 1){
    amount6=0;
    price6=0;
    box6.innerHTML = ``;
  }

  if(amount1 > 0 || amount2 > 0 || amount3 > 0 || amount4 > 0 || amount5 > 0 || amount6 > 0){

    let total = parseInt(amount1)+parseInt(amount2)+parseInt(amount3)+parseInt(amount4)+parseInt(amount5)+parseInt(amount6);
    checkoutButton.style.display = "block";
  } else {
    checkoutButton.style.display = "none";
  }
}
/* Code above is for removing items from the cart */



/* Code below is for the "COINS?" icon and the up arrow navigation link --- "COINS?" icon leads to the slideshow "game" */
let toTop = document.querySelector('.goingUp');
let goodluck = document.querySelector('.luckyLucky');

window.addEventListener('scroll', function(){
  let pxWin = window.pageYOffset;
  if (pxWin>2200){
    toTop.style.display = 'block';
  }else{
    toTop.style.display = 'none';
  }
});

window.addEventListener('scroll', function(){
  let pxWin = window.pageYOffset;
  if (pxWin>2200){
    goodluck.style.display = 'block';
  }else{
    goodluck.style.display = 'none';
  }
});
/* Code above is for the "COINS?" icon and the up arrow navigation link --- "COINS?" icon leads to the slideshow "game" */



/* Variables below are useful throughout for the slideshow "game", dogecoin animation, and raffle ticket */
let goodluckAgain = document.querySelector('.luckyLucky2');
let forAnimation = document.querySelector('.luckyLucky3');
let forTheCoin = document.querySelector('.animatedDog');
let tickets = document.querySelector('.purchaseTicket');
let morespecific = document.querySelector('.purchaseTicket a');
/* Variables above are useful throughout for the slideshow "game", dogecoin animation, and raffle ticket */



/* Code below is for the slideshow "game" */
let begin = document.querySelector('.to-start');
let aGift = document.querySelector('.gift');
let selection = document.querySelector('.to-select');
let theBody = document.querySelector('.theActualBody');

let roll1 = document.querySelector('.spinWrapper1');
let roll2 = document.querySelector('.spinWrapper2');
let roll3 = document.querySelector('.spinWrapper3');

let count = 0;

begin.onclick = function(){
  roll1.classList.add('animation1');
  roll2.classList.add('animation2');
  roll3.classList.add('animation3');
}

selection.onclick = function(){
  ++count;
  let val1 = window.getComputedStyle(roll1),marginTop1 = val1.getPropertyValue('margin-top');
  roll1.style.marginTop = marginTop1;
  roll1.classList.remove('animation1');

  let val2 = window.getComputedStyle(roll2), marginTop2 = val2.getPropertyValue('margin-top');
  roll2.style.marginTop = marginTop2;
  roll2.classList.remove('animation2');

  let val3 = window.getComputedStyle(roll3), marginTop3 = val3.getPropertyValue('margin-top');
  roll3.style.marginTop = marginTop3;
  roll3.classList.remove('animation3');

  if (count === 1){
    let newValue = window.getComputedStyle(aGift), theOpacity = newValue.getPropertyValue('display');
    aGift.style.display = 'block';
  }
}

aGift.onclick = function(){
  alert(`You've been rewarded for your efforts!`);

  let change1 = window.getComputedStyle(goodluckAgain), change2 = change1.getPropertyValue('display');
  goodluckAgain.style.display = 'block';

  window.addEventListener('scroll', function(){
    let pxWin = window.pageYOffset;
    if (xWin>300){
      goodluckAgain.style.display = 'block';
    }
    else{
      goodluckAgain.style.display = 'none';
    }
  });
}
/* Code above is for the slideshow "game" */



/* Code below is for the dogecoin animation  --- the dogecoin animation must be clicked 7 or so times to unlock the "?" icon */
let switching = 0;

goodluckAgain.onclick = function(){

  let change1 = window.getComputedStyle(forAnimation), change2 = change1.getPropertyValue('display');
  forAnimation.style.display = 'block';

  let change3 = window.getComputedStyle(forAnimation), change4 = change3.getPropertyValue('position');
  forAnimation.style.display = 'absolute';

  switching++;

  if(switching==1){
    forTheCoin.src="spinImages/coin4.png";
  }
  if(switching==2){
    forTheCoin.src="spinImages/coin3.png";
  }
  if(switching==3){
    forTheCoin.src="spinImages/coin2.png";
  }
  if(switching==4){
    forTheCoin.src="spinImages/coin1.png";
  }
  if(switching==5){
    forTheCoin.src="spinImages/html.png";
  }
  if(switching==6){
    forTheCoin.src="spinImages/css.png";
  }
  if(switching==7){
    forTheCoin.src="spinImages/js.png";
  }
  if(switching==8){
    forTheCoin.src="spinImages/python.png";
  }
  if(switching==9){
    forTheCoin.src="spinImages/coin4.png";
  }
  if(switching==10){
    alert(`You have been entered into a raffle `);

    let alter1 = window.getComputedStyle(tickets), alter2 = alter1.getPropertyValue('display');
    tickets.style.display = 'block';

    window.addEventListener('scroll', function(){
      let pxWin = window.pageYOffset;
      if (pxWin>2200){
        tickets.style.display = 'block';
      }else{
        tickets.style.display = 'none';
      }
    });
  }
  let newDoge1 = forAnimation.cloneNode(true);
  let newDoge2 = forAnimation.cloneNode(true);
  let newDoge3 = forAnimation.cloneNode(true);
  let newDoge4 = forAnimation.cloneNode(true);

  forAnimation.classList.add('dogeAnimation1');
  newDoge1.classList.add('dogeAnimation1');
  newDoge2.classList.add('dogeAnimation2');
  newDoge3.classList.add('dogeAnimation3');
  newDoge4.classList.add('dogeAnimation4');

  forAnimation.after(newDoge1);
  forAnimation.after(newDoge2);
  forAnimation.after(newDoge3);
  forAnimation.after(newDoge4);
}
/* Code above is for the dogecoin animation  --- the dogecoin animation must be clicked 7 or so times to unlock the "?" icon */



/* Code below is for the 6-digit raffle from the "?" icon */
let winMsg = document.querySelector('.wow1');
let myTicketMsg = document.querySelector('.wow2');
let enter = 0;

  morespecific.onclick = function(){
    if(enter==0){
      let greet = prompt(`Enter firstname or nickname: `);
      greet = greet.toUpperCase();
      myTicketMsg.innerHTML += `<b>${greet}'s Ticket:</b>`;
    }


    enter++;
    if(enter == 1){
    let numOfTickets = 1;
      //Winning raffle with 6 random values 0-9
      var winningTicket = `Winning Ticket = [${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}]`;

      //Puts the winning ticket numbers into an array named winArray
      var winArray = [];
      for (var a = 0; a < 6; a++){
        winArray.push(winningTicket.substr(winningTicket.indexOf(`[`)+1,winningTicket.indexOf(`]`)));
        winningTicket = winningTicket.substr(winningTicket.indexOf(`]`)+1);
      }
      for (var b = 0; b < 6; b++){
        winArray[b] = parseInt(winArray[b].substring(0,winArray[b].indexOf(`]`)));
      }

      for(let z = 1; z < 6; z++){
        if(z == 1){
          winMsg.innerHTML += '<br>['+winArray[z]+']';
        }
        winMsg.innerHTML += '['+winArray[z]+']';
      }

      for (var c = 0; c < numOfTickets; c++){

        var all6 = 0;

        var newTicket = `Ticket ${c+1} = [${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}][${Math.floor(Math.random()*10)}]`;

        var ticketArray = [];
        for (var d = 0; d < 6; d++){
          ticketArray.push(newTicket.substr(newTicket.indexOf(`[`)+1,newTicket.indexOf(`]`)));
          newTicket = newTicket.substr(newTicket.indexOf(`]`)+1);
        }

        for (var e = 0; e < 6; e++){
          ticketArray[e] = parseInt(ticketArray[e].substring(0,ticketArray[e].indexOf(`]`)));
        }

        //This code specifically will check if the new ticket has ALL 6 numbers present on the winning ticket and in the correct order
        for (var f = 0; f < 6; f++){
            if (winArray[f] === ticketArray[f]){
              all6++;
        }
      }

      for(let y = 1; y < 6; y++){
        if(y == 1){
          myTicketMsg.innerHTML += `<br>[${ticketArray[y]}]`;
        }
        myTicketMsg.innerHTML += `[${ticketArray[y]}]`;
      }

        if (all6 === 6){
          myTicketMsg.innerHTML += `<br><b>YOU WON :^)</b>`;
        } else{
          myTicketMsg.innerHTML += `<br><b>YOU LOST :^(</b>`;
        }
      }
    }
  }
/* Code above is for the 6-digit raffle from the "?" icon */
