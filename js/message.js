!function () {
    var view = document.querySelector('section.message')

    var model = {
        // 获取数据
        fetch: function () {
            const query = new AV.Query('message');
            return query.find() //Promise 对象
        },
        // 新建数据
        save: function (name, content) {
            const Message = AV.Object.extend('message');
            var message = new Message();
            message.set('name', name)
            message.set('content', content)
            return message.save()
        },
        init: function () {
            AV.init({
                appId: "FHLwRC6tp6jdKU9bQzNSKScv-gzGzoHsz",
                appKey: "d62oq3vjrOw7Isojsc2WJu7t",
                serverURL: "https://fhlwrc6t.lc-cn-n1-shared.com"
            });
        }
    }

    var controller = {
        view: null,
        messageList: null,
        myForm: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.myForm = view.querySelector('#postMessage')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        loadMessages: function () {
            const query = new AV.Query('message');
            model.fetch().then((messages) => {
                console.log(messages)
                console.log(messages[0].attributes)
                let arry = messages.map((item) => item.attributes)
                console.log(arry)
                arry.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}:${item.content}`
                    this.messageList.appendChild(li)
                })
            })
        },
        bindEvents: function () {
            console.log(this)
            var that = this
            this.myForm.addEventListener('submit', function (e) {
                e.preventDefault()
                console.log(that)
                that.saveMessage()
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
    }
    controller.init(view, model)
}.call(undefined)