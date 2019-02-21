$(document).ready(function(){
  $('#iso').hide();
  $('#equi').hide();
  $('#scl').hide();
  $('#not-triangle').hide();

  $('.triangle-form form').submit(function(){
    var num1 = parseInt($('input#num1').val());
    var num2 = parseInt($('input#num2').val());
    var num3 = parseInt($('input#num3').val());


    if (num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1) {
      $("#not-triangle").show();
      $('#iso').hide();
      $('#equi').hide();
      $('#scl').hide();
    } else if (num1 === num2 && num1 === num3) {
      $('#equi').show();
      $('#iso').hide();
      $('#scl').hide();
      $('#not-triangle').hide();
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
      $("#iso").show();
      $('#equi').hide();
      $('#scl').hide();
      $('#not-triangle').hide();
    } else if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
      $("#scl").show();
      $('#iso').hide();
      $('#equi').hide();
      $('#not-triangle').hide();
    }

    event.preventDefault();
  });
});
