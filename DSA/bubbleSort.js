function bubbleSort(arr)
{
    let n = arr.length;
    let swap;
    
    do{
       swap = false;
       for(let i =0;i<n-1;i++)
       {
           if(arr[i]>arr[i+1])
           {
               let temp = arr[i];
               arr[i] = arr[i+1];
               arr[i+1]=temp;
               swap = true;
           }
       }
       n--;
    }while(swap)
       return arr;
}

let array = [5,4,81,1,2]
console.log("Final Array", bubbleSort(array));