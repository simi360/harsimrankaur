import makeButton from './js/button';
import {makeBackgroundColorStyle, makeColorStyle} from './js/color-styles';
import image from "./img/webpack.png";
import makeImg from "./js/img";

const img = makeImg(image);
document.body.appendChild(img);

const button = makeButton('push the button');
button.style = makeBackgroundColorStyle("#95afc0");

document.body.appendChild(button);