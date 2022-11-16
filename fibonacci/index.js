let n1 = 0;
let n2 = 1;
let numeroSucc;
let numeroAScelta = 20;
for (let i = 1; i <= numeroAScelta; i++) {
  console.log(n1);
  numeroSucc = n1 + n2;
  n1 = n2;
  n2 = numeroSucc;
}
