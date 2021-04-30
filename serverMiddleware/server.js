var m = 2; // should be 20
const version = 'pusher'
var working = false
// if (version == 'pusher-client') {
//     console.log('Pusher server initiated')
//     const Pusher = require("pusher");
//     const pusher = new Pusher({
//         appId: "1111793",
//         key: "f01ccdabee9849cb6558",
//         secret: "621b33db317330a7ec24",
//         cluster: "eu",
//         useTLS: false
//     });


//     var channel = pusher.subscribe('my-channel');
//     channel.bind('incoming', function (data) {
      
//         console.log('received')
//     });


//     function countdown() {
//         var current = m--
//         console.log(`Min: ${current}!`);
//         pusher.trigger("my-channel", "oneSecond", {
//             minutes: current
//         });
//     }
//     setInterval(countdown, 60000)


// }




// if (version == 'local') {

    const io = require("socket.io")(3001, {
        cors: {
            // No CORS at all
            origin: '*',

        }
    });
    function countdown() {
        var current = m--
        // if (m >= 0) {
        console.log(`Min: ${current}!`);
        io.emit("oneSecond", {
            minutes: current
        });

    }



    //io.on('connection',function(socket){ console.log('a user has connected')

    // socket.on('send_message',function(data){ io.emit('msg',data); }) })

    setInterval(countdown, 60000)
    io.on('connection', (socket) => {
        console.log('Socket server initiated')
        console.log('Counting down')
        // receive/reset when video finished
        //  if (!working) {
        socket.on('resetTimer', (msg, active) => {
            working = true
            console.log('Received reset')
            clearInterval(countdown)
            m = 2;
            io.emit("oneSecond", {
                minutes: m
            });
            // setTimeout(() => {
            console.log('start again')
            setInterval(countdown, 60000) // start again
            working = false


        })
        //     }
    })
//}






// pusher.bind('resetTimer', (data) => {
//     console.log('TIMER RESET')
// });



// receive/reset when video finished
// socket.on('resetTimer', (msg, active) => {
//     console.log('Received reset')
//     clearInterval(countdown)
//     m = 2;
//     pusher.trigger("oneSecond", {
//         minutes: m
//     });
// })











// var s = 0;
// var m = 20;
// setInterval(() => {
//     s++;
//     if (s === 60) {
//         m--
//         s = 0;
//         pusher.trigger("my-channel", "my-event", {
//             minutes: m
//         });
//     }
//     if (m === 0) {
//         m = 20;
//     }
// }, 1000);



export default function (req, res, next) {
    next()
}