let unsorted = [45,44,12,8,1,5]
let oneArr = [1];

let upsertItemInArray = (array, item, index) => index < 0 ? [...array, item] : [...array.slice(0, index), item, ...array.slice(index + 1)]; 

var insertionSort = (arr) => {
    if(arr.length <= 1)
        return arr;
    return arr.reduce((acc, curr) => {
        if(acc.length === 0)
            acc.push(curr);
        let newArry = [];
        for(let i = 0; i < acc.length; i++)
        {
            if(curr >= acc[i] && curr < acc[i] +1){
                
            }
        }
        acc = newArry;
        return acc.concat(newArry);
    },[]);
}

console.log(insertionSort(unsorted));
// console.log(insertionSort([1]));