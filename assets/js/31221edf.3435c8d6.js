(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var i=n(3),a=n(7),l=(n(0),n(90)),o={slug:"coding-challenge-1-counting-minimum-steps",title:"[WIP]: Counting minimum steps",author:"CJ Dango",author_title:"Software Engineer",author_url:"https://github.com/cjdango",author_image_url:"https://avatars.githubusercontent.com/u/31501132?v=4",tags:["coding","algorithms","data structures"]},r={permalink:"/coding-challenge-1-counting-minimum-steps",source:"@site/blog/2021-04-04-counting-min-steps.md",description:"In this very first blog post of mine, we will be solving a very interesting coding challenge I found",date:"2021-04-04T00:00:00.000Z",formattedDate:"April 4, 2021",tags:[{label:"coding",permalink:"/tags/coding"},{label:"algorithms",permalink:"/tags/algorithms"},{label:"data structures",permalink:"/tags/data-structures"}],title:"[WIP]: Counting minimum steps",readingTime:2.75,truncated:!0},s=[{value:"The challenge",id:"the-challenge",children:[]},{value:"Available steps",id:"available-steps",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Solution #1 (brute force)",id:"solution-1-brute-force",children:[]}],b={toc:s};function c(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In this very first blog post of mine, we will be solving a very interesting coding challenge I found\non the internet using 3 approaches. The solutions on this blog post are not mine, this is only my attempt to explain what I have learned in my own words."),Object(l.b)("h3",{id:"the-challenge"},"The challenge"),Object(l.b)("p",null,"Given an integer n, return the minimum number of steps to minimize ",Object(l.b)("inlineCode",{parentName:"p"},"n")," to 1"),Object(l.b)("h3",{id:"available-steps"},"Available steps"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Decrement n by 1 ",Object(l.b)("inlineCode",{parentName:"li"},"n-1")),Object(l.b)("li",{parentName:"ol"},"If n is divisible by 2, then divide n by 2 ",Object(l.b)("inlineCode",{parentName:"li"},"n/2")),Object(l.b)("li",{parentName:"ol"},"If n is divisible by 3, then divide n by 3 ",Object(l.b)("inlineCode",{parentName:"li"},"n/3"))),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"10 \u21d2 3 steps (10 \u21d2 9 \u21d2 3 \u21d2 1)"),Object(l.b)("li",{parentName:"ul"},"15 \u21d2 4 steps (15 \u21d2 5 \u21d2 4 \u21d2 2 \u21d2 1)"),Object(l.b)("li",{parentName:"ul"},"6 \u21d2 2 steps (6 \u21d2 2 \u21d2 1) or (6 \u21d2 3 \u21d2 1)")),Object(l.b)("h3",{id:"solution-1-brute-force"},"Solution #1 (brute force)"),Object(l.b)("p",null,"Let's take the example above, ",Object(l.b)("inlineCode",{parentName:"p"},"n=6")," . "),Object(l.b)("p",null,"There are numbers of paths we can take to minimize ",Object(l.b)("inlineCode",{parentName:"p"},"n")," to 1 and we can't possibly know how many steps does the fastest path takes without going through all of them, so we'll do a brute force approach."),Object(l.b)("p",null,"We can create a ",Object(l.b)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/recursive-functions/"},"recursive function")," to facilitate the steps we can take."),Object(l.b)("p",null,"We can think about this as a tree that can have three branches each node. Each branch represent each steps, ",Object(l.b)("inlineCode",{parentName:"p"},"n-1")," , ",Object(l.b)("inlineCode",{parentName:"p"},"n/2")," (if n is divisible by 2), and ",Object(l.b)("inlineCode",{parentName:"p"},"n/3")," (if n is divisible by 3). To further understand this solution, let's visualize it."),Object(l.b)("p",null,Object(l.b)("img",{parentName:"p",src:"https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b15fac56-f509-4560-8c2e-24d580cd8006/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210329T043716Z&X-Amz-Expires=86400&X-Amz-Signature=080f91623971809c3b28c9444b5015a90e81e9e2fd2311453b719c48260f55a8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22",alt:"recursive tree"})),Object(l.b)("p",null,"As you can see from the image above, there are 3  fastest combinations of steps we can take to get 6 minimized to 1. All of the 3 combinations requires two steps, so ",Object(l.b)("inlineCode",{parentName:"p"},"2")," is the answer we are looking for, ",Object(l.b)("inlineCode",{parentName:"p"},"2")," is the count of minimum steps to minimize 6 to 1."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Fastest Combinations:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"(6/3) / 2 = 1")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Step 1 = 6/3"),Object(l.b)("li",{parentName:"ul"},"Step 2 = /2"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"(6/3) - 1 = 1")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Step 1 = 6/3"),Object(l.b)("li",{parentName:"ul"},"Step 2 = -1"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"(6/2) / 3 = 1")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Step 1 = 6/3"),Object(l.b)("li",{parentName:"ul"},"Step 2 = /3")))),Object(l.b)("p",null,"But how do we actually count the steps? Remember that we are doing a recursive function approach, so the return values of each function call are the actual step counts from the bottom to top (",Object(l.b)("inlineCode",{parentName:"p"},"n=1")," to ",Object(l.b)("inlineCode",{parentName:"p"},"n=6"),")."),Object(l.b)("p",null,"Our recursive function looks like this ",Object(l.b)("inlineCode",{parentName:"p"},"fn(n)")," , if ",Object(l.b)("inlineCode",{parentName:"p"},"n")," is ",Object(l.b)("inlineCode",{parentName:"p"},"1")," our function returns ",Object(l.b)("inlineCode",{parentName:"p"},"0"),", since there are zero steps required to minimize ",Object(l.b)("inlineCode",{parentName:"p"},"1")," to ",Object(l.b)("inlineCode",{parentName:"p"},"1"),". Else it will further process the call, calling itself applying ",Object(l.b)("inlineCode",{parentName:"p"},"step 1"),", and optionally for ",Object(l.b)("inlineCode",{parentName:"p"},"step 2 and 3"),". For ",Object(l.b)("inlineCode",{parentName:"p"},"step 2 and 3")," we will compare which step is the minimum between the result of previous step and the result of applying the current step to the function ",Object(l.b)("inlineCode",{parentName:"p"},"fn"),", then add ",Object(l.b)("inlineCode",{parentName:"p"},"1")," to the processes` result, naturally counting the steps from bottom to top call stack:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-jsx"},"fn(n):\n  if n === 1\n    return 0\n  \n  // Step 1\n  result = fn(n - 1)\n  \n  // Step 2\n  if n is divisible by 2:\n    result = min(result, fn(n/2))\n\n  // Step 3\n  if n is divisible by 3:\n    result = min(result, fn(n/3))\n\n  return result + 1\n")),Object(l.b)("p",null,"You can see my golang implementation of this solution ",Object(l.b)("a",{parentName:"p",href:"https://github.com/cjdango/coding-challenges/blob/main/minsteps/count.go"},"here"),"."))}c.isMDXComponent=!0}}]);