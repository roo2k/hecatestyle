const imgs = document.querySelector('.imgs');
let scrollLine = document.querySelector('.scroll');

imgs.addEventListener('wheel', (e)=> {
    e.preventDefault();
    imgs.scrollLeft += e.deltaY;
    scrollLine.style.width = imgs.scrollLeft / 2 + 'px';
})
document.querySelector('#show-login').addEventListener("click", function(){
    document.querySelector('.popup').classList.add('active');
});
document.querySelector('.popup .close-btn').addEventListener("click", function(){
    document.querySelector('.popup').classList.remove('active');
});
document.querySelector('#show-reg').addEventListener("click", function(){
    document.querySelector('.popup-reg').classList.add('active');
});
document.querySelector('.popup-reg .close-btn').addEventListener("click", function(){
    document.querySelector('.popup-reg').classList.remove('active');
});
document.querySelector('#show-offer').addEventListener("click", function(){
    document.querySelector('.popup-offer-design').classList.add('active');
});
document.querySelector('.popup-offer-design .close-btn').addEventListener("click", function(){
    document.querySelector('.popup-offer-design').classList.remove('active');
});

$(window).on('load pageshow', function () {
    $('.blocks_wrap').removeClass("off");
    $('.blocks_wrap').addClass("on"); 
});    
$("a:not([href*=javascript]):not([href*=\\#]):not(.fancybox):not([target]):not([data-fancybox])").click(function() {
    $('.blocks_wrap').removeClass("on");
    $('.blocks_wrap').addClass("off"); 
    let url = $(this).attr('href');
    window.setTimeout(function() {
        window.location.href = url;
    }, 400);    
    return false;
});

document.addEventListener('DOMContentLoaded', function() {
    // Wrap main content
    const mainContent = document.querySelector('.blocks_wrap_wrap');
    if (mainContent) {
        mainContent.classList.add('page-transition', 'fade-in');
    }

    // Handle link clicks
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        
        if (link && 
            link.href && 
            !link.href.includes('#') && 
            !link.href.includes('javascript:') && 
            link.href.startsWith(window.location.origin)) {
                
            e.preventDefault();
            
            if (mainContent) {
                mainContent.classList.add('fade-out');
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            } else {
                window.location.href = link.href;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById("preloader_main");
    const loadingPercentage = document.getElementById("loading-percentage_main");

    // Список всех ресурсов, которые нужно загрузить
    const resources = [
        'img/hslogo.webp',
        'img/hsbg.webp',
        'img/chain.webp',
        'img/search_icon.webp',
        'img/close_btn.webp',
        'img/hs_confused.webp',
        'img/long_holysf.webp',
        'img/hoodie_spider.webp',
        'img/velour_basic_hs.webp',
        'img/long_basic_hs.webp',
        'img/tshirt_basic_hs.webp',
        'img/long_spider_hs.webp',
        'img/hell_hs.webp',
        'img/confused_white_hs.webp',
        'img/hs_juzo.webp',
        'img/hs_longxhiki.webp',
        'img/hs_kaneki.webp',
        'img/hs_chrollo.webp',
        'img/hs_killme.webp',
        'img/hs_velour_white_sleeve.webp',
        'img/hs_sin.webp',
        'img/hs_curse.webp',
        'img/hs_false.webp',
        'img/long_confused.webp',
        'img/tree_hs.webp',
        'img/t_shirt_juzo_hs.webp',
        'img/redan_hs.webp',
        'img/tree_velour_hs.webp',
        'img/basic_wh_hs.webp',
        'img/long_juzo_wh_hs.webp',
        'img/hs_killme2.webp',
        'img/hs_shopper.webp',
        'js/script.js',
        'js/script_buypage.js',
        // 'https://yandex.ru/ads/system/context.js',
        // 'https://mc.yandex.ru/metrika/tag.js'
    ];

    let loadedResources = 0;

    // Функция для обновления процента загрузки
    function updateLoadingPercentage() {
        const percentage = Math.round((loadedResources / resources.length) * 100);
        loadingPercentage.textContent = `${percentage}%`;

        if (loadedResources === resources.length) {
            // Когда все ресурсы загружены, скрываем прелоадер
            preloader_main.classList.add('hide-preloader');
            setTimeout(() => {
                preloader_main.classList.add('preloader-hiden');
            }, 300);
        }
    }

    // Загружаем каждый ресурс и обновляем прогресс
    resources.forEach(resource => {
        const element = resource.endsWith('.css') ? document.createElement('link') : document.createElement('script');
        if (resource.endsWith('.css')) {
            element.rel = 'stylesheet';
            element.href = resource;
        } else {
            element.src = resource;
        }

        element.onload = () => {
            loadedResources++;
            updateLoadingPercentage();
        };

        element.onerror = () => {
            loadedResources++;
            updateLoadingPercentage();
        };

        document.head.appendChild(element);
    });
});
