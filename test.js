const {fromEuroToDollar, fromDollarToYen, fromYenToPound,} =require('./app.js');

test("one euro should be 1.07 dollars",()=>{
    expect(fromEuroToDollar(3.5)).toBe(3.745)
})
test("one dollar should be 150.24 yen",()=>{
    expect(fromDollarToYen(3.5)).toBe(525.84)
})
test("one yen should be 0.005 pound",()=>{
    expect(fromYenToPound(3.5)).toBe(0.0175)
})