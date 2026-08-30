console.log("Ex 2:");
Array.from({ length: 101 }, (_, i) => i)
     .filter(n => n % 2 !== 0)
     .forEach(n => console.log(n));