// Ascent javascript

// const scenseButtonOne = document.querySelector('.cherry');
// const deepcherry = document.querySelector('.deepcherry');
// const scenseButtonTwo = document.querySelector('.peach-b');
// const peachs = document.querySelector('.peachs');
// const scenseButtonThree = document.querySelector('.citrus');
// const juicy = document.querySelector('.juicy');
// const scenseButtonFour = document.querySelector('.lemon-b');
// const lemon = document.querySelector('.lemon');

// console.log(scenseButtonOne);
// console.log(deepcherry);
// scenseButtonOne.addEventListener('click',function(){
//   peachs.classList.toggle('hidden')
//   scenseButtonOne.classList.toggle('change')
// });
// scenseButtonTwo.addEventListener('click',()=>{
//   peachs.classList.toggle('hidden')
//   scenseButtonTwo.classList.toggle('change')
// });
// scenseButtonThree.addEventListener('click',()=>{
//   juicy.classList.toggle('hidden')
//   scenseButtonThree.classList.toggle('change')
// });
// scenseButtonFour.addEventListener('click',()=>{
//   lemon.classList.toggle('hidden')
//   scenseButtonFour.classList.toggle('change')
// });

  // 이벤트 타켓 event.target / event.currentTarget
  const buttonTag = document.querySelectorAll('#scense-t li');
  const imagTag = document.querySelectorAll('.sence-image div')
  console.log(buttonTag);
  console.log(imagTag);

  for(let i=0; i<buttonTag.length; i++){
    buttonTag[i].addEventListener('click',function(event){
      event.target.classList.toggle('change');
      // for(let index =0; index<imagTag.length; index++){
      imagTag[i].classList.toggle('hidden');
      // let imagTag = event.nextElementSibling;
      // };
    });
};

//   스크롤하면 하단에 로고 이미지가 회전했으면 좋겠다.
  function rotateImage(){
    const circleText = document.querySelector('#circle-text img');
    console.dir(circleText);
    circleText.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    // 웹 브라우저에서 현재 화면의 스크롤 정보를 알아야 할 때 pageYOffset or scrollY : 스크롤 화면 수직 이동하는 픽셀수
 
  }
  window.addEventListener('scroll',rotateImage);


  const saDefaltMagin = 300;
        const saElementList = document.querySelectorAll('.sa');
        let saTriggerHeight = 0;
        let saTriggerMagin = 0;

        const saMove =function(){
          for(const element of saElementList){
              if(!element.classList.contains('show')){
                  if(element.dataset.saMargin){
                      saTriggerMagin = parseInt(element.dataset.saMargin);
                  }else{
                      saTriggerMagin = saDefaltMagin;
                  }
                  if(element.dataset.saTrigger){
                      saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClienRect().top + saTriggerMagin;
                  }else{
                      saTriggerHeight = element.getBoundingClientRect().top + saTriggerMagin;
                  }
                  if(window.innerHeight > saTriggerHeight){
                      element.classList.add('show');
                  }
              }
          }
      }
      window.addEventListener('load',saMove);
      window.addEventListener('scroll',saMove);

      // h3에 마우스호버했을 때 h3이 옆으로 이동하면서 
    // 보이지 않던 이미지가 보이고 마우스 커서를 따라다녔으면 좋겟어
    // 그리고 정해진 영역에서 벗어나면 다음 영역에 이미지로 바뀌였으면 좋겟어
    const imagesFadein = document.querySelector('#diffserimg');
    const container = document.querySelector('.container');
    const textTag = document.querySelector('.diffsertext')
    console.log(container);
    console.log(imagesFadein);

    container.addEventListener('mouseenter', function () {
      imagesFadein.animate([{
          height: '10vh',
          width: '10vw',
          opacity: 0
        },
        {
          height: '20vh',
          width: '20vw',
          opacity: 0.5
        },
        {
          height: '35vh',
          width: '30vw',
          opacity: 1
        }
      ], {
        duration: 500,
        fill: 'forwards'
      });
      imagesFadein.classList.remove('hidden');
      textTag.style.marginLeft = "25vh";
    });
    container.onmousemove = (e) => {
      // 마우스의 좌표값 clientX,Y 현재 보이는 브라우저 기준 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정
      const x = e.pageX;
      const y = e.pageY;
      imagesFadein.style.left = (x - 250) + "px";
      imagesFadein.style.top = (y - 140) + "px";
    };
    container.addEventListener('mouseout', function () {
      imagesFadein.classList.add('hidden');
      textTag.style.marginLeft = "0"
    });

    const fabricImg = document.querySelector('#fabircimg');
    const fabricCon = document.querySelector('.containerfabric');
    const fabricTag = document.querySelector('.fabrictext');
    console.log(fabricImg);
    console.log(fabricCon);
    console.log(fabricTag);
    console.dir(fabricTag)

    fabricCon.addEventListener('mouseenter', function () {
      fabricImg.animate([{
          height: '10vh',
          width: '10vw',
          opacity: 0
        },
        {
          height: '20vh',
          width: '20vw',
          opacity: 0.5
        },
        {
          height: '35vh',
          width: '30vw',
          opacity: 1
        }
      ], {
        duration: 500,
        fill: 'forwards'
      });
      fabricImg.classList.remove('hidden');
      fabricTag.style.marginRight = "25vh";
    });
    fabricCon.onmousemove = (e) => {
      // pageX,Y 문서 전체를 기준으로 삼음 스크롤 화면 포함해서 측정
      const x = e.pageX;
      const y = e.pageY;
      fabricImg.style.left = (x - 250) + "px";
      fabricImg.style.top = (y - 140) + "px";
    };
    fabricCon.addEventListener('mouseout', function () {
      fabricImg.classList.add('hidden');
      fabricTag.style.marginRight = "0";
    });

    const deoimg = document.querySelector('#deoimg');
    const deoCon = document.querySelector('.containerdeo');
    const deoTag = document.querySelector('.deotext');
    console.log(deoimg);
    console.log(deoCon);
    console.log(deoTag);

    deoCon.addEventListener('mouseenter', function () {
      deoimg.animate([{
          height: '10vh',
          width: '10vw',
          opacity: 0
        },
        {
          height: '20vh',
          width: '20vw',
          opacity: 0.5
        },
        {
          height: '35vh',
          width: '30vw',
          opacity: 1
        }
      ], {
        duration: 500,
        fill: 'forwards'
      });
      deoimg.classList.remove('hidden');
      deoTag.style.marginLeft = "25vh";
    });
    deoCon.onmousemove = (e) => {
      // pageX,Y 문서 전체를 기준으로 삼음 스크롤 화면 포함해서 측정
      const x = e.pageX;
      const y = e.pageY;
      deoimg.style.left = (x - 250) + "px";
      deoimg.style.top = (y - 140) + "px";
    };
    deoCon.addEventListener('mouseout', function () {
      deoimg.classList.add('hidden');
      deoTag.style.marginLeft = "";
    });

    const handimg = document.querySelector('#handimg');
    const handCon = document.querySelector('.containerhand');
    const handTag = document.querySelector('.handtext');
    console.log(handimg);
    console.log(handCon);
    console.log(handTag);

    handCon.addEventListener('mouseenter', function () {
      handimg.animate([{
          height: '10vh',
          width: '10vw',
          opacity: 0
        },
        {
          height: '20vh',
          width: '20vw',
          opacity: 0.5
        },
        {
          height: '35vh',
          width: '30vw',
          opacity: 1
        }
      ], {
        duration: 500,
        fill: 'forwards'
      });
      handimg.classList.remove('hidden');
      handTag.style.marginRight = "25vh";
    });
    handCon.onmousemove = (e) => {
      // pageX,Y 문서 전체를 기준으로 삼음 스크롤 화면 포함해서 측정
      const x = e.pageX;
      const y = e.pageY;
      handimg.style.left = (x - 250) + "px";
      handimg.style.top = (y - 140) + "px";
    };
    handCon.addEventListener('mouseout', function () {
      handimg.classList.add('hidden');
      handTag.style.marginRight = "";
    });

