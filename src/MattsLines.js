import Question from './Question';
import Matts from './Matts';

export default class MattsLines extends Question{
  constructor(container) {
    super(container);
    this.margin = 10;
    this.mattSize = 45;
    this.instruction = '抄写';
        
    let title = document.createElement('h3');

    this.drawInstruction();
  }

  _createCanvas(lineNum) {
    let canvas = document.createElement('canvas');
    this.container.appendChild(canvas);
    this.ctx = canvas.getContext('2d');

    let style = getComputedStyle(this.container);
    let width = parseInt(style.width, 10);
    let height = Matts.getHeight(this.mattSize) * lineNum + 1;

    canvas.width = this._width = width;
    canvas.height = height;
  }

  getValidWidth() {
    return this._width - this.margin;
  }

  getChar(char, idx) {
    return char.charAt(idx);
  }

  drawOneLine(char, idx) {
    let width = this.ctx.canvas.width;
    let count = parseInt(width / this.mattSize);

    for(let i=0; i<count; i++) {
      this.ctx.save();
      this.ctx.translate(this.mattSize * i, idx * Matts.getHeight(this.mattSize));
      let matt = new Matts(this.ctx);
      matt.drawChar(char.charAt(i), {
        size: this.mattSize
      });
      this.ctx.restore();
    }
  }

  draw(charArr) {
    let arr = [].concat(charArr);
    console.log(arr);
    this._createCanvas(arr.length);

    arr.forEach((item, idx)=> {
      this.drawOneLine(item, idx);
    })
  }
}