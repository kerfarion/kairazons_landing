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
        html: ` <p>Мы знаем, что женская кожа требует особого, деликатного подхода. Этот станок, разработанный по передовым японским технологиям, превращает бритье в настоящую спа-процедуру.</p>
        <h2>Ключевые особенности:</h2>
        <ul>
            <li><strong>Технология 5 лезвий:</strong> Пять сверхострых лезвий из нержавеющей стали обеспечивают безупречно чистое бритье с первого движения, легко справляясь даже с тонкими волосками.</li>
            <li><strong>Интенсивное увлажнение:</strong> Широкая смазывающая полоска обогащена аргановым маслом и витамином Е, которые интенсивно питают, смягчают и защищают кожу прямо в процессе бритья.</li>
            <li><strong>Адаптация к контурам:</strong>  Плавающая головка точно повторяет каждый изгиб вашего тела, гарантируя комфорт и безопасность на самых сложных участках.</li>
            <li><strong>Уверенный контроль:</strong> Эргономичная прорезиненная ручка не скользит в руке, обеспечивая полный контроль даже в душе.</li>
        </ul>
        <p class="conclusion"><strong>KAI Moisturizing Razor</strong> — когда бритье становится частью ухода за собой.</p>
        <img src="images/logo.png" alt="KAI Logo" class="modal-article-logo">`
    },
    tshaped: {
        title: "KAI T-shaped Razor: Ювелирная точность для деликатных зон",
        html: `<p>Уход за зоной бикини требует хирургической точности и абсолютной безопасности. Мы создали специальный инструмент, который позволяет моделировать и ухаживать за этой деликатной областью без боли, порезов и раздражения.</p>
        <h2>Ключевые особенности:</h2>
        <ul>
            <li><strong>Абсолютная безопасность:</strong> Уникальная защитная решетка на лезвии не позволяет ему касаться кожи. Станок срезает только волоски, полностью исключая риск порезов.</li>
            <li><strong>Точное моделирование:</strong> Компактная Т-образная форма головки идеально подходит для создания четких линий и аккуратного бритья в труднодоступных местах.</li>
            <li><strong>Высокая эффективность:</strong> Острое лезвие легко приподнимает и срезает даже самые короткие волоски, обеспечивая идеальный результат надолго.</li>
            <li><strong>Долговечность:</strong> Одного острого лезвия хватает в среднем на 2 месяца использования, что делает этот станок не только удобным, но и экономичным.</li>
        </ul>
        <p class="conclusion"><strong>KAI T-shaped Razor</strong> — полный контроль и уверенность для самых деликатных задач.</p>
        <img src="images/logo.png" alt="KAI Logo" class="modal-article-logo">`
    },
    besty: {
        title: "KAI razor «Besty EX»: Технологии и комфорт в классическом исполнении",
        html: `<p>Для тех, кто ценит надежность, доведенную до совершенства. KAI «Besty EX» — это не просто одноразовая бритва, а продуманный инструмент для идеально чистого и комфортного бритья.</p>
        <h2>Ключевые особенности:</h2>
        <ul>
            <li><strong>Лезвия с двойным титановым покрытием:</strong> Обеспечивают невероятно легкое скольжение и продлевают остроту, бережно относясь к вашей коже.</li>
            <li><strong>Адаптивное бритье:</strong> Плавающая головка идеально повторяет контуры лица, а увлажняющая полоска с алоэ смягчает кожу, предотвращая раздражение.</li>
            <li><strong>Продуманная эргономика:</strong> Идеально сбалансированная ручка комфортно лежит в руке, давая вам полный контроль над каждым движением.</li>
            <li><strong>Гигиена и защита:</strong> Специальное антибактериальное покрытие защищает вашу кожу, делая процесс бритья максимально безопасным.</li>
        </ul>
        <p class="conclusion"><strong>KAI «Besty EX»</strong> — это интеллектуальный подход к ежедневным задачам.</p>
        <img src="images/logo.png" alt="KAI Logo" class="modal-article-logo">`
    },
    paper: {
        title: "Kai Paper Razor: Революция в бритье",
        html: `<p>Представляем первый в мире бритвенный станок, практически полностью созданный из бумаги! Kai Paper Razor — это наш ответ на вызовы времени и шаг в будущее осознанного потребления.</p>
        <h2>Ключевые особенности:</h2>
        <ul>
            <li><strong>100% Экологичность:</strong> Ручка и головка станка сделаны из прочного эко-картона. Никакого лишнего пластика — только забота о планете.</li>
            <li><strong>Инновационная конструкция:</strong> Станок весит всего 4 грамма и собирается за секунды, как оригами. Идеальное решение для путешествий, спортзала и тех, кто ценит минимализм.</li>
            <li><strong>Японская точность:</strong> Острое тройное лезвие из высококачественной нержавеющей стали гарантирует гладкое и чистое бритье, которого вы ожидаете от KAI.</li>
            <li><strong>Надежность:</strong> Специальное покрытие делает картон устойчивым к воде температурой до 40°, обеспечивая комфортное использование.</li>
        </ul>
        <p class="conclusion"><strong>Kai Paper Razor</strong> — ваш выбор, если вы цените инновации и заботитесь о будущем.</p>
        <img src="images/logo.png" alt="KAI Logo" class="modal-article-logo">`
    },
    'about-company': { title: "О компании KAI", html: `<p>Добро пожаловать в мир безупречного бритья с бритвами <strong>KAI</strong> — брендом, который сочетает вековые японские традиции мастерства с передовыми технологиями.</p><h2>Почему выбирают KAI?</h2><ul><li><strong>Премиальные материалы.</strong> Мы используем только высококачественные компоненты.</li><li><strong>Инновационные решения.</strong> Наши разработки обеспечивают комфортное бритьё.</li><li><strong>Забота о коже.</strong> Увлажняющие полоски с натуральными компонентами снижают раздражение.</li></ul><img src="images/logo.png" alt="KAI Logo" class="modal-article-logo">` },
    'contacts-company': { title: "Контакты организации", html: `<h2 class="modal-title">Контакты</h2><p class="contacts-heading">Телефоны и электронная почта:</p><p>Бесплатная консультация:<br>тел. +7 (800) 555-18-41</p><p><strong>Email:</strong> support@guerblades.ru</p><h2 class="modal-title">Реквизиты</h2><p><strong>ООО «РЯТИКО»</strong><br>ИНН 7728440338</p><img src="images/logo.png" alt="KAI Logo" class="modal-article-logo">` },
    'terms': { title: "Пользовательское соглашение", html: `<h2>ДОГОВОР ПУБЛИЧНОЙ ОФЕРТЫ</h2><p>Правила продажи товаров в Интернет-магазине...</p><img src="images/logo.png" alt="KAI Logo" class="modal-article-logo">`},
    'privacy': { title: "Политика конфиденциальности", html: `<p>Настоящий документ «Политика конфиденциальности и защита информации»...</p><img src="images/logo.png" alt="KAI Logo" class="modal-article-logo">`}
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

// ===== НОВЫЙ ДИЗАЙН МОДАЛЬНОГО ОКНА (ГАЛЕРЕЯ) =====
window.openProductModal = function(id) {
    const p = productsData[id];
    if (!p) return;
    const modal = document.getElementById('article-modal');
    const contentBox = document.getElementById('article-dynamic-content');
    
    const images = p.images;
    
    // Генерация ленты миниатюр
    let thumbsHtml = images.map((src, idx) => `
        <img src="${src}" class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="setModalMainImage(this, '${src}')" alt="thumb">
    `).join('');

    // Парсинг спецификаций в список, выделяя ключ (до двоеточия) жирным шрифтом
    let specsList = p.specs.split('•').map(s => {
        let text = s.trim();
        let formatted = text.replace(/(.*?):/, '<strong>$1</strong>:');
        return `<li>${formatted}</li>`;
    }).join('');

    contentBox.innerHTML = `
        <div class="product-modal-layout new-design">
            <div class="modal-left-col">
                <div class="modal-main-img-wrap">
                    <img src="${images[0]}" alt="${p.name}" class="modal-main-img" id="modal-main-img">
                </div>
                <div class="modal-thumbnails">
                    ${thumbsHtml}
                </div>
            </div>
            <div class="modal-right-col">
                <div class="modal-brand-tag">KAI BRAND</div>
                <h2 class="modal-title">${p.name}</h2>
                <div class="modal-price">${p.price} ₽</div>
                <div class="modal-description">${p.desc.replace(/\n/g, '<br>')}</div>
                <ul class="modal-specs-list">
                    ${specsList}
                </ul>
                <div class="modal-buttons-wrapper">
                    <a href="${p.wb_link}" class="modal-action-btn wb-btn" target="_blank">Wildberries</a>
                    <a href="${p.ozon_link}" class="modal-action-btn ozon-btn" target="_blank">Ozon</a>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
};

// Смена главного изображения по клику на миниатюру с эффектом fade
window.setModalMainImage = function(thumbEl, src) {
    document.querySelectorAll('.modal-thumb').forEach(el => el.classList.remove('active'));
    thumbEl.classList.add('active');
    
    const mainImg = document.getElementById('modal-main-img');
    mainImg.style.opacity = 0; // Плавное затухание
    
    setTimeout(() => {
        mainImg.src = src;
        mainImg.style.opacity = 1; // Плавное появление
    }, 200);
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

// ===== НАТИВНЫЙ БЕСКОНЕЧНЫЙ СЛАЙДЕР С ЦЕНТРИРОВАНИЕМ =====
function initVanillaCarousel(containerId, autoInterval = 2000, isCentered = false) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const track = container.querySelector('.custom-carousel-track');
    if (!track) return;

    const originalItems = Array.from(track.children);
    if (originalItems.length === 0) return;

    track.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        originalItems.forEach(item => {
            track.appendChild(item.cloneNode(true));
        });
    }

    let isAnimating = false;
    const ACTIVE_INDEX = originalItems.length; 

    function updatePosition(smooth = false) {
        const activeItem = track.children[ACTIVE_INDEX];
        let offset = 0;

        if (isCentered) {
            const containerCenter = container.clientWidth / 2;
            const itemCenter = activeItem.offsetLeft + (activeItem.offsetWidth / 2);
            offset = itemCenter - containerCenter;
        } else {
            offset = activeItem.offsetLeft;
        }

        track.style.transition = smooth ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
        track.style.transform = `translateX(-${offset}px)`;
    }

    setTimeout(() => updatePosition(false), 50);

    window.addEventListener('resize', () => {
        if (!isAnimating) updatePosition(false);
    });

    function nextSlide() {
        if (isAnimating || document.hidden) return;
        isAnimating = true;

        const nextItem = track.children[ACTIVE_INDEX + 1];
        let targetOffset = 0;

        if (isCentered) {
            const containerCenter = container.clientWidth / 2;
            const nextItemCenter = nextItem.offsetLeft + (nextItem.offsetWidth / 2);
            targetOffset = nextItemCenter - containerCenter;
        } else {
            targetOffset = nextItem.offsetLeft;
        }

        track.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        track.style.transform = `translateX(-${targetOffset}px)`;

        setTimeout(() => {
            track.appendChild(track.firstElementChild);
            updatePosition(false);
            void track.offsetWidth;
            isAnimating = false;
        }, 600);
    }

    setInterval(nextSlide, autoInterval);
}

// ==== ОФОРМЛЕНИЕ КУРСОРА ==== //
function initSakuraCursorShadow() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const petal = document.getElementById('sakura-cursor-shadow');
    if (!petal) return;

    let targetX = -100, targetY = -100;
    let currentX = -100, currentY = -100;
    let rotation = 0;

    window.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
        if (!petal.classList.contains('active')) {
            petal.classList.add('active');
        }
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        petal.classList.remove('active');
    });

    function render() {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        rotation += 0.4;
        petal.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotation}deg)`;
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}

// ===== ИНДИКАТОР ПРОГРЕССА ПРОКРУТКИ СТРАНИЦЫ =====
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) return;
    let ticking = false;

    function updateProgress() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
        progressBar.style.transform = `scaleX(${progress})`;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }, { passive: true });
}

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
    initScrollProgress();
    initSakuraCursorShadow();
    initVanillaCarousel('heroCarousel', 1500, true);
    initVanillaCarousel('partnersCarousel', 2000, false);
});