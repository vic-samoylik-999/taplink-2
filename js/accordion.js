const accordionItem = document.getElementsByClassName('accordion__item'),
	   accordionHeader = document.querySelectorAll('.accordion__header')

function toggleAccordion() {
	let itemClass = this.parentNode.className

	for (let i = 0; i < accordionItem.length; i++) {
		accordionItem[i].className = 'accordion__item accordion__close'
	}
	if(itemClass === 'accordion__item accordion__close') {
		this.parentNode.className = 'accordion__item accordion__open'
	}
}

accordionHeader.forEach((el) => {
	el.addEventListener('click', toggleAccordion)
})