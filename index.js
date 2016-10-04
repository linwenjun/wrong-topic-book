import MattsLines from './src/MattsLines';
import Arith from './src/Arith';

let container = document.getElementById('paper');

var lines = new MattsLines(container);
lines.draw(['丁', '金', '鱼', '全']);

var simpleArith = new Arith(container);
simpleArith.draw();