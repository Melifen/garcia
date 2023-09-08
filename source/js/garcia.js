/**
 * title：首页文字下滑动画
 * author：melifen
 * question:首页文字下滑动画还不够流畅，有待改进
 */
document.querySelector("a.home-introduction-aButton").addEventListener("click", function(e) {
    e.preventDefault();
    let targetID = this.getAttribute('href'); // 获取锚点链接的href值，例如"#header"
    let targetElement = document.querySelector(targetID); // 根据ID查询目标元素

    if (!targetElement) {
        console.error('Target element not found!');
        return;
    }
    smoothScroll(targetElement);
});

function smoothScroll(targetElement) {
    let start = null;
    function step(timestamp) {  
        if (!start) start = timestamp;

        const duration = 500; // 动画时长，例如800ms
        const elapsed = timestamp - start;

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;

        const scrollAmount = easeInOutCubic(elapsed, startPosition, distance, duration);

        window.scrollTo(0, scrollAmount);

        if (elapsed < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

function easeInOutCubic(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
}