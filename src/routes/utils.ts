export function shuffle<T>(array: T[]) {
  // Fisher-Yates shuffle
  let i = array.length;
  console.log("==> i", i);

  while (i--) {
    const j = Math.floor(Math.random() * i + 1);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
