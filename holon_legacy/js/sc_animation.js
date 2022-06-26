$(document).ready(function() {      
    
    
        $('#b_replay').animate({'opacity' : '0' }, 0);
        $('.c1_box').animate({'opacity' : '0' }, 0);
        $('.c2_box').animate({'opacity' : '0' }, 0);
        $('.c3_box').animate({'opacity' : '0' }, 0);
        $('.c4_box').animate({'opacity' : '0' }, 0);
        $('.c5_box').animate({'opacity' : '0' }, 0);
        $('.c6_box').animate({'opacity' : '0' }, 0);
        $('#lower_stage').animate({'opacity' : '0' }, 0);
    
    
    
    //Re-runs the animantion
    $('#b_replay').click(function() {
        reset();
        
        //RUN animation function 
        circles();
    });
    
    
    
    $('#b_play').click(function() {
        $('#b_play').animate({'opacity' : '0' }, 400);
        $('#b_play').remove();
        
        //RUN animation function
        circles();


    });
    
    
    //Reset animation 
    var reset = function () {

        $('.c1_box').animate({'opacity' : '0' }, 0);
        $('.c2_box').animate({'opacity' : '0' }, 0);
        $('.c3_box').animate({'opacity' : '0' }, 0);
        $('.c4_box').animate({'opacity' : '0' }, 0);
        $('.c5_box').animate({'opacity' : '0' }, 0);
        $('#lower_stage').animate({'opacity' : '0' }, 0);
        
    }
    
    //CIRCLES FUNCTION FULL
    var circles =   function () {
    
        console.log('your getting this');
        $('.c1_box').animate({'opacity' : '1' }, 1200);
        setTimeout(c2, 1200);
    
    }
    
    var c2 =    function () {
    
        console.log('your getting this 2');
        $('.c2_box').animate({'opacity' : '1' }, 1200);
        setTimeout(c3, 1200);
    
    }
    var c3 =    function () {
    
        console.log('your getting this 3');
        $('.c3_box').animate({'opacity' : '1' }, 1200);
        setTimeout(c4, 1200);
    
    }
    var c4 =    function () {
    
        console.log('your getting this 4');
        $('.c4_box').animate({'opacity' : '1' }, 1200);
        setTimeout(c5, 1200);
    
    }
    var c5 =    function () {
        
        console.log('your getting this 5');
        $('.c5_box').animate({'opacity' : '1' }, 1200);
        setTimeout(lowerStage, 1200);
    
    }
    var lowerStage =    function () {
    
        console.log('your getting this 6');
        $('#lower_stage').animate({'opacity' : '1' }, 1200);
        $('#b_replay').animate({'opacity' : '1' }, 1200);
    }



    
console.log('all is good in your javascript hood');

});
   