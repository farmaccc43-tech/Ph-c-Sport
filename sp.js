document.getElementById("thanhtoan").addEventListener("click", () => {
  alert("✅ Thanh toán thành công!");
});
window.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const usernameSpan = document.getElementById("username");
  const logoutBtn = document.getElementById("logout-btn");
  const userLink = document.getElementById("user-link");

  if (currentUser) {
    usernameSpan.textContent = currentUser.name;
    userLink.href = "#"; // Không cho bấm về signup nữa
    logoutBtn.style.display = "inline-block";
  } else {
    usernameSpan.textContent = "";
    userLink.href = "signup.html";
    logoutBtn.style.display = "none";
  }

  // Xử lý log out
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    alert("Bạn đã đăng xuất!");
    window.location.href = "index.html"; // quay lại trang chủ
  });
});
// Nút Thêm vào giỏ hàng
document.getElementById("add-to-cart").addEventListener("click", () => {

  // Lấy thông tin sản phẩm từ trang chi tiết
  const name = document.getElementById("product-name").textContent;
  const price = parseInt(document.querySelector(".product-price").textContent.replace(/\D/g, ""));
  const img = document.querySelector(".sp img").src;

  // Lưu vào localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price, img });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("✅ Đã thêm sản phẩm vào giỏ hàng!");
});
