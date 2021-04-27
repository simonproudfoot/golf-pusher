const io = require("socket.io")(3001, {
    cors: {
        // No CORS at all
        origin: '*',
    }
});
    var s = 0;
    var m = 20;
    setInterval(() => {
        s++;
        if (s === 60) {
            m--
            s = 0;
            io.emit("message", {
                minutes: m
            });
        }
        if (m === 0) {
            m = 20;
        }
    }, 1000);
export default function (req, res, next) {
    next()
}