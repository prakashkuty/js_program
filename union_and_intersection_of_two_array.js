//Input:<br>
//Array 1: [1, 3, 4, 5, 7]<br>
//Array 2: [2, 3, 5, 6]<br>

//Output:<br>
//Union: [1, 2, 3, 4, 5, 6, 7]<br>
//Intersection: [3, 5]<br>

let arr1 = [1,3,3,4,5,7];
let arr2 = [2,3,5,6];

let join = arr1.concat(arr2).sort((a,b)=>a-b);

let intersection = [...new Set(join.filter((v,i,a)=> a.indexOf(v,i+1)!=-1))];
let union = [...new Set(join)];
console.log(union);
console.log(intersection);
