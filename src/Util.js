let Util = {
  getColor() {
    let colors = [
      '#00CCFF',
      '#FF00CC',
      '#00FFCC',
      '#CC00FF'
    ];

    return colors[parseInt(Math.random() * colors.length)];
  }
};

export default Util;