const parameters = process.argv.slice(2);
const toNumberMs = parameters.map((x) => Number(x) * 1000);

for (let num of toNumberMs) {
  if (num >= 0 && !isNaN(num)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
  } 
};

