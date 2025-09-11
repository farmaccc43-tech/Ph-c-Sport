// tạo class active
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// 
// Lấy phần tử form
const signUpForm = document.querySelector(".sign-up form");
const signInForm = document.querySelector(".sign-in form");

// ====== Xử lý Đăng ký ======
signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let passwordAgain = document.getElementById("password-again").value;

    if (!name || !email || !password || !passwordAgain) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (password !== passwordAgain) {
        alert("Mật khẩu nhập lại không khớp!");
        return;
    }

    // Lưu user vào localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let exist = users.find(u => u.email === email);

    if (exist) {
        alert("Email này đã được đăng ký!");
        return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công! Hãy đăng nhập.");
    signUpForm.reset();
});

// ====== Xử lý Đăng nhập ======
signInForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = signInForm.querySelector("input[type='name']").value.trim();
    let password = signInForm.querySelector("input[type='password']").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.name === name && u.password === password);

    if (user) {
        alert("Đăng nhập thành công! Xin chào " + user.name);
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "index.html"; // Chuyển tới trang chủ
    } else {
        alert("Sai tên người dùng hoặc mật khẩu!");
    }
});



