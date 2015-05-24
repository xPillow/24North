var main = function () {
  "use strict";
    
        $('.pure-menu-selected a').css("color","white");
           

    var n = 1;
    $('.musea .fa-chevron-right').on('click', function() {
        $('.musea'+n).addClass('hidden');
        n=n+1;
        if(n > 4){
            n = 1;
            $('.musea'+n).removeClass('hidden');
        } else {
            $('.musea'+n).removeClass('hidden');
        }
        
    });
    
    $('.musea .fa-chevron-left').on('click', function() {
        $('.musea'+n).addClass('hidden');
        console.log(n);
        n=n-1;
        console.log(n);
        if(n == 0){
            n = 4;
            $('.musea'+n).removeClass('hidden');
            console.log(n);
        } else {
            $('.musea'+n).removeClass('hidden');
        }
        
    });
    
    var m = 1;
    $('.beziens .fa-chevron-right').on('click', function() {
        $('.beziens'+m).addClass('hidden');
        m=m+1;
        if(m > 4){
            m = 1;
            $('.beziens'+m).removeClass('hidden');
        } else {
            $('.beziens'+m).removeClass('hidden');
        }
        
    });
    
    $('.beziens .fa-chevron-left').on('click', function() {
        $('.beziens'+m).addClass('hidden');
        m=m-1;
        if(m == 0){
            m = 4;
            $('.beziens'+m).removeClass('hidden');
        } else {
            $('.beziens'+m).removeClass('hidden');
        }
        
    });
    
    $('.religieus .fa-chevron-left').on('click', function() {
        if($('.religieus2').hasClass('hidden')){
            $(".religieus1").addClass('hidden');
            $(".religieus2").removeClass('hidden');
        } else {
            $('.religieus1').removeClass('hidden');
            $('.religieus2').addClass("hidden");
        }});
    
    $('.religieus .fa-chevron-right').on('click', function() {
        if($('.religieus2').hasClass('hidden')){
            $(".religieus1").addClass('hidden');
            $(".religieus2").removeClass('hidden');
        } else {
            $('.religieus1').removeClass('hidden');
            $('.religieus2').addClass("hidden");
        }});
    
    
    var z = 1;
    $('.activiteiten .fa-chevron-right').on('click', function() {
        $('.activiteiten'+z).addClass('hidden');
        z=z+1;
        if(z > 3){
            z = 1;
            $('.activiteiten'+z).removeClass('hidden');
        } else {
            $('.activiteiten'+z).removeClass('hidden');
        }
        
    });
    
    $('.activiteiten .fa-chevron-left').on('click', function() {
        $('.activiteiten'+z).addClass('hidden');
        z=z-1;
        if(z == 0){
            z = 3;
            $('.activiteiten'+z).removeClass('hidden');
        } else {
            $('.activiteiten'+z).removeClass('hidden');
        }
        
    });
    
    
     var x = 1;
    $('.eten .fa-chevron-right').on('click', function() {
        $('.eten'+x).addClass('hidden');
        x=x+1;
        if(x > 4){
            x = 1;
            $('.eten'+x).removeClass('hidden');
        } else {
            $('.eten'+x).removeClass('hidden');
        }
        
    });
    
    $('.eten .fa-chevron-left').on('click', function() {
        $('.eten'+x).addClass('hidden');
        x=x-1;
        if(x == 0){
            x = 4;
            $('.eten'+x).removeClass('hidden');
        } else {
            $('.eten'+x).removeClass('hidden');
        }
        
    });
                     
    // JS van Citymap //
    
    $(".head-citymap .pure-menu-item").on('click',function(){
        var which = $(this).html();
        console.log(which);
        if(which === 'Hotspots'){
            $('.map1, .map2, .map3').addClass('hidden');
            console.log('map1');
            $('.map1').removeClass('hidden');
            
            $(".head-citymap .pure-menu-item:eq(0)").addClass('citymap-selected');
            $(".head-citymap .pure-menu-item:eq(1)").removeClass('citymap-selected');
            $(".head-citymap .pure-menu-item:eq(2)").removeClass('citymap-selected');
            
        }else if(which === 'Vervoer'){
            $('.map1, .map2, .map3').addClass('hidden');
            $('.map2').removeClass('hidden');
            console.log('map2');
            $(".head-citymap .pure-menu-item:eq(0)").removeClass('citymap-selected');
            $(".head-citymap .pure-menu-item:eq(1)").addClass('citymap-selected');
            $(".head-citymap .pure-menu-item:eq(2)").removeClass('citymap-selected');
            
        } else if(which === 'Parkeren'){
            $('.map1, .map2, .map3').addClass('hidden');
            $('.map3').removeClass('hidden');
            console.log('map3');
            $(".head-citymap .pure-menu-item:eq(0)").removeClass('citymap-selected');
            $(".head-citymap .pure-menu-item:eq(1)").removeClass('citymap-selected');
            $(".head-citymap .pure-menu-item:eq(2)").addClass('citymap-selected');
        };
        
    });
     
};

$("document").ready(main);