function congratulate(user) {
  const sentence = "Great job,";

  return function createSentence() {
    return `${sentence} ${user}!`;
  };
}
