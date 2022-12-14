let buttons = document.querySelectorAll('#button')

buttons.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('reveal')
	})
})
