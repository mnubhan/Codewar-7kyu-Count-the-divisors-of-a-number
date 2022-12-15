function getDivisorsCnt(n){
  var arr = []
  for(var i=0;i<=n;i++){
    n%i==0? arr.push(i):arr;
  }
  return arr.length;
}

unction getDivisorsCnt(n) {
  for (var d = 0, i = n; i > 0; i--) {
    if (n % i == 0) d++;
  }
  
  return d;
}

function getDivisorsCnt(n) {
  var cnt = 1;
  for (var i = 0; i <= n / 2; ++i)
    if (n % i == 0)
      ++cnt;
  return cnt;
}
