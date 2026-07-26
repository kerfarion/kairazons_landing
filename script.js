// ===== ДАННЫЕ ТОВАРОВ =====
const productsData = {
    1: {
        name: "Одноразовый бритвенный станок с плавающей головкой с двойным лезвием, 2 шт.",
        price: 350,
        imageCount: 4,
        desc: "Бритва, оснащенная лезвиями особой формы и двойным титановым покрытием — они обеспечивают безупречное скольжение и бережный контакт с кожей.\n\n— Эргономичная ручка с идеальным балансом — удобно лежит в руке.\n— Плавающая головка и полоски с алоэ — мягкое скольжение без раздражения.\n— Антибактериальное покрытие — защита кожи после каждого движения.",
        specs: "Количество в упаковке: 2 шт. • Число лезвий: 2 • Покрытие: двойное титановое • Полоски: с алоэ • Антибактериальное покрытие",
        wb_link: "https://www.wildberries.ru/catalog/474774443/detail.aspx?targetUrl=SN",
        ozon_link: "https://ozon.ru/t/8DyouVX"
    },
    2: {
        name: "Одноразовый бритвенный станок из эко-картона с тройным лезвием из нержавеющей стали",
        price: 350,
        imageCount: 4,
        desc: "Первый в мире бритвенный станок без использования пластика! Благодаря плоской упаковке станок весит всего 4 грамма, а защитное покрытие обеспечивает сохранность картона в температуре воды до 40°.\n\n— Тройное лезвие из японской стали — гладкое и точное бритьё.\n— Собирается как оригами — удобно брать в путешествия.\n— 0% пластика — забота о коже и планете.",
        specs: "Материал ручки: эко-картон • Число лезвий: 3 • Вес: 4 г • Водостойкость картона: до 40°C • 0% пластика",
        wb_link: "https://www.wildberries.ru/catalog/474499281/detail.aspx?targetUrl=SN",
        ozon_link: "https://ozon.ru/t/wWN5vof"
    },
    'black': {
        name: "Т-образный одноразовый станок для зоны бикини, 2 шт.",
        price: 390,
        imageCount: 3,
        desc: "Специально для деликатной зоны бикини — безопасный и безболезненный способ удаления волосков.\n— Защитная решетка — лезвие не касается кожи, только волоски\n— Приподнимает и срезает даже самые короткие волоски\n— Т-образная форма — для точного моделирования стрижки\n— Острое лезвие — хватает на 2 месяца использования\n— Компактная головка — для аккуратного бритья в труднодоступных местах",
        specs: "Количество в упаковке: 2 шт. • Тип: Т-образный • Защитная решетка • Срок службы лезвия: до 2 месяцев • Компактная головка",
        wb_link: "https://www.wildberries.ru/catalog/525521253/detail.aspx?size=725075125",
        ozon_link: "https://ozon.ru/t/wGXDjZU"
    },
    3: {
        name: "Водостойкий одноразовый бритвенный станок с 5 лезвиями и увлажняющей полоской для женщин, 3 шт.",
        price: 990,
        imageCount: 3,
        desc: "Станок, разработанный по японским технологиям, специально для нежной женской кожи, идеально подходит для ног, подмышек и области бикини.\n\n— 5 острых лезвий из нержавеющей стали — безупречное скольжение даже по самым тонким волоскам.\n— Плавающая головка — точно повторяет контуры тела для комфортного бритья.\n— Увлажняющая полоска с аргановым маслом и витамином Е — смягчает и защищает кожу.\n— Прорезиненная ручка — удобно лежит в руке даже в душе.",
        specs: "Количество в упаковке: 3 шт. • Число лезвий: 5 • Материал лезвий: шведская нержавеющая сталь • Полоска: аргановое масло + витамин Е • Ручка: прорезиненная",
        wb_link: "https://www.wildberries.ru/catalog/525515822/detail.aspx?size=725069568",
        ozon_link: "https://ozon.ru/t/NB2njKP"
    },
    'eco': {
        name: "Женский одноразовый станок для бритья, 2 шт.",
        price: 390,
        imageCount: 5,
        desc: "— Особая конструкция с компактной головкой гарантирует, что лезвие не касается кожи напрямую, предотвращая порезы и раздражение.\n— Специальная решётка разглаживает кожу и приподнимает волоски, обеспечивая максимально чистое и комфортное бритьё.\n— Острое лезвие гарантирует эффективное использование станка до 2 месяцев (при регулярном использовании).\n— Станок легко промывается под водой.",
        specs: "Количество в упаковке: 2 шт. • Тип: женский • Компактная головка • Срок службы лезвия: до 2 месяцев • Легко промывается",
        wb_link: "https://www.wildberries.ru/catalog/708499508/detail.aspx?size=989278213",
        ozon_link: "https://ozon.ru/t/iNbyGUP"
    }
};

const productIdToNumber = { 1: 1, 2: 2, 'black': 3, 3: 4, 'eco': 5 };

function generateImagesArray(productId, count) {
    const number = productIdToNumber[productId];
    const images = [];
    for (let i = 1; i <= count; i++) { images.push(`images/product${number}_${i}.png`); }
    return images;
}

Object.keys(productsData).forEach(key => {
    const product = productsData[key];
    product.images = generateImagesArray(key, product.imageCount);
});

const articlesData = {
    moisturizing: {
        title: "KAI Moisturizing Razor: Роскошный уход и безупречная гладкость для Неё",
        html: `<p>Мы знаем, что женская кожа требует особого, деликатного подхода...</p>`
    },
    tshaped: {
        title: "KAI T-shaped Razor: Ювелирная точность для деликатных зон",
        html: `<p>Уход за зоной бикини требует хирургической точности...</p>`
    },
    besty: {
        title: "KAI razor «Besty EX»: Технологии и комфорт в классическом исполнении",
        html: `<p>Для тех, кто ценит надежность...</p>`
    },
    paper: {
        title: "Kai Paper Razor: Революция в бритье. Забота о коже и планете.",
        html: `<p>Представляем первый в мире бритвенный станок...</p>`
    },
    'about-company': { title: "О компании KAI", html: "<p>Добро пожаловать в мир безупречного бритья...</p>" },
    'contacts-company': { title: "Контакты организации", html: "<p>ООО РЯТИКО. Москва, Ленинский проспект 111. Тел: 8 (800) 555-18-41</p>" }
};

// ===== СЛАЙДЕРЫ В КАРТОЧКАХ =====
function initCardSliders() {
    const productCards = document.querySelectorAll('.product-card-fixed[data-id]');
    productCards.forEach(card => {
        const id = card.getAttribute('data-id');
        const p = productsData[id];
        if (!p || !p.images || p.images.length < 2) return;
        
        const wrapper = card.querySelector('.product-img-wrapper');
        const existingImg = wrapper.querySelector('.product-img');
        if (!existingImg) return;
        
        const track = document.createElement('div');
        track.className = 'slider-track';
        
        const imgCurrent = document.createElement('img');
        imgCurrent.className = 'product-img img-current';
        imgCurrent.src = p.images[0];
        imgCurrent.alt = existingImg.alt;
        
        const imgNext = document.createElement('img');
        imgNext.className = 'product-img img-next';
        imgNext.src = p.images[1];
        imgNext.alt = existingImg.alt;
        
        track.appendChild(imgCurrent);
        track.appendChild(imgNext);
        wrapper.replaceChild(track, existingImg);
        
        card.dataset.currentIndex = 0;
        card.dataset.images = JSON.stringify(p.images);
        card.dataset.slideInterval = null;
        
        startAutoSlide(card);
        initDrag(card, wrapper);
    });
}

function initDrag(card, wrapper) {
    let isDragging = false, startX = 0, startY = 0, moved = false, threshold = 30;

    const onStart = (e) => {
        const ev = e.type.startsWith('touch') ? e.touches[0] : e;
        isDragging = true; startX = ev.clientX; startY = ev.clientY; moved = false;
        wrapper.style.cursor = 'grabbing';
    };

    const onMove = (e) => {
        if (!isDragging) return;
        const ev = e.type.startsWith('touch') ? e.touches[0] : e;
        const dx = ev.clientX - startX; const dy = ev.clientY - startY;
        if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) return;
        if (Math.abs(dx) < Math.abs(dy)) return;
        moved = true; const dir = dx > 0 ? -1 : 1;
        stopAutoSlide(card); slideCard(card, dir);
        isDragging = false; wrapper.style.cursor = 'grab';
        setTimeout(() => startAutoSlide(card), 3000);
    };

    const onEnd = () => { isDragging = false; wrapper.style.cursor = 'grab'; };

    wrapper.addEventListener('mousedown', onStart);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onEnd);
    wrapper.addEventListener('touchstart', onStart, { passive: true });
    document.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('touchend', onEnd, { passive: true });
}

function slideCard(card, dir) {
    const track = card.querySelector('.slider-track');
    if (!track) return;
    const images = JSON.parse(card.dataset.images);
    if (images.length < 2) return;
    
    let currentIdx = parseInt(card.dataset.currentIndex);
    let nextIdx = (currentIdx + dir + images.length) % images.length;
    
    const imgCurrent = track.querySelector('.img-current');
    const imgNext = track.querySelector('.img-next');
    
    imgNext.src = images[nextIdx];
    imgCurrent.classList.remove('slide-left', 'slide-right');
    imgNext.classList.remove('slide-left', 'slide-right');
    
    if (dir === 1) { imgNext.style.transform = 'translateX(100%)'; imgNext.classList.add('img-next'); } 
    else { imgNext.style.transform = 'translateX(-100%)'; imgNext.classList.add('img-next'); }
    
    void imgNext.offsetWidth;
    
    if (dir === 1) { imgCurrent.classList.add('slide-right'); imgNext.style.transform = 'translateX(0)'; imgNext.classList.remove('img-next'); } 
    else { imgCurrent.classList.add('slide-left'); imgNext.style.transform = 'translateX(0)'; imgNext.classList.remove('img-next'); }
    
    setTimeout(() => {
        imgCurrent.classList.remove('img-current', 'slide-left', 'slide-right');
        imgNext.classList.add('img-current'); imgNext.classList.remove('img-next');
        imgCurrent.style.transform = ''; imgNext.style.transform = '';
        card.dataset.currentIndex = nextIdx;
        const nextNextIdx = (nextIdx + 1) % images.length;
        imgCurrent.src = images[nextNextIdx]; imgCurrent.classList.add('img-next');
        imgCurrent.style.transform = 'translateX(100%)';
    }, 400);
}

function startAutoSlide(card) {
    if (card.dataset.slideInterval) return;
    const images = JSON.parse(card.dataset.images);
    if (images.length < 2) return;
    card.dataset.slideInterval = setInterval(() => { slideCard(card, 1); }, 5000);
}

function stopAutoSlide(card) {
    if (card.dataset.slideInterval) { clearInterval(card.dataset.slideInterval); card.dataset.slideInterval = null; }
}

window.changeImage = function(event, btn, productId, dir) {
    if (event) event.stopPropagation();
    const card = btn.closest('.product-card-fixed');
    if (!card) return;
    stopAutoSlide(card); slideCard(card, dir);
    setTimeout(() => startAutoSlide(card), 3000);
};

// =========================================
// ===== НОВЫЙ ДИЗАЙН МОДАЛЬНОГО ОКНА =====
// =========================================

window.openProductModal = function(id) {
    const p = productsData[id];
    if (!p) return;
    const modal = document.getElementById('article-modal');
    const contentBox = document.getElementById('article-dynamic-content');
    
    const images = p.images;
    const hasMultiple = images.length > 1;
    
    // Левая часть: большое фото и стрелки '<' и '>'
    let galleryHtml = `<div class="product-modal-gallery">`;
    if (hasMultiple) {
        galleryHtml += `<button class="modal-slider-arrow prev" onclick="changeModalImage(this, -1)">&lsaquo;</button>`;
    }
    galleryHtml += `<img src="${images[0]}" alt="${p.name}" class="modal-product-img" id="modal-product-img">`;
    if (hasMultiple) {
        galleryHtml += `<button class="modal-slider-arrow next" onclick="changeModalImage(this, 1)">&rsaquo;</button>`;
    }
    galleryHtml += `</div>`;
    
    // Вся верстка: разделение пополам (layout), типографика и акцентные кнопки внизу
    contentBox.innerHTML = `
        <div class="product-modal-layout">
            ${galleryHtml}
            <div class="product-modal-details">
                <h2 class="modal-title">${p.name}</h2>
                <div class="modal-price">${p.price} ₽</div>
                
                <!-- Описание и буллиты из properties -->
                <div class="modal-description">${p.desc}</div>
                
                <div class="modal-buttons-wrapper">
                    <a href="${p.wb_link}" class="modal-action-btn wb-btn" target="_blank">Wildberries</a>
                    <a href="${p.ozon_link}" class="modal-action-btn ozon-btn" target="_blank">Ozon</a>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    modal.dataset.currentImageIndex = 0;
    modal.dataset.productId = id;
};

window.changeModalImage = function(btn, dir) {
    const modal = document.getElementById('article-modal');
    const img = modal.querySelector('#modal-product-img');
    const currentIndex = parseInt(modal.dataset.currentImageIndex);
    const id = modal.dataset.productId;
    const p = productsData[id];
    if (!p || !p.images || p.images.length < 2) return;
    
    let newIndex = (currentIndex + dir + p.images.length) % p.images.length;
    modal.dataset.currentImageIndex = newIndex;
    
    img.style.opacity = 0;
    setTimeout(() => {
        img.setAttribute('src', p.images[newIndex]);
        img.style.opacity = 1;
    }, 250);
};

window.openArticle = function(key) {
    const modal = document.getElementById('article-modal');
    const contentBox = document.getElementById('article-dynamic-content');
    const data = articlesData[key];
    if (data) {
        contentBox.innerHTML = `
            <div class="modal-article-body">
                <h2>${data.title}</h2>
                <div>${data.html}</div>
            </div>
        `;
        modal.classList.add('active');
    }
};

window.openInfoModal = function(key) { window.openArticle(key); };

window.closeArticle = function() { document.getElementById('article-modal').classList.remove('active'); };
document.addEventListener('keydown', function(e) { if (e.key === 'Escape') window.closeArticle(); });

// ===== ЗАПУСК ПОСЛЕ ЗАГРУЗКИ =====
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = { root: null, rootMargin: "0px 0px -50px 0px", threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add("active"); obs.unobserve(entry.target); }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .section-subtitle, .market-title, .partners-title').forEach(el => {
        el.classList.add('reveal-top-down'); observer.observe(el);
    });

    const contentBlocks = [
        document.querySelectorAll('.product-card-fixed'),
        document.querySelectorAll('.blog-card-fixed'),
        document.querySelectorAll('.review-item'),
        document.querySelectorAll('.market-btn')
    ];
    contentBlocks.forEach(nodeList => {
        nodeList.forEach((el, index) => {
            el.classList.add('reveal-left-right'); el.style.transitionDelay = `${index * 0.15}s`; observer.observe(el);
        });
    });

    initCardSliders();

    const heroSwiper = new Swiper('.hero-swiper', {
        loop: true, slidesPerView: 'auto', centeredSlides: true,
        autoplay: { delay: 1500, disableOnInteraction: false }, speed: 800,
        breakpoints: { 320: { spaceBetween: 30 }, 600: { spaceBetween: 50 }, 992: { spaceBetween: 80 } }
    });

    const partnersSwiper = new Swiper('.partners-swiper', {
        loop: true, autoplay: { delay: 2000, disableOnInteraction: false }, speed: 800,
        breakpoints: { 320: { slidesPerView: 2, spaceBetween: 20 }, 480: { slidesPerView: 3, spaceBetween: 30 }, 768: { slidesPerView: 4, spaceBetween: 40 }, 1024: { slidesPerView: 5, spaceBetween: 50 } }
    });
});