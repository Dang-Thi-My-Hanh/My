function showOptions2(event, element) {
    event.preventDefault();
    const optionsContainer = element.nextElementSibling;

    // Hiển thị 3 nút Requirement, Design, Implement
    optionsContainer.innerHTML = `
        <div class="button-group">
            <button class="requirement-btn" onclick="showRequirement2(this)">Requirement</button>
            <button class="design-btn" onclick="showDesign2(this)">Design</button>
            <button class="implement-btn" onclick="showImplement2()">Implement</button>
        </div>
    `;
    optionsContainer.style.display = 'block';
}

function showRequirement2(button) {
    clearPopups2(button);
    const popupContainer = createPopupContainer2(`
        <img src="img/requirement2.png" alt="Requirement Image">
    `);
    button.closest('.list-item').appendChild(popupContainer);
}

function showDesign2(button) {
    clearPopups2(button);
    const popupContainer = createPopupContainer2(`
        <div class="preview-container">
            <img src="img/lab2Giay.png" alt="Design Image ">
        </div>
        <div class="button-group">
            <button class="download-btn" onclick="downloadFile()">Download</button>
        </div>
    `);
    button.closest('.list-item').appendChild(popupContainer);
}
function showfigma2() {
    window.open('#', '_blank');
}
function showImplement2() {
    window.open('Login.html', '_blank');
}

function closePopup2(button) {
    const popup = button.closest('.popup-container');
    popup.remove();
}

function clearPopups2(button) {
    // Xóa tất cả các popup trong list-item hiện tại
    const listItem = button.closest('.list-item');
    const popups = listItem.querySelectorAll('.popup-container');
    popups.forEach(popup => popup.remove());
}

function createPopupContainer2(content) {
    const popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.innerHTML = content;
    popup.style.display = 'block';
    return popup;
}

function closeAllPopups() {
    // Đóng tất cả popup trên toàn trang
    const allPopups = document.querySelectorAll('.popup-container');
    allPopups.forEach(popup => popup.remove());
}

function downloadFile2() {
    const link = document.createElement('a');
    link.download = 'design_image.png';
    link.click();
}
