# Yaafloop #

Yet another animation frame loop. Built on [Afloop](https://github.com/ehgoodenough/afloop).

Just like afloop, it takes a function and loops it each and every frame. And just like afloop, the function is passed a delta, but unlike afloop, this delta includes milliseconds, seconds, and frames. How handy!

```js
var loop = new Yaafloop((delta) => {
    console.log(delta.s) // The delta in seconds, 0.0166666667
    console.log(delta.ms) // The delta in milliseconds, 16.6666667
    console.log(delta.f) // The delta in "frames", 1
})
```

A "frame" is a normalized unit of time for 60 FPS. If the delta is slower than 60 FPS, it'll be less than 1. If the delta is higher than 60 FPS, it'll be more than 1. If the delta is exactly 60 FPS, it'll be exactly 1. You can configure the FPS via `Yaafloop.fps`.

All deltas are capped at 1000 milliseconds, but you can configure this to 500 milliseconds via `Yaafloop.cap = 500`, or turn it off via `Yaafloop.cap = false`.

This module assumes ES6+.
