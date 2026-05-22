// =============================
// 1. DATA
// =============================
const LOAN_PRODUCTS = [
  {
    id: "FE001",
    company: "FE Credit",
    logo: "images/fe.png",
    highlight: "Thông tin vay tiêu dùng tham khảo - Hồ sơ theo quy định từng đơn vị",
    min: 10,
    max: 100,
    duration: "6 - 36",
    disbursement: "Tùy hồ sơ",
    interest: "1.16%",
    reqs: ["Tư vấn hồ sơ", "Điều kiện tùy sản phẩm", "Đăng ký online", "Hỗ trợ đa kênh"],
    link: "https://fin.mfast.vn/?pageID=6719013&platform=mfast",
    specialClass: "card-border-orange card-bg-green-light",
    limitGroup: "50-100",
    timeGroup: "short",
    conditionGroup: "no-income-proof",
    popularity: 1,
    rateNumber: 1.16,
    maxLimit: 100,
  },
  {
    id: "SHB001",
    company: "SHB Finance",
    logo: "images/shb.png",
    highlight: "Hồ sơ linh hoạt - Thời gian xử lý tùy thuộc từng hồ sơ",
    min: 10,
    max: 100,
    duration: "6–48",
    disbursement: "Tùy hồ sơ",
    interest: "0.9%",
    reqs: ["Hỗ trợ đa kênh", "Điều kiện tùy sản phẩm", "Tư vấn hồ sơ"],
    link: "https://appay.cloudcms.vn/finance/shb_leadgen_direct/onboarding?code=6719013",
    specialBadge: "Thông tin tham khảo",
    specialClass: "card-bg-yellow-light",
    limitGroup: "50-100",
    timeGroup: "day",
    conditionGroup: "bad-debt",
    popularity: 2,
    rateNumber: 0.9,
    maxLimit: 100,
  },
  {
    id: "TNEX001",
    company: "TNEX",
    logo: "images/tnex.png",
    highlight: "Đăng ký online - Quy trình xử lý theo chính sách TNEX",
    min: 5,
    max: 70,
    duration: "3–24",
    disbursement: "2 giờ",
    interest: "1.05%",
    reqs: ["Đăng ký online", "Quy trình theo sản phẩm"],
    link: "https://sc.mfast.vn/tnex_lending?code=6719013",
    showDurationInThirdColumn: true,
    limitGroup: "50-100",
    timeGroup: "short",
    conditionGroup: "no-income-proof",
    popularity: 3,
    rateNumber: 1.05,
    maxLimit: 70,
  },
  {
    id: "VIB001",
    company: "VIB Finance",
    logo: "images/vib.png",
    highlight: "Vay nhanh dễ dàng - Thủ tục đơn giản",
    min: 30,
    max: 300,
    duration: "12-36",
    disbursement: "Tùy hồ sơ",
    interest: "0.58%",
    reqs: ["Tư vấn hồ sơ", "Hồ sơ linh hoạt"],
    link: "https://sc.mfast.vn/vib_quick_cash?code=6719013",
    limitGroup: "over-100",
    timeGroup: "day",
    conditionGroup: "all",
    popularity: 4,
    rateNumber: 0.58,
    maxLimit: 300,
  },
  {
    id: "F88001",
    company: "F88",
    logo: "images/f88.png",
    highlight: "Thông tin vay bằng đăng ký xe - Hồ sơ theo quy định",
    min: 5,
    max: 100,
    duration: "3-18",
    disbursement: "2-4 giờ",
    interest: "1.1%",
    reqs: ["Cầm đồ", "Thủ tục đơn giản"],
    link: "https://sc.mfast.vn/f88_lending?code=6719013",
    limitGroup: "over-100",
    timeGroup: "short",
    conditionGroup: "bad-debt",
    popularity: 5,
    rateNumber: 1.1,
    maxLimit: 100,
  },
  {
    id: "GAWAD001",
    company: "Swad",
    logo: "images/swad.png",
    highlight: "Vay theo đăng ký xe máy - Thủ tục đơn giản",
    min: 3,
    max: 100,
    duration: "3-36",
    disbursement: "Tùy hồ sơ",
    interest: "1.2%",
    reqs: ["Thủ tục tham khảo", "Tư vấn quy trình"],
    link: "https://sc.mfast.vn/sawad?sale_code=6719013",
    limitGroup: "50-100",
    timeGroup: "day",
    conditionGroup: "bad-debt",
    popularity: 6,
    rateNumber: 1.2,
    maxLimit: 100,
  },
  {
    id: "LOTTE001",
    company: "LOTTE Finance",
    logo: "images/lotte.png",
    highlight: "Hỗ trợ tài chính linh hoạt - Không thẩm định",
    min: 10,
    max: 200,
    duration: "6-36",
    disbursement: "Tùy hồ sơ",
    interest: "1.15%",
    reqs: ["Dành cho mọi đối tượng", "Không thẩm định"],
    link: "https://vay.lottefinance.vn/",
    limitGroup: "over-100",
    timeGroup: "day",
    conditionGroup: "no-income-proof",
    popularity: 7,
    rateNumber: 1.15,
    maxLimit: 200,
  },
];

const BANK_PRODUCTS = [
  {
    id: "MB001",
    bank: "MB Bank",
    fullName: "Ngân hàng TMCP Quân đội",
    product: "Ngân hàng số hiện đại, hỗ trợ giao dịch tiện lợi",
    link: "https://sc.mfast.vn/mbbank_nhn?code=6719013",
    logo: "images/mb.png",
    color: "#E3F2FD",
    accent: "#1565C0",
    borderColor: "#1565C0",
    cardBg: "#EBF5FF",
    badge: "🔥 Phổ biến nhất",
    badgeColor: "#DC2626",
    rating: "4.8",
    users: "12.458+",
    features: [
      { icon: "📱", title: "Tìm hiểu online", sub: "Quy trình theo chính sách ngân hàng" },
      {
        icon: "💳",
        title: "Phí theo chính sách",
        sub: "Kiểm tra lại tại thời điểm đăng ký",
      },
      { icon: "💰", title: "Ưu đãi tham khảo", sub: "Có thể thay đổi theo chính sách" },
    ],
    offer: "Ưu đãi nếu có phụ thuộc chính sách của MB Bank từng thời điểm",
  },
  {
    id: "VP001",
    bank: "VPBank",
    fullName: "Ngân hàng TMCP Việt Nam Thịnh Vượng",
    product: "Mở tài khoản dễ dàng, giao dịch tức thì",
    link: "https://sc.mfast.vn/vpbank_neo?code=6719013",
    logo: "images/VPBank.png",
    color: "#E8F5E9",
    accent: "#1B5E20",
    borderColor: "#16A34A",
    cardBg: "#F0FDF4",
    badge: "⏱️ Mở nhanh 5 phút",
    badgeColor: "#16A34A",
    rating: "4.7",
    users: "9.876+",
    features: [
      { icon: "📱", title: "Tìm hiểu online", sub: "Thời gian xử lý theo ngân hàng" },
      { icon: "📊", title: "Thông tin tham khảo", sub: "Điều kiện theo từng sản phẩm" },
      { icon: "💳", title: "Phí theo chính sách", sub: "Kiểm tra khi đăng ký" },
    ],
    offer: "Ưu đãi nếu có phụ thuộc chính sách của VPBank từng thời điểm",
  },
  {
    id: "UOB001",
    bank: "UOB Bank",
    fullName: "Ngân hàng UOB Việt Nam",
    product: "Ngân hàng quốc tế, dịch vụ đẳng cấp toàn cầu",
    link: "https://sc.mfast.vn/uob_bank?code=6719013",
    logo: "images/UOB.png",
    color: "#FFF3E0",
    accent: "#E65100",
    borderColor: "#F97316",
    cardBg: "#FFF7ED",
    badge: "🌍 Ngân hàng quốc tế",
    badgeColor: "#F97316",
    rating: "4.6",
    users: "7.654+",
    features: [
      { icon: "🌐", title: "Ngân hàng quốc tế", sub: "Uy tín toàn cầu" },
      { icon: "🔒", title: "Bảo mật thông tin", sub: "Theo chính sách của ngân hàng" },
      { icon: "🎧", title: "Hỗ trợ khách hàng", sub: "Theo kênh hỗ trợ của ngân hàng" },
    ],
    offer: "Ưu đãi nếu có phụ thuộc chính sách của UOB từng thời điểm",
  },
];

// =============================
// 2. UTILITIES
// =============================
function qs(selector) {
  return document.querySelector(selector);
}
function qsa(selector) {
  return document.querySelectorAll(selector);
}

// -----------------------------
// 2.1 Page Navigation
// -----------------------------
function switchPage(pageName) {
  qsa(".page").forEach((p) => p.classList.remove("active"));
  const target = qs("#page-" + pageName);
  if (target) target.classList.add("active");

  qsa(".tab-btn[data-page]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === pageName);
  });

  // close mobile menu if open
  const mobileMenu = qs("#mobile-menu");
  if (mobileMenu && mobileMenu.classList.contains("open")) {
    closeMobileMenu();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function initTabNavigation() {
  qsa(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const page = btn.dataset.page;
      if (page) {
        e.preventDefault();
        const currentFilename = window.location.pathname.split("/").pop() || "index.html";
        let targetUrl = "index.html";
        if (page === "loan") targetUrl = "vay-tieu-dung.html";
        else if (page === "bank") targetUrl = "the-ngan-hang.html";
        else if (page === "contact") targetUrl = "lien-he.html";
        
        if (currentFilename !== targetUrl) {
          window.location.href = targetUrl;
        } else {
          switchPage(page);
        }
      }
    });
  });
}

// -----------------------------
// 2.2 Topbar scroll effect
// -----------------------------
function initTopbarScroll() {
  const topbar = qs("#topbar");
  if (!topbar) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) topbar.classList.add("scrolled");
    else topbar.classList.remove("scrolled");
  });
}

// -----------------------------
// 2.3 Mobile hamburger menu
// -----------------------------
function toggleMobileMenu() {
  const menu = qs("#mobile-menu");
  const burger = qs("#hamburger");
  if (menu && burger) {
    const isOpen = menu.classList.toggle("open");
    burger.classList.toggle("active", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("mobile-menu-open", isOpen);
  }
}

function closeMobileMenu() {
  const menu = qs("#mobile-menu");
  const burger = qs("#hamburger");
  if (menu) menu.classList.remove("open");
  if (burger) {
    burger.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
  }
  document.body.classList.remove("mobile-menu-open");
}

function initMobileMenu() {
  const topbar = qs("#topbar");
  const menu = qs("#mobile-menu");
  const burger = qs("#hamburger");
  if (!topbar || !menu || !burger) return;

  menu.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("open")) return;
    if (!topbar.contains(event.target)) closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
}

// -----------------------------
// 2.4 Modal handling
// -----------------------------
function openModal() {
  const modal = qs("#modal-overlay");
  if (modal) modal.classList.add("open");
}
function closeModal() {
  const modal = qs("#modal-overlay");
  if (modal) modal.classList.remove("open");
}
function closeModalOnBackdrop(event) {
  const modal = qs("#modal-overlay");
  if (modal && event.target === modal) closeModal();
}

// Zalo QR Modal
function openZaloQR(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }
  const modal = qs("#zalo-qr-modal");
  if (modal) modal.classList.add("open");
}

function closeZaloQR() {
  const modal = qs("#zalo-qr-modal");
  if (modal) modal.classList.remove("open");
}

function closeZaloQROnBackdrop(event) {
  if (event.target === qs("#zalo-qr-modal")) closeZaloQR();
}

// Make it callable from onclick
window.openZaloQR = openZaloQR;
window.closeZaloQR = closeZaloQR;
window.closeZaloQROnBackdrop = closeZaloQROnBackdrop;

// -----------------------------
// 2.5 Toast notification
// -----------------------------
function showToast(message) {
  const toast = qs("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}

// =============================
// 3. RENDERING FUNCTIONS
function renderFeatured() {
  const container = qs("#featured-grid");
  if (!container) return;
  container.innerHTML = "";

  if (LOAN_PRODUCTS.length < 3) return;

  const featuredData = [
    {
      ...LOAN_PRODUCTS[0],
      badgeText: "THAM KHẢO HỒ SƠ",
      badgeColor: "#16A34A",
      cardTheme: "ft-card-green",
      isCenter: false,
    },
    {
      ...LOAN_PRODUCTS[1],
      badgeText: "NỔI BẬT",
      badgeColor: "#F97316",
      cardTheme: "ft-card-center",
      isCenter: true,
    },
    {
      ...LOAN_PRODUCTS[2],
      badgeText: "Đăng ký online",
      badgeColor: "#1D4ED8",
      cardTheme: "ft-card-blue",
      isCenter: false,
    },
  ];

  featuredData.forEach((p) => {
    const card = document.createElement("div");
    card.className = `ft-card ${p.cardTheme} animate-fade-rise`;

    const ribbonHTML = `<div class="ft-ribbon" style="background:${p.badgeColor};">${p.badgeText}</div>`;
    const topBadgeHTML = "";

    // Determine stat icons based on product
    const statIcon1 = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>`;
    const statIcon2 = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`;
    const statIcon3 = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`;

    const reqsHTML = (p.reqs || [])
      .map(
        (req) => `
      <div class="ft-req-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        <span>${req}</span>
      </div>
    `,
      )
      .join("");

    card.innerHTML = `
      ${ribbonHTML}
      <div class="ft-card-header">
        ${topBadgeHTML}
        <div class="ft-logo-row">
          <div class="ft-logo-box">
            <img src="${p.logo}" alt="${p.company}" />
          </div>
          <div class="ft-company-info">
            <h3>${p.company}</h3>
            <p>${p.highlight}</p>
          </div>
        </div>
      </div>

      <div class="ft-stats-row">
        <div class="ft-stat">
          <div class="ft-stat-icon">${statIcon1}</div>
          <div class="ft-stat-label">HẠN MỨC VAY</div>
          <div class="ft-stat-value">Tham khảo</div>
          <div class="ft-stat-unit">theo hồ sơ</div>
        </div>
        <div class="ft-stat">
          <div class="ft-stat-icon">${statIcon2}</div>
          <div class="ft-stat-label">XỬ LÝ HỒ SƠ</div>
          <div class="ft-stat-value">Tùy hồ sơ</div>
          <div class="ft-stat-unit">&nbsp;</div>
        </div>
        <div class="ft-stat">
          <div class="ft-stat-icon">${statIcon3}</div>
          <div class="ft-stat-label">THỜI GIAN VAY</div>
          <div class="ft-stat-value">${p.duration}</div>
          <div class="ft-stat-unit">tháng</div>
        </div>
      </div>

      <div class="ft-divider"></div>

      <div class="ft-reqs-row">
        ${reqsHTML}
      </div>

      <div class="ft-actions">
        <button class="ft-btn-primary card-btn-reg">Đăng ký tư vấn →</button>
        <button class="ft-btn-outline card-btn-det">Xem chi tiết</button>
      </div>
    `;

    // Button event listeners
    card.querySelector(".card-btn-reg").onclick = (e) => {
      e.stopPropagation();
      if (p.link && p.link !== "null") window.open(p.link, "_blank");
      else openModal();
    };
    card.querySelector(".card-btn-det").onclick = (e) => {
      e.stopPropagation();
      openProductDetail(p);
    };
    card.onclick = () => openProductDetail(p);

    container.appendChild(card);
  });
}

function getTagsHTML(tags) {
  return tags
    .map(
      (tag) => `
    <span class="product-tag">
      <span class="product-tag-icon">⚡</span>
      <span>${tag}</span>
    </span>
  `,
    )
    .join("");
}

const activeLoanFilters = {
  limit: "all",
  time: "all",
  condition: "all",
  sort: "popular",
};

function isLoanFilterActive() {
  return (
    activeLoanFilters.limit !== "all" ||
    activeLoanFilters.time !== "all" ||
    activeLoanFilters.condition !== "all" ||
    activeLoanFilters.sort !== "popular"
  );
}

function getFilteredLoanProducts() {
  const products = LOAN_PRODUCTS.filter((product) => {
    const limitMatch =
      activeLoanFilters.limit === "all" ||
      product.limitGroup === activeLoanFilters.limit;
    const timeMatch =
      activeLoanFilters.time === "all" ||
      product.timeGroup === activeLoanFilters.time;
    const conditionMatch =
      activeLoanFilters.condition === "all" ||
      product.conditionGroup === activeLoanFilters.condition;

    return limitMatch && timeMatch && conditionMatch;
  });

  return products.sort((a, b) => {
    if (activeLoanFilters.sort === "low-rate") {
      return (a.rateNumber || 0) - (b.rateNumber || 0);
    }
    if (activeLoanFilters.sort === "high-limit") {
      return (b.maxLimit || 0) - (a.maxLimit || 0);
    }
    return (a.popularity || 0) - (b.popularity || 0);
  });
}

function getLoanCardTheme(product, isFE = false) {
  if (isFE || product.id === "FE001") return "card-fe";
  if (product.id === "SHB001") return "card-shb";
  if (product.id === "TNEX001") return "card-tnex";
  return "card-normal";
}

function getProductDescriptionHTML(product) {
  return product.highlight
    .split(/\s[-–]\s/)
    .slice(0, 2)
    .map((line) => `<p>${line}</p>`)
    .join("");
}

function wireProductCard(card, product) {
  const logoImg = card.querySelector(".product-logo img");
  if (logoImg && product.logo) {
    logoImg.src = product.logo;
    logoImg.alt = product.company;
  }

  const btnReg = card.querySelector(".card-btn-reg");
  btnReg.onclick = (e) => {
    e.stopPropagation();
    if (product.link && product.link !== "null") window.open(product.link, "_blank");
    else openModal();
  };

  card.querySelector(".card-btn-det").onclick = (e) => {
    e.stopPropagation();
    openProductDetail(product);
  };
  card.onclick = () => openProductDetail(product);
}

// Horizontal Card (Dòng 1)
function createHorizontalCard(p, isFE) {
  const card = document.createElement("div");
  const themeClass = getLoanCardTheme(p, isFE);
  card.className = `product-card product-card-large ${themeClass} animate-fade-rise`;

  const ribbonText = isFE ? "THAM KHẢO HỒ SƠ" : "NỔI BẬT";
  const ribbonColor = isFE ? "#16A34A" : "#F97316";
  const badgeHTML = "";
  const ribbonHTML = `<div class="product-ribbon-top" style="background:${ribbonColor};">${ribbonText}</div>`;

  card.innerHTML = `
    ${badgeHTML}
    ${ribbonHTML}
    <div class="product-head">
      <div class="product-logo">
        <img src="" alt="" class="brand-logo-${p.id}" />
      </div>
      <div class="product-info">
        <h3>${p.company}</h3>
        ${getProductDescriptionHTML(p)}
      </div>
    </div>

    <div class="product-stats">
      <div class="stat-item">
        <span class="stat-label">Hạn mức vay</span>
        <strong class="stat-value">Theo hồ sơ</strong>
      </div>
      <div class="stat-item">
        <span class="stat-label">Xử lý hồ sơ</span>
        <strong class="stat-value">Tùy hồ sơ</strong>
      </div>
    </div>

    <div class="product-footer">
      <div class="product-tags">
        ${getTagsHTML(p.reqs || ["Tư vấn hồ sơ", "Điều kiện tùy sản phẩm", "Đăng ký online"])}
      </div>
      <div class="product-actions">
        <button class="product-btn card-btn-reg">Đăng ký tư vấn →</button>
        <button class="detail-link card-btn-det">Xem chi tiết</button>
      </div>
    </div>
  `;

  wireProductCard(card, p);
  return card;
}

// Vertical Card (Dòng 2 & 3)
function createVerticalCard(p) {
  const card = document.createElement("div");
  const themeClass = getLoanCardTheme(p);
  card.className = `product-card product-card-medium ${themeClass} animate-fade-rise`;

  const badgeHTML = p.specialBadge ? `<div class="product-badge">${p.specialBadge}</div>` : "";

  card.innerHTML = `
    ${badgeHTML}
    <div class="product-head">
      <div class="product-logo">
        <img src="" alt="" class="brand-logo-${p.id}" />
      </div>
      <div class="product-info">
        <h3>${p.company}</h3>
        ${getProductDescriptionHTML(p)}
      </div>
    </div>
    
    <div class="product-stats">
      <div class="stat-item">
        <span class="stat-label">Hạn mức vay</span>
        <strong class="stat-value">Theo hồ sơ</strong>
      </div>
      <div class="stat-item">
        <span class="stat-label">Xử lý hồ sơ</span>
        <strong class="stat-value">Tùy hồ sơ</strong>
      </div>
    </div>
    
    <div class="product-footer">
      <div class="product-tags">
        ${getTagsHTML(p.reqs || ["Tư vấn hồ sơ", "Điều kiện tùy sản phẩm", "Đăng ký online"])}
      </div>
      <div class="product-actions">
        <button class="product-btn card-btn-reg">Đăng ký tư vấn →</button>
        <button class="detail-link card-btn-det">Xem chi tiết</button>
      </div>
    </div>
  `;

  wireProductCard(card, p);
  return card;
}

// CTA Box
function createCTABox() {
  const card = document.createElement("div");
  card.className = "consult-card animate-fade-rise";
  card.innerHTML = `
    <div>
      <h3>Tư vấn sản phẩm phù hợp</h3>
      <p>Để lại thông tin, Tài Chính Quảng Trị sẽ hỗ trợ bạn tham khảo lựa chọn phù hợp với nhu cầu và hồ sơ.</p>
      <button class="product-btn" onclick="openModal()">Nhận tư vấn miễn phí →</button>
    </div>
    <div class="consult-visual" aria-hidden="true">
      <span>☎</span>
    </div>
  `;
  return card;
}

function createFilteredLoanGrid(products) {
  const fragment = document.createDocumentFragment();
  products.forEach((product) => fragment.appendChild(createVerticalCard(product)));
  fragment.appendChild(createCTABox());
  return fragment;
}

function createNoLoanResult() {
  const message = document.createElement("div");
  message.className = "loan-empty-message";
  message.textContent =
    "Không tìm thấy sản phẩm phù hợp. Vui lòng để lại thông tin để được tư vấn.";
  return message;
}

// Render layout with default featured rows, then adaptive rows when filtered/sorted
function renderLoanProducts() {
  const container = qs("#product-layout");
  if (!container) return;
  container.innerHTML = "";

  if (LOAN_PRODUCTS.length < 7) return;

  const filteredProducts = getFilteredLoanProducts();
  const shouldUseFilteredGrid = isLoanFilterActive();

  if (shouldUseFilteredGrid) {
    if (filteredProducts.length === 0) {
      container.appendChild(createNoLoanResult());
      container.appendChild(createCTABox());
      return;
    }

    container.appendChild(createFilteredLoanGrid(filteredProducts));
    return;
  }

  container.appendChild(createHorizontalCard(LOAN_PRODUCTS[0], true));
  container.appendChild(createHorizontalCard(LOAN_PRODUCTS[1], false));
  container.appendChild(createVerticalCard(LOAN_PRODUCTS[2]));
  container.appendChild(createVerticalCard(LOAN_PRODUCTS[3]));
  container.appendChild(createVerticalCard(LOAN_PRODUCTS[4]));
  container.appendChild(createVerticalCard(LOAN_PRODUCTS[5]));
  container.appendChild(createVerticalCard(LOAN_PRODUCTS[6]));
  container.appendChild(createCTABox());
}

// Product Detail Modal
const feCreditRegisterLink = "https://fin.mfast.vn/?pageID=6719013&platform=mfast";
const shbRegisterLink = "https://appay.cloudcms.vn/finance/shb_leadgen_direct/onboarding?code=6719013";
const tnexRegisterLink = "https://sc.mfast.vn/tnex_lending?code=6719013";
const vibRegisterLink = "https://sc.mfast.vn/vib_quick_cash?code=6719013";
const f88RegisterLink = "https://sc.mfast.vn/f88_lending?code=6719013";
const swadRegisterLink = "https://sc.mfast.vn/sawad?sale_code=6719013";
const lotteRegisterLink = "https://vay.lottefinance.vn/";

function openProductRegisterLink(link) {
  if (link && link !== "null" && link !== "undefined") {
    window.open(link, "_blank");
    return;
  }

  closeProductDetail();
  openModal();
}

function openProductDetail(product) {
  const modal = qs("#product-detail-modal");
  const content = qs("#product-detail-content");
  if (!modal || !content) return;

  const main = qs("main");
  if (main) main.classList.add("blurred-background");

  content.classList.toggle("fe-credit-detail-card", product.id === "FE001");
  content.classList.toggle("lotte-finance-detail-card", product.id === "LOTTE001");
  content.classList.toggle("f88-detail-card", product.id === "F88001");
  content.classList.toggle("shb-finance-detail-card", product.id === "SHB001");
  content.classList.toggle("tnex-finance-detail-card", product.id === "TNEX001");
  content.classList.toggle("swad-detail-card", product.id === "GAWAD001");
  content.classList.toggle("vib-cash-loan-detail-card", product.id === "VIB001");

  if (product.id === "FE001") {
    content.innerHTML = createFeCreditDetailHTML(product);
  } else if (product.id === "LOTTE001") {
    content.innerHTML = createLotteFinanceDetailHTML(product);
  } else if (product.id === "F88001") {
    content.innerHTML = createF88DetailHTML(product);
  } else if (product.id === "SHB001") {
    content.innerHTML = createShbFinanceDetailHTML(product);
  } else if (product.id === "TNEX001") {
    content.innerHTML = createTnexFinanceDetailHTML(product);
  } else if (product.id === "GAWAD001") {
    content.innerHTML = createSwadDetailHTML(product);
  } else if (product.id === "VIB001") {
    content.innerHTML = createVibCashLoanDetailHTML(product);
  } else {
    content.innerHTML = createDefaultProductDetailHTML(product);
  }

  modal.classList.add("open");
}

function createFeCreditDetailHTML(product) {
  const tags = ["Tư vấn hồ sơ", "Điều kiện tùy sản phẩm", "Đăng ký online", "Hỗ trợ đa kênh"];
  const tagIcons = ["⚡", "🛡️", "🌐", "🎧"];

  return `
    <button class="fe-detail-close" type="button" aria-label="Đóng" onclick="closeProductDetail()">×</button>

    <div class="fe-detail-header">
      <div class="fe-detail-logo-wrap">
        <img src="${product.logo}" alt="FE Credit" class="fe-detail-logo" />
      </div>
      <div class="fe-detail-title">
        <span class="fe-detail-badge">✓ Đề xuất cho bạn</span>
        <h2>FE Credit</h2>
        <p>Thông tin sản phẩm vay tiêu dùng tham khảo, hồ sơ và điều kiện phụ thuộc quy định của FE Credit.</p>
        <div class="fe-detail-tags">
          ${tags.map((tag, index) => `<span>${tagIcons[index]} ${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="fe-detail-summary" aria-label="Thông tin tổng quan FE Credit">
      <div class="fe-summary-item">
        <span class="fe-summary-label">Hạn mức vay</span>
        <strong>Tham khảo</strong>
        <span>theo hồ sơ</span>
      </div>
      <div class="fe-summary-item">
        <span class="fe-summary-label">Thời gian xử lý</span>
        <strong>Tùy hồ sơ</strong>
        <span>Theo chính sách từng thời điểm</span>
      </div>
      <div class="fe-summary-item">
        <span class="fe-summary-label">Lãi suất</span>
        <strong>Tham khảo</strong>
        <span>Theo chính sách của đơn vị cung cấp</span>
      </div>
      <div class="fe-summary-item">
        <span class="fe-summary-label">Kỳ hạn vay</span>
        <strong>6 - 36</strong>
        <span>tháng</span>
      </div>
    </div>

    <div class="fe-detail-grid">
      <section class="fe-detail-panel">
        <h3>Ưu điểm nổi bật</h3>
        <ul class="fe-check-list">
          <li>Hỗ trợ tư vấn quy trình đăng ký</li>
          <li>Hồ sơ và điều kiện phụ thuộc từng sản phẩm</li>
          <li>Thời gian xử lý tùy thuộc hồ sơ và chính sách FE Credit</li>
          <li>Hỗ trợ qua các kênh liên hệ phù hợp</li>
          <li>Có thể tìm hiểu thông tin đăng ký online</li>
        </ul>
      </section>

      <section class="fe-detail-panel">
        <h3>Thông tin chi tiết</h3>
        <div class="fe-info-row"><span>Hạn mức vay</span><strong>Theo chính sách của đơn vị cung cấp</strong></div>
        <div class="fe-info-row"><span>Thời gian vay</span><strong>6 - 36 tháng</strong></div>
        <div class="fe-info-row"><span>Lãi suất</span><strong>Theo chính sách của đơn vị cung cấp</strong></div>
        <div class="fe-info-row"><span>Độ tuổi</span><strong>Công dân Việt Nam từ 20 - 60 tuổi</strong></div>
        <div class="fe-info-row"><span>Hình thức giải ngân</span><strong>Phụ thuộc quy định và kết quả phê duyệt</strong></div>
        <div class="fe-info-row"><span>Khu vực hỗ trợ</span><strong>Toàn quốc</strong></div>
      </section>

      <section class="fe-detail-panel">
        <h3>Điều kiện vay</h3>
        <ul class="fe-check-list">
          <li>Công dân Việt Nam</li>
          <li>Từ 20 - 60 tuổi</li>
          <li>Có CCCD còn hiệu lực</li>
          <li>Có tài khoản ngân hàng chính chủ</li>
        </ul>
        <div class="fe-security-box">
          <strong>🔒 Bảo mật thông tin</strong>
          <p>Thông tin của bạn được xử lý theo chính sách bảo mật và chỉ sử dụng cho mục đích liên hệ tư vấn.</p>
        </div>
      </section>
    </div>

    <button class="fe-register-btn" type="button" onclick="openProductRegisterLink(window.feCreditRegisterLink)">
      Đăng ký tư vấn →
    </button>
  `;
}

function createLotteFinanceDetailHTML(product) {
  const tags = [
    "Dành cho nhiều đối tượng",
    "Đăng ký online",
    "Thông tin hạn mức tham khảo",
    "Hỗ trợ đa kênh",
  ];
  const tagIcons = ["✓", "🌐", "💳", "🎧"];
  const summaryItems = [
    { icon: "💳", label: "Hạn mức vay", value: "Tham khảo", sub: "theo chính sách" },
    { icon: "⏱", label: "Thời hạn vay", value: "6 - 60", sub: "tháng" },
    { icon: "👤", label: "Độ tuổi", value: "20 - 60", sub: "tuổi" },
    { icon: "💰", label: "Điều kiện", value: "Theo hồ sơ", sub: "từng sản phẩm" },
  ];
  const advantages = [
    "Đa dạng thông tin sản phẩm cho nhiều nhóm khách hàng tham khảo",
    "Hạn mức phụ thuộc hồ sơ và chính sách từng thời điểm",
    "Kỳ hạn linh hoạt từ 6 - 60 tháng",
    "Khu vực hỗ trợ phụ thuộc chính sách của đơn vị cung cấp",
    "Có sản phẩm cho khách hàng lương, GOV, doanh nghiệp lớn, BHNT",
  ];
  const detailRows = [
    ["Hạn mức vay", "Theo chính sách của đơn vị cung cấp"],
    ["Thời hạn vay", "6 - 60 tháng"],
    ["Độ tuổi", "20 - 60 tuổi"],
    ["Thu nhập tối thiểu", "Theo từng gói sản phẩm"],
    ["Lãi suất", "Theo chính sách của đơn vị cung cấp"],
    ["Khu vực hỗ trợ", "Toàn quốc"],
  ];
  const conditions = [
    "Công dân Việt Nam",
    "Có CCCD còn hiệu lực",
    "Hồ sơ phù hợp theo từng gói sản phẩm",
    "Ưu tiên khách có lịch sử tín dụng tốt",
    "Không có nợ nhóm 2 hiện tại hoặc nợ xấu theo quy định",
    "Có nguồn thu nhập ổn định từ lương hoặc tự doanh",
  ];

  return `
    <button class="lotte-detail-close" type="button" aria-label="Đóng" onclick="closeProductDetail()">×</button>

    <div class="lotte-detail-header">
      <div class="lotte-detail-logo-wrap">
        <img src="${product.logo}" alt="LOTTE Finance" class="lotte-detail-logo" />
      </div>
      <div class="lotte-detail-title">
        <span class="lotte-detail-badge">✓ Đề xuất cho bạn</span>
        <h2>LOTTE Finance</h2>
        <p>Đa dạng gói vay - Hỗ trợ tài chính linh hoạt - Hồ sơ theo từng sản phẩm</p>
        <div class="lotte-detail-tags">
          ${tags.map((tag, index) => `<span>${tagIcons[index]} ${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="lotte-detail-summary" aria-label="Thông tin tổng quan LOTTE Finance">
      ${summaryItems
        .map(
          (item) => `
            <div class="lotte-summary-item">
              <span class="lotte-summary-icon">${item.icon}</span>
              <span class="lotte-summary-label">${item.label}</span>
              <strong>${item.value}</strong>
              <span>${item.sub}</span>
            </div>
          `,
        )
        .join("")}
    </div>

    <div class="lotte-detail-grid">
      <section class="lotte-detail-panel">
        <h3>Ưu điểm nổi bật</h3>
        <ul class="lotte-check-list">
          ${advantages.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="lotte-detail-panel">
        <h3>Thông tin chi tiết</h3>
        ${detailRows
          .map(
            ([label, value]) => `
              <div class="lotte-info-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `,
          )
          .join("")}
      </section>

      <section class="lotte-detail-panel">
        <h3>Điều kiện vay</h3>
        <ul class="lotte-check-list">
          ${conditions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="lotte-security-box">
          <strong>🔒 Bảo mật thông tin</strong>
          <p>Thông tin của bạn được xử lý theo chính sách bảo mật và chỉ sử dụng cho mục đích liên hệ tư vấn.</p>
        </div>
      </section>
    </div>

    <button class="lotte-register-btn" type="button" onclick="openProductRegisterLink(window.lotteRegisterLink)">
      Đăng ký tư vấn →
    </button>
    <p class="lotte-register-note">Tư vấn miễn phí - Không thu phí hồ sơ từ khách hàng</p>
  `;
}

function createF88DetailHTML(product) {
  const tags = ["Tư vấn hồ sơ", "Điều kiện tùy sản phẩm", "Đăng ký online", "Hỗ trợ đa kênh"];
  const tagIcons = ["⚡", "🛡️", "🌐", "🎧"];
  const summaryItems = [
    { icon: "💳", label: "Hạn mức vay", value: "Tham khảo", sub: "theo hồ sơ" },
    { icon: "⏱", label: "Thời hạn vay", value: "1 - 18", sub: "tháng" },
    { icon: "👤", label: "Độ tuổi", value: "Từ 18", sub: "tuổi" },
    { icon: "⚡", label: "Xử lý hồ sơ", value: "Tùy hồ sơ", sub: "và chính sách" },
  ];
  const advantages = [
    "Hỗ trợ tư vấn hồ sơ và quy trình đăng ký",
    "Điều kiện tài sản và giấy tờ phụ thuộc quy định của đơn vị cung cấp",
    "Thời gian xử lý hồ sơ phụ thuộc hồ sơ và chính sách từng thời điểm",
    "Hạn mức phụ thuộc kết quả thẩm định và quy định của đơn vị cung cấp",
    "Đa dạng khách hàng: lao động tự do, công nhân, tài xế công nghệ, tiểu thương, nhân viên văn phòng",
    "Các khoản phí, bảo hiểm nếu có cần kiểm tra trước khi đăng ký",
    "Quy trình xác minh thông tin phụ thuộc từng hồ sơ",
    "Hỗ trợ tại 63 tỉnh thành với mạng lưới phòng giao dịch rộng khắp",
  ];
  const detailRows = [
    ["Hạn mức vay", "Theo kết quả thẩm định và chính sách sản phẩm"],
    ["Thời hạn vay", "1 - 18 tháng"],
    ["Lãi suất", "Theo chính sách của đơn vị cung cấp"],
    ["Độ tuổi", "Từ 18 tuổi trở lên"],
    ["Tài sản cầm cố", "Xe máy, ô tô chính chủ"],
    ["Hình thức giải ngân", "Phụ thuộc quy định và kết quả phê duyệt"],
    ["Khu vực hỗ trợ", "Toàn quốc"],
  ];
  const conditions = [
    "Công dân Việt Nam",
    "Từ 18 tuổi trở lên",
    "Có CCCD còn hiệu lực",
    "Sở hữu xe máy hoặc ô tô chính chủ",
    "Có đăng ký xe / cà vẹt xe hợp lệ",
    "Tài sản hợp lệ, không thuộc diện tranh chấp",
    "Có nhu cầu vay cầm cố tài sản",
  ];

  return `
    <button class="f88-detail-close" type="button" aria-label="Đóng" onclick="closeProductDetail()">×</button>

    <div class="f88-detail-header">
      <div class="f88-detail-logo-wrap">
        <img src="${product.logo}" alt="F88" class="f88-detail-logo" />
      </div>
      <div class="f88-detail-title">
        <span class="f88-detail-badge">✓ Đề xuất cho bạn</span>
        <h2>F88</h2>
        <p>Thông tin sản phẩm vay cầm cố tài sản tham khảo, điều kiện phụ thuộc quy định của F88.</p>
        <div class="f88-detail-tags">
          ${tags.map((tag, index) => `<span>${tagIcons[index]} ${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="f88-detail-summary" aria-label="Thông tin tổng quan F88">
      ${summaryItems
        .map(
          (item) => `
            <div class="f88-summary-item">
              <span class="f88-summary-icon">${item.icon}</span>
              <span class="f88-summary-label">${item.label}</span>
              <strong>${item.value}</strong>
              <span>${item.sub}</span>
            </div>
          `,
        )
        .join("")}
    </div>

    <div class="f88-detail-grid">
      <section class="f88-detail-panel">
        <h3>Ưu điểm nổi bật</h3>
        <ul class="f88-check-list">
          ${advantages.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="f88-detail-panel">
        <h3>Thông tin chi tiết</h3>
        ${detailRows
          .map(
            ([label, value]) => `
              <div class="f88-info-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `,
          )
          .join("")}
      </section>

      <section class="f88-detail-panel">
        <h3>Điều kiện vay</h3>
        <ul class="f88-check-list">
          ${conditions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="f88-security-box">
          <strong>🔒 Bảo mật thông tin</strong>
          <p>Thông tin của bạn được xử lý theo chính sách bảo mật và chỉ sử dụng cho mục đích liên hệ tư vấn.</p>
        </div>
      </section>
    </div>

    <button class="f88-register-btn" type="button" onclick="openProductRegisterLink(window.f88RegisterLink)">
      Đăng ký tư vấn →
    </button>
    <p class="f88-register-note">Tư vấn miễn phí - Không thu phí hồ sơ từ khách hàng</p>
  `;
}

function createShbFinanceDetailHTML(product) {
  const tags = [
    "Vay tiền mặt",
    "Điều kiện thu nhập theo hồ sơ",
    "Kỳ hạn linh hoạt",
    "Hỗ trợ tư vấn hồ sơ",
  ];
  const tagIcons = ["💳", "💰", "⏱", "🎧"];
  const summaryItems = [
    { icon: "💳", label: "Hạn mức vay", value: "Tham khảo", sub: "theo hồ sơ" },
    { icon: "⏱", label: "Thời hạn vay", value: "6 - 36", sub: "tháng" },
    { icon: "👤", label: "Độ tuổi", value: "20 - 59", sub: "tuổi" },
    { icon: "💰", label: "Điều kiện", value: "Theo hồ sơ", sub: "từng sản phẩm" },
  ];
  const advantages = [
    "Thông tin sản phẩm vay tiền mặt dành cho khách hàng tham khảo",
    "Thời gian xử lý phụ thuộc hồ sơ và chính sách SHB Finance",
    "Hạn mức phụ thuộc hồ sơ và quy định từng thời điểm",
    "Hỗ trợ nhiều nhóm hồ sơ ACL01, ACL02, ACL03, ACL04",
    "Điều kiện thu nhập phụ thuộc từng gói sản phẩm",
    "Thời hạn vay linh hoạt từ 6 - 36 tháng",
  ];
  const detailRows = [
    ["Hạn mức vay", "Theo chính sách của đơn vị cung cấp"],
    ["Thời hạn vay", "6 - 36 tháng"],
    ["Độ tuổi", "20 - 59 tuổi"],
    ["Thu nhập tối thiểu", "Theo từng gói sản phẩm"],
    ["Lãi suất", "Theo chính sách của đơn vị cung cấp"],
  ];
  const conditions = [
    "Công dân Việt Nam",
    "Từ 20 - 59 tuổi",
    "Có CCCD gắn chip",
    "Điều kiện thu nhập phụ thuộc từng gói sản phẩm",
    "Lịch sử tín dụng được xem xét theo quy định của đơn vị cung cấp",
  ];

  return `
    <button class="shb-detail-close" type="button" aria-label="Đóng" onclick="closeProductDetail()">×</button>

    <div class="shb-detail-header">
      <div class="shb-detail-logo-wrap">
        <img src="${product.logo}" alt="SHB Finance" class="shb-detail-logo" />
      </div>
      <div class="shb-detail-title">
        <span class="shb-detail-badge">✓ Đề xuất cho bạn</span>
        <h2>SHB Finance</h2>
        <p>Thông tin vay tiền mặt tham khảo, hồ sơ và kết quả phê duyệt phụ thuộc quy định của SHB Finance.</p>
        <div class="shb-detail-tags">
          ${tags.map((tag, index) => `<span>${tagIcons[index]} ${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="shb-detail-summary" aria-label="Thông tin tổng quan SHB Finance">
      ${summaryItems
        .map(
          (item) => `
            <div class="shb-summary-item">
              <span class="shb-summary-icon">${item.icon}</span>
              <span class="shb-summary-label">${item.label}</span>
              <strong>${item.value}</strong>
              <span>${item.sub}</span>
            </div>
          `,
        )
        .join("")}
    </div>

    <div class="shb-detail-grid">
      <section class="shb-detail-panel">
        <h3>Ưu điểm nổi bật</h3>
        <ul class="shb-check-list">
          ${advantages.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="shb-detail-panel">
        <h3>Thông tin chi tiết</h3>
        ${detailRows
          .map(
            ([label, value]) => `
              <div class="shb-info-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `,
          )
          .join("")}
      </section>

      <section class="shb-detail-panel">
        <h3>Điều kiện vay</h3>
        <ul class="shb-check-list">
          ${conditions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="shb-security-box">
          <strong>🔒 Bảo mật thông tin</strong>
          <p>Thông tin của bạn được xử lý theo chính sách bảo mật và chỉ sử dụng cho mục đích liên hệ tư vấn.</p>
        </div>
      </section>
    </div>

    <button class="shb-register-btn" type="button" onclick="openProductRegisterLink(window.shbRegisterLink)">
      Đăng ký tư vấn →
    </button>
    <p class="shb-register-note">Tư vấn miễn phí - Không thu phí hồ sơ từ khách hàng</p>
  `;
}

function createTnexFinanceDetailHTML(product) {
  const tags = [
    "Đăng ký online",
    "Xử lý theo chính sách",
    "Chỉ cần CCCD",
    "Qua tài khoản TNEX nếu đủ điều kiện",
  ];
  const tagIcons = ["🌐", "⚡", "🪪", "💳"];
  const summaryItems = [
    { icon: "💳", label: "Hạn mức vay", value: "Tham khảo", sub: "theo hồ sơ" },
    { icon: "⏱", label: "Thời hạn vay", value: "6 - 36", sub: "tháng" },
    { icon: "👤", label: "Độ tuổi", value: "18 - 50", sub: "tuổi" },
    { icon: "%", label: "Lãi suất", value: "Theo chính sách", sub: "từng thời điểm" },
  ];
  const advantages = [
    "Có thể tìm hiểu quy trình đăng ký trên ứng dụng TNEX",
    "Thời gian xử lý và giải ngân phụ thuộc hồ sơ và chính sách TNEX",
    "Hạn mức phụ thuộc hồ sơ và quy định từng thời điểm",
    "Kỳ hạn linh hoạt từ 6 - 36 tháng",
    "Điều kiện tín dụng được xem xét theo quy định của đơn vị cung cấp",
    "Hình thức giải ngân phụ thuộc kết quả phê duyệt",
  ];
  const detailRows = [
    ["Sản phẩm", "TNEX Lending"],
    ["Hạn mức vay", "Theo chính sách của đơn vị cung cấp"],
    ["Thời hạn vay", "6 - 36 tháng"],
    ["Độ tuổi", "18 - 50 tuổi"],
    ["Lãi suất", "Theo chính sách của đơn vị cung cấp"],
    ["Hồ sơ", "CCCD, thông tin cá nhân và eKYC trên ứng dụng TNEX"],
    ["Hình thức giải ngân", "Phụ thuộc quy định và kết quả phê duyệt"],
    ["Khu vực hỗ trợ", "Toàn quốc"],
  ];
  const conditions = [
    "Công dân Việt Nam",
    "Từ 18 - 50 tuổi",
    "Có CCCD còn hiệu lực",
    "Có tài khoản TNEX hoặc mở tài khoản TNEX trong quá trình đăng ký",
  ];

  return `
    <button class="tnex-detail-close" type="button" aria-label="Đóng" onclick="closeProductDetail()">×</button>

    <div class="tnex-detail-header">
      <div class="tnex-detail-logo-wrap">
        <img src="${product.logo}" alt="TNEX Finance" class="tnex-detail-logo" />
      </div>
      <div class="tnex-detail-title">
        <span class="tnex-detail-badge">✓ Đề xuất cho bạn</span>
        <h2>TNEX Finance</h2>
        <p>Thông tin vay tiêu dùng online tham khảo, hồ sơ và kết quả phê duyệt phụ thuộc quy định của TNEX.</p>
        <div class="tnex-detail-tags">
          ${tags.map((tag, index) => `<span>${tagIcons[index]} ${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="tnex-detail-summary" aria-label="Thông tin tổng quan TNEX Finance">
      ${summaryItems
        .map(
          (item) => `
            <div class="tnex-summary-item">
              <span class="tnex-summary-icon">${item.icon}</span>
              <span class="tnex-summary-label">${item.label}</span>
              <strong>${item.value}</strong>
              <span>${item.sub}</span>
            </div>
          `,
        )
        .join("")}
    </div>

    <div class="tnex-detail-grid">
      <section class="tnex-detail-panel">
        <h3>Ưu điểm nổi bật</h3>
        <ul class="tnex-check-list">
          ${advantages.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="tnex-detail-panel">
        <h3>Thông tin chi tiết</h3>
        ${detailRows
          .map(
            ([label, value]) => `
              <div class="tnex-info-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `,
          )
          .join("")}
      </section>

      <section class="tnex-detail-panel">
        <h3>Điều kiện vay</h3>
        <ul class="tnex-check-list">
          ${conditions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="tnex-security-box">
          <strong>🔒 Bảo mật thông tin</strong>
          <p>Thông tin của bạn được xử lý theo chính sách bảo mật và chỉ sử dụng cho mục đích liên hệ tư vấn.</p>
        </div>
      </section>
    </div>

    <button class="tnex-register-btn" type="button" onclick="openProductRegisterLink(window.tnexRegisterLink)">
      Đăng ký tư vấn →
    </button>
    <p class="tnex-register-note">Tư vấn miễn phí - Không thu phí hồ sơ từ khách hàng</p>
  `;
}

function createSwadDetailHTML(product) {
  const tags = [
    "Chỉ cần đăng ký xe",
    "Không giữ xe",
    "Kỳ hạn linh hoạt",
    "Hỗ trợ tư vấn hồ sơ",
  ];
  const tagIcons = ["💳", "🛡️", "⏱", "🎧"];
  const summaryItems = [
    { icon: "💳", label: "Hạn mức vay", value: "Tham khảo", sub: "theo hồ sơ" },
    { icon: "⏱", label: "Thời hạn vay", value: "1 - 36", sub: "tháng" },
    { icon: "👤", label: "Độ tuổi", value: "Từ 20", sub: "tuổi" },
    { icon: "🚗", label: "Tài sản", value: "Ô tô", sub: "chính chủ" },
  ];
  const advantages = [
    "Phù hợp với khách hàng cần tìm hiểu sản phẩm vay bằng đăng ký xe ô tô",
    "Chỉ cần đăng ký xe, khách hàng vẫn tiếp tục sử dụng ô tô hằng ngày",
    "Phương thức thanh toán phụ thuộc từng gói sản phẩm",
    "Kỳ hạn vay đa dạng từ 1 - 36 tháng",
    "Có nhiều gói vay phù hợp nhu cầu khách hàng",
    "Hỗ trợ khách hàng cá nhân và khách hàng doanh nghiệp",
    "Hạn mức phụ thuộc hồ sơ, tài sản và chính sách từng thời điểm",
    "Quy trình đăng ký qua MFast, dễ theo dõi trạng thái hồ sơ",
  ];
  const detailRows = [
    ["Sản phẩm", "Vay bằng đăng ký xe ô tô"],
    ["Hạn mức vay", "Theo kết quả thẩm định và chính sách sản phẩm"],
    ["Thời hạn vay", "1 - 36 tháng"],
    ["Độ tuổi", "Từ 20 tuổi trở lên"],
    ["Tài sản bảo đảm", "Xe ô tô / đăng ký xe ô tô"],
    ["Hình thức thanh toán", "Linh hoạt theo gói vay"],
    [
      "Khu vực hỗ trợ",
      "Hà Nội, TP. Hồ Chí Minh, Nghệ An, Bình Dương, Đồng Nai, Bắc Ninh, Bắc Giang, Thanh Hóa và khu vực bán kính 40km xung quanh",
    ],
    [
      "Giấy tờ cần có",
      "CCCD, số điện thoại, khu vực sinh sống, số tiền cần vay, ảnh chụp 2 mặt CCCD, ảnh chụp 2 mặt giấy đăng ký xe ô tô",
    ],
  ];
  const conditions = [
    "Công dân Việt Nam",
    "Từ 20 tuổi trở lên",
    "Có năng lực hành vi dân sự đầy đủ",
    "Có ô tô hoặc đăng ký xe ô tô hợp lệ",
    "Xe thuộc sở hữu cá nhân hoặc doanh nghiệp theo quy định",
    "Tài sản được đăng kiểm đầy đủ và còn hiệu lực",
    "Tài sản không đang tranh chấp, kê biên, chuyển nhượng hoặc bảo đảm cho nghĩa vụ khác",
    "Tài sản không đang dùng để bảo đảm cho khoản vay tại tổ chức khác",
    "Khu vực sinh sống nằm trong khu vực SWAD hỗ trợ",
  ];

  return `
    <button class="swad-detail-close" type="button" aria-label="Đóng" onclick="closeProductDetail()">×</button>

    <div class="swad-detail-header">
      <div class="swad-detail-logo-wrap">
        <img src="${product.logo}" alt="SWAD" class="swad-detail-logo" />
      </div>
      <div class="swad-detail-title">
        <span class="swad-detail-badge">✓ Đề xuất cho bạn</span>
        <h2>SWAD</h2>
        <p>Thông tin vay bằng đăng ký xe ô tô tham khảo, điều kiện phụ thuộc quy định của SWAD.</p>
        <div class="swad-detail-tags">
          ${tags.map((tag, index) => `<span>${tagIcons[index]} ${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="swad-detail-summary" aria-label="Thông tin tổng quan SWAD">
      ${summaryItems
        .map(
          (item) => `
            <div class="swad-summary-item">
              <span class="swad-summary-icon">${item.icon}</span>
              <span class="swad-summary-label">${item.label}</span>
              <strong>${item.value}</strong>
              <span>${item.sub}</span>
            </div>
          `,
        )
        .join("")}
    </div>

    <div class="swad-detail-grid">
      <section class="swad-detail-panel">
        <h3>Ưu điểm nổi bật</h3>
        <ul class="swad-check-list">
          ${advantages.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="swad-detail-panel">
        <h3>Thông tin chi tiết</h3>
        ${detailRows
          .map(
            ([label, value]) => `
              <div class="swad-info-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `,
          )
          .join("")}
      </section>

      <section class="swad-detail-panel">
        <h3>Điều kiện vay</h3>
        <ul class="swad-check-list">
          ${conditions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="swad-security-box">
          <strong>🔒 Bảo mật thông tin</strong>
          <p>Thông tin của bạn được xử lý theo chính sách bảo mật và chỉ sử dụng cho mục đích liên hệ tư vấn.</p>
        </div>
      </section>
    </div>

    <button class="swad-register-btn" type="button" onclick="openProductRegisterLink(window.swadRegisterLink)">
      Đăng ký tư vấn →
    </button>
    <p class="swad-register-note">Tư vấn miễn phí - Không thu phí hồ sơ từ khách hàng</p>
  `;
}

function createVibCashLoanDetailHTML(product) {
  const tags = [
    "Đăng ký online",
    "Không thế chấp",
    "Lãi suất theo chính sách",
    "Kỳ hạn đến 60 tháng",
  ];
  const tagIcons = ["🌐", "🛡️", "%", "⏱"];
  const summaryItems = [
    { icon: "💳", label: "Hạn mức vay", value: "Tham khảo", sub: "theo hồ sơ" },
    { icon: "⏱", label: "Thời hạn vay", value: "12 - 60", sub: "tháng" },
    { icon: "%", label: "Lãi suất", value: "Theo chính sách", sub: "từng thời điểm" },
    { icon: "💰", label: "Điều kiện", value: "Theo hồ sơ", sub: "từng sản phẩm" },
  ];
  const advantages = [
    "Hỗ trợ tìm hiểu quy trình đăng ký qua điện thoại",
    "Có thể tìm hiểu thông tin đăng ký online",
    "Vay tín chấp, không cần tài sản thế chấp",
    "Hạn mức phụ thuộc hồ sơ và chính sách từng thời điểm",
    "Kỳ hạn vay linh hoạt từ 12 - 60 tháng",
    "Thời gian xử lý và giải ngân phụ thuộc hồ sơ, hợp đồng và chính sách VIB",
  ];
  const detailRows = [
    ["Hạn mức vay", "Theo chính sách của đơn vị cung cấp"],
    ["Thời hạn vay", "12 - 60 tháng"],
    ["Lãi suất", "Theo chính sách của đơn vị cung cấp"],
    ["Thu nhập tối thiểu", "Theo từng gói sản phẩm"],
    ["Hình thức vay", "Vay tín chấp"],
    ["Hình thức đăng ký", "Qua app Max"],
    ["Khu vực hỗ trợ", "Toàn quốc"],
  ];
  const conditions = [
    "Công dân Việt Nam",
    "Nữ từ 22 - 55 tuổi",
    "Nam từ 22 - 60 tuổi",
    "Điều kiện thu nhập theo hồ sơ",
    "Có CCCD còn hiệu lực",
    "Có hồ sơ thu nhập hoặc điều kiện thẻ tín dụng phù hợp",
    "Không thuộc nhóm đối tượng ngoại trừ theo chính sách VIB",
  ];

  return `
    <button class="vib-detail-close" type="button" aria-label="Đóng" onclick="closeProductDetail()">×</button>

    <div class="vib-detail-header">
      <div class="vib-detail-logo-wrap">
        <img src="${product.logo}" alt="VIB Cash Loan" class="vib-detail-logo" />
      </div>
      <div class="vib-detail-title">
        <span class="vib-detail-badge">✓ Đề xuất cho bạn</span>
        <h2>VIB Cash Loan</h2>
        <p>Thông tin vay tiền mặt tín chấp tham khảo, hồ sơ và kết quả phê duyệt phụ thuộc quy định của VIB.</p>
        <div class="vib-detail-tags">
          ${tags.map((tag, index) => `<span>${tagIcons[index]} ${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="vib-detail-summary" aria-label="Thông tin tổng quan VIB Cash Loan">
      ${summaryItems
        .map(
          (item) => `
            <div class="vib-summary-item">
              <span class="vib-summary-icon">${item.icon}</span>
              <span class="vib-summary-label">${item.label}</span>
              <strong>${item.value}</strong>
              <span>${item.sub}</span>
            </div>
          `,
        )
        .join("")}
    </div>

    <div class="vib-detail-grid">
      <section class="vib-detail-panel">
        <h3>Ưu điểm nổi bật</h3>
        <ul class="vib-check-list">
          ${advantages.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="vib-detail-panel">
        <h3>Thông tin chi tiết</h3>
        ${detailRows
          .map(
            ([label, value]) => `
              <div class="vib-info-row">
                <span>${label}</span>
                <strong>${value}</strong>
              </div>
            `,
          )
          .join("")}
      </section>

      <section class="vib-detail-panel">
        <h3>Điều kiện vay</h3>
        <ul class="vib-check-list">
          ${conditions.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="vib-security-box">
          <strong>🔒 Bảo mật thông tin</strong>
          <p>Thông tin của bạn được xử lý theo chính sách bảo mật và chỉ sử dụng cho mục đích liên hệ tư vấn.</p>
        </div>
      </section>
    </div>

    <button class="vib-register-btn" type="button" onclick="openProductRegisterLink(window.vibRegisterLink)">
      Đăng ký tư vấn →
    </button>
    <p class="vib-register-note">Tư vấn miễn phí - Không thu phí hồ sơ từ khách hàng</p>
  `;
}

function createDefaultProductDetailHTML(product) {
  let badgeHTML = "";
  if (product.specialBadge) {
    badgeHTML = `<span class="product-badge-large badge-orange">✓ ${product.specialBadge.toUpperCase()}</span>`;
  }

  const defaultIcons = ["⚡", "🛡️", "📱", "🎧", "💸"];
  const reqsList =
    product.reqs && product.reqs.length > 0
      ? product.reqs
      : ["Tư vấn hồ sơ", "Điều kiện tùy sản phẩm", "Đăng ký online"];
  const tagsHTML = reqsList
    .map(
      (req, i) =>
        `<span>${defaultIcons[i % defaultIcons.length]} ${req}</span>`,
    )
    .join("");

  return `
    <div class="product-detail-header-new">
      <div class="detail-header-left">
        <div class="detail-logo-box">
          ${product.logo ? `<img src="${product.logo}" alt="${product.company} logo" class="detail-logo-img brand-logo-${product.id}" />` : `<div style="font-weight: bold; font-size: 1.2rem; color: var(--primary); text-align: center; width: 100%;">${product.company.substring(0, 3)}</div>`}
        </div>
        <div class="detail-title-area">
          ${badgeHTML}
          <h2>${product.company}</h2>
          <p>${product.highlight}</p>
          <div class="detail-quick-tags">
            ${tagsHTML}
          </div>
        </div>
      </div>
      <div class="detail-header-right">
        <button class="product-detail-close-new" onclick="closeProductDetail()">✕</button>
        <div class="detail-trust-info">
          <div class="trust-avatars">
            <div class="avatar">👨</div><div class="avatar">👩</div><div class="avatar">👨‍🦱</div><div class="avatar-count">TV</div>
          </div>
          <div class="trust-stats">
            <strong>Tư vấn</strong> theo nhu cầu
          </div>
          <div class="trust-rating">
            <span class="rating-star">⭐ Minh bạch</span>
            <span class="rating-text">Không cam kết kết quả phê duyệt</span>
          </div>
        </div>
      </div>
    </div>

    <div class="product-detail-stats-new">
      <div class="stat-box">
        <div class="stat-box-icon">💰</div>
        <div class="stat-box-label">Hạn mức vay</div>
        <div class="stat-box-value text-green">Tham khảo</div>
        <div class="stat-box-sub">theo hồ sơ</div>
      </div>
      <div class="stat-box">
        <div class="stat-box-icon">⏱️</div>
        <div class="stat-box-label">Thời gian xử lý</div>
        <div class="stat-box-value text-green">Tùy hồ sơ</div>
        <div class="stat-box-sub">theo chính sách</div>
      </div>
      <div class="stat-box">
        <div class="stat-box-icon">📅</div>
        <div class="stat-box-label">Kỳ hạn vay</div>
        <div class="stat-box-value text-green">${product.duration}</div>
        <div class="stat-box-sub">tháng</div>
      </div>
    </div>

    <div class="product-detail-columns-new">
      <div class="col-features">
        <h4>Ưu điểm nổi bật</h4>
        <ul class="check-list">
          <li>Hỗ trợ tư vấn quy trình đăng ký</li>
          <li>Hồ sơ và điều kiện phụ thuộc từng sản phẩm</li>
          <li>Kết quả phê duyệt phụ thuộc quy định của đơn vị cung cấp</li>
          <li>Thời gian xử lý tùy thuộc từng hồ sơ</li>
          <li>Hỗ trợ qua các kênh liên hệ phù hợp</li>
          <li>Có thể tìm hiểu thông tin đăng ký online</li>
        </ul>
      </div>
      <div class="col-info">
        <h4>Thông tin chi tiết</h4>
        <div class="info-row"><span>Hạn mức vay</span><strong>Theo chính sách của đơn vị cung cấp</strong></div>
        <div class="info-row"><span>Thời gian vay</span><strong>${product.duration} tháng</strong></div>
        <div class="info-row"><span>Phí, lãi suất</span><strong>Cần kiểm tra theo chính sách từng thời điểm</strong></div>
        <div class="info-row"><span>Độ tuổi</span><strong>Công dân Việt Nam từ 20 - 60 tuổi</strong></div>
        <div class="info-row"><span>Hình thức giải ngân</span><strong>Phụ thuộc quy định và kết quả phê duyệt</strong></div>
        <div class="info-row"><span>Khu vực hỗ trợ</span><strong>Toàn quốc</strong></div>
      </div>
      <div class="col-conditions">
        <h4>Điều kiện vay</h4>
        <ul class="condition-list">
          <li><span>👤</span> Công dân Việt Nam</li>
          <li><span>📅</span> Từ 20 - 60 tuổi</li>
          <li><span>🪪</span> Có CCCD còn hiệu lực</li>
          <li><span>🏦</span> Có tài khoản ngân hàng chính chủ</li>
        </ul>
        <div class="cam-ket-box">
          <div class="cam-ket-icon">🛡️</div>
          <div class="cam-ket-text">
            <strong>Bảo mật thông tin</strong>
            Thông tin của bạn được xử lý theo chính sách bảo mật và chỉ sử dụng cho mục đích liên hệ tư vấn.
          </div>
        </div>
      </div>
    </div>

    <div class="product-detail-footer-new">
      <button class="btn-xem-chi-tiet" onclick="if('${product.link}' !== 'null' && '${product.link}' !== 'undefined') window.open('${product.link}', '_blank'); else openModal();">Xem chi tiết sản phẩm →</button>
      <button class="btn-dang-ky-ngay" onclick="closeProductDetail(); openModal();">
        <strong>Đăng ký tư vấn →</strong>
        <span>Tư vấn miễn phí - Không thu phí hồ sơ</span>
      </button>
    </div>
  `;
}

function closeProductDetail(event) {
  if (event && event.target.id !== "product-detail-modal") return;
  const modal = qs("#product-detail-modal");
  if (modal) {
    modal.classList.remove("open");
    const main = qs("main");
    if (main) main.classList.remove("blurred-background");
  }
}

// Expose to global scope
window.openProductDetail = openProductDetail;
window.closeProductDetail = closeProductDetail;
window.openProductRegisterLink = openProductRegisterLink;
window.feCreditRegisterLink = feCreditRegisterLink;
window.lotteRegisterLink = lotteRegisterLink;
window.f88RegisterLink = f88RegisterLink;
window.shbRegisterLink = shbRegisterLink;
window.tnexRegisterLink = tnexRegisterLink;
window.swadRegisterLink = swadRegisterLink;
window.vibRegisterLink = vibRegisterLink;

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProductDetail();
});

function renderBankProducts() {
  const container = qs("#bank-grid");
  if (!container) return;
  container.innerHTML = "";
  BANK_PRODUCTS.forEach((p) => {
    const featuresHTML = p.features
      .map(
        (f) => `
      <div class="bnk-feature-item">
        <span class="bnk-feature-icon">${f.icon}</span>
        <div class="bnk-feature-text">
          <strong>${f.title}</strong>
          <span>${f.sub}</span>
        </div>
      </div>
    `,
      )
      .join("");

    const card = document.createElement("div");
    card.className = "bnk-card animate-fade-rise";
    card.style.borderColor = p.borderColor;
    card.style.background = p.cardBg || "white";
    card.innerHTML = `
      <div class="bnk-badge" style="background: ${p.badgeColor}15; color: ${p.badgeColor}; border: 1px solid ${p.badgeColor}30;">
        ${p.badge}
      </div>
      <div class="bnk-card-header">
        <div class="bnk-logo-wrapper" style="background: ${p.color};">
          <img src="${p.logo}" alt="${p.bank}" class="bnk-logo-img" />
        </div>
        <div class="bnk-header-info">
          <h3>${p.bank}</h3>
          <p class="bnk-fullname">${p.fullName}</p>
        </div>
        <div class="bnk-rating-box">
          <div class="bnk-rating-stars">⭐ Tham khảo</div>
          <div class="bnk-rating-count">Điều kiện theo ngân hàng</div>
        </div>
      </div>
      <p class="bnk-desc">${p.product}</p>
      <div class="bnk-features">${featuresHTML}</div>
      <div class="bnk-offer">
        <span class="bnk-offer-icon">🎁</span>
        <div class="bnk-offer-text">
          <strong>Ưu đãi tham khảo nếu có</strong>
          <span>${p.offer}</span>
        </div>
      </div>
      <div class="bnk-actions">
        <button class="bnk-btn-primary" data-link="${p.link}">Tìm hiểu sản phẩm →</button>
        <button class="bnk-btn-detail" data-id="${p.id}">Xem thông tin</button>
      </div>
    `;

    card.querySelector(".bnk-btn-primary").onclick = (e) => {
      e.stopPropagation();
      if (p.link) window.open(p.link, "_blank");
      else openModal();
    };
    card.querySelector(".bnk-btn-detail").onclick = (e) => {
      e.stopPropagation();
      if (p.link) window.open(p.link, "_blank");
      else openModal();
    };

    container.appendChild(card);
  });
}

// =============================
// 4. INTERSECTION OBSERVERS
// =============================
function initKPICounter() {
  const section = qs("#kpi-section");
  if (!section) return;
  if (!("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          qsa(".kpi-card").forEach((card) => {
            const target = parseInt(card.dataset.count, 10);
            if (!Number.isFinite(target)) return;
            const suffix = card.dataset.suffix || "";
            const el = card.querySelector(".kpi-number");
            countUp(el, target, suffix);
          });
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );
  observer.observe(section);
}

function countUp(element, target, suffix = "", duration = 1500) {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    const value = Math.floor(percent * target);
    element.textContent = value + suffix;
    if (percent < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function initScrollAnimations() {
  const els = qsa(".product-card, .why-card, .bank-card");
  if (!els.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );
  els.forEach((el) => observer.observe(el));
}

// =============================
// 5. MARQUEE DUPLICATION
// =============================
function initMarquee() {
  const track = qs(".partners-logo-track");
  if (!track) return;

  const row = track.parentNode;

  // Tao wrapper inner boc ngoai track
  const inner = document.createElement("div");
  inner.className = "partners-logo-row-inner";

  row.appendChild(inner);
  inner.appendChild(track);

  // Clone track thu 2 noi duoi de loop lien mach
  const clone = track.cloneNode(true);
  inner.appendChild(clone);
}

// =============================
// 6. LOAN FILTER HANDLING
// =============================
function initLoanFilters() {
  qsa("#page-loan .filter-btn[data-filter]").forEach((pill) => {
    pill.addEventListener("click", () => {
      const filterName = pill.dataset.filter;
      const filterValue = pill.dataset.value || "all";
      if (!filterName) return;

      activeLoanFilters[filterName] = filterValue;

      qsa(`#page-loan .filter-btn[data-filter="${filterName}"]`).forEach((btn) => {
        btn.classList.toggle("active", btn === pill);
      });

      renderLoanProducts();
    });
  });

  const sortSelect = qs("#loan-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      activeLoanFilters.sort = sortSelect.value || "popular";
      renderLoanProducts();
    });
  }
}

function initFilters() {
  initLoanFilters();
}

function initLoanPageFilters() {
  const page = qs(".loan-page");
  if (!page) return;

  const buttons = page.querySelectorAll(".loan-filter__button[data-loan-filter]");
  const cards = page.querySelectorAll(".loan-card[data-category]");
  const empty = qs("#loan-empty");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.loanFilter || "all";
      let visibleCount = 0;

      buttons.forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      cards.forEach((card) => {
        const categories = (card.dataset.category || "").split(/\s+/);
        const isVisible = filter === "all" || categories.includes(filter);
        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      if (empty) empty.hidden = visibleCount > 0;
    });
  });
}

// =============================
// 7. FORM SUBMISSION (Đã cập nhật Link & Fix lỗi CORS)
// =============================
const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbxC5BZgumRoHmwYFsOKwjRRYzCOGFvs5E7X5j54Ry_VOcxVkahZuj8ijUnWRLRtJjqE/exec";

const CONSULT_LOAN_PRODUCTS = [
  "FE Credit",
  "SHB Finance",
  "Lotte Finance",
  "F88",
  "TNEX",
  "VIB",
  "Sawad",
];

const CONSULT_BANK_PRODUCTS = ["MB Bank", "VPBank", "UOB Bank"];

function toTitleCaseName(value) {
  return value
    .split(" ")
    .map((word) => {
      if (!word) return "";
      const lower = word.toLocaleLowerCase("vi-VN");
      return lower.charAt(0).toLocaleUpperCase("vi-VN") + lower.slice(1);
    })
    .join(" ");
}

function initNameAutoCapitalization() {
  qsa("#mf-name, #cf-name").forEach((field) => {
    field.addEventListener("input", () => {
      const cursor = field.selectionStart;
      field.value = toTitleCaseName(field.value);
      if (typeof cursor === "number") field.setSelectionRange(cursor, cursor);
    });
  });
}

function setConsultGroupRequired(group, required) {
  if (!group) return;
  group.querySelectorAll("input, select, textarea").forEach((field) => {
    field.required = required;
    if (!required) {
      if (field.tagName === "SELECT") field.selectedIndex = 0;
      else field.value = "";
    }
  });
}

function getConsultFormGroup(element) {
  if (!element) return null;
  return (
    element.closest(".form-group-new") ||
    element.closest(".form-group") ||
    element.parentElement
  );
}

function createConsultExtraFields(prefix) {
  const group = document.createElement("div");
  group.className = "consult-extra-fields";
  group.innerHTML = `
    <div class="consult-extra consult-extra--loan" hidden>
      <div class="form-group-new mt-3">
        <label for="${prefix}-selected-loan">Sản phẩm vay muốn tìm hiểu <span class="text-red">*</span></label>
        <div class="input-wrapper">
          <select id="${prefix}-selected-loan">
            <option value="">-- Chọn sản phẩm vay --</option>
            ${CONSULT_LOAN_PRODUCTS.map((item) => `<option value="${item}">${item}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="form-row consult-extra__row">
        <div class="form-group-new">
          <label for="${prefix}-loan-amount">Nhu cầu vay dự kiến (triệu đồng) <span class="text-red">*</span></label>
          <div class="input-wrapper">
            <input type="number" id="${prefix}-loan-amount" min="1" max="300" placeholder="VD: 50" />
          </div>
        </div>
        <div class="form-group-new">
          <label for="${prefix}-loan-duration">Thời gian vay dự kiến <span class="text-red">*</span></label>
          <div class="input-wrapper">
            <select id="${prefix}-loan-duration">
              <option value="">-- Chọn thời gian --</option>
              <option value="6 tháng">6 tháng</option>
              <option value="12 tháng">12 tháng</option>
              <option value="18 tháng">18 tháng</option>
              <option value="24 tháng">24 tháng</option>
              <option value="36 tháng">36 tháng</option>
              <option value="Cần tư vấn thêm">Cần tư vấn thêm</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="consult-extra consult-extra--bank" hidden>
      <div class="form-group-new mt-3">
        <label for="${prefix}-selected-bank">Tài khoản/thẻ ngân hàng muốn tìm hiểu <span class="text-red">*</span></label>
        <div class="input-wrapper">
          <select id="${prefix}-selected-bank">
            <option value="">-- Chọn ngân hàng --</option>
            ${CONSULT_BANK_PRODUCTS.map((item) => `<option value="${item}">${item}</option>`).join("")}
          </select>
        </div>
      </div>
    </div>
    <div class="form-group-new mt-3 consult-extra__notes" hidden>
      <label for="${prefix}-extra-notes">Ghi chú thêm</label>
      <textarea id="${prefix}-extra-notes" rows="3" placeholder="VD: Tôi muốn được tư vấn sản phẩm phù hợp với nhu cầu cá nhân..."></textarea>
    </div>
  `;
  return group;
}

function normalizeConsultNeedSelect(select) {
  const currentValue = select.value;
  select.innerHTML = `
    <option value="">-- Chọn nhu cầu --</option>
    <option value="Vay tiêu dùng">Vay tiêu dùng</option>
    <option value="Mở tài khoản/thẻ ngân hàng">Mở tài khoản/thẻ ngân hàng</option>
    <option value="Cần tư vấn thêm">Cần tư vấn thêm</option>
  `;
  if ([...select.options].some((option) => option.value === currentValue)) {
    select.value = currentValue;
  }
}

function initConsultDynamicFields() {
  ["mf", "cf"].forEach((prefix) => {
    const form = qs(prefix === "mf" ? "#modal-form" : "#contact-form");
    const needSelect = qs(`#${prefix}-product`);
    if (!form || !needSelect) return;

    normalizeConsultNeedSelect(needSelect);
    const needLabel = form.querySelector(`label[for="${prefix}-product"]`);
    if (needLabel) {
      needLabel.innerHTML = 'Nhu cầu tư vấn <span class="text-red">*</span>';
    }

    const oldAmountGroup = getConsultFormGroup(qs(`#${prefix}-amount`));
    const oldDurationGroup = getConsultFormGroup(qs(`#${prefix}-duration`));
    const oldNotesGroup = getConsultFormGroup(qs(`#${prefix}-notes`));
    const needGroup = getConsultFormGroup(needSelect);

    let dynamicGroup = form.querySelector(`.consult-extra-fields[data-prefix="${prefix}"]`);
    if (!dynamicGroup && needGroup) {
      dynamicGroup = createConsultExtraFields(prefix);
      dynamicGroup.dataset.prefix = prefix;
      needGroup.insertAdjacentElement("afterend", dynamicGroup);
    }
    if (!dynamicGroup) return;

    const loanGroup = dynamicGroup.querySelector(".consult-extra--loan");
    const bankGroup = dynamicGroup.querySelector(".consult-extra--bank");
    const notesGroup = dynamicGroup.querySelector(".consult-extra__notes");
    const legacyGroups = [oldAmountGroup, oldDurationGroup, oldNotesGroup].filter(
      (group) => group && !dynamicGroup.contains(group),
    );

    const updateVisibility = () => {
      const need = needSelect.value;
      const isLoan = need === "Vay tiêu dùng";
      const isBank = need === "Mở tài khoản/thẻ ngân hàng";
      const hasNeed = Boolean(need);

      loanGroup.hidden = !isLoan;
      bankGroup.hidden = !isBank;
      notesGroup.hidden = !hasNeed;
      legacyGroups.forEach((group) => {
        group.hidden = true;
        setConsultGroupRequired(group, false);
      });

      setConsultGroupRequired(loanGroup, isLoan);
      setConsultGroupRequired(bankGroup, isBank);
      setConsultGroupRequired(notesGroup, false);
    };

    if (needSelect.dataset.consultDynamicReady !== "true") {
      needSelect.addEventListener("change", updateVisibility);
      needSelect.dataset.consultDynamicReady = "true";
    }
    updateVisibility();
  });
}

async function submitForm(formType) {
  if (
    !WEBHOOK_URL ||
    WEBHOOK_URL.includes("YOUR_APPS_SCRIPT_URL") ||
    WEBHOOK_URL.includes("DÁN_LINK_VÀO_ĐÂY")
  ) {
    showToast(
      "⚠️ Chưa cấu hình URL Apps Script. Vui lòng cập nhật WEBHOOK_URL.",
    );
    return;
  }

  const prefix = formType === "modal" ? "mf" : "cf";
  const nameField = qs(`#${prefix}-name`);
  const phoneField = qs(`#${prefix}-phone`);
  const productField = qs(`#${prefix}-product`);
  const selectedLoanField = qs(`#${prefix}-selected-loan`);
  const selectedBankField = qs(`#${prefix}-selected-bank`);
  const amountField = qs(`#${prefix}-loan-amount`) || qs(`#${prefix}-amount`);
  const durationField = qs(`#${prefix}-loan-duration`) || qs(`#${prefix}-duration`);
  const notesField = qs(`#${prefix}-extra-notes`) || qs(`#${prefix}-notes`);

  const name = nameField ? nameField.value.trim() : "";
  const phone = phoneField ? phoneField.value.trim() : "";
  const need = productField ? productField.value : "";
  const selectedProduct =
    need === "Vay tiêu dùng"
      ? selectedLoanField?.value || ""
      : need === "Mở tài khoản/thẻ ngân hàng"
        ? selectedBankField?.value || ""
        : "";
  const amount = amountField ? amountField.value : "";
  const duration = durationField ? durationField.value : "";
  const notes = notesField ? notesField.value.trim() : "";

  // Bắt buộc tất cả các trường
  if (!name || !phone || !need) {
    showToast("⚠️ Vui lòng điền đầy đủ tất cả thông tin bắt buộc");
    return;
  }

  if (need === "Vay tiêu dùng" && (!selectedProduct || !amount || !duration)) {
    showToast("Vui lòng chọn sản phẩm vay, nhu cầu vay và thời gian vay dự kiến.");
    return;
  }

  if (need === "Mở tài khoản/thẻ ngân hàng" && !selectedProduct) {
    showToast("Vui lòng chọn tài khoản/thẻ ngân hàng muốn tìm hiểu.");
    return;
  }

  const data = {
    timestamp: new Date().toISOString(),
    fullName: name,
    phone: "'" + phone,
    consultNeed: need,
    productType: selectedProduct || need,
    loanAmount: amount || "Chưa cung cấp ở form nhanh",
    duration: duration || "Chưa cung cấp ở form nhanh",
    notes: notes || "Khách hàng gửi form tư vấn nhanh",
  };

  const formId = formType === "modal" ? "modal-form" : "contact-form";
  const submitBtn = qs(`#${formId} button[type='submit']`);
  if (submitBtn) submitBtn.textContent = "Đang gửi...";

  try {
    const resp = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8", // Xử lý triệt để lỗi CORS của Google
      },
      body: JSON.stringify(data),
    });

    const result = await resp.json().catch(() => ({}));

    if (!resp.ok && resp.type !== "opaque") {
      const message =
        result.message || result.error || "Lỗi mạng hoặc API chưa hoạt động.";
      throw new Error(message);
    }

    showToast("✅ Cảm ơn bạn đã gửi thông tin. Tài Chính Quảng Trị sẽ liên hệ hỗ trợ tư vấn trong thời gian phù hợp.");
    qs(`#${formId}`).reset();
    initConsultDynamicFields();
    if (formType === "modal") closeModal();
  } catch (e) {
    console.error("Submit form error:", e);
    showToast(`❌ Gửi thất bại: Vui lòng thử lại sau.`);
  } finally {
    if (submitBtn) submitBtn.textContent = "Nhận tư vấn miễn phí";
  }
}

// =============================
// 8. INITIALISATION
// =============================
document.addEventListener("DOMContentLoaded", () => {
  // Auto switch page on load based on filename
  const filename = window.location.pathname.split("/").pop() || "index.html";
  if (filename === "vay-tieu-dung.html") {
    switchPage("loan");
  } else if (filename === "the-ngan-hang.html") {
    switchPage("bank");
  } else if (filename === "lien-he.html") {
    switchPage("contact");
  } else if (qs("#page-home")) {
    switchPage("home");
  }

  if (qs("#featured-grid")) renderFeatured();
  if (qs("#product-layout")) renderLoanProducts();
  if (qs("#bank-grid")) renderBankProducts();
  if (qs("#kpi-section")) initKPICounter();
  initScrollAnimations();
  initTabNavigation();
  initTopbarScroll();
  initMobileMenu();
  initFilters();
  initLoanPageFilters();
  initMarquee();
  initNameAutoCapitalization();
  initConsultDynamicFields();

  const modalForm = qs("#modal-form");
  if (modalForm) {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm("modal");
    });
  }
  const contactForm = qs("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm("contact");
    });
  }

  const heroContainer = document.querySelector(".hero-container");
  if (heroContainer) {
    setTimeout(() => {
      heroContainer.classList.add("is-visible");
    }, 100);
  }
});

// expose functions for inline HTML handlers
window.switchPage = switchPage;
window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.openModal = openModal;
window.closeModal = closeModal;
window.closeModalOnBackdrop = closeModalOnBackdrop;
