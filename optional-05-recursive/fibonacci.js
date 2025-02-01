function fibonacci(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibArray = fibonacci(n - 1);
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
    return fibArray;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
