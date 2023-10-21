$(function(){
  alert('본 화면은 1920px에 최적화 되어있습니다. 양해 부탁드립니다.')
})



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

//슬라이드 메뉴
/* $(function(){
  $(".gnb-list>li:nth-child(2)").mouseover(function(){
    $(".sub>li").stop().slideDown(500)
  });
  $(".gnb-list>li").mouseout(function(){
    $(".sub>li").stop().slideUp(500)
  });
}) */

/* content - 이미지 목업 */
$(function(){
  let t =0;
  function contents(){
    if(t<4){
      t++;
    }else {
      t=0;
    }
    $(".con-img >p>img").animate({top: -370 * t + "px"},{height: 100 + "%"})
  }
  setInterval(contents,2000)
})
// contents - 홈페이지 bg
$(function(){
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  window.addEventListener('scroll', function(){
    // console.log(this.window.scrollY);
    // console.log(WIDTH);
    // console.log(HEIGHT);

    for (let i = 1; i <= 5; i++) {
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
            if(page == 8.5) return;
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
/* $(function(){
  window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});
  if($(window).width() > 640) {
    let mHtml = $("html");
    let page = 1;
    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 9) return;
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
}) */

