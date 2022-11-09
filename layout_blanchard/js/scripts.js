document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.catalog-tabs-btn').forEach(function(tabLink) {
        tabLink.addEventListener('click', function(event) {
            const author = event.currentTarget.dataset.author

            document.querySelectorAll(".catalog-show").forEach(function(catalogShow){
                catalogShow.classList.remove('catalog-show-active')
            })
            document.querySelector(`[data-target=${author}]`).classList.add('catalog-show-active')
        })
    })

    // document.querySelector('#menu-btn').addEventListener('click', function() {
    //     document.querySelector('#menu').classList.toggle('header-content-nav-list-burger-active')
    //     document.querySelector('#menu-btn').classList.toggle('burger-btn-active')
    // })

    const jsGallerySlider = new Swiper('.js-gallery-slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
    
        pagination: {
            el: '.js-gallery-slider-pagination',
            type: 'fraction',
          },
          
        breakpoints: {
            1920: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
                allowTouchMove: true,
                formatFractionTotal: 2,
            },
            1600: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
                allowTouchMove: true,
                formatFractionTotal: 2,
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,
                allowTouchMove: true,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 38,
                allowTouchMove: true,
            },
            520: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 38,
                allowTouchMove: true,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                allowTouchMove: true,
            }
        },

        navigation: {
          nextEl: '.js-gallery-slider-btn-next',
          prevEl: '.js-gallery-slider-btn-prev',
        },
    });

    const jsEventSlider = new Swiper('.js-event-slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        allowTouchMove: true,
    
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          
        breakpoints: {
            1920: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
                allowTouchMove: true,
                formatFractionTotal: 2,
            },
            1024: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 34,
                allowTouchMove: true,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 38,
                allowTouchMove: true,
            },
            520: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                allowTouchMove: true,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 30,
                allowTouchMove: true,
            }
        },

        navigation: {
          nextEl: '.event-slider-nav-btn-next',
          prevEl: '.event-slider-nav-btn-prev',
          disabledClass: 'event-slider-nav-btn-disabled'
        },
    });

    const jsProjectsSlider = new Swiper('.js-projects-slider', {
        slidesPerView: 3,
        spaceBetween: 50,
        updateOnWindowResize: true, 
      
        grid: {
          rows: 1,
          fill: 'row',
        },
          
        breakpoints: {
            1920: {
                slidesPerView: 3,
                spaceBetween: 50,
                allowTouchMove: true,
            },
            1601: {
              slidesPerView: 3,
              spaceBetween: 50,
              allowTouchMove: true,
            },
            1600: {
              slidesPerView: 2,
              spaceBetween: 50,
              allowTouchMove: true,
            },
            1024: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,
                allowTouchMove: true,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 33,
                allowTouchMove: true,
            },
            520: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 27,
                allowTouchMove: true,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 21,
                allowTouchMove: true,
            }
        },

        navigation: {
          nextEl: '.projects-slider-btn-next',
          prevEl: '.projects-slider-btn-prev',
        },
    });

    tippy('.js-tooltip', {
        theme: 'tooltip-css'
    })
})
