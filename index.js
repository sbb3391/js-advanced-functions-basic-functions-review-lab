// Your code here
function saturdayFun(activity = "roller-skate") {
  console.log(`This Saturday, I want to ${activity}`); 
}

saturdayFun();

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}`
} 

mondayWork();

function wrapAdjective(flair ="*") {
  return function(quality = "special") {
    return `You are ${flair}${quality}${flair}!`
  }
}

wrapAdjective("$$")("a great guy");