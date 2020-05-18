!function () {
    var view = document.querySelector('#mySlides')
    var controller = {
        view: null,
        swiper: null,
        swiperOptions: {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            preventClicks: false,//默认true
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        },
        init: function (view) {
            this.view = view
            this.initSwiper()
        },
        initSwiper: function () {
            this.swiper = new Swiper(this.view.querySelector('.swiper-container'), this.swiperOptions)
        }
    }
    controller.init(view)
    // controller.init.call(controller, view)
}.call()