/* $(function(){
  alert('본 화면은 1920px에 최적화 되어있습니다.')
}) */

// main - 메인 텍스트 입력
$(function(){

  const content = "2023 Ji Hyun Portfolio"
  const text = document.querySelector(".main-text");
  let i = 0;
  
  function typing(){
    let txt = content[i++];
    text.innerText += txt;
    if (i > content.length) {
      text.textContent = "";
      i = 0;
    }
  }
  setInterval(typing,300);
})

/* content - 이미지 목업 */
$(function () {
  const NUM_IMAGES = 6;
  const heights = [];

  for (let i = 1; i <= NUM_IMAGES; i++) {
    heights[i] = document.querySelector(`.img${i}`).offsetHeight;
    let t = 0;
    function animateImage() {
      t++;
      let move = t * 360;

      if (move > heights[i]-360) {
        move = heights[i] - 360;
        t = -1;
      }
      $(`.con-img > p > .img${i}`).animate({ top: -move + "px" });
    }

    setInterval(animateImage, 2000);
  }
});



// contents - 홈페이지 bg
$(function(){
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  window.addEventListener('scroll', function(){
    // console.log(this.window.scrollY);
    // console.log(WIDTH);
    // console.log(HEIGHT);

    for (let i = 1; i <= 6; i++) {
      const target = `.package>.big${i}`;
      if ((i + 1) * HEIGHT === this.window.scrollY) {
        $(target).addClass("on");
      } else {
        $(target).removeClass("on");
      }
    }
  })
})


// profile - 스킬 탭메뉴
$(function(){
  let j = 0;
  $(".tab-nav li").click(function(){
    $(".tab-nav li").removeClass("active");
    $(this).addClass('active');

    j = $(this).index();
    $('.tab-contents li').removeClass("active");
    $('.tab-contents li').eq(j).addClass('active');

    return false;

  })
})
$(function(){
  let j = 0;
  $(".tab-nav2 li").click(function(){
    $(".tab-nav2 li").removeClass("active");
    $(this).addClass('active');

    j = $(this).index();
    $('.tab-contents2 li').removeClass("active");
    $('.tab-contents2 li').eq(j).addClass('active');

    return false;

  })
})

// 문의하기 모달창
$(function(){
  $(".qa-btn").click(function(){
    $(".form-list").fadeIn(100);
  });
  $(".close").click(function(){
    $(".form-list").fadeOut();
  });
})


// 스크롤 이벤트
$(function(){
  window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});
  if($(window).width() > 640) {
    let mHtml = $("html");
    let page = 1;
    $(".logo").click(function(){page=1;})
    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 10) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop},800);
    })
    } else {
        $(window).on("wheel", function(e) {
            if(e.originalEvent.deltaY > 0) {
                e.preventDefault()
            } else if(e.originalEvent.deltaY < 0) {
                e.preventDefault()
            }
        })
    }
})


