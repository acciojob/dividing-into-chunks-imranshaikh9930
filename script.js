const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
 const result =[];
let CurrentSubArr = [];
let CurrentSum = 0;
for(const num of arr){
 if(CurrentSum+num<=n){
	 CurrentSubArr.push(num);
	 CurrentSum+=num
;
 }
	else{
		result.push(CurrentSubArr);
		CurrentSum=num;
		CurrentSubArr=[num];
	}
}
if(CurrentSubArr.length>0){
	result.push(CurrentSubArr);
}
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
