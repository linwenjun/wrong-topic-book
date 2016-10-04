let _index = 0;

class Question {
  constructor(container) {
    this.container = container;
  }
  
  get index() {
    return ++_index;
  }
  
  drawInstruction() {
    let instructionElement = document.createElement('h3');
    instructionElement.style.color = Util.getColor();
    instructionElement.innerHTML = this.index + '. ' + this.instruction; 
    this.container.appendChild(instructionElement);
  }
}