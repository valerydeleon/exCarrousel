//almacenar carrousel en variable
var carrousel = $("#carrousel");
//almacenar botones de siguente y anterior
var next = $("#btn-next");
var previo = $("#btn-prev");

//metodo insert affter - inserta un elemento despues del elemento indicado
//mueve la ultima imagen al principio
$("#carrousel div:last").insertBefore("#carrousel div:first");

// se muestra la primera imagen con un margen de -100%
carrousel.css("margin-left", '-'+100+'%');

function moverDerecha(){
    carrousel.animate({
        marginLeft:"-"+200+"%"
    } ,500, function(){
        $("#carrousel div:first").insertAfter("#carrousel div:last");
        carrousel.css("margin-left", '-'+100+'%'); //para que siempre muestre la siguiente
    });  //animate-metodo de animacion 
};

function moverIzquierda(){
    carrousel.animate({
        marginLeft: 0
    } ,500, function(){
        $("#carrousel div:last").insertBefore("#carrousel div:first");
        carrousel.css("margin-left", '-'+100+'%'); //para que siempre muestre la siguiente anterior
    });  //animate-metodo de animacion 
};

next.on("click", function() {
    moverDerecha();
});

previo.on("click", function() {
    moverIzquierda();
});


//automatico

function autoplay(){
    interval = setInterval(function(){
        moverDerecha();
    }, 5000);
}

autoplay();










