var inputs = document.getElementsByClassName('input_for')
for (var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('keyup',function () {
		if (this.value.length>=1) {
			this.nextElementSibling.classList.add('fijo');
		}
		else{
			this.nextElementSibling.classList.remove('fijo');
		}
	})
}