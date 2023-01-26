const burger_button = document.getElementById(
    'button_burger'
)
const main_nav = document.getElementById(
    'main_nav'
)
burger_button.addEventListener(
    'click',
    handleButtonBurgerClick
)

function handleButtonBurgerClick(params) {
    burger_button.classList.toggle('active')
    main_nav.classList.toggle('active')
}