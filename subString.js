function longSub(x, y, m, n){

    let LongS = Array(m+1).fill().map(()=>Array(n+1).fill(0));
    let rest = 0;
    for(let i=0; i<=m;i++){
        for(let j = 0;j<=n;j++){
            if(i===0||j===0){
                LongS[i][j]=0;
            }else if(x[i-1]===y[j-1]){
                LongS[i][j]=LongS[i-1][j-1]+1;
                rest = Math.max(rest, LongS[i][j]);
                
            }else{
                LongS[i][j]=0;
                
            }

        }
    }
    return rest
    
   
    
    
}
var x = "adgdhfddfdsfsfsiiiiijjjjj";
var y = "rhffhfhgdgdgiiijjjjj";
var m = x.length;
var n = y.length;
console.log("length of the longest substring is " + longSub(x, y, m, n) )