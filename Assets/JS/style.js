var number = 0 ; // CORRESPOND AU CHIFFRE A TROUVER
var chance = null; // 
var numberMax = 100; // Nombre Max
var count = 1; // DECOMPTE COMBIEN D'ESSAI


$('document').ready(function(){

$('#commencer').click(function(){ //btn c'est partie qui lance le jeu

number = Math.floor(Math.random() * numberMax); // choisit le nombre a trouver

})

$('#chance').submit(function(event){
   chance = $('#nombre').val();

   if (chance==number) { // si nombre = chance gangné
       $('.reponse').html('Gagné !')
   }
   else if ( chance < number) { // si nombre inferieur message plus grand
       $('.reponse').html('Plus grand !')
   }

   else { // si nombre inferieur message plus petit
    $('.reponse').html('Plus petit !')
   }

    event.preventDefault();
})
$('.combien').click(function(){
    count ++;

    $('.count-leave').addClass('count-leave-active');
    setTimeout(function(){
    $('.count-leave').remove();

    });

    $('.count-enter').addClass('count-enter-active');
    setTimeout(function(){
    $('.count-enter').addClass('.count-leave').removeClass('count-enter count-enter-active')
    $('body').append('<h3 class="count count-enter">'+count+'</h3>')



})
})
})