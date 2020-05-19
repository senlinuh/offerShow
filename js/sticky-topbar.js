!function () {
    // 找到最近的并移除offset
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view;
            this.bindEventes()
        },
        bindEventes: function () {
            var view = this.view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 10) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }
    }
    controller.init.call(controller, view)
}.call()