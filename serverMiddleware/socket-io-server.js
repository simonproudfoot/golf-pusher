// This file is executed once when the server is started

// Setup a socket.io server on port 3001 that has CORS disabled (do not set this to port 3000 as port 3000 is where the nuxt dev server serves your nuxt application)
// const io = require("socket.io")(3001, {
//     cors: {
//         // No CORS at all
//         origin: '*',
//     }
// });

// var i = 0;
// // Broadcast "tick" event every second
// // Or do whatever you want with io ;)
// setInterval(() => {
//     i++;

//         io.emit("tick", i);



//     // console.log('sending')
// }, 1000);

// // Since we are a serverMiddleware, we have to return a handler, even if this it does nothing
// export default function (req, res, next) {
//     next()
// }



// online version
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1111793",
    key: "f01ccdabee9849cb6558",
    secret: "621b33db317330a7ec24",
    cluster: "eu",
    useTLS: true
});

var i = 0;
setInterval(() => {
    i++;

    pusher.trigger("my-channel", "my-event", {
        message: "tick"
    });

}, 1000);







export default function (req, res, next) {
    next()
}