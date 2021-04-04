---
slug: coding-challenge-1-counting-minimum-steps
title: '[WIP]: Counting minimum steps'
author: CJ Dango
author_title: Software Engineer
author_url: https://github.com/cjdango
author_image_url: https://avatars.githubusercontent.com/u/31501132?v=4
tags: [coding, algorithms, data structures]
---

In this very first blog post of mine, we will be solving a very interesting coding challenge I found 
on the internet using 3 approaches. The solutions on this blog post are not mine, this is only my attempt to explain what I have learned in my own words.

<!--truncate-->

### The challenge
Given a positive integer n, return the minimum number of steps to minimize `n` to 1

### Available steps

1. Decrement n by 1 `n-1`
2. If n is divisible by 2, then divide n by 2 `n/2`
3. If n is divisible by 3, then divide n by 3 `n/3`

### Examples

- 10 ⇒ 3 steps (10 ⇒ 9 ⇒ 3 ⇒ 1)
- 15 ⇒ 4 steps (15 ⇒ 5 ⇒ 4 ⇒ 2 ⇒ 1)
- 6 ⇒ 2 steps (6 ⇒ 2 ⇒ 1) or (6 ⇒ 3 ⇒ 1)

### Solution #1 (brute force)

Let's take the example above, `n=6` . 

There are numbers of paths we can take to minimize `n` to 1 and we can't possibly know how many steps does the fastest path takes without going through all of them, so we'll do a brute force approach.

We can create a [recursive function](https://www.geeksforgeeks.org/recursive-functions/) to facilitate the steps we can take.

We can think about this as a tree that can have three branches each node. Each branch represent each steps, `n-1` , `n/2` (if n is divisible by 2), and `n/3` (if n is divisible by 3). To further understand this solution, let's visualize it.

![recursive tree](./assets/counting-min-steps-top-down-tree.png)

As you can see from the image above, there are 3  fastest combinations of steps we can take to get 6 minimized to 1. All of the 3 combinations requires two steps, so `2` is the answer we are looking for, `2` is the count of minimum steps to minimize 6 to 1.

**Fastest Combinations:**

- `(6/3) / 2 = 1`
    - Step count 1 = 6/3
    - Step count 2 = /2

- `(6/3) - 1 = 1`
    - Step count 1 = 6/3
    - Step count 2 = -1
- `(6/2) / 3 = 1`
    - Step count 1 = 6/3
    - Step count 2 = /3

But how do we actually count the steps? Remember that we are doing a recursive function approach, so the return values of each function call are the actual step counts from the bottom to top (`n=1` to `n=6`).

Our recursive function looks like this `fn(n)` , if `n` is `1` our function returns `0`, since there are zero steps required to minimize `1` to `1`. Else it will further process the call, calling itself applying `step 1`, and optionally for `step 2 and 3`. For `step 2 and 3` we will compare which step is the minimum between the result of previous step and the result of applying the current step to the function `fn`, then add `1` to the processes` result, naturally counting the steps from bottom to top call stack:

```jsx
fn(n):
  if n === 1
    return 0
  
  // Step 1
  result = fn(n - 1)
  
  // Step 2
  if n is divisible by 2:
    result = min(result, fn(n/2))

  // Step 3
  if n is divisible by 3:
    result = min(result, fn(n/3))

  return result + 1
```

You can see my golang implementation of this solution [here](https://github.com/cjdango/coding-challenges/blob/main/minsteps/count.go).