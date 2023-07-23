export function login() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.5) {
        reslove('success');
      } else {
        reject('error');
      }
    }, 1000);
  });
}
