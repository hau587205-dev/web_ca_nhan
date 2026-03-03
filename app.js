const products = [
  { id: 1, name: "Áo thun basic cotton", category: "Áo", gender: "Unisex", price: 189000, oldPrice: 259000, rating: 4.7, sold: 6200, freeShip: true, stock: 80, flash: true, sizes: ["S", "M", "L", "XL"], colors: ["Đen", "Trắng", "Xanh"], image: "img/_o_xanh_den_-_d__taq_3195a586eb2b48c398bb93a9dd4c14d0.png" },
  { id: 2, name: "Áo sơ mi Hàn Quốc", category: "Áo", gender: "Nam", price: 329000, oldPrice: 429000, rating: 4.6, sold: 2800, freeShip: true, stock: 45, flash: false, sizes: ["M", "L", "XL"], colors: ["Trắng", "Xanh", "Be"], image:"img/unnamed.png" },
  { id: 3, name: "Quần jean ống rộng", category: "Quần", gender: "Nữ", price: 389000, oldPrice: 520000, rating: 4.8, sold: 4100, freeShip: true, stock: 56, flash: true, sizes: ["S", "M", "L"], colors: ["Xanh", "Đen"], image: "img/2-xden-qjf03027.jpg" },
  { id: 4, name: "Quần jogger thể thao", category: "Quần", gender: "Nam", price: 279000, oldPrice: 369000, rating: 4.5, sold: 3300, freeShip: false, stock: 40, flash: false, sizes: ["M", "L", "XL"], colors: ["Đen", "Nâu"], image:"img/e20f7ad9323fbcfe75732b7e9.jpg" },
  { id: 5, name:"Váy midi thanh lịch", category:"Váy", gender:"Nữ", price:"459.000đ ", oldPrice:"62.7.7đ ", rating:"4.9 ", sold:"1.9k ", freeShip:true , stock:"3 ", flash:true , sizes:["S","M","L"], colors:["Be","Đen","Trắng"], image:"img/20220311_VIS5cLw0KRWTqdNI6tTAVY2n.jpg"},
  { id: 6, name: "Hoodie oversize premium", category: "Hoodie", gender: "Unisex", price: 549000, oldPrice: 729000, rating: 4.7, sold: 2600, freeShip: true, stock: 35, flash: false, sizes: ["M", "L", "XL"], colors: ["Đen", "Nâu", "Trắng"], image: "img/1.jpg" },
  { id: 7, name: "Set đồ streetwear", category: "Set đồ", gender: "Unisex", price: 699000, oldPrice: 899000, rating: 4.6, sold: 1500, freeShip: true, stock: 20, flash: true, sizes: ["S", "M", "L"], colors: ["Đen", "Be"], image: "img/BS2758.jpg" },
  { id: 8, name: "Áo khoác denim", category: "Áo", gender: "Nam", price: 599000, oldPrice: 790000, rating: 4.4, sold: 1100, freeShip: false, stock: 24, flash: false, sizes: ["M", "L", "XL"], colors: ["Xanh", "Đen"], image: "img/o1cn01vqoqcc1lkuksoup3r3965984.webp" },
  { id: 9, name: "Chân váy xếp ly", category: "Váy", gender: "Nữ", price: 299000, oldPrice: 420000, rating: 4.5, sold: 2400, freeShip: true, stock: 42, flash: false, sizes: ["S", "M", "L"], colors: ["Đen", "Trắng", "Be"], image: "img/vn-11134207-7ra0g-m7fsa8cjhexkde.webp" },
  { id: 10, name: "Hoodie zip thể thao", category: "Hoodie", gender: "Unisex", price: 489000, oldPrice: 640000, rating: 4.6, sold: 2100, freeShip: true, stock: 27, flash: true, sizes: ["M", "L", "XL"], colors: ["Đen", "Xanh", "Nâu"], image: "img/2Y35D450I-38AW_1_FW23_M.avif" },
  { id: 11, name: "Áo polo basic", category: "Áo", gender: "Nam", price: 259000, oldPrice: 349000, rating: 4.5, sold: 1700, freeShip: true, stock: 38, flash: false, sizes: ["M", "L", "XL"], colors: ["Trắng", "Đen", "Xanh"], image: "img/9apct055ghs__1_-1080x1080_bba6d7637f2b47b9a0587b0022427a6b_master.jpg" },
  { id: 12, name: "Quần kaki slimfit", category: "Quần", gender: "Unisex", price: 419000, oldPrice: 549000, rating: 4.7, sold: 1300, freeShip: true, stock: 32, flash: true, sizes: ["S", "M", "L", "XL"], colors: ["Nâu", "Đen", "Be"], image: "img/sPayryQLpILp3egEcLk1LleBatrn8LsT.webp" }
];

const els = {
  productGrid: document.getElementById("productGrid"),
  resultCount: document.getElementById("resultCount"),
  searchInput: document.getElementById("searchInput"),
  sortSelect: document.getElementById("sortSelect"),
  genderFilter: document.getElementById("genderFilter"),
  sizeFilter: document.getElementById("sizeFilter"),
  colorFilter: document.getElementById("colorFilter"),
  priceRange: document.getElementById("priceRange"),
  maxPriceText: document.getElementById("maxPriceText"),
  minRating: document.getElementById("minRating"),
  freeShipOnly: document.getElementById("freeShipOnly"),
  inStockOnly: document.getElementById("inStockOnly"),
  clearFilterBtn: document.getElementById("clearFilterBtn"),
  flashOnlyBtn: document.getElementById("flashOnlyBtn"),
  openCartBtn: document.getElementById("openCartBtn"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartDrawer: document.getElementById("cartDrawer"),
  overlay: document.getElementById("overlay"),
  cartCount: document.getElementById("cartCount"),
  wishlistCount: document.getElementById("wishlistCount"),
  cartItems: document.getElementById("cartItems"),
  voucherInput: document.getElementById("voucherInput"),
  applyVoucherBtn: document.getElementById("applyVoucherBtn"),
  subtotal: document.getElementById("subtotal"),
  discount: document.getElementById("discount"),
  shipping: document.getElementById("shipping"),
  total: document.getElementById("total"),
  checkoutBtn: document.getElementById("checkoutBtn"),
  checkoutModal: document.getElementById("checkoutModal"),
  customerName: document.getElementById("customerName"),
  customerPhone: document.getElementById("customerPhone"),
  customerAddress: document.getElementById("customerAddress"),
  paymentMethod: document.getElementById("paymentMethod"),
  cancelCheckoutBtn: document.getElementById("cancelCheckoutBtn"),
  confirmCheckoutBtn: document.getElementById("confirmCheckoutBtn"),
  orderList: document.getElementById("orderList"),
  clearOrdersBtn: document.getElementById("clearOrdersBtn"),
  countdown: document.getElementById("countdown"),
  toast: document.getElementById("toast")
};

const state = {
  keyword: "",
  category: "all",
  gender: "all",
  size: "all",
  color: "all",
  maxPrice: Number(els.priceRange.value),
  minRating: 0,
  freeShipOnly: false,
  inStockOnly: false,
  sort: "popular",
  flashOnly: false,
  voucher: "",
  cart: JSON.parse(localStorage.getItem("fashion_premium_cart") || "[]"),
  orders: JSON.parse(localStorage.getItem("fashion_premium_orders") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("fashion_premium_wishlist") || "[]")
};

const vouchers = {
  FASHION10: { type: "percent", value: 10 },
  SAVE50K: { type: "fixed", value: 50000 },
  FREESHIP: { type: "ship", value: 0 }
};

function formatMoney(value) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

function saveAll() {
  localStorage.setItem("fashion_premium_cart", JSON.stringify(state.cart));
  localStorage.setItem("fashion_premium_orders", JSON.stringify(state.orders));
  localStorage.setItem("fashion_premium_wishlist", JSON.stringify(state.wishlist));
}

function toast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.remove("hidden");
  setTimeout(() => els.toast.classList.add("hidden"), 1500);
}

function productById(id) {
  return products.find((p) => p.id === id);
}

function selectedVariant(productId) {
  const sizeEl = document.getElementById(`size-${productId}`);
  const colorEl = document.getElementById(`color-${productId}`);
  return {
    size: sizeEl ? sizeEl.value : "M",
    color: colorEl ? colorEl.value : "Đen"
  };
}

function filterProducts() {
  const keyword = state.keyword.trim().toLowerCase();
  const result = products.filter((p) => {
    if (state.category !== "all" && p.category !== state.category) return false;
    if (state.gender !== "all" && p.gender !== state.gender) return false;
    if (state.size !== "all" && !p.sizes.includes(state.size)) return false;
    if (state.color !== "all" && !p.colors.includes(state.color)) return false;
    if (keyword && !p.name.toLowerCase().includes(keyword)) return false;
    if (p.price > state.maxPrice) return false;
    if (p.rating < state.minRating) return false;
    if (state.freeShipOnly && !p.freeShip) return false;
    if (state.inStockOnly && p.stock <= 0) return false;
    if (state.flashOnly && !p.flash) return false;
    return true;
  });

  if (state.sort === "priceAsc") result.sort((a, b) => a.price - b.price);
  if (state.sort === "priceDesc") result.sort((a, b) => b.price - a.price);
  if (state.sort === "rating") result.sort((a, b) => b.rating - a.rating);
  if (state.sort === "popular") result.sort((a, b) => b.sold - a.sold);

  return result;
}

function wishlistContains(id) {
  return state.wishlist.includes(id);
}

function renderProducts() {
  const data = filterProducts();
  els.resultCount.textContent = `${data.length} sản phẩm`;

  if (!data.length) {
    els.productGrid.innerHTML = '<div class="empty">Không có sản phẩm phù hợp bộ lọc.</div>';
    return;
  }

  els.productGrid.innerHTML = data.map((p) => {
    const discount = Math.round((1 - p.price / p.oldPrice) * 100);
    const wishLabel = wishlistContains(p.id) ? "Bỏ thích" : "Yêu thích";
    const stockText = p.stock > 0 ? `Kho: ${p.stock}` : "Hết hàng";

    return `
    <article class="card">
      <div class="thumb"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
      <div class="body">
        <h4>${p.name}</h4>
        <div class="meta"><span>${p.category} - ${p.gender}</span><span>${p.rating}★</span></div>
        <div class="badges">
          <span class="badge flash">-${discount}%</span>
          ${p.flash ? '<span class="badge flash">Flash Sale</span>' : ""}
          ${p.freeShip ? '<span class="badge">Free Ship</span>' : ""}
        </div>
        <div class="price-row">
          <div>
            <div class="price">${formatMoney(p.price)}</div>
            <div class="old-price">${formatMoney(p.oldPrice)}</div>
          </div>
          <small>${stockText}</small>
        </div>
        <div class="variant-row">
          <select id="size-${p.id}">${p.sizes.map((s) => `<option value="${s}">${s}</option>`).join("")}</select>
          <select id="color-${p.id}">${p.colors.map((c) => `<option value="${c}">${c}</option>`).join("")}</select>
        </div>
        <div class="action-row">
          <button class="ghost-btn" onclick="toggleWishlist(${p.id})">${wishLabel}</button>
          <button class="primary-btn" onclick="addToCart(${p.id})" ${p.stock <= 0 ? "disabled" : ""}>Thêm giỏ</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function cartKey(id, size, color) {
  return `${id}_${size}_${color}`;
}

window.addToCart = (id) => {
  const p = productById(id);
  if (!p || p.stock <= 0) return;

  const v = selectedVariant(id);
  const key = cartKey(id, v.size, v.color);
  const item = state.cart.find((x) => x.key === key);

  if (item) item.qty += 1;
  else state.cart.push({ key, id, size: v.size, color: v.color, qty: 1 });

  saveAll();
  renderCart();
  toast("Đã thêm vào giỏ hàng");
};

window.toggleWishlist = (id) => {
  if (wishlistContains(id)) state.wishlist = state.wishlist.filter((x) => x !== id);
  else state.wishlist.push(id);
  saveAll();
  renderProducts();
  renderWishlistCount();
};

window.changeQty = (key, delta) => {
  const item = state.cart.find((x) => x.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) state.cart = state.cart.filter((x) => x.key !== key);
  saveAll();
  renderCart();
};

window.removeCartItem = (key) => {
  state.cart = state.cart.filter((x) => x.key !== key);
  saveAll();
  renderCart();
};

function calcTotals() {
  const subtotal = state.cart.reduce((sum, item) => {
    const p = productById(item.id);
    return p ? sum + p.price * item.qty : sum;
  }, 0);

  let shipping = subtotal === 0 ? 0 : subtotal >= 500000 ? 0 : 30000;
  let discount = 0;

  const voucher = vouchers[state.voucher];
  if (voucher) {
    if (voucher.type === "percent") discount = Math.floor((subtotal * voucher.value) / 100);
    if (voucher.type === "fixed") discount = voucher.value;
    if (voucher.type === "ship") shipping = 0;
  }

  discount = Math.min(discount, subtotal);
  const total = Math.max(0, subtotal - discount + shipping);
  return { subtotal, shipping, discount, total };
}

function renderCart() {
  const count = state.cart.reduce((sum, x) => sum + x.qty, 0);
  els.cartCount.textContent = count;

  if (!state.cart.length) {
    els.cartItems.innerHTML = '<div class="empty">Giỏ hàng đang trống.</div>';
  } else {
    els.cartItems.innerHTML = state.cart.map((item) => {
      const p = productById(item.id);
      if (!p) return "";
      return `
      <div class="cart-item">
        <div>
          <h5>${p.name}</h5>
          <div class="meta"><span>${item.size} - ${item.color}</span><span>${formatMoney(p.price)}</span></div>
          <div class="qty">
            <button onclick="changeQty('${item.key}', -1)">-</button>
            <strong>${item.qty}</strong>
            <button onclick="changeQty('${item.key}', 1)">+</button>
            <button class="ghost-btn" onclick="removeCartItem('${item.key}')">Xóa</button>
          </div>
        </div>
        <strong>${formatMoney(p.price * item.qty)}</strong>
      </div>`;
    }).join("");
  }

  const t = calcTotals();
  els.subtotal.textContent = formatMoney(t.subtotal);
  els.discount.textContent = `-${formatMoney(t.discount)}`;
  els.shipping.textContent = formatMoney(t.shipping);
  els.total.textContent = formatMoney(t.total);
}

function renderWishlistCount() {
  els.wishlistCount.textContent = state.wishlist.length;
}

function openCart() {
  els.cartDrawer.classList.remove("hidden");
  els.overlay.classList.remove("hidden");
}

function closeCart() {
  els.cartDrawer.classList.add("hidden");
  els.overlay.classList.add("hidden");
}

function openCheckoutModal() {
  if (!state.cart.length) {
    toast("Giỏ hàng đang trống");
    return;
  }
  els.checkoutModal.classList.remove("hidden");
}

function closeCheckoutModal() {
  els.checkoutModal.classList.add("hidden");
}

function renderOrders() {
  if (!state.orders.length) {
    els.orderList.innerHTML = '<div class="empty">Chưa có đơn hàng nào.</div>';
    return;
  }

  els.orderList.innerHTML = state.orders.slice().reverse().map((o) => `
    <article class="order-card">
      <h4>Mã đơn #${o.id}</h4>
      <p>Người nhận: ${o.customer}</p>
      <p>Ngày đặt: ${o.date}</p>
      <p>Thanh toán: ${o.payment}</p>
      <p>Số món: ${o.count} | Tổng tiền: <strong>${formatMoney(o.total)}</strong></p>
      <p>Trạng thái: <strong style="color:#16a34a">${o.status}</strong></p>
    </article>
  `).join("");
}

function checkout() {
  const name = els.customerName.value.trim();
  const phone = els.customerPhone.value.trim();
  const address = els.customerAddress.value.trim();
  if (!name || !phone || !address) {
    toast("Nhập đầy đủ thông tin nhận hàng");
    return;
  }

  const t = calcTotals();
  const count = state.cart.reduce((sum, x) => sum + x.qty, 0);
  const order = {
    id: String(Date.now()).slice(-8),
    customer: `${name} - ${phone}`,
    address,
    payment: els.paymentMethod.value,
    count,
    total: t.total,
    date: new Date().toLocaleString("vi-VN"),
    status: "Đã xác nhận"
  };

  state.orders.push(order);
  state.cart = [];
  state.voucher = "";
  els.voucherInput.value = "";

  saveAll();
  renderCart();
  renderOrders();
  closeCheckoutModal();
  closeCart();
  toast("Đặt hàng thành công");
}

function attachEvents() {
  els.searchInput.addEventListener("input", (e) => { state.keyword = e.target.value; renderProducts(); });
  els.sortSelect.addEventListener("change", (e) => { state.sort = e.target.value; renderProducts(); });
  els.genderFilter.addEventListener("change", (e) => { state.gender = e.target.value; renderProducts(); });
  els.sizeFilter.addEventListener("change", (e) => { state.size = e.target.value; renderProducts(); });
  els.colorFilter.addEventListener("change", (e) => { state.color = e.target.value; renderProducts(); });
  els.minRating.addEventListener("change", (e) => { state.minRating = Number(e.target.value); renderProducts(); });

  els.priceRange.addEventListener("input", (e) => {
    state.maxPrice = Number(e.target.value);
    els.maxPriceText.textContent = formatMoney(state.maxPrice);
    renderProducts();
  });

  els.freeShipOnly.addEventListener("change", (e) => { state.freeShipOnly = e.target.checked; renderProducts(); });
  els.inStockOnly.addEventListener("change", (e) => { state.inStockOnly = e.target.checked; renderProducts(); });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
      chip.classList.add("active");
      state.category = chip.dataset.category;
      state.flashOnly = false;
      renderProducts();
    });
  });

  els.flashOnlyBtn.addEventListener("click", () => {
    state.flashOnly = true;
    state.category = "all";
    document.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
    document.querySelector('.chip[data-category="all"]').classList.add("active");
    renderProducts();
  });

  els.clearFilterBtn.addEventListener("click", () => {
    state.keyword = "";
    state.category = "all";
    state.gender = "all";
    state.size = "all";
    state.color = "all";
    state.maxPrice = 2000000;
    state.minRating = 0;
    state.freeShipOnly = false;
    state.inStockOnly = false;
    state.flashOnly = false;
    state.sort = "popular";

    els.searchInput.value = "";
    els.sortSelect.value = "popular";
    els.genderFilter.value = "all";
    els.sizeFilter.value = "all";
    els.colorFilter.value = "all";
    els.priceRange.value = 2000000;
    els.maxPriceText.textContent = formatMoney(2000000);
    els.minRating.value = "0";
    els.freeShipOnly.checked = false;
    els.inStockOnly.checked = false;
    document.querySelectorAll(".chip").forEach((x) => x.classList.remove("active"));
    document.querySelector('.chip[data-category="all"]').classList.add("active");
    renderProducts();
  });

  els.openCartBtn.addEventListener("click", openCart);
  els.closeCartBtn.addEventListener("click", closeCart);
  els.overlay.addEventListener("click", closeCart);

  document.getElementById("wishlistBtn").addEventListener("click", () => {
    if (!state.wishlist.length) {
      toast("Danh sách yêu thích đang trống");
      return;
    }
    state.keyword = "";
    const set = new Set(state.wishlist);
    const filtered = products.filter((p) => set.has(p.id));
    els.resultCount.textContent = `${filtered.length} sản phẩm yêu thích`;
    els.productGrid.innerHTML = filtered.map((p) => {
      const discount = Math.round((1 - p.price / p.oldPrice) * 100);
      return `
      <article class="card">
        <div class="thumb"><img src="${p.image}" alt="${p.name}" loading="lazy" /></div>
        <div class="body">
          <h4>${p.name}</h4>
          <div class="meta"><span>${p.category} - ${p.gender}</span><span>${p.rating}★</span></div>
          <div class="badges"><span class="badge flash">-${discount}%</span></div>
          <div class="price">${formatMoney(p.price)}</div>
          <div class="action-row">
            <button class="ghost-btn" onclick="toggleWishlist(${p.id})">Bỏ thích</button>
            <button class="primary-btn" onclick="addToCart(${p.id})" ${p.stock <= 0 ? "disabled" : ""}>Thêm giỏ</button>
          </div>
        </div>
      </article>`;
    }).join("");
  });

  els.applyVoucherBtn.addEventListener("click", () => {
    const code = els.voucherInput.value.trim().toUpperCase();
    if (!code) {
      state.voucher = "";
      renderCart();
      toast("Đã bỏ mã giảm giá");
      return;
    }
    if (!vouchers[code]) {
      toast("Mã giảm giá không hợp lệ");
      return;
    }
    state.voucher = code;
    renderCart();
    toast(`Đã áp dụng mã ${code}`);
  });

  els.checkoutBtn.addEventListener("click", openCheckoutModal);
  els.cancelCheckoutBtn.addEventListener("click", closeCheckoutModal);
  els.confirmCheckoutBtn.addEventListener("click", checkout);

  els.clearOrdersBtn.addEventListener("click", () => {
    state.orders = [];
    saveAll();
    renderOrders();
    toast("Đã xóa lịch sử đơn hàng");
  });
}

function startCountdown() {
  const target = Date.now() + 8 * 60 * 60 * 1000;
  setInterval(() => {
    const diff = Math.max(0, target - Date.now());
    const hh = String(Math.floor(diff / 3600000)).padStart(2, "0");
    const mm = String(Math.floor((diff % 3600000) / 60000)).padStart(2, "0");
    const ss = String(Math.floor((diff % 60000) / 1000)).padStart(2, "0");
    els.countdown.textContent = `${hh}:${mm}:${ss}`;
  }, 1000);
}

function init() {
  document.querySelector('.chip[data-category="all"]').classList.add("active");
  renderProducts();
  renderCart();
  renderOrders();
  renderWishlistCount();
  attachEvents();
  startCountdown();
}

init();
