const Pusher = require("pusher");
const pusher = new Pusher({
    appId: "1111793",
    key: "f01ccdabee9849cb6558",
    secret: "621b33db317330a7ec24",
    cluster: "eu",
    useTLS: true
});
var s = 0;
var m = 20;
setInterval(() => {
    s++;
    if (s === 60) {
        m--
        s = 0;
        pusher.trigger("my-channel", "my-event", {
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