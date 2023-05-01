

$('.your-class').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: '60px',
    pauseOnHover: false, 
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,


            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

