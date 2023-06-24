

// a = [6,5,3,1,2];

// function sorting (a){

 
//     for(let i =0; i<a.length; i++){
//         let minId = i;
        
//         for(let j = i+1; j<a.length; j++){

//             if(a[minId] > a[j]){

//               minId = j;

//             }

//         }
//         [a[i], a[minId]] = [a[minId],a[i]]

//     }return a

// }
// console.log(sorting(a))



// selection sort while loop


// arr =  [ 3,6,5,8,2,1];

// function sorting(arr){
// var i = 0;
// while(i<arr.length){
//     minInd = i;

//     var j = i+1;
//     while(j<arr.length){
//     if( arr[j] < arr[minInd]){

//         minInd = j;
   
//     }
//     j++
// }
//     [arr[i],arr[minInd]] = [arr[minInd],arr[i]]
//     i++
// }
// return arr;
// }
// b = sorting(arr)
// console.log(b)



// a = [ 3,6,5,8,2,1]
// function so(a){
// var i = 0;
// while(i<a.length){
//      min_id = i;


//         var j = i+1;
//         while(j<a.length){

//         if(a[j] < a[min_id] ){
//             min_id = j;
            
//         }
//         j++
//      }
//      [a[i] , a[min_id]] = [a[min_id] , a[i]]
//      i++
// }
// return a;
// }
// console.log(so(a))



// a = [3,2,6,5,9,1];

// function so(a){

//     var i =0;
//     while(i<a.length){
//         min_id = i;
//         var j = i+1;
//         while(j<a.length){
//             if(a[j] < a[min_id]){
//                 min_id=j;
//             }
//             j++
//         }
//         [a[i] , a[min_id]] = [a[min_id] , a[i]]
//         i++
//     }
//     return a;
    
//  selection sorting

// nums1 = [1,2,3,0,0,0]
// nums2 = [2,5,6]
// m = 3
// n = 3

// // nums1 = [...nums1,...nums2]
// // console.log(nums1)

// for(let i = 0; i<m; i++){

//     minId = i;

//     for(let j = i+1; j<n; j++){
//         if(nums1[minId] > nums1[j]){
//             minId = j;
//         }
//     }   
//     [nums1[i], nums1[minId]] = [ nums1[minId], nums1[i]]

// }
// console.log(nums1)
// count = 0;
// for(let i = 0; i<nums1.length; i++){
//     if(nums1[i] == 0){
//         count++
//     }
// }
// nums1.splice(0,count)
// console.log(nums1)
// j = [1,2,3]
// console.log(j)


// merge sort

// nums1 = [1,2,3,0,0,0]
// nums2 = [2,5,6]
// m = 3
// n = 3
// p = 0;
// q = 0;
// c=[]
// while(p<m && q<n){

//     if(nums1[p] < nums2[q]){
//         c.push(nums1[p])
//         p++
//         console.log(c)
//     }
//     else{
//         c.push(nums2[q])
//         q++
//         console.log(c)
//     }
// }
// while(p<m){
//     c.push(nums1[p])
//     p++
// }
// while(q<n){
//     c.push(nums2[q])
//     q++
// }
// let a;

// a = nums1;
// nums1 = c;
// c = a;

// console.log(nums1)






nums1 = [1,2,3,0,0,0]
nums2 = [2,5,6]
m = 3
n = 3
function sorted (num1,m,nums2,n){

p = 0;
q = 0;
c = [];
while(p<m && q<n){

    if(nums1[p] < nums2[q]){
       c.push(num1[p])
        p++
        
    }
    else{
        c.push(nums2[q])
        q++

    }
}
while(p<m){
    c.push(nums1[p])
    p++
}
while(q<n){
    c.push(nums2[q])
    q++
}
console.log(c)
}

sorted(nums1,m,nums2,n)
