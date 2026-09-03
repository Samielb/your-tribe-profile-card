/* Stap 1: Selecteer de knop */
let expandButton = document.querySelector('.groot-knop')

/* Stap 2: Wacht tot iemand op die knop klikt */
expandButton.addEventListener('click', function() {

  /* Stap 3: Verander een class zodra iemand op die knop klikt */
  document.body.classList.toggle('groot')
})

let languageButton = document.querySelector('.taal-knop')
let slogan = document.querySelector('.slogan em')
let aboutMe = document.querySelector('.over-mij')
let isEnglish = false

languageButton.addEventListener('click', function() {
  isEnglish = !isEnglish

  if (isEnglish) {
    slogan.textContent = 'Junior Front-end Developer'
    aboutMe.innerHTML = 'About me <br>I am an eager Junior Front-end Developer with experience in HTML, CSS, PHP and JavaScript. I enjoy building modern and user-friendly websites.'
    languageButton.textContent = 'NL'
    languageButton.setAttribute('aria-label', 'Verander taal naar Nederlands')
    document.documentElement.lang = 'en'
  } else {
    slogan.textContent = 'Junior Front end Developer'
    aboutMe.innerHTML = 'About me <br>Ik ben een leergierige Junior Front-end Developer met ervaring in HTML, CSS, PHP en JavaScript. Ik bouw graag moderne en gebruiksvriendelijke websites.'
    languageButton.textContent = 'EN'
    languageButton.setAttribute('aria-label', 'Verander taal naar Engels')
    document.documentElement.lang = 'nl'
  }
})
