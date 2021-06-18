//1. Data Structures and Algorithms:

// function cars(){

//     let wordCounts = { };
//     let words = text.split(" ");
    
//     for(let i = 0; i < words.length; i++)
//         wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
//         return wordCounts
//     }
//     console.log(cars())

//____________________________________________________________

//2. Algo:

//  function merge (nums1, m, nums2, n) {
//     let i = m - 1, j = n - 1;
//     let end = m + n - 1;
//     while (i >= 0 && j >= 0) {
//         if (nums1[i] < nums2[j]) {
//            return nums1[end--] = nums2[j--];
//         } else {
//             nums1[end--] = nums1[i--];
//         }
//     }
//     while (j >= 0) {
//         nums1[end--] = nums2[j--];
//     }
// };