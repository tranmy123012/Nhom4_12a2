document.addEventListener('DOMContentLoaded', function() {
    // Hiệu ứng cuộn trang: khi người dùng cuộn, các phần tử sẽ từ từ xuất hiện từ trái/phải
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    function scrollEffect() {
        scrollElements.forEach(function(element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', scrollEffect);
    scrollEffect(); // Gọi hàm lần đầu tiên khi trang được tải

    // Hiệu ứng click thay đổi giao diện: Mở rộng và thu nhỏ phần tử
    const toggleButton = document.querySelector('.toggle-btn');
    const toggleContent = document.querySelector('.toggle-content');

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            toggleContent.classList.toggle('active');
            if (toggleContent.classList.contains('active')) {
                toggleContent.style.maxHeight = toggleContent.scrollHeight + "px";
            } else {
                toggleContent.style.maxHeight = "0px";
            }
        });
    }

    // Hiệu ứng hover cho các phần tử hình ảnh: hình ảnh thay đổi màu sắc khi di chuột vào
    const images = document.querySelectorAll('.image-gallery img');
    images.forEach(function(image) {
        image.addEventListener('mouseenter', function() {
            image.style.filter = 'brightness(80%)';
            image.style.transition = 'filter 0.3s ease';
        });

        image.addEventListener('mouseleave', function() {
            image.style.filter = 'brightness(100%)';
        });
    });

    // Hiệu ứng chuyển động cho nút: khi nhấn vào sẽ di chuyển một chút
    const buttons = document.querySelectorAll('.move-btn');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.add('clicked');
            setTimeout(() => {
                button.classList.remove('clicked');
            }, 300); // Thời gian di chuyển nút sau khi nhấn
        });
    });
});
