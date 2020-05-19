/*
 var controller = Controller({
        init:(view,model){
            this.view
            this.model
            this.yyy()
            this.XXX()
        }
    }),
    yyy(){}
    xxx(){}
*/
window.Controller = function (options) {
    console.log(options) 
    var init = options.init
    debugger
    let object = {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view;
            this.model = model
            this.model.init()
            init.call(this, view)
            options.bindEvents.call(this)
        }
    }
    debugger
    for (let key in options) {
        console.log(key)
        if (key !== 'init') {
            object[key] = options[key]
        }
    }
    debugger
    return object
}