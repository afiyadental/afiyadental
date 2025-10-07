(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });










      document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('mainVideo');
            const playPauseBtn = document.getElementById('playPause');
            const volumeBtn = document.getElementById('volumeBtn');
            const volumeSlider = document.getElementById('volumeSlider');
            const progressBar = document.getElementById('progressBar');
            const progressContainer = document.getElementById('progressContainer');
            const currentTimeElement = document.getElementById('currentTime');
            const durationElement = document.getElementById('duration');
            const speedSelect = document.getElementById('speedSelect');
            const fullscreenBtn = document.getElementById('fullscreenBtn');
            
            // Play/Pause functionality
            playPauseBtn.addEventListener('click', function() {
                if (video.paused) {
                    video.play();
                    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    video.pause();
                    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
            
            // Update progress bar
            video.addEventListener('timeupdate', function() {
                const currentTime = video.currentTime;
                const duration = video.duration;
                const progressPercent = (currentTime / duration) * 100;
                
                progressBar.style.width = `${progressPercent}%`;
                
                // Update time displays
                currentTimeElement.textContent = formatTime(currentTime);
                if (!isNaN(duration)) {
                    durationElement.textContent = formatTime(duration);
                }
            });
            
            // Click on progress bar to seek
            progressContainer.addEventListener('click', function(e) {
                const pos = (e.pageX - this.getBoundingClientRect().left) / this.offsetWidth;
                video.currentTime = pos * video.duration;
            });
            
            // Volume control
            volumeSlider.addEventListener('input', function() {
                video.volume = this.value;
                if (this.value == 0) {
                    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                } else if (this.value < 0.5) {
                    volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
                } else {
                    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                }
            });
            
            // Volume button mute toggle
            volumeBtn.addEventListener('click', function() {
                if (video.volume > 0) {
                    video.volume = 0;
                    volumeSlider.value = 0;
                    volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                } else {
                    video.volume = 1;
                    volumeSlider.value = 1;
                    volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                }
            });
            
            // Playback speed
            speedSelect.addEventListener('change', function() {
                video.playbackRate = parseFloat(this.value);
            });
            
            // Fullscreen functionality
            fullscreenBtn.addEventListener('click', function() {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen();
                }
            });
            
            // Format time in minutes:seconds
            function formatTime(seconds) {
                const mins = Math.floor(seconds / 60);
                const secs = Math.floor(seconds % 60);
                return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
            }
            
            // Initialize video time display
            durationElement.textContent = formatTime(video.duration);
        });
    


















 // Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.dr-branch-card');
            
            cards.forEach((card, index) => {
                // Staggered animation for cards
                card.style.animationDelay = `${index * 0.2}s`;
                
                // Add click event to make cards more interactive
                card.addEventListener('click', function() {
                    this.classList.toggle('active');
                });
            });
        });




























         // কীবোর্ড অ্যাক্সেসিবিলিটি
    document.querySelectorAll('.ser7').forEach(card => {
      card.setAttribute('tabindex', '0');
      card.addEventListener('keydown', e => { 
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click(); 
        }
      });
    });

    // টাচ ডিভাইসের জন্য অপ্টিমাইজেশন
    document.querySelectorAll('.ser7').forEach(card => {
      card.addEventListener('touchstart', function() {
        this.style.animationPlayState = 'paused';
        this.style.transform = 'scale(0.99)';
      });
      
      card.addEventListener('touchend', function() {
        this.style.animationPlayState = 'running';
        this.style.transform = '';
      });
    });

    // অটো ব্যাকগ্রাউন্ড কালার চেঞ্জ
    setInterval(() => {
      document.querySelector('.ser1').style.background = `hsl(${Math.random() * 360}, 10%, 97%)`;
    }, 80000);




































     document.addEventListener('DOMContentLoaded', function() {
      const teaa20 = document.getElementById('teaa20');
      const teaa19 = document.getElementById('teaa19');
      const teaa21 = document.getElementById('teaa21');
      const teaa22 = document.getElementById('teaa22');
      const teaa23 = document.getElementById('teaa23');

      let teaa24 = 0, teaa25 = false, teaa26 = 0, teaa27 = 0, teaa28 = 0, teaa29, teaa30;
      let teaa31 = getTeaa32();

      teaa33(); teaa34();

      window.addEventListener('resize', () => {
        const teaa35 = getTeaa32();
        if (teaa35 !== teaa31) {
          teaa31 = teaa35;
          teaa36();
        }
      });

      teaa21.addEventListener('click', () => {
        teaa37(); teaa38(teaa24 - 1); teaa34();
      });

      teaa22.addEventListener('click', () => {
        teaa37(); teaa38(teaa24 + 1); teaa34();
      });

      teaa19.addEventListener('mousedown', teaa39);
      teaa19.addEventListener('touchstart', teaa39);

      teaa19.addEventListener('mousemove', teaa40);
      teaa19.addEventListener('touchmove', teaa40);

      teaa19.addEventListener('mouseup', teaa41);
      teaa19.addEventListener('touchend', teaa41);
      teaa19.addEventListener('mouseleave', teaa41);

      teaa19.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', e => e.preventDefault());
      });

      function teaa33() {
        const teaa42 = teaa20.querySelectorAll('.teaa6');
        teaa23.innerHTML = '';
        if (teaa42.length > teaa31) {
          for (let i = 0; i <= teaa42.length - teaa31; i++) {
            const teaa15 = document.createElement('div');
            teaa15.classList.add('teaa15');
            if (i === 0) teaa15.classList.add('active');
            teaa15.addEventListener('click', () => {
              teaa37(); teaa38(i); teaa34();
            });
            teaa23.appendChild(teaa15);
          }
        }
        teaa36();
      }

      function getTeaa32() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 992) return 2;
        return 3;
      }

      function teaa36() {
        const teaa42 = teaa20.querySelectorAll('.teaa6');
        const slideWidth = teaa42[0].offsetWidth + 25;
        teaa20.style.transform = `translateX(-${teaa24 * slideWidth}px)`;
        document.querySelectorAll('.teaa15').forEach((teaa15, i) => {
          teaa15.classList.toggle('active', i === teaa24);
        });
        teaa21.disabled = teaa24 === 0;
        teaa22.disabled = teaa24 >= teaa42.length - teaa31;
      }

      function teaa38(teaa45) {
        const teaa42 = teaa20.querySelectorAll('.teaa6');
        if (teaa45 < 0) teaa24 = teaa42.length - teaa31;
        else if (teaa45 > teaa42.length - teaa31) teaa24 = 0;
        else teaa24 = teaa45;
        teaa36();
      }

      function teaa34() {
        teaa37();
        teaa30 = setInterval(() => {
          const teaa42 = teaa20.querySelectorAll('.teaa6');
          if (teaa24 < teaa42.length - teaa31) teaa38(teaa24 + 1);
          else teaa38(0);
        }, 4000);
      }

      function teaa37() {
        if (teaa30) clearInterval(teaa30);
      }

      function teaa39(e) {
        teaa37();
        teaa26 = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        teaa25 = true;
        teaa29 = requestAnimationFrame(teaa47);
        teaa19.style.cursor = 'grabbing';
      }

      function teaa40(e) {
        if (!teaa25) return;
        const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        const diff = currentPosition - teaa26;
        const teaa42 = teaa20.querySelectorAll('.teaa6');
        if (teaa42.length > teaa31) teaa27 = teaa28 + diff;
      }

      function teaa41() {
        if (!teaa25) return;
        teaa25 = false;
        cancelAnimationFrame(teaa29);
        teaa19.style.cursor = 'grab';
        const movedBy = teaa27 - teaa28;
        const teaa42 = teaa20.querySelectorAll('.teaa6');
        const slideWidth = teaa42[0].offsetWidth + 25;
        if (Math.abs(movedBy) > slideWidth / 4) {
          if (movedBy > 0) teaa38(teaa24 - 1);
          else teaa38(teaa24 + 1);
        } else teaa36();
        teaa27 = 0; teaa28 = 0; teaa34();
      }

      function teaa47() {
        if (teaa25) {
          const teaa42 = teaa20.querySelectorAll('.teaa6');
          const slideWidth = teaa42[0].offsetWidth + 25;
          teaa20.style.transform = `translateX(calc(-${teaa24 * slideWidth}px + ${teaa27}px))`;
          requestAnimationFrame(teaa47);
        }
      }
    });










































     document.addEventListener('DOMContentLoaded', function() {
            // Initialize sliders for all comparisons
            initSlider('comp1');
            initSlider('comp2');
            initSlider('comp3');

            function initSlider(containerId) {
                const container = document.getElementById(containerId);
                const before = container.querySelector('.bpf19');
                const slider = container.querySelector('.bpf22');
                
                let isDragging = false;

                // Mouse events
                container.addEventListener('mousedown', startDrag);
                document.addEventListener('mouseup', stopDrag);
                document.addEventListener('mousemove', drag);

                // Touch events
                container.addEventListener('touchstart', startDrag);
                document.addEventListener('touchend', stopDrag);
                document.addEventListener('touchmove', drag);

                function startDrag(e) {
                    e.preventDefault();
                    isDragging = true;
                    slider.style.transition = 'none';
                    before.style.transition = 'none';
                    updateSlider(e);
                    container.style.cursor = 'grabbing';
                }

                function stopDrag() {
                    isDragging = false;
                    slider.style.transition = 'left 0.2s ease';
                    before.style.transition = 'width 0.2s ease';
                    container.style.cursor = 'col-resize';
                }

                function drag(e) {
                    if (!isDragging) return;
                    updateSlider(e);
                }

                function updateSlider(e) {
                    const containerRect = container.getBoundingClientRect();
                    let x;

                    if (e.type.includes('touch')) {
                        x = e.touches[0].clientX;
                    } else {
                        x = e.clientX;
                    }

                    let position = ((x - containerRect.left) / containerRect.width) * 100;
                    position = Math.max(0, Math.min(100, position));

                    before.style.width = position + '%';
                    slider.style.left = position + '%';
                }

                // Click to move
                container.addEventListener('click', function(e) {
                    if (isDragging) return;
                    
                    const containerRect = container.getBoundingClientRect();
                    const x = e.clientX;
                    
                    let position = ((x - containerRect.left) / containerRect.width) * 100;
                    position = Math.max(0, Math.min(100, position));

                    before.style.width = position + '%';
                    slider.style.left = position + '%';
                });
            }
        });












































         document.addEventListener('DOMContentLoaded', function() {
            const revv8 = document.querySelectorAll('.revv8');
            
            window.addEventListener('scroll', function() {
                revv8.forEach(card => {
                    const cardTop = card.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (cardTop < windowHeight * 0.9) {
                        card.style.animationPlayState = 'running';
                    }
                });
            });
            
            setTimeout(() => {
                revv8.forEach(card => {
                    card.style.animationPlayState = 'running';
                });
            }, 100);
        });
        
})(jQuery);

