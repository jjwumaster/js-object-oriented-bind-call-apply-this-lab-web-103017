justInvoke = function(fn){
  return fn.call()
}

setThisWithCall = function(fn, thisValue, args){
  return fn.call(thisValue, args)
}

setThisWithApply = function(fn, thisValue, args){
  return fn.apply(thisValue, args)
}

returnNewFunctionOf = function(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
}
