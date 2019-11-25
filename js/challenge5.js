		$('img').mouseenter(function(){
			$('#image').html(this.alt);
			$("#image").css("background-image", "url('"+$(this).attr('src')+"')"); 

		});

		$('img').mouseleave(function(){
			$("#image").css("background-image", "url()");
			$('#image').html("Hover/Tab over an image below.");
		}); 
