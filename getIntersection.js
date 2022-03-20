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

            // Push results to an empty array if the intervals intersect
            // Execute the code If (0 <= starti < endi <= 109 && 0 <= startj < endj <= 109) is True
            // Execute the code if (endi < starti+1) && (endj < startj+1) is Not True
            if ( (starti >= 0 && starti < endi && endi <= 109) && ((startj >= 0 && startj < endj && endj <= 109)) ){
                if ( !(endi < starti + 1) && !(endj < startj)) {
                if (resultStart <= resultEnd) {
                    result.push([resultStart, resultEnd]);
                }
            }
            }

            // Increase Index for the lists to loop over the array until end of the lists length
            if (firstList[i][1] < secondList[j][1]) {
                i++;
            } else {
                j++;
            }
        }
        return result;
    }
}


module.exports = GetIntersection;

let arr1 = [[0,3],[7,9]];
let arr2 = [[2,4],[6,8]];
console.log(GetIntersection(arr1,arr2));