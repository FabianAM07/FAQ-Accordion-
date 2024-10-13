$(document).ready(function () {

    $('#accHeader1').click(function (e) { 
      e.preventDefault();
      $('#info1').slideToggle();
      // $('#accTitle1').toggleClass('grayish-purple');
      $('#iconMinus1').toggle();
      $('#iconPlus1').toggle();
    });

    $('#accHeader2').click(function (e) { 
      e.preventDefault();
      $('#info2').slideToggle();
      // $('#accTitle2').toggleClass('grayish-purple');
      $('#iconMinus2').toggle();
      $('#iconPlus2').toggle();
    });

    $('#accHeader3').click(function (e) { 
      e.preventDefault();
      $('#info3').slideToggle();
      // $('#accTitle3').toggleClass('grayish-purple');
      $('#iconMinus3').toggle();
      $('#iconPlus3').toggle();      
    });

    $('#accHeader4').click(function (e) { 
      e.preventDefault();
      $('#info4').slideToggle();
      // $('#accTitle4').toggleClass('grayish-purple');
      $('#iconMinus4').toggle();
      $('#iconPlus4').toggle();
    });
    
    $('#accHeader1').hover(function () {
      $(this).addClass('pointer')
        $('#accTitle1').addClass('grayish-purple')
      }, function () {
        $(this).removeClass('pointer')
        $('#accTitle1').removeClass('grayish-purple')
      }
    );

    $('#accHeader2').hover(function () {
      $(this).addClass('pointer')
        $('#accTitle2').addClass('grayish-purple')
      }, function () {
        $(this).removeClass('pointer')
        $('#accTitle2').removeClass('grayish-purple')
      }
    );

    $('#accHeader3').hover(function () {
      $(this).addClass('pointer')
        $('#accTitle3').addClass('grayish-purple')
      }, function () {
        $(this).removeClass('pointer')
        $('#accTitle3').removeClass('grayish-purple')
      }
    );

    $('#accHeader4').hover(function () {
      $(this).addClass('pointer')
        $('#accTitle4').addClass('grayish-purple')
      }, function () {
        $(this).removeClass('pointer')
        $('#accTitle4').removeClass('grayish-purple')
      }
    );
    
  });