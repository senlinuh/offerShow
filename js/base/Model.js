/*
    var model = Model({
        表名
    })
*/ 

window.Model = function (options) {
    let messageName = options.messageName
    return {
        // 获取数据
        fetch: function () {
            const query = new AV.Query(messageName);
            return query.find() //Promise 对象
        },
        // 新建数据
        save: function (name, content) {
            const Message = AV.Object.extend(messageName);
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
}