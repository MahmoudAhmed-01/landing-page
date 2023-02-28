//Defining Global Variables
const sections = document.getElementsByTagName('section');
let sectionsNum = document.getElementsByTagName('section').length;
const navList = document.getElementById('navbar__list')
const main = document.querySelector('.main')
const btnAdd = document.querySelector('.btn-add')
const scrollTop = document.querySelector('.scroll-top')
const navsec = document.querySelector('.navbar__menu').getBoundingClientRect().bottom



//the button that adds new sectoins
btnAdd.addEventListener('click', () => {
  sectionsNum = sectionsNum + 1
  document.getElementById('html').style.marginTop = `${navsec}px`

  // choosed the Maximun Number of sections randomly and it is 13
  if (sectionsNum <= 13) {
    main.insertAdjacentHTML('beforeend', `
    <section id="section${sectionsNum}" data-nav="Section ${sectionsNum}">
    <div class="landing__container">
      <h2>Section ${sectionsNum}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
        dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
        imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
        bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
        elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
        nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
        semper in tellus. Sed congue et odio sed euismod.</p>

      <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
        luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
        porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`)
    navList.insertAdjacentHTML('afterbegin',
      `<li class="menu__link"><a 
      onclick="section${sectionsNum}.scrollIntoView({ behavior: 'smooth' });"
      >Section${sectionsNum}</a></li>`)
  }
  else { alert('Sections Maximun Number') }
})



// the button that scrolls to the top
scrollTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})



// building the nav sections According to the number of them in html
for (let i = 1; i <= sectionsNum; i++) {
  navList.insertAdjacentHTML('afterbegin',
    `<li class="menu__link" ><a
    onclick="section${i}.scrollIntoView({ behavior: 'smooth' })"
    >Section${i}</a></li>`)
}




// making the active state feature
function makeActive() {
  for (i = 0; i < sections.length; i++) {
    const box = sections[i].getBoundingClientRect()
    /* i made this leng variable and [leng-(i+1)] because i had inserted 
    the <li> elements afterbegin to have that arrange from right to left 
    but this made the elements get arranged the opposite in the node list */
    let leng = document.querySelectorAll('.menu__link').length
    let car = document.querySelectorAll('.menu__link')[leng - (i + 1)]

    if (box.top <= 300 && box.bottom >= 300) {
      //apply active state
      sections[i].classList.add('your-active-class')
      car.classList.add('your-active-class')
    }
    else {
      //Remove active state
      sections[i].classList.remove('your-active-class')
      car.classList.remove('your-active-class')
    }
  }
}

document.addEventListener("scroll", makeActive);
