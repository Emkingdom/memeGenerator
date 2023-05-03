const form = document.getElementById("header");
const textT = document.querySelector("#text-top");
const textB = document.querySelector("#text-botton");
const imgURL = document.querySelector("#image");
const memes = document.querySelector("#memes");

function handleSubmit(e) {
  if (textT.value && textB.value && imgURL.value) {
    
    const meme = document.createElement("div");
    const topText = document.createElement("span");
    const buttonText = document.createElement("span");

    topText.innerText = textT.value;
    buttonText.innerText = textB.value;

    meme.classList.add("meme");
    meme.style.backgroundImage = `url(${imgURL.value})`;
    meme.appendChild(topText);
    meme.appendChild(buttonText);
    memes.appendChild(meme);
    console.log(meme.classList);

    textB.value = "";
    textT.value = "";
    imgURL.value = "";
  }
  e.preventDefault();
}

function handleDelete (e){
    e.target.remove()
}

memes.addEventListener("click", handleDelete);
form.addEventListener("submit", handleSubmit);
