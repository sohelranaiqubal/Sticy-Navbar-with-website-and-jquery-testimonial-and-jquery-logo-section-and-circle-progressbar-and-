window.onscroll = function() {myFunction()};

var header = document.querySelector("#header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
  // let navba = document.querySelector(".navbar");

  const navMenu = document.getElementById("nav");
        open = document.getElementById("open");
        close = document.getElementById("close");
        
  let navlink = document.querySelector(".nav-links");


 open.addEventListener("click", ()=>{
    navMenu.classList.toggle("mamu");
  })
  close.addEventListener("click", ()=>{
    navMenu.classList.remove("mamu");
  });


  let dropdow = document.querySelector(".dropdown");
   dropdow.addEventListener("click",()=>{
    navlink.classList.toggle("show1");
  });

  let moreArrow = document.querySelector("#more");
moreArrow.addEventListener("click",()=>{
     navlink.classList.toggle("show2");
});
  
  //================ logo slider by slick carousel==================


  $('.logo-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows:true,
    infinite: true,
    autoplaySpeed: 2000


  }); 
 

  // ====================== Stats section js code starts=============================


  const counts = document.querySelectorAll('.count');
  const speed= 97;
  counts.forEach((counter) => {
    function upData() {
      const target = Number(counter.getAttribute('data-target'))
      const count = Number(counter.innerText)
      const inc = target / speed
      if (count < target) {
        counter.innerText = Math.floor(inc + count)
        setTimeout(upData, 1)
      } else {
        counter.innerText = target
      }  
    }
    upData()
  })
   // ====================== Stats section js code ends=============================

//=============================== Swiper Slider Code Starts======================


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0:{slidesPerView: 1,},
    520:{slidesPerView: 2,},
    950:{slidesPerView: 3,},
  }

});



//=============================== Swiper Slider Code Ends======================


// ============================ Filter Section Starts ==========================


const filterItem = document.querySelectorAll('.filter-item');
const filterBtn = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', () => {
  filterBtn[0].classList.add('active-btn');
})

filterBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    showItem(btn);
  })
})

function showItem(btn) {
  filterItem.forEach((Item) => {
    if (Item.classList.contains(btn.id)) {
      resetactiveBtn();
      btn.classList.add('active-btn');
      Item.style.display = 'block'
    } else {
      Item.style.display = 'none';
    }

    
  });
}

function resetactiveBtn() {
  filterBtn.forEach((btn) => {
    btn.classList.remove('active-btn');
  })
}


// ============================ Filter Section Ends =============================

// ==================== circle progressbar code Starts ==========================
let progress = document.querySelectorAll('.progress');
let progress_text = document.querySelectorAll('.data-progress');
progress.forEach((pro) => {
  let percentage = pro.getAttribute('data-value');
  let color = pro.getAttribute('data-stroke');
  let radius = pro.r.baseVal.value;
  let circumference = radius * 2 * Math.PI;
  let stroke = circumference - (circumference * percentage) / 100;
  pro.style.setProperty('--stroke-dashoffset', stroke);
  pro.style.setProperty('--stroke-dasharray', circumference);
  pro.style.setProperty('--stroke', color);
  pro.style.setProperty('--animation-time', `${percentage * 100}ms`);
});
progress_text.forEach((text) => {
  let data = text.getAttribute('data-value');
  let progress_value = 0;
  let progress_bar = setInterval(() => {
    progress_value++;
    text.innerText = `${progress_value}%`;
    if (progress_value == data) {
      clearInterval(progress_bar);
    }
  }, 100);
});


// Horizontal Progressbar CODE Starts==================
// window.onload = function () {
//   let bar = document.querySelectorAll('.bar');
//   bar.forEach((progress) => {
//     let value = progress.getAttribute('data-value');
//     progress.style.width = `${value}%`;
//     let count = 0;
//     let progressAnimation = setInterval(() => {
//       count++;
//       progress.setAttribute('data-text', `${count}%`);
//       if (count >= value) {
//         clearInterval(progressAnimation);
//       }
//     }, 15);
//   });
// };

// Accordion for js Coding
