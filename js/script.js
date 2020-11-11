 var BlahView = Backbone.View.extend({
    events: {
      "click .button": "botao",
    },

    botao: function(){
      var numero;
      $("#container").css("visibility","visible")  // Exibi imagem apos click no botao
      numero = Math.floor(Math.random()* 8); //correcao na funcao de "Math.random(0,8)";
      if(numero == 0) {
        $("#container").hide();
        $("#container").attr("src", "img/balao1.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
      } else if(numero == 1) {
        $("#container").hide();
        $("#container").attr("src", "img/balao2.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
	  } else if(numero == 2) {
        $("#container").hide();
        $("#container").attr("src", "img/balao3.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
	  } else if(numero == 3) {
        $("#container").hide();
        $("#container").attr("src", "img/balao4.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
	  } else if(numero == 4) {
        $("#container").hide();
        $("#container").attr("src", "img/balao5.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
	  } else if(numero == 5) {
        $("#container").hide();
        $("#container").attr("src", "img/balao6.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
	  } else if(numero == 6) {
        $("#container").hide();
        $("#container").attr("src", "img/balao7.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
	  } else if(numero == 7) {
        $("#container").hide();
        $("#container").attr("src", "img/balao8.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
      } else if(numero == 8) {
        $("#container").hide();
        $("#container").attr("src", "img/balao9.png");  //mudanca de endereco para "img"
        $("#container").toggle("slow");
	  }
    },
    });

    var blahView = new BlahView({ el: $('#sorteador') }); //Alteracao de "teste2" para "sorteador"