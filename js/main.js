const btnWrap = document.querySelector('.btn-wrapper');
const priceTitle = document.querySelector('.price__title');
const eightBtn = document.getElementById('eightBtn');
const memorySecond = document.getElementById('memorySecond');
const memoryFirst = document.getElementById('memoryFirst');
const oneTbBtn = document.getElementById('oneTbBtn');
const priceMemory = document.querySelectorAll('.price__memory__js');
const colorBtn = document.querySelectorAll('.color-btn');
const priceMcImg = document.querySelector('.price__macbook__img');
const imgWrapper = document.querySelector('.main-img-wrapper');
const ramWrapper = document.querySelector('.ram-capacity');
const memoryList = document.querySelector('.memory-list');
const titleWrap = document.querySelector('.title-wrapper');


// RAM ITEM ADDED 

obj.forEach((item) => {
  let li = document.createElement('li');
  li.innerHTML = `
  <button class="price__memory__btn price__gb__btn ram__btn me-3" id="eightBtn">${item.ram+'GB'}</button>
  `;
  ramWrapper.appendChild(li);
})


// MEMORY ITEM ADDED 

obj[0].med.forEach((item) => {

  let li = document.createElement('li');
  li.innerHTML = `
   <button class="price__memory__btn  memory__button mb-3 me-3" id="sixteenGb">${item.memory+'GB'}</button>
   `;
  memoryList.appendChild(li);
})


// FIRST ACTIVE ADDED 

const PriceBtn = document.querySelectorAll('.ram__btn');
const memoryBtn = document.querySelectorAll('.memory__button');

PriceBtn[0].classList.add('active-price');
memoryBtn[0].classList.add('active-price');


// 1TB ADDED

let totalinfo = document.createElement('h4');
let oldpriceinfo = document.createElement('del');


let count = 0;
PriceBtn[1].addEventListener('click', () => {
  let li = document.createElement('li');
  li.innerHTML = `
  <button class="price__memory__btn added-btn  memory__button mb-3 me-3">${obj[1].med[2].memory+'TB'}</button>
  `;
  memoryList.appendChild(li);
  count++;
  if (count > 1) {
    li.innerHTML = '';
  }
  const addedBtn = document.querySelector('.added-btn');
  let memory = document.querySelector('.memory-title');

  addedBtn.addEventListener('click', () => {
    addedBtn.classList.add('active-price');
    memoryBtn[1].classList.remove('active-price');
    memoryBtn[0].classList.remove('active-price');
    memoryBtn[0].addEventListener('click', () => {
      addedBtn.classList.remove('active-price');
    })
    memoryBtn[1].addEventListener('click', () => {
      addedBtn.classList.remove('active-price');
    })
    PriceBtn[0].remove();
    memoryBtn[1].addEventListener('click', () => {
      ramWrapper.appendChild(PriceBtn[0])
      ramWrapper.style.flexDirection = 'row-reverse';
      ramWrapper.style.justifyContent = 'start';
    })

    PriceBtn[0].addEventListener('click', () => {
      addedBtn.remove();
    })

    PriceBtn[1].addEventListener('click', () => {
      memoryList.appendChild(addedBtn);
    })
  })

  addedBtn.addEventListener('click', ()=>{
     memory.innerText = obj[1].med[2].memory+'tb';
     totalinfo.innerHTML = `${obj[1].med[2].price}`
     oldpriceinfo.innerHTML = `${obj[1].med[2].oldPrice}`;
  })
})


// TITLE INFO  

titleWrap.innerHTML = `
<h1 class="price__title">${obj[0].title} M1/<span class='ram-title'>${obj[0].ram}</span>/<span class='memory-title'>${obj[0].med[0].memory}</span> <span class='color-title'>Gold</span></h1>
`;

const ramTitle = document.querySelector('.ram-title');
const MemoryTitle = document.querySelector('.memory-title');
const colorTitle = document.querySelector('.color-title');
const sixteenGb = document.getElementById('sixteenGb');

PriceBtn[1].addEventListener('click', ()=>{
  ramTitle.innerText = obj[1].ram;

})

PriceBtn[0].addEventListener('click', ()=>{
  ramTitle.innerText = obj[0].ram;
})

memoryBtn[0].addEventListener('click', ()=>{
  MemoryTitle.innerText = obj[0].med[0].memory;
})
memoryBtn[1].addEventListener('click', ()=>{
  MemoryTitle.innerText = obj[0].med[1].memory;
})


// COLORS TITLE CHANGED

let gray = document.querySelector('.gray-btn');
let golden = document.querySelector('.golden-btn');
let grayspace = document.querySelector('.grayspace-btn');

gray.addEventListener('click', ()=>{
  colorTitle.textContent = 'Silver';
})

golden.addEventListener('click', ()=>{
  colorTitle.textContent = 'Golden';
})

grayspace.addEventListener('click', ()=>{
  colorTitle.textContent = 'Space Gray';
})


// TOTAL PRICE  


const totalWrapper = document.querySelector('.total-price-wrapper');
const oldPrice = document.querySelector('.old-price-wrapper');


oldpriceinfo.className = 'price__info price-del-info mb-3 d-inline-block';
oldpriceinfo.innerHTML = `${obj[0].med[0].oldPrice}`;
oldPrice.appendChild(oldpriceinfo);


totalinfo.className = 'price__info mt-3';
totalinfo.innerHTML = `${obj[0].med[0].price}`;
totalWrapper.appendChild(totalinfo);

obj.forEach(item =>{

  PriceBtn[1].addEventListener('click', ()=>{
    totalinfo.innerHTML = `${item.med[1].price}`
    oldpriceinfo.innerHTML = `${item.med[1].oldPrice}`;
  })

  PriceBtn[0].addEventListener('click', ()=>{
    totalinfo.innerHTML = `${item.med[0].price}`
    oldpriceinfo.innerHTML = `${item.med[0].oldPrice}`;
  })

  memoryBtn[1].addEventListener('click', ()=>{
    totalinfo.innerHTML = `${item.med[1].price}`
    oldpriceinfo.innerHTML = `${item.med[1].oldPrice}`;
  })

  memoryBtn[0].addEventListener('click', ()=>{
    totalinfo.innerHTML = `${item.med[0].price}`
    oldpriceinfo.innerHTML = `${item.med[0].oldPrice}`;
  })

})



// PLUS MINUS COUNT 

const plusBtn = document.querySelector('.price__plus__btn');
const inputcount = document.querySelector('.price__count');

plusBtn.addEventListener("click", () => {
  let elValue = Number(inputcount.value);
  inputcount.value = elValue += 1;;
});



// MAIN IMG 


const mainImgWrap = document.querySelector('.main-img-wrapper');
const smallImgs = document.querySelector('.price__mac__imgs');

mainImgWrap.innerHTML = `
<img class="price__macbook__img" src="${obj[0].gold[0]}" alt="max-golden" width="450" height="300">
`;

obj[0].gold.forEach(item =>{
  
  let li = document.createElement('li');
  li.className = 'img-items me-3';
  li.innerHTML = `
  <button class="price__mac__btn">
    <img class="price__macbook__img" src="${item}" alt="max-golden" width="88" height="88">
  </button>
  `;
  smallImgs.appendChild(li);
})

const macBtns = document.querySelectorAll('.img-items');
macBtns[0].classList.add('active');

obj[0].silver.forEach(item =>{
  gray.addEventListener('click', ()=>{
    mainImgWrap.innerHTML = `
    <img class="price__macbook__img" src="${obj[0].silver[1]}" alt="max-golden" width="450" height="300">
    `;
  })
  golden.addEventListener('click', ()=>{
    mainImgWrap.innerHTML = `
    <img class="price__macbook__img" src="${obj[0].gold[0]}" alt="max-golden" width="450" height="300">
    `;
  })
  grayspace.addEventListener('click', ()=>{
    mainImgWrap.innerHTML = `
    <img class="price__macbook__img" src="${obj[0].SpaceGray[0]}" alt="max-golden" width="450" height="300">
    `;
  })
})






// ACTIVE TABS 

macBtns.forEach(item => {
  item.addEventListener('click', () => {
    macBtns.forEach(element => {
      element.classList.remove('active');
    })
    item.classList.add('active');
  })
})

PriceBtn.forEach(item => {
  item.addEventListener('click', () => {
    PriceBtn.forEach(element => {
      element.classList.remove('active-price');
    })
    item.classList.add('active-price');
  })
})


memoryBtn.forEach(item => {
  item.addEventListener('click', () => {
    memoryBtn.forEach(element => {
      element.classList.remove('active-price');
    })
    item.classList.add('active-price');
  })
})


colorBtn.forEach(item => {
  item.addEventListener('click', () => {
    colorBtn.forEach(element => {
      element.classList.remove('active-price');
    })
    item.classList.add('active-price');
  })
})
