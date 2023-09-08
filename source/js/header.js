/**
 * title: 首页锚点显现和上滑 
 * author: melifen
 * question: 
 */
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        // 如果元素进入视窗
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeIn');
            observer.unobserve(entry.target); // 不再观察这个元素
        }
    });
}

// 创建一个Intersection Observer实例
let options = {
    threshold: 0.1  // 当元素至少有10%出现在视窗中时触发
};

let observer = new IntersectionObserver(handleIntersection, options);

// 开始观察你的组件
let target = document.querySelector('div.header');
console.log(target)
observer.observe(target);