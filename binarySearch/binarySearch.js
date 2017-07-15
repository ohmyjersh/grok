const items = [1000,99,1,2,3,4,5,6,7,50,99, 34, 22, 21, 1000, 66, 1234, 333, 999, 12, 555];
const findMe = 22;
const binarySearch = (arr, item) => {
    arr.sort((a,b)=> a-b);
    if(arr[0] === item)
        return true;
    if(arr.length === 1)
        return false;
    const mid = Math.ceil(arr.length /2);
    if(arr[mid] === item)
        return true;
    if (arr[mid] < item) {
        const right = arr.splice(mid);
        return binarySearch(right, item);
    }
    else {
        const left = arr.splice(0,mid);
        return binarySearch(left, item);
    }
};

let foundIt = binarySearch(items, findMe);
console.log(foundIt);