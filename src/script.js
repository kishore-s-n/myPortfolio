
function setActiveTab(tab,contentId) {

    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active-tab'));

    tab.classList.add('active-tab');

    const content= document.querySelectorAll('.tab-contents');
    content.forEach(link => link.classList.remove('active-content'));

    const activeContent=document.getElementById(contentId);
    activeContent.classList.add('active-content')
}