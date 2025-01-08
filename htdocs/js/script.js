(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('scroll_2').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('scroll_2').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('scroll_2').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('scroll_2').attachEvent('onmousewheel', scrollHorizontally);
    }
})();

(function() {
    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.scrollLeft -= (delta * 40); // Multiplied by 40
        e.preventDefault();
    }
    if (document.getElementById('scroll').addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById('scroll').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('scroll').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        // IE 6/7/8
        document.getElementById('scroll').attachEvent('onmousewheel', scrollHorizontally);
    }
})();

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

window.onload = function(){
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none'; // Immediately hide preloader
}

window.addEventListener('load', function() {
    // Log timing metrics
    const timing = window.performance.timing;
    const loadTime = timing.loadEventEnd - timing.navigationStart;
    console.log('Page load time:', loadTime);
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

document.addEventListener('DOMContentLoaded', function() {
    const priceFromInput = document.querySelector('.from');
    const priceToInput = document.querySelector('.to');
    const searchInput = document.getElementById('search');
    const products = document.querySelectorAll('.t_shirt_confused');
    const noResults = document.querySelector('.no-results');

    // Создаем элемент для сообщения об отсутствии результатов
    const noResultsDiv = document.createElement('div');
    noResultsDiv.className = 'no-results';
    noResultsDiv.textContent = 'Товары не найдены';
    noResultsDiv.style.display = 'none';
    document.querySelector('.horizontal_cards').appendChild(noResultsDiv);

    // Функция фильтрации по цене и названию
    function filterProducts() {
        let minPrice = parseFloat(priceFromInput.value) || 0;
        let maxPrice = parseFloat(priceToInput.value) || Infinity;
        let searchText = searchInput.value.toLowerCase();
        let hasVisibleProducts = false;

        products.forEach(product => {
            const priceText = product.querySelector('.txt_card a').textContent;
            // Извлекаем цену из текста (например, из "t-shirt confused 2 200р.")
            const priceMatch = priceText.match(/(\d+\s*\d*)/);
            const productName = priceText.toLowerCase();

            if (priceMatch) {
                const price = parseFloat(priceMatch[0].replace(/\s/g, ''));

                if (price >= minPrice && price <= maxPrice && productName.includes(searchText)) {
                    product.style.display = '';
                    hasVisibleProducts = true;
                } else {
                    product.style.display = 'none';
                }
            }
        });

        noResultsDiv.style.display = hasVisibleProducts ? 'none' : 'block';
    }

    // Добавляем обработчики событий для инпутов цены и поиска
    priceFromInput.addEventListener('input', filterProducts);
    priceToInput.addEventListener('input', filterProducts);
    searchInput.addEventListener('input', filterProducts);

    // Валидация ввода: только цифры и пробелы для цен
    function validateInput(event) {
        if (!/[\d\s]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
            event.preventDefault();
        }
    }

    priceFromInput.addEventListener('keypress', validateInput);
    priceToInput.addEventListener('keypress', validateInput);

    // Сброс фильтра при очистке полей
    priceFromInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            priceFromInput.value = '';
            filterProducts();
        }
    });

    priceToInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            priceToInput.value = '';
            filterProducts();
        }
    });

    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            filterProducts();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const priceFromInput = document.querySelector('.from-menu');
    const priceToInput = document.querySelector('.to-menu');
    const searchInput = document.getElementById('search-menu');
    const products = document.querySelectorAll('.t_shirt_confused');
    const noResults = document.querySelector('.no-results');

    // Создаем элемент для сообщения об отсутствии результатов
    const noResultsDiv = document.createElement('div');
    noResultsDiv.className = 'no-results';
    noResultsDiv.textContent = 'Товары не найдены';
    noResultsDiv.style.display = 'none';
    document.querySelector('.horizontal_cards').appendChild(noResultsDiv);

    // Функция фильтрации по цене и названию
    function filterProducts() {
        let minPrice = parseFloat(priceFromInput.value) || 0;
        let maxPrice = parseFloat(priceToInput.value) || Infinity;
        let searchText = searchInput.value.toLowerCase();
        let hasVisibleProducts = false;

        products.forEach(product => {
            const priceText = product.querySelector('.txt_card a').textContent;
            // Извлекаем цену из текста (например, из "t-shirt confused 2 200р.")
            const priceMatch = priceText.match(/(\d+\s*\d*)/);
            const productName = priceText.toLowerCase();

            if (priceMatch) {
                const price = parseFloat(priceMatch[0].replace(/\s/g, ''));

                if (price >= minPrice && price <= maxPrice && productName.includes(searchText)) {
                    product.style.display = '';
                    hasVisibleProducts = true;
                } else {
                    product.style.display = 'none';
                }
            }
        });

        noResultsDiv.style.display = hasVisibleProducts ? 'none' : 'block';
    }

    // Добавляем обработчики событий для инпутов цены и поиска
    priceFromInput.addEventListener('input', filterProducts);
    priceToInput.addEventListener('input', filterProducts);
    searchInput.addEventListener('input', filterProducts);

    // Валидация ввода: только цифры и пробелы для цен
    function validateInput(event) {
        if (!/[\d\s]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Delete') {
            event.preventDefault();
        }
    }

    priceFromInput.addEventListener('keypress', validateInput);
    priceToInput.addEventListener('keypress', validateInput);

    // Сброс фильтра при очистке полей
    priceFromInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            priceFromInput.value = '';
            filterProducts();
        }
    });

    priceToInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            priceToInput.value = '';
            filterProducts();
        }
    });

    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Escape') {
            searchInput.value = '';
            filterProducts();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById("preloader");
    const loadingPercentage = document.getElementById("loading-percentage");

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
            preloader.classList.add('hide-preloader');
            setTimeout(() => {
                preloader.classList.add('preloader-hiden');
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

document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.getElementById('filterButton');
    const dropdownContent = document.getElementById('dropdownContent');
    const arrowIcon = document.getElementById('arrowIcon');

    filterButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
        arrowIcon.classList.toggle('rotate');
    });

    // Закрываем выпадающий список при клике вне его
    window.addEventListener('click', function(event) {
        if (!filterButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove('show');
            arrowIcon.classList.remove('rotate');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const filterCheckboxes = document.querySelectorAll('.custom-checkbox');
    const stores = document.querySelectorAll('.store_wrap_for_filter');

    // Функция для фильтрации магазинов
    function filterStores() {
        const selectedFilters = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        stores.forEach(store => {
            const storeTags = store.getAttribute('data-tags').split(' ');
            const isVisible = selectedFilters.length === 0 || selectedFilters.some(filter => storeTags.includes(filter));

            store.style.display = isVisible ? '' : 'none';
        });
    }

    // Добавляем обработчики событий для чекбоксов
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterStores);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownElement = document.querySelector('.dropdown');
    const dropdownButton = document.querySelector('[data-bs-toggle="dropdown"]');

    function initializeDropdown() {
        if (window.innerWidth <= 768) {
            // Инициализируем dropdown только на мобильных устройствах
            new bootstrap.Dropdown(dropdownButton);
        } else {
            // Скрываем dropdown на десктопах
            bootstrap.Dropdown.getInstance(dropdownButton)?.hide();
        }
    }

    // Инициализация при загрузке страницы
    initializeDropdown();

    // Инициализация при изменении размера окна
    window.addEventListener('resize', initializeDropdown);
});

document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.querySelector('[data-bs-toggle="dropdown"]');
    if (dropdownButton) {
        new bootstrap.Dropdown(dropdownButton);
    }
});
document.querySelectorAll('img.save').forEach(function(saveButton) {
    let isOriginal = true;
      saveButton.addEventListener('click', function(event) {
        const productId = saveButton.dataset.productId;

        if (isOriginal) {
          saveButton.src = 'img/unsave.webp';
          saveButton.alt = "unsave icon";
        } else {
          saveButton.src = 'img/save.webp';
          saveButton.alt = "save icon";
        }
          isOriginal = !isOriginal;

      fetch('lib/user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: productId,
          action: 'add'
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
        .then(data => {
          if (data.success) {
           console.log('product save successfully')
          }
          else {
            console.error('Failed to save product:', data.error);
          }
        })
      .catch(error => {
        console.error('Error during fetch operation:', error);
      });
    });
  });

    document.querySelectorAll('button.remove-product').forEach(function(removeButton) {
        removeButton.addEventListener('click', function(event) {
            const productId = removeButton.dataset.productId;

            fetch('lib/user.php', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                productId: productId,
                action: 'remove'
                })
            })
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
                .then(data => {
                    if (data.success) {
                    console.log('product removed successfully')
                    removeButton.closest('.t_shirt_confused').remove();
                    } else {
                    console.error('Failed to remove product:', data.error);
                    }
                })
            .catch(error => {
                console.error('Error during fetch operation:', error);
            });
        });
    });