function mergeSort(Arr, l, r){
    if(l>=r) return;
    let m = Math.floor((l+r)/2);
    mergeSort(Arr, l, m);
    mergeSort(Arr, m+1, r);
    merge(Arr, l, m, r);
}

function merge(Arr, l, m, r){
    let A = [];
    let B = [];
    for(let i=l; i<=m; i++){
        A.push(Arr[i]);
    }
    for(let j=m+1; j<=r; j++){
        B.push(Arr[j]);
    }
    // console.log("A is: ", A);
    // console.log("B is: ", B)
    // A & B

    let p = 0;     
    let q = 0;
    let y = l;
    while(p<A.length && q<B.length){
        if(A[p]<B[q]){
            Arr[y] = A[p];
            p++;
        }
        else{
            Arr[y] = B[q];
            q++;
        }
        y++;
    }
    // C = [1,2,3,4,6,7]
    while(p<A.length){
        Arr[y] = A[p];
        p++;
        y++;
    }
    while(q<B.length){
        Arr[y] = B[q];
        q++;
        y++;
    }
    // Arr = [...C];
    // console.log("C is: ", Arr);
}

let Arr = [1,5,2,7,3,4,12,15];
mergeSort(Arr, 0, Arr.length-1);
console.log(Arr);