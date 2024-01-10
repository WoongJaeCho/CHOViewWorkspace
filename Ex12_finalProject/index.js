
  $('.myslider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
      
    ]
  });

    // 스크롤을 내리면(윈도우 == 브라우저) 어떤 반응을 하고 싶다 =>
  //  윈도우 객체를 가지고 와야 한다.
  $(window).scroll(
    function(){
      //화면의 위쪽으로 기준으로 값을 가져오는 애 50보다 크다=>
      // 스크롤을 조금이라도 내렸다.
      if($(this).scrollTop()>50){
        $('header,.btn-top').addClass('active');
      }else{
        // 가장 위 상태
        $('header,.btn-top').removeClass('active');
      }
    }
  );