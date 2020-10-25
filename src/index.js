module.exports = function check(str, bracketsConfig) {
  let starts = bracketsConfig.map(c => c[0]);
  let ends = bracketsConfig.map(c => c[1]);
  const holder = [];

  for (letter of str) {
    state = 0;
    if (starts.includes(letter) && ends.includes(letter)) {
      state = holder.filter(h => h === letter).length % 2 === 0 ? 1 : 2;
    }
    else if (starts.includes(letter)) {
      state = 1;
    } else if (ends.includes(letter)) {
      state = 2;
    }
    
    if (state === 1) {
      holder.push(letter);
    } else if (state === 2) {
      const openPair = starts[ends.indexOf(letter)];
      if (holder[holder.length - 1] === openPair) {
          holder.splice(-1,1);
      } else {
          holder.push(letter);
          break;
      }
    }
  }

  return holder.length === 0
}
