import phoneticNotation from './phoneticNotation';

const SPELL_SIZE_RETIO = 0.6;

export default class Matts {

  constructor(ctx) {
    this.ctx = ctx;
  }

  drawSpellLines(size) {
    this.ctx.save();
    let spellContainer = size * SPELL_SIZE_RETIO;
    this.ctx.beginPath();
    this.ctx.moveTo(0, spellContainer);
    this.ctx.lineTo(0, 0);
    this.ctx.lineTo(size, 0);
    this.ctx.lineTo(size, spellContainer);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    for(var i=1; i<=2; i++) {
      this.ctx.moveTo(0, i * (spellContainer / 3));
      this.ctx.lineTo(size, i * (spellContainer / 3));
    }

    this.ctx.stroke();
    this.ctx.restore();
  }

  drawMatts(size) {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.translate(0, size * SPELL_SIZE_RETIO);
    this.ctx.strokeRect(0, 0, size, size);

    this.ctx.setLineDash([size / 20, size / 15]);
    this.ctx.strokeStyle="rgba(0,0,0,0.5)";

    this.ctx.moveTo(0, size / 2);
    this.ctx.lineTo(size, size / 2);
    this.ctx.moveTo(size / 2, 0);
    this.ctx.lineTo(size / 2, size);

    this.ctx.stroke();

    this.ctx.restore();
  }

  drawSpell(char, size) {
    this.ctx.save();

    let deltaY = size * SPELL_SIZE_RETIO / 2.5;
    this.ctx.translate(size / 2, deltaY);
    this.ctx.scale(1, 1.5);
    this.ctx.font = size / 3.7 + "px Hiragino Sans GB";
    // this.ctx.fillStyle = Util.getColor();
    this.ctx.textAlign='center';
    this.ctx.textBaseline='middle';

    let spell = char ? phoneticNotation.find(char) : '';
    this.ctx.fillText(spell, 0, 0);
    this.ctx.restore();
  }

  drawFont(char, size) {
    this.ctx.save();

    this.ctx.translate(size / 2, size * (0.5 + SPELL_SIZE_RETIO));
    this.ctx.font = size / 1.2 + "px STKaiti";
    this.ctx.textAlign='center';
    this.ctx.textBaseline='middle';
    this.ctx.fillText(char, 0, 0);
    this.ctx.restore();
  }

  static getHeight(size) {
    return size * (1 + SPELL_SIZE_RETIO);
  }
  
  drawChar(char, options) {

    let settings = Object.assign({}, {
      type: 3,
      size: 50
    }, options);

    this.ctx.save();
    this.ctx.translate(0.5, 0.5);
    this.drawSpellLines(settings.size);
    this.drawMatts(settings.size);
    this.drawSpell(char, settings.size);
    this.drawFont(char, settings.size);
    this.ctx.restore();
  }
}