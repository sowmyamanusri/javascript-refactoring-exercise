function processTransactions(transActions) {
    if (!transActions) {
    throw new Error("Undefined collection of transactions");
  }
    const txCount = {}
    transActions.map(item => txCount[item] ? txCount[item] += 1 : txCount[item] = 1);
    return Object.keys(txCount).sort((a, b) => txCount[b] - txCount[a] || a > b || -(a < b)).map(item => `${item} ${txCount[item]}`)
}


module.exports = processTransactions;
