$(document).ready(function () {
        $('.gallerys').magnificPopup({
          type:'image',
          delegate: 'a',
          gallery:{
            enabled:true
          }
        })
      });

AOS.init({
    duration: 1200,
})