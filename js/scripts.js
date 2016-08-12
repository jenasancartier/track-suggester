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
    var csharp =  0;
    var php = 0;

    if(q1Answer === "ui") {
      css += 5;
      ruby += 3;
      java += 2;
      php -=3;
    } else if (q1Answer === "behind"){
      php +=3;
      css -= 2;
    }

    if(q2Answer === "large") {
      csharp += 4;
      java += 4
      php += 3
      ruby -= 1
      css += 2
    } else if (q2Answer === "small") {
      css += 2;
      ruby += 3;
      csharp -= 3;
      java -= 1;
    }

    if(q3Answer === "interpret"){
      php += 2;
      ruby += 2;
    } else if (q3Answer === "compile"){
      java += 2;
      csharp += 2;
    }

    if(q4Answer === "yesmobile"){
      java += 4;
      css += 3;
      csharp += 3;
    } else if (q4Answer === "nomobile"){
      java -= 3;
    }


  })



});
