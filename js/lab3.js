function showOptions3(event, element) {
    event.preventDefault();
    const optionsContainer = element.nextElementSibling;

    // Hiển thị 3 nút Requirement, Design, Implement
    optionsContainer.innerHTML = `
        <div class="button-group">
            <button class="requirement-btn" onclick="showRequirement3(this)">Requirement</button>
            <button class="design-btn" onclick="showDesign3(this)">Design</button>
            <button class="implement-btn" onclick="showImplement3()">Implement</button>
        </div>
    `;
    optionsContainer.style.display = 'block';
}

function showRequirement3(button) {
    clearPopups3(button);
    const popupContainer = createPopupContainer3(`
        <img src="img/requirement3.png" alt="Requirement Image">
    `);
    button.closest('.list-item').appendChild(popupContainer);
}

function showDesign3(button) {
    clearPopups3(button);
    const popupContainer = createPopupContainer3(`
        <div class="preview-container">
            <img src="img/lab2Giay.png" alt="Design Image ">
            <img src="img/lab2F.png" alt="Design Image ">
        </div>
        <div class="button-group">
            <button class="download-btn" onclick="downloadFile()">Download</button>
        </div>
    `);
    button.closest('.list-item').appendChild(popupContainer);
}
function showfigma() {
    window.open('#', '_blank');
}
function showImplement3() {
    window.open('QuanLyHieuThuoc.html', '_blank');
}

function closePopup3(button) {
    const popup = button.closest('.popup-container');
    popup.remove();
}

function clearPopups3(button) {
    // Xóa tất cả các popup trong list-item hiện tại
    const listItem = button.closest('.list-item');
    const popups = listItem.querySelectorAll('.popup-container');
    popups.forEach(popup => popup.remove());
}

function createPopupContainer3(content) {
    const popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.innerHTML = content;
    popup.style.display = 'block';
    return popup;
}

function downloadFile3() {
    const link = document.createElement('a');
    link.download = 'design_image.png';
    link.click();
}
