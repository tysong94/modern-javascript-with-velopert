function work() {
  const start = Date.now();
  for (let i =0; i < 1000000000; i++) {
    
  }
  const end = Date.now();
  console.log(end - start + 'ms');
}

work();