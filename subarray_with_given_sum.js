//Subarray with given sum:
let inp = [1, 4, 20, 3, 10, 5];
let targetsum = 33;
function subarray(arr,sum){
   let out = [];
   let done = false;
   let j= 0;
   while(!done){
       let value = 0;
       for(let i=j;i<arr.length;i++){
            value +=arr[i];
            if(value==sum){
                out.push(j);
                out.push(i);
                done=true;
                return out;
            }else{
               done=false;
            }
       }
       
       j++;
   }
   return out;
}
let out = subarray(inp,targetsum);
console.log(out);

//out : [2,4];
