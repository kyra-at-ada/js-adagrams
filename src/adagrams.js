export const drawLetters = () => {
  // Implement this method for wave 1
  let alphabet_pool = {
    A: 9,
    B: 2,
    C: 2,
    D: 4,
    E: 12,
    F: 2,
    G: 3,
    H: 2,
    I: 9,
    J: 1,
    K: 1,
    L: 4,
    M: 2,
    N: 6,
    O: 8,
    P: 2,
    Q: 1,
    R: 6,
    S: 4,
    T: 6,
    U: 4,
    V: 2,
    W: 2,
    X: 1,
    Y: 2,
    Z: 1,
  };
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hand = [];
  while (hand.length < 10) {
    const letter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (alphabet_pool[letter] > 0) {
      hand.push(letter);
      alphabet_pool[letter]--;
    }
  }
  return hand;
};

const frequency = (inputI) => {
  const counts = {};
  for (const elm of inputI) {
    counts[elm] = counts[elm] ? counts[elm] + 1 : 1;
  }

  return counts;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
  const input_count = frequency(input);
  const hand_count = frequency(lettersInHand);
  for (const letter of input) {
    if (lettersInHand.indexOf(letter) == -1) {
      return false;
    } else if (hand_count[letter] < input_count[letter]) {
      return false;
    }
  }

  return true;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
