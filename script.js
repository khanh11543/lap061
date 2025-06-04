document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn form gửi lại trang

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "12345") {
    alert("Đăng nhập thành công!");
  } else {
    alert("Sai tài khoản hoặc mật khẩu.");
  }
});
