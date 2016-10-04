class PhoneticNotation {
  static find(str) {
    let matched = pydic.split(',').find((char)=> {
      return char.indexOf(str) > -1;
    });

    return matched.slice(1);
  }
}