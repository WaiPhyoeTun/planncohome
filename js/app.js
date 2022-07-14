console.log('hi');

$(document).ready(function(){
// Start Back to Top 

$(".btn-backtotops").hide();
    $(window).scroll(function () {
        let getscrolltop = $(this).scrollTop();
        console.log(getscrolltop);

        if (getscrolltop >= 370) {
            $(".btn-backtotops").fadeIn(1000);
        } else {
            $(".btn-backtotops").fadeOut(1000);
        }
    });


// End Back to Top 

	// Start Header
	// Start nav
	// for bugger
	$('.navbuttons').click(function(){
		$('.navbuttons').toggleClass("crossxs");
	});

	// for nav
	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);
		if(getscrolltop >= 200){
			$('.navbar').addClass('navmenus');
		}else{
			$(".navbar").removeClass('navmenus')
		} 
	});
	// End nav


	// End Header

	// Start Properties
	$(".propertylists").click(function(){
		// for activeitems

		// $(this).addClass("activeitems");
		// $(this).siblings().removeClass('activeitems');
		$(this).addClass("activeitems").siblings().removeClass('.activeitems');

		// for filter

		let getattvalue = $(this).attr('data-filter');
		// console.log(getattvalue);

		if(getattvalue === "all"){
			$('.filters').show();
		}else{
			$('.filters').hide();
			$('.filters').not('.'+getattvalue).hide('drop',1500);
			$('.filters').filter('.'+getattvalue).show('slide',1500)
		}
	});
	// for image overlay or lightbox2
	lightbox.option({
      		showImageNumberLabel:false
    });
	// End Properties

})
// Start Adv Section
$(window).scroll(function(){
	let getscrolltop = $(this).scrollTop();
	// console.log(getscrolltop)
	if(getscrolltop >= 900){
		$('.advimages').addClass('fromlefts');
		$('.advtexts').addClass('fromrights');
	}else{
		$('.advimages').removeClass('fromlefts');
		$('.advtexts').removeClass('fromrights')
	}
})
// End Adv Section

// Start Footer
const getyear = $("#getyear");
    const getfullyear = new Date().getUTCFullYear();
    getyear.text(getfullyear);

// End Footer



// https://www.pexels.com/search/house/


// 14PC