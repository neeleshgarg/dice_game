randomNumber1=Math.floor(Math.random() * 6) + 1;
let randomImage1="images/dice"+randomNumber1+".png";
randomNumber2=Math.floor(Math.random() * 6) + 1;
let randomImage2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);


    let text;
    if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent="🚩 Player 1 wins";
    else if(randomNumber1<randomNumber2)
    document.querySelector("h1").textContent="Player 2 wins 🚩";
    else
    document.querySelector("h1").textContent="Draw";
