!function () {
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        liTags: null,
        aTags: null,
        init: function (view) {
            this.view = view
            this.liTags = view.querySelectorAll('nav.menu >ul >li')
            this.aTags = document.querySelectorAll('nav.menu > ul > li > a')
            for (let i = 0; i < this.liTags.length; i++) {
                // liTags[i].classList.remove('active')
                this.liTags[i].onmouseenter = function (e) {
                    e.currentTarget.classList.add('active')
                }
                this.liTags[i].onmouseleave = function (e) {
                    e.currentTarget.classList.remove('active')
                }
            }

            for (let i = 0; i < this.aTags.length; i++) {
                this.aTags[i].onclick = function (e) {
                    e.preventDefault() //组织默认动作
                    let top = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop
                    let currentTop = window.scrollY // 当前高度
                    let targetTop = top - 80 //目标高度
                    let n = 25 //移动25次
                    let duration = 500 / n //多少时间移动一次
                    let distance = (targetTop - currentTop) / n //每次移动多少
                    let i = 0
                    var id = setInterval(() => {
                        if (i == n) {
                            window.clearInterval(id)
                            return
                        }
                        i++
                        window.scrollTo(0, currentTop + distance * i)
                    }, duration);
                }
            }
        }
    }
    controller.init(view)
    // controller.init.call(controller, view)
}.call(undefined)