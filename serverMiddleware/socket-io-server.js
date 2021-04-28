const io = require("socket.io")(3001, {
    cors: {
        // No CORS at all
        origin: '*',
        methods: ["GET", "POST"]

    }
});


// emit
var s = 0; // how long do we wait to show the movie
var m = 20;

var countdown = () => {
    s++;
    if (s === 60) {
        m--
        s = 0;
        //console.log(m + ' Minutes to go')
        io.emit("oneSecond", {
            minutes: m
        });
    }
}


io.on('connection', (socket) => {
    setInterval(countdown, 1000)
    // receive/reset when video finished
    socket.on('resetTimer', (msg, active) => {
        clearInterval(countdown)
        s = 0;
        m = 20;

        io.emit("oneSecond", {
            minutes: m
        });
    })
})


export default function (req, res, next) {
    next()
}