const stdin = process.stdin;
const stdout = process.stdout

stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on("data", (key) => {
  let num = Number(key) * 1000;
  if (key === '\u0003') {
    stdout.write("\nThanks for using me, Ciao!")
    console.log("");
    process.exit();
  } else if (key === "b") {
    stdout.write('\x07');
  } else if (!isNaN(num) && num >= 0) {
    stdout.write(`setting timer for ${key} seconds...`)
    setTimeout(() => {
      stdout.write("\x07 ")
    }, num);
  }
});

