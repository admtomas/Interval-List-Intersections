function GetIntersection(firstList, secondList) {
    // Each list of intervals is pairwise disjoint and in sorted order. There is no need to create User Inputs

    // Function will run if:
    // 0 <= firstList.length, secondList.length <= 1000
    // firstList.length + secondList.length >= 1;
    let conditionOne = firstList.length + secondList.length;
    let conditionTwo = secondList.length;

    // Variables to store result as an array and Index numbers for each list
    let i = 0; // first list
    let j = 0; // second list
    let result = [];


    // Initial If statement to test conditions for lists lengths
    if ( conditionOne >= 1 && conditionTwo <= 1000) {




        return result;
    }
}


module.exports = GetIntersection;

let arr1 = [[0,3],[7,9]];
let arr2 = [[2,4],[6,8]];
console.log(GetIntersection(arr1,arr2));