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

// let button = myForm.querySelector('input[name=sumbit]')
// button.addEventListener('click', function () {

// })
// let input = myForm.querySelector('input[name=content]')
// input.addEventListener('keypress', function (e) {
//     if (e.keyCode === 13) {

//     }
// })
// console.log(AV)
// // 创建一个表
// const TestObject = AV.Object.extend('TestObject');
// // 在表中创建一行数据
// const testObject = new TestObject();
// // 数据的内容是 words:'Hello world!'
// testObject.set('words', 'Hello world!ddd');
// // 如果保存成功，则运行 console.log('保存成功。')
// testObject.save().then((testObject) => {
//     console.log('保存成功。',testObject)
// })