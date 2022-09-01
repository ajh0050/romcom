// Create variables targetting the relevant DOM elements here 👇
// Main Cover
var coverImage = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var descriptor1 = document.querySelector('.tagline-1')
var descriptor2 = document.querySelector('.tagline-2')

// Views
var homeView = document.querySelector('.home-view')
var formView = document.querySelector('.form-view')
var savedCoversView = document.querySelector('.saved-view')

// Buttons
var showNewRandomCoverButton = document.querySelector('.random-cover-button')
var makeYourOwnCoverButton = document.querySelector('.make-new-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var homeButton = document.querySelector('.home-button')
var viewSavedCoversButton =  document.querySelector('.view-saved-button')
var createNewBookButton = document.querySelector('.create-new-book-button')


// We've provided a few variables below
var savedCovers = [];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', randomizeCover)
showNewRandomCoverButton.addEventListener('click', randomizeCover)
makeYourOwnCoverButton.addEventListener('click', changeToFormView)
viewSavedCoversButton.addEventListener('click', changeToSavedCoversView)
homeButton.addEventListener('click', changeToHomeView)
createNewBookButton.addEventListener('click', createNewBook)
saveCoverButton.addEventListener('click', saveCover)

// Create your event handlers and other functions here 👇
function randomizeCover(){
  var randomCover = new Cover(covers[getRandomIndex(covers)],titles[getRandomIndex(titles)],descriptors[getRandomIndex(descriptors)],descriptors[getRandomIndex(descriptors)])

  coverImage.src = randomCover.cover
  coverTitle.innerText = randomCover.title
  descriptor1.innerText = randomCover.tagline1
  descriptor2.innerText = randomCover.tagline2

  currentCover = randomCover
}

function changeToFormView (){
  homeView.classList.add('hidden')
  formView.classList.remove('hidden')
  savedCoversView.classList.add('hidden')
  showNewRandomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}

function changeToSavedCoversView(){
  savedCoversView.classList.remove('hidden')
  homeView.classList.add('hidden')
  formView.classList.add('hidden')
  showNewRandomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
  homeButton.classList.remove('hidden')
}

function changeToHomeView(){
  homeView.classList.remove('hidden')
  formView.classList.add('hidden')
  savedCoversView.classList.add('hidden')
  showNewRandomCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
  homeButton.classList.add('hidden')
  makeYourOwnCoverButton.classList.remove('hidden')
  viewSavedCoversButton.classList.remove('hidden')
}

function createNewBook(event) {
  event.preventDefault()

  var userCover = document.querySelector('.user-cover').value
  var userTitle = document.querySelector('.user-title').value
  var userDesc1 = document.querySelector('.user-desc1').value
  var userDesc2 = document.querySelector('.user-desc2').value

  var newBook = new Cover(userCover, userTitle, userDesc1, userDesc2)

  covers.push(newBook.cover)
  titles.push(newBook.title)
  descriptors.push(userDesc1, userDesc2)

  coverImage.src = userCover
  coverTitle.innerText = userTitle
  descriptor1.innerText = userDesc1
  descriptor2.innerText = userDesc2

  currentCover = newBook

  changeToHomeView()
}

function saveCover(){
  if (savedCovers[savedCovers.length-1] !== currentCover){
    savedCovers.push(currentCover)
  }
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
