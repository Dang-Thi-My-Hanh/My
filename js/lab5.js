function showOptions5(event, element) {
    event.preventDefault();
    const optionsContainer = element.nextElementSibling;

    // Hiển thị 3 nút Requirement, Design, Implement
    optionsContainer.innerHTML = `
        <div class="button-group">
            <button class="requirement-btn" onclick="showRequirement5(this)">Requirement</button>
            <button class="design-btn" onclick="showDesign5(this)">Design</button>
            <button class="implement-btn" onclick="showImplement5()">Implement</button>
        </div>
    `;
    optionsContainer.style.display = 'block';
}

function showRequirement5(button) {
    clearPopups5(button);
    const popupContainer = createPopupContainer5(`
        <img src="img/requirement5.png" alt="Requirement Image">
    `);
    button.closest('.list-item').appendChild(popupContainer);
}

function showDesign5(button) {
    clearPopups5(button);
    const popupContainer = createPopupContainer5(`
        <div class="preview-container">
            <img src="img/lab5Giay.png" alt="Design Image ">
            <img src="img/lab5F.png" alt="Design Image ">
        </div>
        <div class="button-group">
            <button class="download-btn" onclick="downloadFile5()">Download</button>
        </div>
    `);
    button.closest('.list-item').appendChild(popupContainer);
}
function showfigma() {
    window.open('#', '_blank');
}
function showImplement5() {
    window.open('rep51.html', '_blank');
}

function closePopup5(button) {
    const popup = button.closest('.popup-container');
    popup.remove();
}

function clearPopups5(button) {
    // Xóa tất cả các popup trong list-item hiện tại
    const listItem = button.closest('.list-item');
    const popups = listItem.querySelectorAll('.popup-container');
    popups.forEach(popup => popup.remove());
}

function createPopupContainer5(content) {
    const popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.innerHTML = content;
    popup.style.display = 'block';
    return popup;
}

function downloadFile5() {
    const link = document.createElement('a');
    link.download = 'design_image.png';
    link.click();
}
