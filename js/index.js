// Your code goes here

// Mouse Over - 1
const links = document.querySelector('a')
links.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor ='red'
    event.target.style.color = 'white'
})

// Mouse Leave - 2
links.addEventListener('mouseleave', function(event){
    event.target.style.backgroundColor = 'black'
    event.target.style.color = 'white'
})


// Keydown changes background color of site to lightblue - 3
document.addEventListener('keydown', function(event){
    if (event.key === 'Escape'){
        event.target.style.backgroundColor = 'lightblue'
    }
})

// Double Click 'Fun Bus' - 4 
const heading = document.querySelector('.logo-heading')
heading.addEventListener('dblclick', function(event){
    event.target.style.fontSize = '7rem'
})

// Click - 5 - changing opacity of image
const opacity = document.querySelector('.intro img')
opacity.addEventListener('click', function(event){
    event.target.style.opacity = '0.5'
})

// Networking - 6
window.addEventListener('offline', function(event){
    console.log('You are now connected to the internet')
})

// Wheel - scrolling in on the Lets Go picture - 7
function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.img-content img')
el.onwheel = zoom;

// Mouse Enter - 8
const mouseTarget = document.querySelector('p')
mouseTarget.addEventListener('mouseenter', function(event){
    mouseTarget.style.border = '2px dotted blue'
})

// Mouse Leave - 9
const mouseExit = document.querySelector('p')
mouseExit.addEventListener('mouseleave', function(event){
    mouseExit.style.border = 'none'
})

// Mouse Over navigation list - 10
const test = document.querySelector('.nav')
test.addEventListener('mouseover', function(event){
    event.target.style.color ='orange'
})