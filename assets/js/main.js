/**
* Template Name: Gp - v4.10.0
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  // var button = document.getElementById("filter-button");
  // var container = document.getElementById("filter-container");
  // var input = document.querySelectorAll("input");
  
  // button.onclick = function (e) {
  //   e.stopPropagation();
  //   if (container.classList.contains("filters--active")) {
  //     container.classList.remove("filters--active");
  //   } else {
  //     container.classList.add("filters--active");
  //   }
  // };
  
  // container.onclick = function (e) {
  //   e.stopPropagation();
  // };
  
  // window.onclick = function () {
  //   container.classList.remove("filters--active");
  // };
  
  // console.log(input);
  
  // for (var i = 0; i < input.length; i++) {
  //   var currentInput = input[i];
  
  //   currentInput.onclick = function () {
  //     var isChecked = false;
  //     for (var j = 0; j < input.length; j++) {
  //       if (input[j].checked) {
  //         isChecked = true;
  //         break;
  //       }
  //     }
  
  //     if (isChecked) {
  //       button.classList.add("button--highlight");
  //     } else {
  //       button.classList.remove("button--highlight");
  //     }
  //   };
  // }
  
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


//  unique hall of fame
(function($) {
  $.fn.cascadeSlider = function(opt) {
      var $this = this,
          itemClass = opt.itemClass || 'cascade-slider_item',
          arrowClass = opt.arrowClass || 'cascade-slider_arrow',
          $item = $this.find('.' + itemClass),
          $arrow = $this.find('.' + arrowClass),
          itemCount = $item.length;
      items = opt.itemCount;

      // Additional option for autoplay
      autoplayDelay = opt.delay;
      if (autoplayDelay == null || autoplayDelay == 0) {
          autoplayDelay = 3;
      }
      pohClass = '.cascade-slider_item, .cascade-slider_arrow, .cascade-slider_dot';
      if (opt.autoplay == true) {
          autoPlay();
          if (opt.pauseOnHover == true) {
              $this.find(pohClass).on('mouseenter', function() {
                  clearInterval(effectInterval);
              }).on('mouseleave', function() {
                  autoPlay();
              })
          }
      }

      function autoPlay() {
          effectInterval = setInterval(function() {
              var action = 'next',
                  nowIndex = $item.index($this.find('.now'));

              if (action == 'next') {
                  if (nowIndex == itemCount - 1) {
                      changeIndex(0);
                  } else {
                      changeIndex(nowIndex + 1);
                  }
              } else if (action == 'prev') {
                  if (nowIndex == 0) {
                      changeIndex(itemCount - 1);
                  } else {
                      changeIndex(nowIndex - 1);
                  }
              }
              var slideCount = $('.cascade-slider_item.now').attr('data-slide-number');
              $('.cascade-slider_dot').removeClass('cur');
              $('.cascade-slider_dot').eq(slideCount).addClass('cur');
          }, autoplayDelay * 1000);
      }
      // END of Additional option for autoplay

      var defaultIndex = 0;

      changeIndex(defaultIndex);

      $arrow.on('click', function() {
          var action = $(this).data('action'),
              nowIndex = $item.index($this.find('.now'));

          if (action == 'next') {
              if (nowIndex == itemCount - 1) {
                  changeIndex(0);
              } else {
                  changeIndex(nowIndex + 1);
              }
          } else if (action == 'prev') {
              if (nowIndex == 0) {
                  changeIndex(itemCount - 1);
              } else {
                  changeIndex(nowIndex - 1);
              }
          }
          var slideCount = $('.cascade-slider_item.now').attr('data-slide-number');
          $('.cascade-slider_dot').removeClass('cur');
          $('.cascade-slider_dot').eq(slideCount).addClass('cur');

      });

      // add data attributes
      for (var i = 0; i < itemCount; i++) {
          $('.cascade-slider_item').each(function(i) {
              $(this).attr('data-slide-number', [i]);
          });
      }

      // dots
      $('.cascade-slider_dot').bind('click', function() {
          // add class to current dot on click
          $('.cascade-slider_dot').removeClass('cur');
          $(this).addClass('cur');

          var index = $(this).index();

          $('.cascade-slider_item').removeClass('now prev next');
          var slide = $('.cascade-slider_slides').find('[data-slide-number=' + index + ']');
          slide.prev().addClass('prev');
          slide.addClass('now');
          slide.next().addClass('next');

          if (slide.next().length == 0) {
              $('.cascade-slider_item:first-child').addClass('next');
          }

          if (slide.prev().length == 0) {
              $('.cascade-slider_item:last-child').addClass('prev');
          }
      });

      function changeIndex(nowIndex) {
          // clern all class
          $this.find('.now').removeClass('now');
          $this.find('.next').removeClass('next');
          $this.find('.prev').removeClass('prev');
          $this.find('.next2').removeClass('next2');
          $this.find('.prev2').removeClass('prev2');

          if (nowIndex == itemCount - 1) {
              $item.eq(0).addClass('next');
          }
          if (nowIndex == 0) {
              $item.eq(itemCount - 1).addClass('prev');
          }

          $item.each(function(index) {
              if (index == nowIndex) {
                  $item.eq(index).addClass('now');
              }
              if (index == nowIndex + 1) {
                  $item.eq(index).addClass('next');
              }
              if (index == nowIndex - 1) {
                  $item.eq(index).addClass('prev');
              }
          });

          if (items == 5) {
              otherIndex();
          }

      }

      function otherIndex() {
          var slideItemsCount = $this.find('.cascade-slider_item').length - 1;
          var nextSlide = $this.find('.next').index()
          var prevSlide = $this.find('.prev').index()

          if (nextSlide + 1 <= slideItemsCount) {
              $this.find('.cascade-slider_item').eq(nextSlide + 1).addClass('next2');
          } else if (nextSlide + 1 > slideItemsCount) {
              $this.find('.cascade-slider_item').eq(0).addClass('next2');
          }
          if (prevSlide - 1 <= slideItemsCount) {
              $this.find('.cascade-slider_item').eq(prevSlide - 1).addClass('prev2');
          } else if (prevSlide - 1 > slideItemsCount) {
              $this.find('.cascade-slider_item').eq(slideItemsCount).addClass('prev2');
          }

      }

  };
})(jQuery);



$('#cascade-slider').cascadeSlider({
  itemClass: 'cascade-slider_item',
  arrowClass: 'cascade-slider_arrow',
  autoplay: true, // additional feature - autoplay next images
  delay: 5, // additional feature - adding delay of autoplay feature
  pauseOnHover: true, // additional feature - will pause the autoplay function when hovering images
  itemCount: 5 // Set 5 or 3 for total count of images to be shown
});