let cloud = document.getElementById('cloud');
let sheep = document.getElementById('shep1');
let tree = document.getElementById('text2');
let rumput = document.getElementById('clod3');
let text = document.getElementById('text1');
let log = document.getElementById('sun');
let cloud2 = document.getElementById('cloud');

window.addEventListener('scroll', function(){
let value = window.scrollY;
cloud.style.top = value * -0.45 + 'px';
text1.style.marginBottom = value * 0.5 + 'px';
shep1.style.left = value * -0.25 + 'px';
clod3.style.left = value * 0.25 + 'px';
sun.style.left = value * 1 + 'px';
text2.style.marginBottom = value * 0.5 + 'px';

});
