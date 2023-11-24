const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
  let currentSubarray = []

  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (currentSum + arr[i] <= n) {
      // If adding the current element doesn't exceed the limit, add it to the current subarray
      currentSubarray.push(arr[i]);
      currentSum += arr[i];
    } else {
      // If adding the current element exceeds the limit, start a new subarray
      result.push(currentSubarray);
      currentSubarray = [arr[i]];
      currentSum = arr[i];
    }
  }

  // Add the last subarray to the result
  result.push(currentSubarray);

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
