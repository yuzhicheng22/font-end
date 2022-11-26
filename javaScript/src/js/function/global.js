// for browser global object is window
// for nodejs global object is global

// In javascript 'globalThis'
var mVar = 'test'
console.log(globalThis.mVar);

// polyfills

if (!window.Promise) {
    console.log("You browser is really old");
}