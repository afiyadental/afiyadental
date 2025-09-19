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
        
})(jQuery);

