$(function(){

    // localStorage.clear(); 

    $('body').toggleClass(localStorage.toggled);

    if(localStorage.toggled == 'dark'){
        $('.dark-switch').addClass('dark');
    }

    function darkLight() {
      if (localStorage.toggled != 'dark') {
          $('body, .dark-switch').toggleClass('dark', true);
          localStorage.toggled = "dark";
      } else {
          $('body, .dark-switch').toggleClass('dark', false);
          localStorage.toggled = "";
      }
    }

    $('.dark-switch').click(function(){
      darkLight();
    });

  });