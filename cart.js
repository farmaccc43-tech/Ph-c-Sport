// Lấy giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Render giỏ hàng
function renderCart() {
  const container = document.getElementById("cart-items");
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    let row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${item.img}" alt="${item.name}" style="width:80px; border-radius:8px;"></td>
      <td class="text-start align-middle">${item.name}</td>
      <td class="text-danger fw-bold align-middle">${item.price.toLocaleString()}₫</td>
      <td class="align-middle">
        <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    `;
    container.appendChild(row);
  });

  document.getElementById("total").textContent =
    "Tổng tiền: " + total.toLocaleString() + "₫";
}

// Xóa sản phẩm
function removeItem(i) {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Thanh toán
document.getElementById("checkout").addEventListener("click", () => {
  let user = JSON.parse(localStorage.getItem("currentUser"));
  if (!user) {
    alert("Bạn cần đăng nhập để thanh toán!");
    window.location.href = "signup.html";
    return;
  }
  alert("✅ Thanh toán thành công, cảm ơn " + user.name + "!");
  localStorage.removeItem("cart");
  cart = [];
  renderCart();
});

// Khởi tạo giỏ hàng
renderCart();
