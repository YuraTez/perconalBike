document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function (menuItem) {
        var link = menuItem.querySelector('a');
        var submenu = menuItem.querySelector('.submenu');
        var arrow = menuItem.querySelector('.arrow');

        if (submenu) {
            menuItem.classList.add('has-submenu');

            link.addEventListener('click', function (e) {
                e.preventDefault();
                var isOpen = submenu.style.display === 'block';

                // Toggle the clicked submenu
                if (isOpen) {
                    submenu.style.display = 'none';
                    arrow.classList.remove("active")
                    this.classList.remove("active")
                } else {
                    this.classList.add("active")
                    submenu.style.display = 'block';
                    arrow.classList.add("active")
                }
            });
        }
    });
});


const selectList = document.querySelectorAll(".custom-select");

function listenerSelect(el, select) {
    el.addEventListener(
        'change',
        function (event) {
            let textContent = event.target.textContent.replace(/\s+/g, '')
            if (textContent === "Сбросить") {
                select.setChoiceByValue('');
            }
            setTimeout(() => {
                $('.product-update .choices__item--choice[data-id=1]').hide();
            }, 0)
        },
        false,
    );
}

selectList.forEach((el) => {
    if (el.classList.contains("selectSearch")) {
        let text = el.getAttribute("data-text")
        const selectSearch = new Choices(el, {
            searchEnabled: true,
            shouldSort: false,
            searchPlaceholderValue: text,
        })

        listenerSelect(el, selectSearch)
    } else {

        const selectType = new Choices(el, {
            searchEnabled: false,
            shouldSort: false,
        })
        listenerSelect(el, selectType)
    }
})

$('.product-update .choices__item--choice[data-id=1]').hide();