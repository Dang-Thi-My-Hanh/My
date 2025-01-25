// Lấy các phần tử DOM
const container = document.getElementById('container');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');

// Đảm bảo khi trang được tải, container không có class "show-register"
document.addEventListener('DOMContentLoaded', () => {
    container.classList.remove('show-register');
});

loginBtn.addEventListener('click', () => {
    console.log('Nút đăng nhập đã được nhấn');
    container.classList.remove('show-register');
    window.location.href = 'lab.html'; // Chuyển hướng đến trang mới
});

// Sự kiện khi nhấn vào nút "Đăng ký" trong Toggle Panel
registerBtn.addEventListener('click', () => {
    container.classList.add('show-register');
});

// Sự kiện khi nhấn vào nút chuyển sang "Đăng ký"
showRegisterBtn.addEventListener('click', () => {
    container.classList.add('show-register');
});

// Sự kiện khi nhấn vào nút chuyển sang "Đăng nhập"
showLoginBtn.addEventListener('click', () => {
    container.classList.remove('show-register');
}); // Đóng dấu ngoặc ở đây
