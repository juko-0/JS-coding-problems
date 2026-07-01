//4. Median of Two Sorted Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
let merged = nums1.concat(nums2);
merged.sort((a, b) => a - b);
let len = merged.length;
if (len % 2 === 0) {
  return (merged[len / 2 - 1] + merged[len / 2]) / 2;
} else {
  return merged[Math.floor(len / 2)];
}
};

