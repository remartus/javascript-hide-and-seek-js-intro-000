//getFirstSelector(selector) returns the first element that matches the selector
function getFirstSelector(selector){
  return document.querySelector(selector)
}

//nestedTarget pulls a .target out of #nested
function nestedTarget(){
  return document.querySelector('#nested .target')
}

//deepestChild() returns the most deeply nested child in #grand-node
function deepestChild(){
  const lis = document.getElementById('#grand-node').querySelectorAll('div#grand-node')

  for (let i = 0; i < lis.length(); i++){

  }

  return 'boo!'
}

//increaseRankBy(n) increases ranks in.ranked-list by n
function increaseRankBy(n){

}
