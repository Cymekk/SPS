const burgetBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.nav__mobile')
const allLi = document.querySelectorAll('.mobile__menu-item')
const footerYear = document.querySelector('.footer__year')
const tableInfo = document.querySelector('.table-info')
const infoBtn = document.querySelector('.info-btn')
const closeBtn = document.querySelector('.close-btn')

burgetBtn.addEventListener('click', () => {
	mobileNav.classList.toggle('active')
})

allLi.forEach(item => {
	item.addEventListener('click', () => {
		mobileNav.classList.remove('active')
	})
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

infoBtn.addEventListener('click', () => {
	tableInfo.classList.toggle('visible')
})

closeBtn.addEventListener('click', () => {
	tableInfo.classList.remove('visible')
})

handleCurrentYear()
