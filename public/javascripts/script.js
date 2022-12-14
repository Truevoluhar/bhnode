let bottomBarText = document.querySelector('.bottom-bar-text');
let logoArrowWhite = document.querySelector('.logo-arrow-white');
let logoNameWhite = document.querySelector('.logo-name-white');
let burgerButton = document.querySelector('.header-burger');
let card = document.querySelector('.card');
let cta = document.querySelector('.first-top-middle')
let ctaTitle = document.querySelector('.cta-title');
let ctaContent = document.querySelector('.cta-content');
let logoArrow = document.querySelector('.logo-arrow-white');
let domov = document.querySelector('.domov');
let oMeni = document.querySelector('.o-meni');
let oCoachingu = document.querySelector('.o-coachingu');
let oMeniSection = document.querySelector('.second-top-middle');
let oCoachinguSection = document.querySelector('.reverse');
let domovSection = document.querySelector('.full-landing');
let domovFooter = document.querySelector('.domov-footer');
let oMeniFooter = document.querySelector('.o-meni-footer');
let oCoachinguFooter = document.querySelector('.o-coachingu-footer');
let izvediVec = document.querySelector('.izvedivec')
const modal = document.querySelector(".modal");
const modaldva = document.querySelector(".modaldva");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const closeModalBtnDva = document.querySelector(".btn-close-dva");
const ctaBtn = document.querySelector(".cta-btn");



logoArrowWhite.addEventListener('mouseover', () => {
  bottomBarText.classList.remove('opacityzero')
  bottomBarText.classList.add('opacityone')
  logoNameWhite.classList.remove('opacityone')
  logoNameWhite.classList.add('opacityzero')
});
logoArrowWhite.addEventListener('mouseout', () => {
  bottomBarText.classList.remove('opacityone')
  bottomBarText.classList.add('opacityzero')
  logoNameWhite.classList.remove('opacityzero')
  logoNameWhite.classList.add('opacityone')
});


burgerButton.addEventListener('click', () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
})

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
})

ctaBtn.addEventListener('click', () => {
  modaldva.classList.remove('hidden')
  overlay.classList.remove('hidden')
})

closeModalBtnDva.addEventListener('click', () => {
  modaldva.classList.add('hidden')
  overlay.classList.add('hidden')
})




card.addEventListener('touchstart', () => {
  if (ctaTitle.classList.contains('displayflex')) {
    ctaContent.classList.remove('displaynone')
    ctaTitle.classList.remove('displayflex')
    ctaTitle.classList.add('displaynone')
    ctaContent.classList.add('displayflex')
  } else if (ctaTitle.classList.contains('displaynone')) {
    ctaContent.classList.remove('displayflex')
    ctaTitle.classList.remove('displaynone')
    ctaTitle.classList.add('displayflex')
    ctaContent.classList.add('displaynone')
  } else {
    ctaTitle.classList.add('displaynone')
    ctaContent.classList.add('displayflex')
  }

})


logoArrow.addEventListener('click', () => {
  cta.scrollIntoView({ behavior: 'smooth' });
})

domov.addEventListener('click', () => {
  domovSection.scrollIntoView({ behavior: 'smooth' });
})

oMeni.addEventListener('click', () => {
  oMeniSection.scrollIntoView({ behavior: 'smooth' });
})

oCoachingu.addEventListener('click', () => {
  oCoachinguSection.scrollIntoView({ behavior: 'smooth' });
})

domovFooter.addEventListener('click', () => {
  domovSection.scrollIntoView({ behavior: 'smooth' });
})
oMeniFooter.addEventListener('click', () => {
  oMeniSection.scrollIntoView({ behavior: 'smooth' });
})
oCoachinguFooter.addEventListener('click', () => {
  oCoachinguSection.scrollIntoView({ behavior: 'smooth' });
})

izvediVec.addEventListener('click', () => {
  oMeniSection.scrollIntoView({ behavior: 'smooth' });
})



/* RESPONSIVE SCRIPT */

let body = document.querySelector('body');
let mainFlex = document.querySelector('.main-flex');
let x = window.innerWidth;
let y = window.innerHeight;

window.addEventListener('resize', () => {
  if (x > y) {
    if (y < 620) {
      mainFlex.classList.add('displaynone')
    }
  }
})


function checkSize() {
  if (x > y) {
    if (y < 620) {
      mainFlex.classList.add('displaynone')
      console.log('asdasdasdasd')
    }
  }
}



window.onresize = checkSize()