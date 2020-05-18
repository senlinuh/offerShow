!function () {
    // 添加offset
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    findClosest()
    // 找到最近的并移除offset
    window.onscroll = function (e) {
        if (window.scrollY > 10) {
            topNavBar.classList.add('sticky')
        } else {
            topNavBar.classList.remove('sticky')
        }
        findClosest()
    }
    function findClosest() {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0
        for (let i = 0; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
                minIndex = i
            }
        }
        // minIndex 是距离窗口顶部最近的元素

        specialTags[minIndex].classList.remove('offset')
        console.log('嘿嘿嘿', specialTags[minIndex].classList)
        let id = specialTags[minIndex].id
        let a = document.querySelector('a[href="#' + id + '"]')
        let li = a.parentNode
        let siblings = li.parentNode.children
        for (let i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
}.call()