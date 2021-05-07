// multiple processes at one time
const { exec } = require("child_process");

var launchers = 10; //bots * 5

(function myLoop(i) {
    setTimeout(function() {
        exec("node /Users/squijano/Documents/jsprojects/kahootbot/faster.js") //  your code here                
        if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
    }, 10000)
})(launchers);