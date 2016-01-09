jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
		
		function slidetoggle() {
			var slider = document.getElementById("nav-slide");
			slider.style.height = window.innerHeight - 60 + "px";
			
			if(slide.style.left == "0px") {
				slider.style.left = "-250px";
			}
			else {
				slider.style.left = "0px";
			}
		}
    });
});

