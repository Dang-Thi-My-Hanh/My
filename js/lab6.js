function showOptions6(event, element) {
    event.preventDefault();
    const optionsContainer = element.nextElementSibling;

    // Hiển thị 3 nút Requirement, Design, Implement
    optionsContainer.innerHTML = `
        <div class="button-group">
            <button class="requirement-btn" onclick="showRequirement6(this)">Requirement</button>
            <button class="design-btn" onclick="showDesign6(this)">Design</button>
            <button class="implement-btn" onclick="showImplement6()">Implement</button>
        </div>
    `;
    optionsContainer.style.display = 'block';
}

function showRequirement6(button) {
    clearPopups6(button);
    const popupContainer = createPopupContainer6(`
        <img src="img/requirement6.png" alt="Requirement Image">
    `);
    button.closest('.list-item').appendChild(popupContainer);
}

function showDesign6(button) {
    clearPopups6(button);
    const popupContainer = createPopupContainer6(`
        <div class="preview-container">
            <img src="img/lab6Giay1.png" alt="Design Image ">
            <img src="img/lab6Giay2.png" alt="Design Image ">
        </div>
        <div class="button-group">
            <button class="download-btn" onclick="downloadFile()">Download</button>
            <button class="figma-btn" onclick="showfigma()">Figma</button>
        </div>
    `);
    button.closest('.list-item').appendChild(popupContainer);
}
function showfigma() {
    window.open('#', '_blank');
}
function showImplement6() {
    window.open('rep61.html', '_blank');
}

function closePopup6(button) {
    const popup = button.closest('.popup-container');
    popup.remove();
}

function clearPopups6(button) {
    // Xóa tất cả các popup trong list-item hiện tại
    const listItem = button.closest('.list-item');
    const popups = listItem.querySelectorAll('.popup-container');
    popups.forEach(popup => popup.remove());
}

function createPopupContainer6(content) {
    const popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.innerHTML = content;
    popup.style.display = 'block';
    return popup;
}

function downloadFile6() {
    const link = document.createElement('a');
    link.download = 'design_image.png';
    link.click();
}
