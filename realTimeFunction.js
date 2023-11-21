// function displayRealTime() {
//     // Create a new Date object
//     const currentTime = new Date();
  
//     // Get hours, minutes, and seconds
//     const hours = currentTime.getHours();
//     const minutes = currentTime.getMinutes();
//     const seconds = currentTime.getSeconds();
  
//     // Format the time
//     const formattedTime = hours + ":" + minutes + ":" + seconds;
  
//     // Schedule the function to run again in 1000 milliseconds (1 second)
//     setTimeout(formattedTime, 1000);
//   }
  
//   // Call the function to start displaying real-time
//   console.log(displayRealTime());



// function everyMinuteOnTheMinute() {
//     setTimeout(function() {
//         var d = new Date();
//         console.log(d.getMinutes() + " (" + d.valueOf() % 1000 + ")");
//         // your "every minute" code goes here
//         everyMinuteOnTheMinute();
//     }, 60000 - Date.now() % 60000);
// }

// function everyMinuteOnTheMinute(cb) {
//     setTimeout(function() {
//         cb();
//         everyMinuteOnTheMinute(cb);
//     }, 60000 - Date.now() % 60000);
// }

// everyMinuteOnTheMinute(function() {
//     console.log("Whee, I'm happening every minute on the minute!");
// });


// function time(){
//     const d = new Date();
//     const s = d.getSeconds();
//     const m = d.getMinutes();
//     const h = d.getHours();
//     let times = (h + ":" + m + ":" + s);
//     return times;
// }
// console.log(times);
// console.log(setInterval(time,1000));

console.log(Date.now(), 1000);