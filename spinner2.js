
const spinner = function(i, num) {
  setTimeout(() => {
  // Need to escape the backslash since it's a special character.
    process.stdout.write(i);
  },num);
};


for (let i = 0; i <= 100; i++) {
  let num = i * 300;
  if (i % 2 === 0) {
    spinner('\r/ ', num);
  } else if (i % 3 === 0) {
    spinner('\r, ', num);
  } else {
    spinner('\r| ', num);
  }

}