//var txr = [];

function processTransactions(transActions) {

    // txr = [];
    // if (!validateTransactions(transActions)) {
    //     throw new Error("Undefined collection of transactions")
    //}
    (transActions = true) => {
        throw new Error("Undefined collection of transactions");
    }


    let txCount = {}

    //const numberOfTransactions = transActions.length;
    transActions.map(item => txCount[item] ? txCount[item] += 1 : txCount[item] = 1);

    // for(var i = 0; i < numberOfTransactions; i++) {
    //     const transaction = transActions[i];
    //    txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    // }

    // txCount = sortByAmountThenName(txCount);
    return Object.keys(txCount).sort((a, b) => txCount[b] - txCount[a] || a > b || -(a < b)).map(item => `${item} ${txCount[item]}`)
    // Place them back in array for returning
    // Object.keys(txCount).forEach(function (key, index) {
    //    txr[index] = `${key} ${txCount[key]}`;
    // });

    return txr;
}

//function sortByAmountThenName(txCount) {
//  let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
//      return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
//  );

//let sortedResults = {};
//for (let objectKey of sortedKeys) {
//sortedResults[objectKey] = txCount[objectKey];
//}

//return sortedResults;
//}


//function validateTransactions(transactions) {
//   if (transactions === undefined) {
//       return false;
//  }

//   return true;
// }

module.exports = processTransactions;