// Tìm kiếm sản phẩm
const search = document.getElementById('search-input');
search.addEventListener("keyup", function () {
  let value = search.value.toLowerCase().trim();
  document.querySelectorAll('.product-card').forEach(card => {
    const name = card.querySelector('.product-name').textContent.toLowerCase();
    if (value === "" || name.includes(value)) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  });
});

// Ràng buộc đăng nhập trước khi vào trang sản phẩm
document.querySelectorAll(".buy-button").forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    let user = JSON.parse(localStorage.getItem("currentUser"));
    let link = this.getAttribute("data-link");

    if (!user) {
      alert("Bạn cần đăng nhập trước khi mua hàng!");
      window.location.href = "signup.html";
      return;
    }

    if (link) {
      window.location.href = link;
    }
  });
});

// Hiển thị tên người dùng sau khi đăng nhập
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



