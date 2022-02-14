// My implementation. O(n2) === bad
var maxProfit = function(prices) {
  let highestProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
      for (var j = i + 1; j < prices.length; j++) {
        if (prices[j] - prices[i] > highestProfit) {
          highestProfit = prices[j] - prices[i]
        }
      }
  }
  return highestProfit;
};

console.log(maxProfit([2, 7, 4, 3, 9, 1]))

// Awesome implementation. O(n)
var maxProfit2 = function(prices) {
  var min = Number.MAX_SAFE_INTEGER; //infinity, basically
  var max = 0;
  for (var i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
}
