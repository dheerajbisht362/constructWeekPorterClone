function fun(n) {
    if (n > 100) return n - 10;
    
    else {console.log(fun(fun(n+11)))
        return fun(fun(n + 11));
    }
}
console.log(fun(95));
