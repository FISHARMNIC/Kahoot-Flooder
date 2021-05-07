const { exec } = require("child_process");

var launchers = 10; //chnage this (bots * 5)

(function myLoop(i) {
    setTimeout(function() {
        exec("node [FASTER.JS GLOBAL FILE LOCATION]") // <- delete the [] too please                
        if (--i) myLoop(i);
    }, 10000)
})(launchers);
