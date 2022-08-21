function getElementById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}
function getTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = parseFloat(element.innerText);
    return elementValue;
}

function setTextElementById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}