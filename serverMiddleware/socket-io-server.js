const io = require("socket.io")(3001, {
    cors: {
        // No CORS at all
        origin: '*',
        methods: ["GET", "POST"]

    }
});

var m = 2;


function countdown() {
    var current = m--
   // if (m >= 0) {
        console.log(`Min: ${current}!`);
        io.emit("oneSecond", {
            minutes: current
        });
   
}


io.on('connection', (socket) => {
    console.log('Counting down')
    
    setInterval(countdown, 60000)

    // receive/reset when video finished
    socket.on('resetTimer', (msg, active) => {
        console.log('Received reset')
        clearInterval(countdown)
        m = 2;
        io.emit("oneSecond", {
            minutes: m
        });
    })
})


export default function (req, res, next) {
    next()
}