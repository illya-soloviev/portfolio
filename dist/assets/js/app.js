'use strict'

var tabNav = document.querySelectorAll('.nav__item'),
    tabContent = document.querySelectorAll('.tabs__item'),
    worksTab = document.querySelector('#works'),
    descWorkTab = document.querySelector('#descriptionWorkTab'),
    tabClose = document.querySelectorAll('.tabs__close'),
    workDescriptionCall = document.querySelectorAll('.works__link'),
    descriptionTitle = document.querySelector('#workTitle'),
    descriptionText = document.querySelector('.works__description p'),
    descriptionTechnologies = document.querySelector('.works__technologies'),
    descriptionLinkBlock = document.querySelector('.works__github-link');



/* Скрытие табов и снятие выделения пунктов навигации */
function delActiveClass() {
    var tabNavLength = tabNav.length;
    for( var i = 0; i < tabNavLength; i++ ) {
        tabNav[i].classList.remove('active');
    }

    var tabContentLength = tabContent.length;
    for( var i = 0; i < tabContentLength; i++ ) {
        tabContent[i].classList.remove('show');
    }
}



/* Закрытие таба при клике на кнопку и отображение
после этого таба с работами*/
tabClose.forEach(function(item) {
    item.addEventListener('click', function() {
        this.closest('.tabs__item').classList.remove('show');
        
        worksTab.classList.add('show');
        tabNav.forEach(function(item) {
            item.classList.remove('active');

            if( item.getAttribute('data-tab') === '#works' ) {
                item.classList.add('active');
            }
        });
    });
});



/* Открытие таба при клике на пункт меню */
tabNav.forEach(function(item) {
    item.addEventListener('click', function() {
        delActiveClass();

        this.classList.add('active');

        var selectedTab = this.getAttribute('data-tab');
        document.querySelector(selectedTab).classList.add('show');
    });
});



/* Открытие описание работы */
workDescriptionCall.forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();

        delActiveClass();
        descWorkTab.classList.add('show');

        var name = item.getAttribute('data-name').toLowerCase();
        var project = data[name];
        var title = project['title'];
        var text = project['text'];
        var githubLink = project['githubLink'];
        // var tags = project['tags'];

        descriptionTitle.innerHTML = title;
        descriptionText.innerHTML = text;

        descriptionLinkBlock.setAttribute('href', githubLink);
        // descriptionTechnologies.innerHTML = '';
        // var tagsLength = tags.length;
        // for( var i = 0; i < tagsLength; i++ ) {
        //     var li = document.createElement('li');
        //     li.classList = 'works__technologies-item';
        //     li.innerHTML = tags[i];
        //     descriptionTechnologies.appendChild(li);
        // }
    });
});