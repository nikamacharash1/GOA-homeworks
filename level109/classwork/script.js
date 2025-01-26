function func(operation, ...numbers) {
    if (operation === 'add') {
      return numbers.reduce((acc, num) => acc + num, 0);
    } else if (operation === 'minus') {
      return numbers.reduce((acc, num) => acc - num);
    } else if (operation === 'multiply') {
      return numbers.reduce((acc, num) => acc * num, 1);
    } else {
      throw new Error('Invalid operation');
    }
  }