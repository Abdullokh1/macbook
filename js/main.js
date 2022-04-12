const PriceBtn = document.querySelectorAll('.price__gb__btn');
const priceTitle = document.querySelector('.price__title');
const priceMemory = document.querySelectorAll('.price__memory__js');
const sixteenGb = document.getElementById('sixteenGb');
const eightBtn = document.getElementById('eightBtn');
const total = document.getElementById('totalSum');
const memorySecond = document.getElementById('memorySecond');
const memoryFirst = document.getElementById('memoryFirst');
const oneTbBtn = document.getElementById('oneTbBtn');





  PriceBtn.forEach(item =>{
    item.addEventListener('click', ()=>{
      PriceBtn.forEach(element =>{
        element.classList.remove('active-price');
      })
      item.classList.add('active-price');
    })
  })

  
  priceMemory.forEach(item =>{
    item.addEventListener('click', ()=>{
      priceMemory.forEach(element =>{
        element.classList.remove('active-price');
      })
      item.classList.add('active-price');
    })
  })

sixteenGb.addEventListener('click', ()=>{
  priceTitle.innerHTML = `MacBook Air 13-inch M1/16/256 Gold`;
  total.innerHTML = `1250$`;
})

eightBtn.addEventListener('click', ()=>{
  priceTitle.innerHTML = `MacBook Air 13-inch M1/8/256 Gold`;
  total.innerHTML = `1200$`;
})

memorySecond.addEventListener('click', ()=>{
  priceTitle.innerHTML = `MacBook Air 13-inch M1/8/512 Gold`;
  total.innerHTML = `1350$`;
})

memoryFirst.addEventListener('click', ()=>{
  priceTitle.innerHTML = `MacBook Air 13-inch M1/8/256 Gold`;
  total.innerHTML = `1250$`;
})

oneTbBtn.addEventListener('click', ()=>{
  priceTitle.innerHTML = `MacBook Air 13-inch M1/16/1tb Gold`;
  total.innerHTML = `1450$`;
})