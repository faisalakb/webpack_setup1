import './style.css';
import _ from 'lodash';
import printMe from './print.js';
import Icon from './i1.jpg'
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    element.classList.add('hello');
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
  
    return element;
  }
  
  document.body.appendChild(component());