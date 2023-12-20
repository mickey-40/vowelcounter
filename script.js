const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", checkvowels);

// madam
// noon
function checkvowels() {
  const word = document.querySelector(".input-text").value;
  console.log(word);
  let len = word.length;
  console.log(len);
  
  let counter = 0;

  for(let i = 0; i < len; i++){
    let letter = word[i];
    if(letter.match(/([a,e,i,o,u])/)){
      counter++;
    }
  }

  result.innerHTML=`${word} has ${counter} vowels`;

  
}