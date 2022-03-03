const order = (words: string): string =>
  words
    ? words
        .split(' ')
        .sort((a, b) =>
          a.split('').sort()[0] > b.split('').sort()[0] ? 1 : -1
        )
        .join(' ')
    : '';

console.log(order('is2 Thi1s T4est 3a')); //'Thi1s is2 3a T4est'
