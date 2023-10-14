console.log("script loaded successfully");



let arr = [];
let timers = [];
for (let i = 0; i < 40; i++) {
    let val = Math.random();
    val = val * 10;
    val = parseInt(val);
    arr.push(val + 1);
}

let reqContainer = document.getElementById("graph-container");

let resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
    arr = [];
    for(let i=0;i<timers.length;i++){
        clearInterval(timers[i]) ;
    }
    timers = [];
    itr = 0;
    cnt = 0;
    for (let i = 0; i < 40; i++) {
        let val = Math.random();
        val = val * 10;
        val = parseInt(val);
        arr.push(val + 1);
    }

    showBars(arr);
})
function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = 0; j < arr.length - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                flag = true;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
        let newarr = [];
        for (let i = 0; i < arr.length; i++) {
            newarr.push(arr[i]);
        }
        let curr = setTimeout(() => {

            // showBars(arr);
            showBars(newarr);
            console.log('here' + i);

        }, i * 500);
        timers.push(curr);
        if (flag == false) {
            break;
        }
    }
}
let bubbleSortButton = document.getElementById("bubble-sort");
bubbleSortButton.addEventListener("click", () => {
    bubbleSort(arr);
})

function showBars(arr) {

    reqContainer.innerText = "";
    let graph = document.createElement("div");
    graph.className = 'graph';
    for (let i = 0; i < arr.length; i++) {
        let slab = document.createElement("div");
        slab.style.display = 'inline-block';
        slab.style.height = (arr[i] * 10) + "%";
        slab.style.width = "10%";
        slab.style.backgroundColor = 'grey';
        slab.style.border = '1px solid white';
        slab.style.borderRadius = '1px';
        graph.appendChild(slab);
    }
    reqContainer.appendChild(graph);
}
let count = 0;

showBars(arr);




function merge(arr, low, mid, high) {
    let arr1 = [];
    let arr2 = [];
    for (let i = low; i <= mid; i++) {
        arr1.push(arr[i]);
    }
    for (let i = mid + 1; i <= high; i++) {
        arr2.push(arr[i]);
    }
    let newarr = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newarr.push(arr1[i++]);
        }
        else {
            newarr.push(arr2[j++]);
        }
    }
    while (i < arr1.length) {
        newarr.push(arr1[i++]);
    }
    while (j < arr2.length) {
        newarr.push(arr2[j++]);
    }
    for (let i = low; i <= high; i++) {
        arr[i] = newarr[i - low];
    }
}



let itr = 0;
function mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = parseInt((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);

    // showBars(arr);
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(arr[i]);
    }
    itr++;
    let interval = setTimeout(() => {
        console.log(newarr);
        showBars(newarr);
        console.log(itr);

    }, itr * 200);
    timers.push(interval);
}
let mergeButton = document.getElementById('merge-sort');
mergeButton.addEventListener('click', () => {
    mergeSort(arr, 0, arr.length - 1);
});

let cnt = 0;

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let mini = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        if (mini == i) continue;
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;

        let newarr = [];
        for (ele of arr) {
            newarr.push(ele);
        }
        cnt++;
        let interval = setTimeout(() => {
            showBars(newarr);
        }, 500 * cnt);
        timers.push(interval);
    }

}

let selectionSortButton = document.getElementById('selection-sort');
selectionSortButton.addEventListener('click', () => {
    selectionSort(arr);
})

// console.log(graph);

// console.log(reqContainer);

console.log(arr);


function partition(arr,l,h){
    let p = arr[h] ;
    let j = l-1 ;
    for(let i=l;i<h;i++){
        if(arr[i] < p){
            j++ ;
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            // swap(arr[i],arr[j]) ;
        }
    }
    let temp=arr[j+1];
    arr[j+1]=arr[h];
    arr[h]=temp;
    // swap(arr[j+1],p) ;
    return j+1 ;
}

let  ct = 0 ;
function quicksort(arr,l,h){
 if(l>=h){
    return ;
  }
  let p = partition(arr,l,h) ;
  if(p==-1)
  {
    return;
  }
  quicksort(arr,l,p-1) ;
  quicksort(arr,p+1,h) ;
 let newarr = [] ;
 for(let i=0;i<arr.length;i++){
    newarr.push(arr[i]) ;
 }
 ct++;
 let interval  =  setTimeout(() => {
    showBars(newarr) ;
 }, ct*200);
 timers.push(interval)  ;
}
let quicksortbtn = document.getElementById('quicksort')  ;
quicksortbtn.addEventListener('click',()=>{
    console.log('clicked quicksort')
    quicksort(arr,0,arr.length-1) ;
}) ;