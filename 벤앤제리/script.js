// ben&jerry's script
// main slide
const bgImg = document.querySelector('#bgimg');
const bgImgTag = document.querySelectorAll('#bgimg img');
console.log(bgImg);
console.log(bgImgTag);
console.dir(bgImgTag[0]);

var current =0;
setInterval(function(){
  for(let i=0; i<bgImgTag.length; i++){
    bgImgTag[i].style.opacity=0;
  }
  current = (current != bgImgTag.length-1) ? current+1:0;
  bgImgTag[current].style.opacity =1;
},4000)

// hamburger menu
// home menu를 클릭하면 부드럽게 메뉴가 펼쳐지고 다시 클릭하면 부드럽게 접혔으면 좋겠어
const home = document.querySelector('#home');
const nav = document.querySelector('nav');
console.log(home);
console.log(nav);

const vw = 'vw'
let widthValue = 0;
nav.style.width = widthValue+vw;
console.log(nav.style.width);
nav.style.display = 'none'
const hamburgerMenu = home.addEventListener('click',()=>{
  let timer = setInterval(function(){
    nav.style.display = 'block'
    widthValue+=1;
    nav.style.width = widthValue + vw;
  })
},5000);
// 다시 클릭해서 부드럽게 메뉴가 접혔으면 좋겠는데 잘 되지 않는다...



// const vw = 'vw' 
// let widthValue = 0;
// // let heightValue = 8;
// nav.style.width = widthValue+vw;
// console.log(nav.style.width);
// const hamburger = ()=>{
//   if(nav.style.display==="none"){
//   // nav.style.display = 'none'
//     let timer = setInterval(function(){
//       nav.style.display = 'block'
//       widthValue+=1;
//       nav.style.width = widthValue + vw;
//   },5000);
//   }else{
//     nav.style.display = "block";
// }
// };
// home.addEventListener('click', hamburger);


// nav menu
const mainmenu = document.querySelectorAll('#mainmenu');
const submenu = document.querySelectorAll('#submenu');
console.log(mainmenu);
console.log(submenu);

for(let i=0; i<mainmenu.length; i++){
  mainmenu[i].addEventListener('mouseover',function(){
    submenu[i].classList.add('open');
  })
};

for(let i=0; i<mainmenu.length; i++){
  mainmenu[i].addEventListener('mouseout',function(){

    submenu[i].classList.remove('open');
  })
};

// function dropdown(){
//   let mouseover = submenu[i]
//   if(mouseover.style.display === 'none'){
//     mouseover.style.display == 'block';
//   }else{
//     mouseover.style.display == 'none';
//   }
// }

// for(let i=0; i<mainmenu.length; i++){
//   mainmenu[i].addEventListener('mouseover',function(){
//   if(submenu[i].style.display === 'none'){
//     submenu[i].style.display == 'block';
//   }else{
//     submenu[i].style.display == 'none'
//   }})
// }

// product section
// icon img에 hover했을 때 커지면서 img가 바뀌였으면 좋겠다.
// colorful
const colorfulBeforeTag = document.querySelector('.iconcolorful');
const colorfulAfterTag = document.querySelector('.change-colorful');
console.log(colorfulBeforeTag);
console.log(colorfulAfterTag);

colorfulBeforeTag.addEventListener('mouseover',function(){
  colorfulBeforeTag.style.display="none";
  colorfulAfterTag.style.width = "9vw";
  colorfulAfterTag.style.height = "18vh"
});
colorfulAfterTag.addEventListener('mouseout',function(){
  colorfulBeforeTag.style.display = "block";
  colorfulAfterTag.style.width = "4vw";
  colorfulAfterTag.style.height = "8vh";
});
// rainbow
const rainbowBeforeTag = document.querySelector('.iconrainbow');
const rainbowAfterTag = document.querySelector('.change-rainbow');

rainbowBeforeTag.addEventListener('mouseover',function(){
  rainbowBeforeTag.style.display="none";
  rainbowAfterTag.style.width="9vw";
  rainbowAfterTag.style.height ="18vh";
});
rainbowAfterTag.addEventListener('mouseout',function(){
  rainbowBeforeTag.style.display="block";
  rainbowAfterTag.style.width="4vw";
  rainbowAfterTag.style.height ="8vh";
});
// cookie dough
const cookieBefore = document.querySelector('.iconcookie');
const cookieAfter = document.querySelector('.change-cookie');

cookieBefore.addEventListener('mouseover',()=>{
  cookieBefore.style.display = "none";
  cookieAfter.style.width="9vw";
  cookieAfter.style.height="18vh";
});
cookieAfter.addEventListener('mouseout',()=>{
  cookieBefore.style.display = "block";
  cookieAfter.style.width="4vw";
  cookieAfter.style.height="8vh";
});
// chocolate
const chocoBefore = document.querySelector('.iconchoco');
const chocoAfter = document.querySelector('.change-choco');

chocoBefore.addEventListener('mouseover',()=>{
  chocoBefore.style.display="none";
  chocoAfter.style.width="9vw";
  chocoAfter.style.height="18vh";
});

chocoAfter.addEventListener('mouseout',()=>{
  chocoBefore.style.display="block";
  chocoAfter.style.width="4vw";
  chocoAfter.style.height="8vh";
});


/* flip-card !! */
  const mintTage = document.querySelector('.mintflavor')
  console.log(mintTage);
  const coffeeTage = document.querySelector('.coffeeflavor');
  const carmelTage = document.querySelector('.carflavor');

  mintTage.addEventListener('mouseover',function(){
    mintTage.classList.add('rotateY');
  });
  mintTage.addEventListener('mouseout',function(){
    mintTage.classList.remove('rotateY');
  });

  coffeeTage.addEventListener('mouseover',function(){
    coffeeTage.classList.add('rotateY');
  });
  coffeeTage.addEventListener('mouseout',function(){
    coffeeTage.classList.remove('rotateY');
  });

  carmelTage.addEventListener('mouseover',function(){
    carmelTage.classList.add('rotateY');
  });
  carmelTage.addEventListener('mouseout',function(){
    carmelTage.classList.remove('rotateY');
  });
    
    // news section
    // 1. li를 클릭했을 때, section태그가 보이고 다시 클릭하면 보이지 않았으면 좋겠다.
    // 2. section 안에 사진을 호버하면 어두운 배경이 깔리면서 짧은 글이 떳으면 좋겠다.
    // 식별자 설정단계
    const button = document.querySelectorAll('#wrap>ul>li');
    const sectionTag = document.querySelectorAll('#wrap section');
    const contantTag = document.querySelectorAll('#container');
    
    console.log(contantTag);
    console.log(button);
    console.log(sectionTag);
    // console.log(text);
    console.log(this)
    for(let i =0; i<button.length; i++){
      button[i].addEventListener('click',function(){
        
        this.classList.toggle('active');
        //this는 식별자 맨앞에 이벤트를 주는 객체라고 생각하면 편함 여기서는 li들을 가르킴
        // button 태그에 li에 호버하거나 클릭하면 배경색바꾸라고 토글줌
        let sectionTag = this.nextElementSibling;
        //같은 노드 레벨의 다음값을 가져오는데 element(요소)만 가져온다.
        if(sectionTag.style.display === "block"){
          sectionTag.style.display ="none";
        }else{
          sectionTag.style.display = "block";
        }
      });
    }

    // 2. section 안에 사진을 호버하면 어두운 배경이 깔리고 사진이 사라지면서 짧은 글이 떳으면 졸겠다.
    // let index = 0
    for(let i =0; i<sectionTag.length; i++){
      sectionTag[i].addEventListener('mouseover',function(){
        contantTag[i].style.display='block';
      })
    }

    for(let i =0; i<sectionTag.length; i++){
      sectionTag[i].addEventListener('mouseout',function(){
        contantTag[i].style.display='none';
      })
    }

  

