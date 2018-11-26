/**
 * JUNG Frédéric 
 * Tutorat : Projet web - calendrier de l'avant
 */


 $(".tile").click(function(){
    console.log("coucou");
    $(this).css('background-color', '#a1b0c9');
 });


 $('.tile').tilt({
   scale: 1.1
})