var timeEl = document.querySelector(".counter");

var mainEl = document.getElementById("main");

var cdseconds = 60;


function counter() {

    
    var seconds = setInterval(function() {
        cdseconds--;
        timeEl.textContent = cdseconds + " seconds remaining";

        if (cdseconds === 0) {

            clearInterval(seconds);
        }






    }, 1000 );
}
    
counter();
    
    
    
    
    
    
















