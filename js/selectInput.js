const element = document.querySelector('.gallery-select');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: "",
    position: 'bottom',
});