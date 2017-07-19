$(document).ready(function(){
	$.getJSON("products.json", function(obj){
		$.each(obj, function(key, value){
			$(".resCarousel-inner").append(
				"<div class='item'>\
					<article class='product-item col-md-12 col-sm-12 col-xs-12'>\
						<a href='#Modal"+ value.id +"' data-toggle='modal'>\
							<div class='figure'><img src='images/produtos/"+ value.img +"'></div>\
							<h2>"+ value.nome +"</h2>\
							<div class='stars'><img src='images/estrelas.png' alt='Avaliação' /></div>\
							<p>\
								<span class='from'>"+ value.from +"</span>\
								Por: <em><strong>R$ "+ value.preco +"</strong><br />\
								ou <strong>até "+ value.vezes +"X</strong> de <strong>R$ "+ value.vezesde +"</strong></em>\
							</p>\
							<button><img src='images/icones/carrinho.png' />Comprar</button>\
							<p class='economize'>Economize: R$ "+ value.economize +"</p>\
						</a>\
					</article>\
				</div>"
			);
		})
	})
});