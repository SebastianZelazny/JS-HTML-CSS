/*$(document).ready(function() {
 

    $("#p1").click(function(){
        $("#p1").text("Losuj Wylosowane Liczy to:");
        for(var i =1;i<=6;i++)
        {         
            $("#p1").append(" "+Math.floor(Math.random()*49+1)+"   ");           
        }        
    })
    
})*/
/*$(document).ready(function() {
    
    $('#przycisk').click(function(){
        var kwota = $('#tekst').val();
        
        var zaznaczony = $("#rabat").prop('checked')
        var kwota_po;
        var rabat;
        if(zaznaczony==true)
        {
            rabat=(Math.floor(Math.random()*10))
            kwota_po=kwota-(kwota*(rabat/100))
            $('#wielkoscrab').text("Przyznany Rabat: "+rabat+" %")
            $('#kwotaporabacie').text("Kwota po rabacie: "+kwota_po+"zł ")
        }
        else
        {   
            $('#wielkoscrab').text("Przyznany Rabat: 0 %")
            $('#kwotaporabacie').text("Kwota po rabacie: "+kwota+"zł ")
        }


    })

})*/
/*$(document).ready(function() {
    $("#oblicz").click(function(){
        var do_zaplaty=0;
        var zaznaczony1 = $('#Lux').prop('checked');
        var zaznaczony2 = $('#Standard').prop('checked');
        var zaznaczony3 = $('#Profesional').prop('checked');
        var zaznaczony4 = $('#Wosk').prop('checked');
        var zaznaczony5 = $('#Kola').prop('checked');
        var zaznaczony6 = $('#Rabat').prop('checked');
        var rabat;
        if(zaznaczony1==true)
        {
            do_zaplaty=do_zaplaty+25
        }
         if(zaznaczony2==true)
        {
            do_zaplaty=do_zaplaty+10
        }
         if(zaznaczony3==true)
        {
            do_zaplaty=do_zaplaty+15
        }
         if(zaznaczony4==true)
        {
            do_zaplaty=do_zaplaty+5
        }
         if(zaznaczony5==true)
        {
            do_zaplaty=do_zaplaty+4
        }
         if(zaznaczony6==true)
        {
            
            $('#Dozaplaty').text("Kwota przed rabatem: "+do_zaplaty+"zł ")
            rabat=(Math.floor(Math.random()*10))
            do_zaplaty=do_zaplaty-(do_zaplaty*(rabat/100))
            $('#rabat').text("Przyznany Rabat: "+rabat+" %")
            $('#DozaplatyRabat').text("Kwota po rabacie: "+do_zaplaty+"zł ")
        }
        else
        {
            $('#Dozaplaty').text("Kwota przed rabatem:: "+do_zaplaty+"zł ")
            $('#rabat').text("Przyznany Rabat: 0%")
            $('#DozaplatyRabat').text("Kwota po rabacie: "+do_zaplaty+"zł ")
        }
        })
    })*/

/*$(document).ready(function() {

spradzanie=false;
var licznik=1;
var b=Math.floor(Math.random()*10)
document.write("<br>")
document.write(b)

 while (spradzanie==false)
 {
    var a = prompt("Podaj liczbe z przedzialu 1 do 10")
    if(parseInt(a)===b)
    {
        spradzanie=true;
    }
    else{
        spradzanie=false;
        licznik++;

    } 
 }
document.write("<br> Brawo zgadles za "+licznik)

})*/
/*
$(document).ready(function() {
        var wynik=0;

    $("#dodawanie").click(function(){
        var a=$('#a').val();
        var b=$('#b').val();
        wynik=parseInt(a)+parseInt(b)
        $("#wynik").text("Wynik dodawania: "+wynik)
    })
    $("#odejmowanie").click(function(){
        var a=$('#a').val();
        var b=$('#b').val();
        wynik=a-b
        $("#wynik").text("Wynik odejmowania: "+wynik)
    })
    $("#mnozenie").click(function(){
        var a=$('#a').val();
        var b=$('#b').val();
        wynik=a*b
        $("#wynik").text("Wynik mnozenia: "+wynik)
    })
    $("#dzielnie").click(function(){
        var a=$('#a').val();
        var b=$('#b').val();
        wynik=a/b
        $("#wynik").text("Wynik dzielnia: "+wynik)
    })

})*/


$(document).ready(function() {
	
    var i =1;
    var f =1;
    var w=10;
    var h=10;

   

  $(document).keydown(function( event ) {
    if ( event.which == 37 ) {
    	i--
        w--
        $('#cos').css('left',i+'px')
        $('#cos').css('width',w+'px')
      event.preventDefault();
    } else if ( event.which == 38 ) {
        f--
        h--
        $('#cos').css('top',f+'px')
        $('#cos').css('height',h+'px')
      event.preventDefault();
    } else if ( event.which == 39 ) {
        i++
        w++
        $('#cos').css('left',i+'px')
        $('#cos').css('width',w+'px')
    	
      event.preventDefault();
     } else if ( event.which == 40 ) {
    	f++
        h++
        $('#cos').css('top',f+'px')
        $('#cos').css('height',h+'px')
      event.preventDefault();
     }
	});
  
  
})