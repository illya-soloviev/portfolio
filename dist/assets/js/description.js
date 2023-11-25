var data = {
    'library' : {
        'title' : 'library',
        'text' : 'Данный проект представляет собой небольшую, самостоятельно написанную js-библиотеку, и все компоненты, показанные на страничке, были сделаны с её помощью. В ходе её создания я познакомился с одним из вариантов построения структуры собственной библиотеки. Если говорить о каких-то примечательных в плане разработки её возможностях, то я, скорее всего, выделил бы <a href="https://github.com/illya-soloviev/Library/blob/main/src/js/lib/modules/effects.js" target="_blank">методы анимации</a> и такие готовые компоненты, как генерируемое js-ом <a href="https://github.com/illya-soloviev/Library/blob/main/src/js/lib/components/modal.js" target="_blank">модальное окно</a> и запускаемый уже просто из вёрстки <a href="https://github.com/illya-soloviev/Library/blob/main/src/js/lib/components/carousel.js" target="_blank">слайдер</a>. Но также помимо их, для библиотеки были сделаны и такие более простые компоненты, как <a href="https://github.com/illya-soloviev/Library/blob/main/src/js/lib/components/tab.js" target="_blank">табы</a> и <a href="https://github.com/illya-soloviev/Library/blob/main/src/js/lib/components/accordion.js" target="_blank">аккордеон</a>.',
        'githubLink': 'https://github.com/illya-soloviev/Library'
        // 'tags' : ['Pug', 'BEM', 'SASS', 'Jquery', 'Gulp']
    },
    'bringitup' : {
        'title' : 'bringitup',
        'text' : 'Небольшой сайт из двух страниц(<a href="https://illya-soloviev.github.io/BringItUp/" target="_blank">первая</a> и <a href="https://illya-soloviev.github.io/BringItUp/modules" target="_blank">вторая</a>), написанный в ООП стиле. Из всех компонентов проекта более-менее примечательным можно назвать, пожалуй, только <a href="https://github.com/illya-soloviev/BringItUp/tree/main/src/js/modules/slider" target="_blank">слайдер</a>, написанный как раз с использованием наследуемости классов. В процессе реализации <a href="https://github.com/illya-soloviev/BringItUp/blob/main/src/js/modules/playVideo.js" target="_blank">видеоплеера</a> я приобрел небольшой опыт работы со сторонним API(<a href="https://developers.google.com/youtube/iframe_api_reference?hl=ru" target="_blank">YouTube Player API</a>). Увидел возможные ошибки при использовании одного общего файла скриптов на нескольких страницах и узнал возможные варианты их исправления. Помимо этого, в проекте также был написан функционал для <a href="https://github.com/illya-soloviev/BringItUp/blob/main/src/js/modules/difference.js" target="_blank">блока сравнения</a> и <a href="https://github.com/illya-soloviev/BringItUp/blob/main/src/js/modules/forms.js" target="_blank">формы</a> на главной странице.',
        'githubLink': 'https://github.com/illya-soloviev/BringItUp'
        // 'tags' : ['Pug', 'BEM', 'SASS', 'Jquery', 'Gulp']
    },
    'pictures' : {
        'title' : 'pictures',
        'text' : 'Один из первых моих учебных проектов, в ходе выполнения которого я узнал один из вариантов создания <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/main.js" target="_blank">модульной структуры проекта</a> и написания взаимодействия между модулями, например, как между <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/calc.js" target="_blank">калькулятором</a> и <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/forms.js" target="_blank">обработчиком форм</a>. Помимо обработки форм, в проекте есть и еще один небольшой <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/showMoreStyles.js" target="_blank">модуль, работающий с сервером</a>(но его пришлось отключить, т.к. GitHub Pages не позволяет делать запросы). Был получен опыт обработки различных событий в модулях <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/drop.js" target="_blank">drag and drop</a>, <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/pictureSize.js" target="_blank">демонстрации размера картин</a> и <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/burger.js" target="_blank">бургер-меню</a>. Также это был один из первых опытов написания функционала <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/modals.js" target="_blank">модальных окон</a>, <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/sliders.js" target="_blank">слайдера</a> и <a href="https://github.com/illya-soloviev/Pictures/blob/main/src/js/modules/filter.js" target="_blank">фильтра</a>.',
        'githubLink': 'https://github.com/illya-soloviev/Pictures'
        // 'tags' : ['Pug', 'BEM', 'SASS', 'Jquery', 'Gulp']
    },
    'marvel' : {
        'title' : 'marvel',
        'text' : 'Мое учебное приложение на React. Разрабатывая этот проект, помимо получения опыта работы со стандартными хуками React`а и со сторонним API, я познакомился с одним из способов <a href="https://github.com/illya-soloviev/Marvel/blob/main/src/components/app/App.js" target="_blank">организации страниц приложения и роутинга между ними</a>. Познакомился с такими библиотеками, как Formik и Yup при реализации <a href="https://github.com/illya-soloviev/Marvel/blob/main/src/components/charSearchForm/CharSearchForm.js" target="_blank">формы поиска</a>. Узнал такие фишки, как реализация условного рендеринга в компонентах через <a href="https://github.com/illya-soloviev/Marvel/blob/main/src/utils/setContent.js" target="_blank">принцип конечного автомата</a>, вынесение многократно используемой логики в <a href="https://github.com/illya-soloviev/Marvel/blob/main/src/components/pages/SinglePage.js" target="_blank">HOC</a> и <a href="https://github.com/illya-soloviev/Marvel/blob/main/src/hooks.js/http.hook.js" target="_blank">кастомные хуки</a>.'
        // 'tags' : ['Pug', 'BEM', 'SASS', 'Jquery', 'Gulp']
    }
}