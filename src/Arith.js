import Question from './Question';

export default class Arith extends Question{
  constructor(container) {
    super(container);
    this.instruction = "加减法";
  }

  check(a, b, op) {
    let c = op === '+' ? a + b : a - b;
    return (c > 0 && c < 100);
  }

  getItem() {
    let a,b,op;

    do {
      a = parseInt(Math.random() * 100);
      b = parseInt(Math.random() * 100);
      op = Math.random() > 0.5 ? '+' : '-';

    } while (!this.check(a, b, op));

    return `${a} ${op} ${b} =`;
  }

  draw() {
    this.drawInstruction();

    for(var i=0; i<100; i++) {
      let item = document.createElement('div');
      item.className = 'arith';
      item.innerHTML = this.getItem();
      this.container.appendChild(item);
    }

  }
}