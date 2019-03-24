module.exports = function getZerosCount(number, base) {
    let a = 1;
    let b = 0;
    let arrow_base = [];
    let division = [0];
    let division_count = [0];
    let nulls = [];
    for (let i = 2; i <= base; i++) {
      
      while (base % i == 0 && base > 1) {
        arrow_base.push(i);
        Divider = i;
        if (division[a-1]< Divider) {
          a++; division.push(Divider); division_count[a-1] = 1; b = 0; 
        };
        if (division[a-1]= Divider) 
          {b++; division_count[a-1] = b;
        };
        base = base / i;
      }
        if (base/i == 1){
          arrow_base.push(base);
        }
      }
    let x = number;
    quantity_nulls = 0;
      for (let c = 1; division.length > c; c++) {
        while (x >= division[c]) {
          x = Math.floor(x / division[c]); 
          quantity_nulls += x;
        };
          nulls[c-1] = quantity_nulls;
          nulls[c-1] = Math.floor(nulls[c-1] / division_count[c]);
          x = number;
          quantity_nulls = 0;
        };
    return Math.min.apply (Math, nulls);
}