$(document).ready(function(){
    $(".num1").click(
      function(){
        $(this).css("color","#333");
        $(".num2").css("color","#91463a");
        $(".num3").css("color","#91463a");
        $(".num4").css("color","#91463a");
        $("img").attr("src","https://farm5.staticflickr.com/4415/36492089506_874576c832_o.png");
        $(".works_img").css("width","65vw");
        $(".works_img").css("height","100vh");
        $(".works_img").css("animation","ani17 2s")
        $(".description > h3").text("01 網頁 - 搖滾地圖");
        $(".description > p").html("與四位夥伴共同完成。網站旨在介紹搖滾各個年代的流變，並藉由角色引導，整體視覺以外太空為主題。<br>負責html、css、部分javascript、視覺設計的製作");
        $(".description").css("animation","ani9 2s");
        $(".button > a").attr("href","https://nmmn231.github.io/final-project/")
        $(".circle > p").text("01");
        $(".circle > p").css("animation","ani13 3s");

      } 
      
    );

    $(".num2").click(
      function(){
        $(this).css("color","#333");
        $(".num1").css("color","#91463a");
        $(".num3").css("color","#91463a");
        $(".num4").css("color","#91463a");
        $("img").attr("src","https://farm5.staticflickr.com/4359/36492089306_f10d6248ec_o.png");
        $(".works_img").css("width","70vw");
        $(".works_img").css("height","100vh");
        $(".works_img").css("animation","ani18 2s")
        $(".description > h3").text("02 互動藝術裝置 - 聲影");
        $(".description > p").html("與三位夥伴共同完成。將聲音視覺話，讓觀眾可以自由與作品互動，探索人和聲音之間的關係。<br>負責視覺設計和動畫製作（使用Ae）");
        $(".description").css("animation","ani10 2s");
        $(".button > a").attr("href","https://drive.google.com/drive/folders/0B0ovEYQnG-MDeW9VcjRRRWF1dTA")
        $(".circle > p").text("02");
        $(".circle > p").css("animation","ani14 3s");
      }
      
    );

    $(".num3").click(
      function(){
        $(this).css("color","#333");
        $(".num1").css("color","#91463a");
        $(".num2").css("color","#91463a");
        $(".num4").css("color","#91463a");
        $("img").attr("src","https://farm5.staticflickr.com/4435/36492089746_4a23304099_o.png");
        $(".works_img").css("width","80vw");
        $(".works_img").css("height","100vh");
        $(".works_img").css("animation","ani19 2s")
        $(".description > h3").text("03 其他視覺設計作品");
        $(".description > p").text("其他平常練習作品，主要使用Adobe Illustrator");
        $(".description").css("animation","ani11 2s");
        $(".button > a").attr("href","https://drive.google.com/drive/folders/0B0ovEYQnG-MDVU9tUERzczdyTXM")
        $(".circle > p").text("03");
        $(".circle > p").css("animation","ani15 3s");
      }
      
    );

    $(".num4").click(
      function(){
        $(this).css("color","#333");
        $(".num1").css("color","#91463a");
        $(".num2").css("color","#91463a");
        $(".num3").css("color","#91463a");
        $("img").attr("src","https://farm5.staticflickr.com/4346/36400793101_5e2dc9e7f3_o.png");
        $("img > a").attr("href","https://instagram.com/dailychiayii")
        $(".works_img").css("width","55vw");
        $(".works_img").css("height","87vh");
        $(".works_img").css("animation","ani20 2s")
        $(".description > h3").text("04 Instagram - 其他作品");
        $(".description > p").text("其他平常練習作品，包括手寫字體、插畫、手作等");
        $(".description").css("animation","ani12 2s");
        $(".button > a").attr("href","https://instagram.com/dailychiayii")
        $(".circle > p").text("04");
        $(".circle > p").css("animation","ani16 3s");
      }
  
);

});

