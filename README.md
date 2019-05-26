The solution for https://leetcode.com/problems/reorder-log-files/

The important insights here as follows:
1. Tests tests tests! Nothing like fast feedback to help you get on track really quick.
2. Since the numbers never change relative position, and are always at the end, we can just:
 a. Take them out of the array
 b. Sort the alphabetical parts
 c. Append the numbers to the end of that sorted array
3. Since they want to sort on the identifier last, lets just move the identifier to the end of the array. That way, normal sorting gets us exactly what we need.
