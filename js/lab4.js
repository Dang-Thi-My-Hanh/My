function showOptions4(event, element) {
    event.preventDefault();
    const optionsContainer = element.nextElementSibling;

    // Hiển thị 3 nút Requirement, Design, Implement
    optionsContainer.innerHTML = `
        <div class="button-group">
            <button class="requirement-btn" onclick="showRequirement4(this)">Requirement</button>
            <button class="design-btn" onclick="showDesign4(this)">Design</button>
            <button class="implement-btn" onclick="showImplement4()">Implement</button>
        </div>
    `;
    optionsContainer.style.display = 'block';
}

function showRequirement4(button) {
    clearPopups4(button);
    const popupContainer = createPopupContainer4(`
        <img src="img/requirement4.png" alt="Requirement Image">
    `);
    button.closest('.list-item').appendChild(popupContainer);
}

function showDesign4(button) {
    clearPopups4(button);
    const popupContainer = createPopupContainer4(`
        <div class="preview-container">
            <img src="img/lab4Giay1.png" alt="Design Image">
            <img src="img/lab4Giay2.png" alt="Design Image">
        </div>
        <div class="button-group">
            <button class="download-btn" onclick="downloadFile4()">Download</button>44
        </div>
    `);
    button.closest('.list-item').appendChild(popupContainer);
}
function showfigma() {
    window.open('#', '_blank');
}
function showImplement4() {
    window.open('rep1.html', '_blank');
}

function closePopup4(button) {
    const popup = button.closest('.popup-container');
    popup.remove();
}

function clearPopups4(button) {
    const listItem = button.closest('.list-item');
    const popups = listItem.querySelectorAll('.popup-container');
    popups.forEach(popup => popup.remove());
}

function createPopupContainer4(content) {
    const popup = document.createElement('div');
    popup.className = 'popup-container';
    popup.innerHTML = content;
    popup.style.display = 'block';
    return popup;
}

function downloadFile4() {
    const link = document.createElement('a');
    link.download = 'design_image.png';
    link.click();
}
