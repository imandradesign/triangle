$(document).ready(function(){
  $('#iso').hide();
  $('#equi').hide();
  $('#scl').hide();
  $('#not-triangle').hide();
  $('#reload').hide();

  $('.triangle-form form').submit(function(){
    var num1 = parseInt($('input#num1').val());
    var num2 = parseInt($('input#num2').val());
    var num3 = parseInt($('input#num3').val());


    if (num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1) {
      $("#not-triangle").show();
      $('#reload').show();
      $('.triangle-form form').hide();
      $('#iso').hide();
      $('#equi').hide();
      $('#scl').hide();
    } else if (num1 === num2 && num1 === num3) {
      $('#equi').show();
      $('#reload').show();
      $('.triangle-form form').hide();
      $('#iso').hide();
      $('#scl').hide();
      $('#not-triangle').hide();
    } else if (num1 === num2 || num1 === num3 || num2 === num3) {
      $("#iso").show();
      $('#reload').show();
      $('.triangle-form form').hide();
      $('#equi').hide();
      $('#scl').hide();
      $('#not-triangle').hide();
    } else if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
      $("#scl").show();
      $('#reload').show();
      $('.triangle-form form').hide();
      $('#iso').hide();
      $('#equi').hide();
      $('#not-triangle').hide();
    }

    event.preventDefault();
  });

  $('#reload').click(function(event){
    $('#iso').hide();
    $('#equi').hide();
    $('#scl').hide();
    $('#not-triangle').hide();
    $('.triangle-form form').show();
    $('#reload').hide();
  })
});
