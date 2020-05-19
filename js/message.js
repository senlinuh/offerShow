!function () {
    var view = View('section.message')
    var model = Model({ messageName: 'message' })

    var controller = Controller({
        init: function (view) {
            this.messageList = view.querySelector('#messageList')
            this.myForm = view.querySelector('#postMessage')
            this.loadMessages()
        },
        loadMessages: function () {
            const query = new AV.Query('message');
            model.fetch().then((messages) => {
                let arry = messages.map((item) => item.attributes)
                arry.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            this.myForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.myForm
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value
            this.model.save(name, content)
                .then((e) => {
                    console.log('成功', e)
                    let li = document.createElement('li')
                    li.innerText = `${e.attributes.name}:${e.attributes.content}`
                    let messageList = document.querySelector('#messageList')
                    messageList.appendChild(li)
                    myForm.querySelector('input[name=name]').value = ''
                    myForm.querySelector('input[name=content]').value = ''
                })
        }
    })
    controller.init(view, model)
}.call(undefined)