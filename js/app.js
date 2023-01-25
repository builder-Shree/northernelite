$(document).ready(function(){
$('.food-slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
    autoplay:true,
    resposive:[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
            }
        },
        {
            breakpoint:375,
            settings:{
                slidesToShow:2,
            }
        }

    ]
});


$('.nav-trigger').click(function(){
    $('.site-content-wrapper').toggleClass('scaled');
})
});

