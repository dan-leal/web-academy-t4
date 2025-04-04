const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = `It was 94 fahrenheit outside, so ${insertX} went for a walk. When they got to ${insertY}, they stared in horror for a few moments, then ${insertZ}. Bob saw the whole thing, but was not surprised — ${insertX} weighs 300 pounds, and it was a hot day.`


let insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christm"
]

let insertY = [
    "the soup kitchen", 
    "Disneyland", 
    "the White House"
]

let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
]

// Quando o botão "randomize" for clicado, será chamada a função "result".
randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  // Criando um novo texto utilizando o texto base.
  let newStory = storyText;
  
  let xItem = randomValueFromArray(insertX);


  story.textContent = ;
  story.style.visibility = 'visible';
}