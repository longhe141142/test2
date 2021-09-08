const calcSumOfArray = (...args) => {
     const rel = args.reduce((accumulator,curr,index,arr) =>{
        //  console.log(`accumulator: ${accumulator} curr: ${curr} index:${index} arr: ${arr}`)
        return accumulator +  curr;
     },0);
     console.log(`sum of array ${args} is : ${rel}`)
}
// calcSumOfArray(10, 2, 5, 3, 9, 20, 8)

module.exports = { calcSumOfArray }