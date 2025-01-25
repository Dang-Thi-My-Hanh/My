function showOptions1(event, element) {
    event.preventDefault();
    const optionsContainer = element.nextElementSibling;

    // Hiển thị 3 nút Requirement, Design, Implement
    optionsContainer.innerHTML = `
        <div class="button-group">
            <button class="requirement-btn" onclick="showRequirement1(this)">Requirement</button>
            <button class="design-btn" onclick="showDesign1(this)">Design</button>
            <button class="implement-btn" onclick="showImplement1()">Implement</button>
        </div>
    `;
    optionsContainer.style.display = 'block';
}

function showRequirement1(button) {
    clearPopups1(button);
    const popupContainer = createPopupContainer1(`
        <img src="img/requirement1.png" alt="Requirement Image">
    `);
    button.closest('.list-item').appendChild(popupContainer);
}

function showDesign1(button) {
    clearPopups1(button);
    const popupContainer = createPopupContainer1(`
        <div class="preview-container">
            <img src="img/lab1Giay.png" alt="Design Image ">
            <img src="img/lab1F.png" alt="Design Image ">
        </div>
        <div class="button-group">
            <button class="download-btn" onclick="downloadFile()">Download</button>
            <button class="figma-btn" onclick="showfigma()">Figma</button>
        </div>
    `);
    button.closest('.list-item').appendChild(popupContainer);
}
function showfigma1() {
    window.open('#', '_blank');
}
function showImplement1() {
    window.open('lab1.html', '_blank');
}

function closePopup1(button) {
    const popup = button.closest('.popup-container');
    popup.remove();
}

function clearPopups1(button) {
    // Xóa tất cả các popup trong list-item hiện tại
    const listItem = button.closest('.list-item');
    const popups = listItem.querySelectorAll('.popup-container');
    popups.forEach(popup => popup.remove());
}

function createPopupContainer1(content) {
    const popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.innerHTML = content;
    popup.style.display = 'block';
    return popup;
}

function downloadFile1() {
    const link = document.createElement('a');
    link.download = 'design_image.png';
    link.click();
}
