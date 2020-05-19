AV.init({
    appId: "FHLwRC6tp6jdKU9bQzNSKScv-gzGzoHsz",
    appKey: "d62oq3vjrOw7Isojsc2WJu7t",
    serverURL: "https://fhlwrc6t.lc-cn-n1-shared.com"
});

const query = new AV.Query('message');

findMessage()
function findMessage() {
    query.find().then((messages) => {
        console.log(messages)
        console.log(messages[0].attributes)
        let arry = messages.map((item) => item.attributes)
        console.log(arry)
        arry.forEach((item) => {
            let li = document.createElement('li')
            li.innerText = `${item.name}:${item.content}`
            let messageList = document.querySelector('#messageList')
            messageList.appendChild(li)
        })
    })
}

let myForm = document.querySelector('#postMessage')
myForm.addEventListener('submit', function (e) {
    console.log('hhh')
    e.preventDefault()
    let name = myForm.querySelector('input[name=name]').value
    let content = myForm.querySelector('input[name=content]').value
    console.log(name)
    const Message = AV.Object.extend('message');
    var message = new Message();
    message.set('name', name)
    message.set('content', content)
    message.save().then((e) => {
        console.log('成功', e)
        let li = document.createElement('li')
        li.innerText = `${e.attributes.name}:${e.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=name]').value = ''
        myForm.querySelector('input[name=content]').value = ''
    })
})
