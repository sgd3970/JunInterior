// 네비게이션 바 색상 변경 함수
function updateNavbarColor() {
    const mainNav = document.getElementById('mainNav');
    if (!mainNav) return;

    if (window.scrollY > 50) {
        mainNav.classList.add('navbar-scrolled');
    } else {
        mainNav.classList.remove('navbar-scrolled');
    }
}

// 네비게이션 바 토글 기능
function initNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // 네비게이션 링크 클릭시 메뉴 닫기
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbarCollapse.classList.remove('show');
            });
        });
    }
}

// 페이지 로드시 실행
document.addEventListener('DOMContentLoaded', () => {
    // 네비게이션 바 초기화
    initNavbar();

    // 스크롤 이벤트에 따른 네비게이션 바 색상 변경
    window.addEventListener('scroll', updateNavbarColor);
    updateNavbarColor(); // 초기 상태 설정
});

// 현재 페이지 네비게이션 링크 활성화
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}); 