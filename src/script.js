function setActiveTab(tab) {

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active-tab'));

    tab.classList.add('active-tab');
}
function setActiveContent(content) {
    const tabContent =document.querySelectorAll('.tab-contents');
    tabContent.forEach(link => link.classList.remove('active-content'));

    content.classList.add('active-content');
}