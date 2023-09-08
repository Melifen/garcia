document.querySelectorAll('.recent_post-item').forEach(item => {
    item.addEventListener('mousemove', function (e) {
        let width = this.offsetWidth;
        let height = this.offsetHeight;
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;

        let rotateY = (mouseX / width - 0.5) * 40;
        let rotateX = -1* (mouseY / height - 0.5) * 40;
        this.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    })
});

document.querySelectorAll('.recent_post-item').forEach((item)=>{
    item.addEventListener('mouseleave', function () {
        this.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
})   