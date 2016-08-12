$(document).ready(function() {

  $("form#quiz").submit(function(event){
    event.preventDefault();
    var q1Answer = $("input:radio[name=q1]:checked").val();
    var q2Answer = $("input:radio[name=q2]:checked").val();
    var q3Answer = $("input:radio[name=q3]:checked").val();
    var q4Answer = $("input:radio[name=q4]:checked").val();

    var css = 0;
    var ruby = 0;
    var java = 0;
    var c# =  0;
    var php = 0;

    if(q1Answer === "ui") {
      css += 4;
      ruby += 3;
      java += 2;
      php -=3;
    } else if (q1Answer === "behind"){
      php +=3;
    }



  })



});
