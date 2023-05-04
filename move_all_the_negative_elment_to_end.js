//Move all negative elements to end
let inp = [1, -1, 3, 2, -7, -5, 11, 6];

//step 1 using splice and push method
let k=0;

for(let i=0;i<inp.length-k;i++){
    if(inp[i]<0){
        inp.push(inp[i]);
        inp.splice(i,1);
        i-=1;
        k++;
    }
}

console.log(inp);

//step 2 : using bubble sort method:

let arr = [1, -1, 3, 2, -7, -5, 11, 6];

let out = (arr)=>{
    let done=false;
    
    while(!done){
        done=true;
        for(let i=1;i<arr.length;i++){
            
            if(arr[i-1]<0){
                
                if(arr[i-1]<0 && arr[i]>0){
                    
                    temp = arr[i];
                    arr[i] = arr[i-1];
                    arr[i-1] = temp
                    done=false;
                    
                }
                
                
            }
        }
            
        
    }
    
    return arr;
}

console.log(out(arr));


//out :[ 1  3  2  11  6  -1  -7  -5 ] 
