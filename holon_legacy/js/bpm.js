$(document).ready(function() {		

    $('#bpm_replay').click(function() {
    
        console.log('first tri');

        $('#first_tri').animate({'top' : '-200%' }, 0);
        $('#second_tri').animate({'right' : '-100%' }, 0);
        $('#third_tri').animate({'bottom' : '-71%' }, 0);
        $('#fourth_tri').animate({'left' : '-200%' }, 0);
        $('#bpm_play').animate({'opacity' : '0' }, 0);
        $('#h_text1').animate({'opacity' : '0' }, 0);
        $('#h_text2').animate({'opacity' : '0' }, 0);
        $('#h_text3').animate({'opacity' : '0' }, 0);
        $('#h_text4').animate({'opacity' : '0' }, 0);
        $('#c1_box').animate({'opacity' : '0' }, 0);
        $('#c2_box').animate({'opacity' : '0' }, 0);
        $('#c3_box').animate({'opacity' : '0' }, 0);
        $('#c4_box').animate({'opacity' : '0' }, 0);
        $('#c5_box').animate({'opacity' : '0' }, 0);
        $('#c1').animate({'opacity' : '0' }, 0);
        $('#c2').animate({'opacity' : '0' }, 0);
        $('#c3').animate({'opacity' : '0' }, 0);
        $('#c4').animate({'opacity' : '0' }, 0);
        $('#c5').animate({'opacity' : '0' }, 0);
        $('#whitefade').animate({'opacity' : '0' }, 0);
    
    triAni();
    });
     $('#bpm_play').click(function() {
        $('#bpm_play').animate({'opacity' : '0' }, 400);

        console.log('play');
        //RUN animation function
        triAni();


    });


	var triAni = function () {
    
        console.log('first tri');
        $('#first_tri').animate({'top' : '-71%' }, 1000);
        $('#h_text1').animate({'opacity' : '1' }, 1000);
        setTimeout(tri2, 1000);
    
    }
    
    var tri2 = function () {
    
        console.log('second tri');
        $('#second_tri').animate({'right' : '-53.5%' }, 1000);
        $('#h_text2').animate({'opacity' : '1' }, 1000);
        setTimeout(tri3, 1000);
    
    }

    var tri3 = function () {
    
        console.log('third tri');
        $('#third_tri').animate({'bottom' : '-71%' }, 1000);
        $('#h_text3').animate({'opacity' : '1' }, 1000);
        setTimeout(tri4, 1000);
    
    }
    var tri4 = function () {
    
        console.log('fourth tri');
        $('#fourth_tri').animate({'left' : '-53%' }, 1000);
        $('#h_text4').animate({'opacity' : '1' }, 1000);
        setTimeout(rotate, 1000);
    
    }

    var rotate = function () {
    
        console.log('rotate');
		$('#bpm_rotate').animate({'opacity' : '1' }, 1000);  
		$('#bpm_rotate').animate({'border-width' : '2em' }, 1500);     
        setTimeout(rotateFade, 500);
    
    }

    var rotateFade = function () {
    
        console.log('rotate');
		$('#bpm_rotate').animate({'border-width' : '1em' }, 1500);
		$('#bpm_rotate').animate({'opacity' : '0.1' }, 1000);      
        setTimeout(circles, 3000);
    
    }

    var circles = function () {
    
        console.log('rotate');
        $('#whitefade').animate({'opacity' : '0.8' }, 1000);
		$('#c1').animate({'opacity' : '1' }, 1000);
		$('#c2').animate({'opacity' : '1' }, 1000);
		$('#c3').animate({'opacity' : '1' }, 1000);
		$('#c4').animate({'opacity' : '1' }, 1000);
		$('#c5').animate({'opacity' : '1' }, 1000);
        $('#bpm_replay').animate({'opacity' : '1' }, 0);
   		
    }

    $('#c1').click(function() {
      
    	$('#c1_box').animate({'opacity' : '1' }, 800);
    	$('#c2_box').animate({'opacity' : '0' }, 800);
		$('#c3_box').animate({'opacity' : '0' }, 800);
		$('#c4_box').animate({'opacity' : '0' }, 800);
		$('#c5_box').animate({'opacity' : '0' }, 800);

    });

    $('#c2').click(function() {
      	$('#c1_box').animate({'opacity' : '0' }, 800);
    	$('#c2_box').animate({'opacity' : '1' }, 800);
		$('#c3_box').animate({'opacity' : '0' }, 800);
		$('#c4_box').animate({'opacity' : '0' }, 800);
		$('#c5_box').animate({'opacity' : '0' }, 800);
    });

    $('#c3').click(function() {
      	$('#c1_box').animate({'opacity' : '0' }, 800);
    	$('#c2_box').animate({'opacity' : '0' }, 800);
		$('#c3_box').animate({'opacity' : '1' }, 800);
		$('#c4_box').animate({'opacity' : '0' }, 800);
		$('#c5_box').animate({'opacity' : '0' }, 800);
    });

    $('#c4').click(function() {
      	$('#c1_box').animate({'opacity' : '0' }, 800);
    	$('#c2_box').animate({'opacity' : '0' }, 800);
		$('#c3_box').animate({'opacity' : '0' }, 800);
		$('#c4_box').animate({'opacity' : '1' }, 800);
		$('#c5_box').animate({'opacity' : '0' }, 800);
    });

    $('#c5').click(function() {
      	$('#c1_box').animate({'opacity' : '0' }, 800);
    	$('#c2_box').animate({'opacity' : '0' }, 800);
		$('#c3_box').animate({'opacity' : '0' }, 800);
		$('#c4_box').animate({'opacity' : '0' }, 800);
		$('#c5_box').animate({'opacity' : '1' }, 800);
    });


	

	console.log('all is good in your javascript hood');

});