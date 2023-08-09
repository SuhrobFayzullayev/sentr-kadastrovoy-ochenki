$(document).ready(function(){
	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.modal');
		var instances = M.Modal.init(elems, options);
	});
	
	// Or with jQuery
	
	$(document).ready(function(){
		$('.modal').modal();
	});

	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.modal2');
		var instances = M.Modal.init(elems, options);
	});
	
	$(document).ready(function(){
		$('.modal2').modal();
	});


	document.addEventListener('DOMContentLoaded', function() {
		var elems = document.querySelectorAll('.sidenav');
		var instances = M.Sidenav.init(elems, options);
	  });
	
	  $(document).ready(function(){
		$('.sidenav').sidenav();
	  });
}) 

// -------------------------------===========-------------------------------

$(function () {
	let Catalog_max__pro__ul_link = document.querySelectorAll(
	  ".newsin__pagination__link"
	);
  
	for (let i = 0; i < Catalog_max__pro__ul_link.length; i++) {
	  Catalog_max__pro__ul_link[i].addEventListener("click", function () {
		for (let j = 0; j < Catalog_max__pro__ul_link.length; j++) {
		  Catalog_max__pro__ul_link[j].classList.remove("active");
		}
		this.classList.add("active");
	  });
   	}
});
  
// -------------------------------===========-------------------------------

const FindOutTheCadastralValue = document.querySelector('.cadastralValuationIn');
if(FindOutTheCadastralValue){
	const InputItem = document.querySelector('.cadastralValuationIn__input');
	const formActiveFalse = document.querySelector('.cadastralValuationIn__false');
	const formActiveTrue = document.querySelector('.cadastralValuationIn__true');

	if(formActiveFalse.className === 'cadastralValuationIn__false active'){
		InputItem.classList.add('activeError')
	} 
	
	if(formActiveTrue.className === 'cadastralValuationIn__true active'){
		InputItem.classList.remove('activeError')
	}
	
	if(formActiveTrue.className === 'cadastralValuationIn__true active' && formActiveFalse.className === 'cadastralValuationIn__false active'){
		formActiveFalse.classList.remove('active')
		formActiveTrue.classList.remove('active')
	}
}

// -------------------------------===========-------------------------------

const buttons_1 = document.querySelectorAll(".documentation__title__h2");
buttons_1.forEach(function (button, index) {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        this.parentNode.classList.toggle("active");

        buttons_1.forEach(function (button2, index2) {
            if (index !== index2) {
                button2.parentNode.classList.remove("active");
            }
        });
    });
});
  
// -------------------------------===========-------------------------------