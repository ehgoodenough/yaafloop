var Afloop = require("afloop")

export default class Yaafloop {
    constructor(func) {
        this.func = func

        this.fps = Yaafloop.fps || 60
        this.cap = Yaafloop.cap || 1000

        this.loop = new Afloop((delta) => {
            // Cap the delta.
            if(typeof this.cap === "number") {
                delta = Math.min(delta, this.cap)
            }

            // Calculate the delta in
            // different units of time.
            delta = {
                ms: delta, // in milliseconds
                s: delta / 1000, // in seconds
                f: delta / (1000 / this.fps), // in frames
            }

            // Call the function
            // with the delta.
            this.func(delta)
        })
    }
}
