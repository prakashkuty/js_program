//sort the array 0's,1's,2,s

let inp = [2, 0, 2, 1, 1, 0];

//sort default method

let sort_default = inp.sort((a,b)=>a-b);

console.log(sort_default);

//sort by bubble sort alogrithm:
function bubble_sort(arr){
      
      let done = false;
      
      while(!done){
          done=true;
          
          for(let i=1;i<arr.length; i++){
              
              if(arr[i-1]>arr[i]){
                  temp = arr[i];
                  arr[i] = arr[i-1];
                  arr[i-1] = temp;
                  done=false;
              }
             
              
          }
      }
      
      return arr;
}

let out = bubble_sort(inp);

console.log(out);
//output : [ 0, 0, 1, 1, 2, 2 ]
