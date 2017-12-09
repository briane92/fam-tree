/**
 * Created by beggl on 12/6/2017.
 */
// this is to get rid of annoying requestAnimationFrame warning in console output

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0)
}