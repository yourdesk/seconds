/*
future plans:
    - allot X seconds for something 
    - "you wasted X seconds today not working on something"
    - sleeping time/waking up not counting towards time wasted
*/

const seconds_left_element = document.getElementById("seconds-left") ;

let tomorrow = new Date() ;
tomorrow.setHours( 24, 0, 0, 0 ) ;

seconds_left_element.innerHTML = Math.floor( tomorrow.getTime() / 1000 - Date.now() / 1000 ) ;

setInterval( function() {
    seconds_left_element.innerHTML = Math.floor( tomorrow.getTime() / 1000 - Date.now() / 1000 ) ;
}, 1000 ) ;