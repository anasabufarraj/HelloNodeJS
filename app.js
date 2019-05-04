// © Anas Abu Farraj
// Node.js Training Project
// September 1, 2018

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        console.log(nums);
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
  console.log(nums);
}

const arr = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
insertionSort(arr);
