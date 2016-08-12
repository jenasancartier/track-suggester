$(document).ready(function() {

  $("form#quiz").submit(function(event){
    event.preventDefault();
    var q1Answer = $("input:radio[name=q1]:checked").val();
    var q2Answer = $("input:radio[name=q2]:checked").val();
    var q3Answer = $("input:radio[name=q3]:checked").val();
    var q4Answer = $("input:radio[name=q4]:checked").val();
    var q5Answer = $("input:radio[name=q5]:checked").val();
    var q6Answer = $("input:radio[name=q6]:checked").val();

    var css = 0;
    var ruby = 0;
    var java = 0;
    var csharp =  0;
    var php = 0;
//question 1
    if(q1Answer === "ui") {
      css += 5;
      ruby += 3;
      java += 2;
      php -=3;
    } else if (q1Answer === "behind"){
      php +=3;
      css -= 2;
    }
//question 2
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
//question 3
    if(q3Answer === "yesmobile"){
      java += 4;
      css += 3;
      csharp += 3;
    } else if (q3Answer === "nomobile"){
      java -= 3;
    }
//question 4
    if(q4Answer === "playdoh"){
      ruby += 3;
      css += 5;
    } else if (q4Answer === "legos"){
      php += 3;
      java += 3
      csharp +=3;
      css += 2;
    }
//question 5
    if(q5Answer === "design"){
      css += 4
      ruby += 1
    } else if (q5Answer ==="nodesign"){
      csharp += 3
    }

//question6
    if(q6Answer === "interpret"){
      php += 2;
      ruby += 2;
    } else if (q6Answer === "compile"){
      java += 2;
      csharp += 2;
    }

    var result = "";

    if((css>ruby) && (css>java) && (css>csharp) && (css>php)){
      result = "<h2>You should take the CSS/DESIGN track!</h2>"
    } else if((ruby>css) && (ruby>java) && (ruby>csharp) && ruby>php)){
      result = "<h2>You should take the RUBY/RAILS track!</h2>"
    } else if((java>css) && (java>ruby) && (java>csharp) && (java>php)){
      result = "<h2>You should take the JAVA/ANDROID track!</h2>"
    } else if((csharp>css) && (csharp>ruby) && (csharp>java) && (csharp>php)){
      result = "<h2>You should take the PHP/DRUPAL track!</h2>"
    }


    $("results").html(result);
  })



});
