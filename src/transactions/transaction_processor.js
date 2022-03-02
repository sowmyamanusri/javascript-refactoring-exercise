function processTransactions(transActions) {
    if (!transActions) {
        throw new Error(" undefined array of transactions");
    }
    const txCount = {}
    transActions.forEach(item => txCount[item] ? txCount[item] += 1 : txCount[item] = 1);
    return Object.keys(txCount).sort((itemOne, itemTwo) =>
            txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo))
        .map(item => `${item} ${txCount[item]}`)
}

module.exports = processTransactions;
//['notebook', 'notebook', 'mouse', 'keyboard', 'mouse']
//txCount = {"notebook" :2,"mouse" :2,"keyboard" :1};
//[mouse 2, notebook 2, keyboard 1]
