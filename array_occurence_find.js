//find the occurrence of an integer in the arrar  php

let inp = [2,3,6,23,2,3,23,4,5,7,9,3,2,4,11,1,13,23,6];

let out = inp.reduce((t,v,i,a)=>{
      t[v] ? t[v]++ : t[v]=1;
      return t
},{})
let final = Object.entries(out).filter((val)=>{
    if(val[1]!=1){
        return val;
    } });
    
console.log(final.flatMap((v)=> parseInt(v[0]) )   );


//output : [ 2, 3, 4, 6, 23 ]
//step 2:


let inp = [2,3,6,23,2,3,23,4,5,7,9,3,2,4,11,1,13,23,6];

let out=[];
for(let i=0; i<inp.length;i++){
    
    if(inp.indexOf(inp[i],i+1)!=-1 && out.includes(inp[i])==false){
        out.push(inp[i]);
    }
    
}

console.log(out);
