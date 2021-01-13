const time = process.argv.slice(2);
console.log(time);

for (let t of time) {
  if (t > 0 && !isNaN(t)) {
    t *= 1000;
    setTimeout(() => {
      process.stdout.write("beep\n");
    }, t);
  }
}

console.log(process.argv);
