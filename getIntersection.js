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

        //  Loops through length of the lists
        while (i < firstList.length && j < secondList.length) {

            // Use "array[index][index]" to extract [starti, endi]  && [startj, endj] from both lists
            let starti = firstList[i][0];
            let endi = firstList[i][1];

            let startj = secondList[j][0];
            let endj = secondList[j][1];


            // Find highest number between [starti] and [startj] as it will become starting point of Intersection
            // Find lowest number between [endi] and [endj] as it will become ending point of Intersection
            // Use min/max from math method
            let resultStart = Math.max(starti, startj);
            let resultEnd = Math.min(endi, endj);





        }
        return result;
    }
}


module.exports = GetIntersection;

let arr1 = [[0,3],[7,9]];
let arr2 = [[2,4],[6,8]];
console.log(GetIntersection(arr1,arr2));