# 2.3.2 - JS Fundamentals / Timing and delay

---
<!-- these are used for making GAMES -->

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
//it takes the function as the parameter and an amount of time 

// setTimeout(fuction() {
// console.log('HELLO');
// }, 1000);
// we work in milliseconds (so 1000 milliseconds = 1 minute)
// the function won't run until the seconds / alloted time is up
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example
// it takes the function 
// setInterval(function (){
//    console.log('here!') ;
// }, 1000);

// so every second 'here' would be added 

```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example 
// you will need to assign this to a variable 
// we assign it to we know what to clear when the designated timer is up. 

// const myTimer = setInterval(function (){
//    console.log('here!') ;
// }, 1000);
// ~ to stop the interval ~
// clearInterval(myTimer); 

```

---


