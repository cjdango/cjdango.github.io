(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{117:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/counting-min-steps-top-down-tree-4a098e4fd3b7b0021b3363a626cdca95.png"},118:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/count-min-steps-sol-2-table-471f316831badbbcd0a079036874e6c6.png"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(7),o=(n(0),n(90)),l={slug:"coding-challenge-1-counting-minimum-steps",title:"[WIP]: Counting minimum steps",author:"CJ Dango",author_title:"Software Engineer",author_url:"https://github.com/cjdango",author_image_url:"https://avatars.githubusercontent.com/u/31501132?v=4",tags:["coding","algorithms","data structures"]},r={permalink:"/coding-challenge-1-counting-minimum-steps",source:"@site/blog/2021-04-04-counting-min-steps.md",description:"In this very first blog post of mine, we will be solving a very interesting coding challenge I found",date:"2021-04-04T00:00:00.000Z",formattedDate:"April 4, 2021",tags:[{label:"coding",permalink:"/tags/coding"},{label:"algorithms",permalink:"/tags/algorithms"},{label:"data structures",permalink:"/tags/data-structures"}],title:"[WIP]: Counting minimum steps",readingTime:5.21,truncated:!0},s=[{value:"The challenge",id:"the-challenge",children:[]},{value:"Available steps",id:"available-steps",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Solution #1 (brute force)",id:"solution-1-brute-force",children:[]},{value:"Solution #2 (memoization)",id:"solution-2-memoization",children:[]}],b={toc:s};function c(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this very first blog post of mine, we will be solving a very interesting coding challenge I found\non the internet using 3 approaches. The solutions on this blog post are not mine, this is only my attempt to explain what I have learned in my own words."),Object(o.b)("h3",{id:"the-challenge"},"The challenge"),Object(o.b)("p",null,"Given a positive integer n, return the minimum number of steps to minimize ",Object(o.b)("inlineCode",{parentName:"p"},"n")," to 1"),Object(o.b)("h3",{id:"available-steps"},"Available steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Decrement n by 1 ",Object(o.b)("inlineCode",{parentName:"li"},"n-1")),Object(o.b)("li",{parentName:"ol"},"If n is divisible by 2, then divide n by 2 ",Object(o.b)("inlineCode",{parentName:"li"},"n/2")),Object(o.b)("li",{parentName:"ol"},"If n is divisible by 3, then divide n by 3 ",Object(o.b)("inlineCode",{parentName:"li"},"n/3"))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"10 \u21d2 3 steps (10 \u21d2 9 \u21d2 3 \u21d2 1)"),Object(o.b)("li",{parentName:"ul"},"15 \u21d2 4 steps (15 \u21d2 5 \u21d2 4 \u21d2 2 \u21d2 1)"),Object(o.b)("li",{parentName:"ul"},"6 \u21d2 2 steps (6 \u21d2 2 \u21d2 1) or (6 \u21d2 3 \u21d2 1)")),Object(o.b)("h3",{id:"solution-1-brute-force"},"Solution #1 (brute force)"),Object(o.b)("p",null,"Let's take the example above, ",Object(o.b)("inlineCode",{parentName:"p"},"n=6")," . "),Object(o.b)("p",null,"There are numbers of paths we can take to minimize ",Object(o.b)("inlineCode",{parentName:"p"},"n")," to 1 and we can't possibly know how many steps does the fastest path takes without going through all of them, so we'll do a brute force approach."),Object(o.b)("p",null,"We can create a ",Object(o.b)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/recursive-functions/"},"recursive function")," to facilitate the steps we can take."),Object(o.b)("p",null,"We can think about this as a tree that can have three branches each node. Each branch represent each steps, ",Object(o.b)("inlineCode",{parentName:"p"},"n-1")," , ",Object(o.b)("inlineCode",{parentName:"p"},"n/2")," (if n is divisible by 2), and ",Object(o.b)("inlineCode",{parentName:"p"},"n/3")," (if n is divisible by 3). To further understand this solution, let's visualize it."),Object(o.b)("p",null,Object(o.b)("img",{alt:"recursive tree",src:n(117).default})),Object(o.b)("p",null,"As you can see from the image above, there are 3  fastest combinations of steps we can take to get 6 minimized to 1. All of the 3 combinations requires two steps, so ",Object(o.b)("inlineCode",{parentName:"p"},"2")," is the answer we are looking for, ",Object(o.b)("inlineCode",{parentName:"p"},"2")," is the count of minimum steps to minimize 6 to 1."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Fastest Combinations:")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"(6/3) / 2 = 1")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Step count 1 = 6/3"),Object(o.b)("li",{parentName:"ul"},"Step count 2 = /2"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"(6/3) - 1 = 1")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Step count 1 = 6/3"),Object(o.b)("li",{parentName:"ul"},"Step count 2 = -1"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"(6/2) / 3 = 1")),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Step count 1 = 6/3"),Object(o.b)("li",{parentName:"ul"},"Step count 2 = /3")))),Object(o.b)("p",null,"But how do we actually count the steps? Remember that we are doing a recursive function approach, so the return values of each function call are the actual step counts from the bottom to top (",Object(o.b)("inlineCode",{parentName:"p"},"n=1")," to ",Object(o.b)("inlineCode",{parentName:"p"},"n=6"),")."),Object(o.b)("p",null,"Our recursive function looks like this ",Object(o.b)("inlineCode",{parentName:"p"},"fn(n)")," , if ",Object(o.b)("inlineCode",{parentName:"p"},"n")," is ",Object(o.b)("inlineCode",{parentName:"p"},"1")," our function returns ",Object(o.b)("inlineCode",{parentName:"p"},"0"),", since there are zero steps required to minimize ",Object(o.b)("inlineCode",{parentName:"p"},"1")," to ",Object(o.b)("inlineCode",{parentName:"p"},"1"),". Else it will further process the call, calling itself applying ",Object(o.b)("inlineCode",{parentName:"p"},"step 1"),", and optionally for ",Object(o.b)("inlineCode",{parentName:"p"},"step 2 and 3"),". For ",Object(o.b)("inlineCode",{parentName:"p"},"step 2 and 3")," we will compare which step is the minimum between the result of previous step and the result of applying the current step to the function ",Object(o.b)("inlineCode",{parentName:"p"},"fn"),", then add ",Object(o.b)("inlineCode",{parentName:"p"},"1")," to the processes` result, naturally counting the steps from bottom to top call stack:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"fn(n):\n  if n === 1\n    return 0\n  \n  // Step 1\n  result = fn(n - 1)\n  \n  // Step 2\n  if n is divisible by 2:\n    result = min(result, fn(n/2))\n\n  // Step 3\n  if n is divisible by 3:\n    result = min(result, fn(n/3))\n\n  return result + 1\n")),Object(o.b)("p",null,"You can see my golang implementation of this solution ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cjdango/coding-challenges/blob/main/minsteps/count.go"},"here"),"."),Object(o.b)("h3",{id:"solution-2-memoization"},"Solution #2 (memoization)"),Object(o.b)("p",null,"The previous solution solves the problem. It can get the minimum number of steps to minimize ",Object(o.b)("inlineCode",{parentName:"p"},"n")," to 1. The problem with the brute force approach is that it is very inefficient. We are repeating ourselves multiple times and it can take a very long time if ",Object(o.b)("inlineCode",{parentName:"p"},"n")," is a very big number. You can try the solution above yourself and try to input ",Object(o.b)("inlineCode",{parentName:"p"},"1000")," as ",Object(o.b)("inlineCode",{parentName:"p"},"n"),", like ",Object(o.b)("inlineCode",{parentName:"p"},"fn(1000)"),"."),Object(o.b)("p",null,"A lot of nodes are repeating it's calculations. What we can do is to still use the previous solution, then implement the concept of ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Memoization"},"memoization"),". If you're familiar with react, this concept is what powers the ",Object(o.b)("inlineCode",{parentName:"p"},"memo")," react hook."),Object(o.b)("p",null,"Memoization is a form of caching and memoized functions becomes optimized for speed in exchange for higher use of memory space. "),Object(o.b)("p",null,"In our example above, calculations for ",Object(o.b)("inlineCode",{parentName:"p"},"fn(3)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fn(2)")," are being repeated multiple times, in other words we are calling ",Object(o.b)("inlineCode",{parentName:"p"},"fn(2)")," and ",Object(o.b)("inlineCode",{parentName:"p"},"fn(3)")," repeatedly but they always return the same results. "),Object(o.b)("p",null,"Our function is ",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Idempotence"},"idempotent")," , meaning we can execute it several times without changing the final result, given that we give it the same arguments."),Object(o.b)("p",null,"e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"fn(6)")," always returns ",Object(o.b)("inlineCode",{parentName:"p"},"2"),", ",Object(o.b)("inlineCode",{parentName:"p"},"fn(3)")," always returns ",Object(o.b)("inlineCode",{parentName:"p"},"1")),Object(o.b)("p",null,"So as you can imagine, we can just save the result of a function call in the memory then grab that result and use it as the return value the next time we encounter the same function call instead of calculating again and again. This way we can save a lot of time. "),Object(o.b)("p",null,"e.g. ",Object(o.b)("br",null),"\n",Object(o.b)("img",{alt:"table",src:n(118).default})),Object(o.b)("p",null,"To memoized our function, we need some kind of memory storage to store the results of each unique nodes. We can utilize a list and it's indices since we are just dealing with positive integers. "),Object(o.b)("p",null,"First we need to change our function signature from ",Object(o.b)("inlineCode",{parentName:"p"},"fn(int) int")," to ",Object(o.b)("inlineCode",{parentName:"p"},"fn(int, int[]) int")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"fn(n, memo[]):\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"We also need to make sure that the length of our ",Object(o.b)("inlineCode",{parentName:"strong"},"memo")," is ",Object(o.b)("inlineCode",{parentName:"strong"},"n+1"),". That's because we are going to use ",Object(o.b)("inlineCode",{parentName:"strong"},"n")," as our index. And we also need to fill our ",Object(o.b)("inlineCode",{parentName:"strong"},"memo")," with zeros.")," Languages like Java and Golang initializes int arrays with zeros as their indices' empty values."),Object(o.b)("p",null,"Then we need to change and add a few lines of code in our previous solution."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"fn(n int, memo int[]):\n  if n === 1\n    return 0\n\n  // if n is already calculated and\n  // stored its result in memo[n]\n  if memo[n] != 0 {\n    return memo[n] // grab and return result from memo\n  }\n  \n  // Step 1\n  result = fn(n - 1, memo) // pass memo\n  \n  // Step 2\n  if n is divisible by 2:\n    result = min(result, fn(n/2, memo)) // pass memo\n\n  // Step 3\n  if n is divisible by 3:\n    result = min(result, fn(n/3, memo)) // pass memo\n\n  memo[n] = result + 1 // save result in memo\n\n  return memo[n] // return result\n")),Object(o.b)("p",null,"You can see my golang implementation of this solution ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cjdango/coding-challenges/blob/main/minsteps/countmemo.go"},"here"),"."))}c.isMDXComponent=!0}}]);