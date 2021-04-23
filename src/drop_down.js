
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  const dogLinks = [];
  const dogNames = Object.keys(dogs);
  dogNames.forEach( (dog) => {
    const dogA = document.createElement('a');
    const dogLi = document.createElement('li');
    dogA.innerHTML = dog;
    dogA.href = dogs[dog];
    dogLi.classList = 'dog-link';
    dogLi.appendChild(dogA);
    dogLinks.push(dogLi);
  })
  return dogLinks;
}

function attachDogLinks( ) {
  const dogLinks = dogLinkCreator(dogs);
  const ul = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach( (dog) => {
    ul.appendChild(dog);
  })

}

function handleEnter () {  
  const dogLink = document.querySelectorAll('.dog-link');
  dogLink.forEach((link) => {
    link.classList.toggle('showing');
  })
}

function handleLeave () {
  const dogLink = document.querySelectorAll('.dog-link');
  dogLink.forEach((link) => {
    link.classList.toggle('showing');
  })
}

attachDogLinks();


//Event Listeners
const nav = document.querySelector('.drop-down-dog-nav');
  nav.addEventListener('mouseenter', handleEnter);
  nav.addEventListener('mouseleave', handleLeave);