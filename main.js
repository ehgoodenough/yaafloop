var Afloop = require("afloop")

module.exports = function Yaafloop(func) {
    return new Afloop(function(delta) {

        // Caps the delta at one second.
        delta = Math.min(delta, 1000)

        // Calculates the delta in
        // diffeent units of time.
        delta = {
            ms: delta, // in milliseconds
            s: delta / 1000, // in seconds
            f: delta / (1000 / 60), // in frames
        }

        // Call the function
        // with the delta.
        func(delta)
    })
}
