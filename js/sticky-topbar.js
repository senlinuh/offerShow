!function () {
    // 找到最近的并移除offset
    var view = document.querySelector('#topNavBar')
    var controller = {
        view: null,
        init: function () {
            this.view = view;
            this.bindEventes()
        },
        bindEventes: function () {
            var view = this.view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 10) {
                    this.active()
                    // view.classList.add('sticky')
                } else {
                    this.deactive()
                    // view.classList.remove('sticky')
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