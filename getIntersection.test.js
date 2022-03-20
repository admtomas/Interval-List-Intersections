// Use 'Jest' for function testing

const getIntersection = require('./getIntersection');

test('first test to find intersection of two lists', () => {
    expect(getIntersection([[0,5],[8,10],[15,25]],[[3,7],[8,12],[14,20]])).toStrictEqual([[3,5],[8,10],[15,20]]);
});

test('second test to find intersection of two lists', () => {
    expect(getIntersection([[0,5],[7,10]],[[3,7]])).toStrictEqual([[3,5],[7,7]]);
});

test('return empty array if first list length is equal to 0', () => {
    expect(getIntersection([[]],[[3,7],[8,12],[14,20]])).toStrictEqual([]);
});

test('test the nested "True" and "Not True" conditions', () => {
    expect(getIntersection([[0,110]],[[100,130]])).toHaveLength(0);
});