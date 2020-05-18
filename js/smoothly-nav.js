!function () {
    let liTags = document.querySelectorAll('nav.menu > ul >li')
    for (let i = 0; i < liTags.length; i++) {
        // liTags[i].classList.remove('active')
        liTags[i].onmouseenter = function (e) {
            console.log(e)
            e.currentTarget.classList.add('active')
        }
        liTags[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove('active')
        }
    }

    let aTags = document.querySelectorAll('nav.menu > ul > li > a')

    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (e) {
            e.preventDefault() //组织默认动作
            console.log(e.currentTarget)
            let top = document.querySelector(e.currentTarget.getAttribute('href')).offsetTop
            console.log(top)
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
}.call(undefined)