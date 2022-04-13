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
     totalinfo.textContent = obj[1].med[2].price+'$';
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
oldpriceinfo.textContent = obj[0].med[0].oldPrice;
oldPrice.appendChild(oldpriceinfo);

totalinfo.className = 'price__info mt-3';
totalinfo.textContent = obj[0].med[0].price+'$';
totalWrapper.appendChild(totalinfo);

obj.forEach(item =>{

  PriceBtn[1].addEventListener('click', ()=>{
    totalinfo.textContent = item.med[1].price+'$';
    oldpriceinfo.textContent = item.med[1].oldPrice;
  })

  PriceBtn[0].addEventListener('click', ()=>{
    totalinfo.textContent = item.med[0].price+'$';
    oldpriceinfo.textContent = item.med[0].oldPrice;
  })

  memoryBtn[1].addEventListener('click', ()=>{
    totalinfo.textContent = item.med[1].price+'$';
    oldpriceinfo.textContent = item.med[1].oldPrice;
  })

  memoryBtn[0].addEventListener('click', ()=>{
    totalinfo.textContent = item.med[0].price+'$';
    oldpriceinfo.textContent = item.med[0].oldPrice;
  })

})

// PLUS MINUS COUNT 

const plusBtn = document.querySelector('.price__plus__btn');
const inputcount = document.querySelector('.price__count');
const minusBtn = document.querySelector('.price__minus__btn');
let c = 1;

  plusBtn.addEventListener("click", () => {
    let elValue = Number(inputcount.value);
    inputcount.value = elValue += 1;
    totalinfo.textContent = obj[0].med[0].price * c+'$';
    oldpriceinfo.textContent = obj[0].med[0].oldPrice;
    c++;
  });

  minusBtn.addEventListener('click', ()=>{
    
    let elValue = Number(inputcount.value);
    if(elValue > 1){
      inputcount.value = elValue -= 1;
      totalinfo.textContent = obj[0].med[0].price * c+'$';
      oldpriceinfo.textContent = obj[0].med[0].oldPrice;
      c--;  
    }
  })

// MAIN IMG 

const mainImgWrap = document.querySelector('.main-img-wrapper');
const smallImgs = document.querySelector('.price__mac__imgs');
let imgButtons = document.querySelectorAll('.img-items'); 

// DEFAULT IMGS 

obj[0].gold.forEach(item =>{
  let div = document.createElement('div');
  div.innerHTML = `
  <img class="price__macbook__img price-big-img" src="${item}" alt="max-golden" width="450" height="300">
  `;
  mainImgWrap.appendChild(div);
  mainImgWrap.style.display = 'flex';
  mainImgWrap.style.transition = 'all 0.4s ease';
})


obj[0].gold.forEach(item =>{
  
  let li = document.createElement('li');
  li.className = 'img-items me-1';
  li.innerHTML = `
  <button class="price__mac__btn">
    <img class="price__macbook__img" src="${item}" alt="max-golden" width="88" height="88">
  </button>
  `;
  smallImgs.appendChild(li);
})

// ADDING small and big  color imgs 


golden.addEventListener('click', ()=>{
  smallImgs.innerHTML = '';
  mainImgWrap.innerHTML = '';

  obj[0].gold.forEach(item =>{
    let li = document.createElement('li');
    li.className = 'img-items me-1';
    li.innerHTML = `
    <button class="price__mac__btn">
      <img class="price__macbook__img" src="${item}" alt="max-golden" width="88" height="88">
    </button>
    `;
    smallImgs.appendChild(li);
  })
  

  obj[0].gold.forEach(item =>{
    let div = document.createElement('div');
    div.innerHTML = `
    <img class="price__macbook__img price-big-img" src="${item}" alt="max-golden" width="450" height="300">
    `;
    mainImgWrap.appendChild(div);
    mainImgWrap.style.display = 'flex';
    mainImgWrap.style.transition = 'all 0.4s ease';
  })

  const imgItems = document.querySelectorAll('.img-items');

  imgItems.forEach(item => {
    item.addEventListener('click', () => {
      imgItems.forEach(element => {
        element.classList.remove('active');
      })
      item.classList.add('active');
    })
  })

  imgItems.forEach((item,index) =>{
    item.addEventListener('click', ()=>{
      slider(index);
    })
  });

    const bigImg = document.querySelectorAll('.price-big-img');
  bigImg.forEach(item =>{
    item.style.height = '430px';
  })

})

gray.addEventListener('click', ()=>{
  smallImgs.innerHTML = '';
  mainImgWrap.innerHTML = '';

  obj[0].silver.forEach(item =>{
    let li = document.createElement('li');
    li.className = 'img-items me-1';
    li.innerHTML = `
    <button class="price__mac__btn">
      <img class="price__macbook__img" src="${item}" alt="max-golden" width="88" height="88">
    </button>
    `;
    smallImgs.appendChild(li);

    

  })
 

  obj[0].silver.forEach(item =>{
    let div = document.createElement('div');
    div.innerHTML = `
    <img class="price__macbook__img price-big-img" src="${item}" alt="max-golden" width="450" height="300">
    `;
    mainImgWrap.appendChild(div);
    mainImgWrap.style.display = 'flex';
    mainImgWrap.style.transition = 'all 0.4s ease';


  })

  const imgItems = document.querySelectorAll('.img-items');

  imgItems.forEach(item => {
    item.addEventListener('click', () => {
      imgItems.forEach(element => {
        element.classList.remove('active');
      })
      item.classList.add('active');
    })
  })
  
  imgItems.forEach((item,index) =>{
    item.addEventListener('click', ()=>{
      slider(index);
    })
  })

    const bigImg = document.querySelectorAll('.price-big-img');
  bigImg.forEach(item =>{
    item.style.height = '430px';
  })
})

grayspace.addEventListener('click', ()=>{
  smallImgs.innerHTML = '';
  mainImgWrap.innerHTML = '';

  obj[0].SpaceGray.forEach(item =>{
    let li = document.createElement('li');
    li.className = 'img-items me-1';
    li.innerHTML = `
    <button class="price__mac__btn">
      <img class="price__macbook__img" src="${item}" alt="max-golden" width="88" height="88">
    </button>
    `;
    smallImgs.appendChild(li);
  })

  obj[0].SpaceGray.forEach(item =>{
    let div = document.createElement('div');
    div.innerHTML = `
    <img class="price__macbook__img price-big-img" src="${item}" alt="max-golden" width="450" height="300">
    `;
    mainImgWrap.appendChild(div);
    mainImgWrap.style.display = 'flex';
    mainImgWrap.style.transition = 'all 0.4s ease';
  })

    const bigImg = document.querySelectorAll('.price-big-img');
  bigImg.forEach(item =>{
    item.style.height = '430px';
  })
  const imgItems = document.querySelectorAll('.img-items');

  imgItems.forEach(item => {
    item.addEventListener('click', () => {
      imgItems.forEach(element => {
        element.classList.remove('active');
      })
      item.classList.add('active');
    })
  })

  imgItems.forEach((item,index) =>{
    item.addEventListener('click', ()=>{
      slider(index);
    })
  })

  obj[0].SpaceGray.forEach(item =>{
    let div = document.createElement('div');
    div.innerHTML = `
    <img class="price__macbook__img price-big-img" src="${item}" alt="max-golden" width="450" height="300">
    `;
    mainImgWrap.appendChild(div);
    mainImgWrap.style.display = 'flex';
    mainImgWrap.style.transition = 'all 0.4s ease';
  })
})

const bigImg = document.querySelectorAll('.price-big-img');
bigImg.forEach(item =>{
  item.style.height = '430px';
})
// SLIDER 

const imgItems = document.querySelectorAll('.img-items');
imgItems.forEach((item,index) =>{
    item.addEventListener('click', ()=>{
      slider(index);
    })
  })
  
function slider(index){
  mainImgWrap.style.transform = `translateX(${-index * 520}px)`;
}

// ACTIVE TABS 

imgItems.forEach(item => {
  item.addEventListener('click', () => {
    imgItems.forEach(element => {
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


// MODAL PART 

const fullscreen = document.querySelector('.price__screen');
const secondPart = document.querySelector('.price__second__wrap');
const innerPart = document.querySelector('.price__inner__part');
const press = document.querySelector('.press-exc');
const header = document.querySelector('.site-header');
const product = document.getElementById('product');
const footer = document.querySelector('.site-footer');
let countItem = 0;

fullscreen.addEventListener('click', ()=>{
  header.style.display = 'none';
  secondPart.style.display = 'none';
  innerPart.style.left = '50%';
  innerPart.style.transform = 'translate(-50%)';
  innerPart.style.top = '20px';
  product.style.display = 'none';
  footer.style.display = 'none';
  press.style.display = 'block';
  fullscreen.style.position = 'absolute';
  fullscreen.style.right = '-480px';
  fullscreen.innerHTML = `<i class='bx bx-exit-fullscreen'></i>`;
  countItem++;

  if (countItem % 2 == 0){
    header.style.display = 'block';
    secondPart.style.display = 'block';
    innerPart.style.left = '80px';
    innerPart.style.transform = 'translate(0)';
    press.style.display = 'none';
    fullscreen.style.position = 'static';
    fullscreen.innerHTML = `<i class='bx bx-fullscreen'></i>`;
    innerPart.style.top = '-55px';
    product.style.display = 'block';
    footer.style.display = 'block';

  }
})



const productBtn = document.querySelectorAll('.product__btn');
const secondBtn = document.querySelector('.product__btn--second');
const firstBtn = document.querySelector('.product__btn--first');
const productText = document.querySelector('.product__text__wrap');
const active = document.querySelector('.act');

productText.innerHTML = `
Eng ingichka va yengil Apple noutbuki endi M1 chipi tufayli yanada kuchliroq ishlaydi. 8 yadroli protsessor sizning vazifalaringizni katta tezlik blan amalga oshiradi. 8 yadroli GPU-ning to'liq quvvatidan foydalanib, grafikani talab qiladigan dasturlar va o'yinlarning keyingi darajasiga chiqing. Mashinani o'rganish uchun 16 yadroli Neural Engine yordamida operatsiyalarini tezlashtiradi va 18 soatgacha zaryad olmasdan ishlaydi. MacBook Air hali ham ixcham, lekin hozir u ancha kuchliroq.
`;
productText.style.fontSize = '17px';
  productText.style.marginTop = '40px';

secondBtn.addEventListener('click', ()=>{
  active.style.transform = 'translate(98%)';
  active.style.transition = 'transform 0.3s ease';
  productText.innerHTML = `
  Ekran: 13,3 "(2560x1600)<br>

  Matritsa: IPS<br>

  Protsessor: Apple M1 (8x3200 MGts)<br>

  Video karta: Apple grafikasi 8 yadroli, Apple grafikasi 7 yadroli<br>

  Ulagichlar: Mikrofon / naushniklar kombinatsiyasi, Thunderbolt / USB 4 x 2<br>

  USB Type-C funktsiyasi: Quvvatni etkazib berish, Thunderbolt 3, Thunderbolt 4<br>

  Simsiz interfeyslar: Wi-Fi 802.11ax, Bluetooth 5.0<br>

  Batareya quvvati: 49,9 Wh<br>

  Ish vaqti: 18 soat<br>

  Operatsion tizim: macOS<br>

  Hajmi: 304.1x212.4x16.1 mm<br>

  Og'irligi: 1,29 kg<br>
  `;
  productText.style.fontSize = '17px';
  productText.style.marginTop = '40px';
})
firstBtn.addEventListener('click', ()=>{
  active.style.transform = 'translate(0)';
  productText.innerHTML = `
  Eng ingichka va yengil Apple noutbuki endi M1 chipi tufayli yanada kuchliroq ishlaydi. 8 yadroli protsessor sizning vazifalaringizni katta tezlik blan amalga oshiradi. 8 yadroli GPU-ning to'liq quvvatidan foydalanib, grafikani talab qiladigan dasturlar va o'yinlarning keyingi darajasiga chiqing. Mashinani o'rganish uchun 16 yadroli Neural Engine yordamida operatsiyalarini tezlashtiradi va 18 soatgacha zaryad olmasdan ishlaydi. MacBook Air hali ham ixcham, lekin hozir u ancha kuchliroq.
  `;
})



// SLIDER PART 

const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const List = document.querySelector('.product__list');
leftArrow.style.display = 'none';
let count1 = 0;

rightArrow.addEventListener('click', ()=>{
  count1++;

  move();
})

leftArrow.addEventListener('click', ()=>{
  count1--;

  move();
})

function move(){
   List.style.transform = `translate(${-count1*33}%)`;
   List.style.transition = 'transform 0.4s ease';
   
   if (count1 >= 1){
     leftArrow.style.display = 'block';
   }
   else{
     leftArrow.style.display = 'none';
   }

   if (count1 == 7){
     rightArrow.style.display = 'none';
   }
   else{
    rightArrow.style.display = 'block';

   }
   
}


 