function like(){
  return {type: "LIKE"}
}

function dislike(){
  return {type: "DISLIKE"}
}

function toggleDark(){
  return {type: "DARK_MODE"}
}

function handleChange(text){
  return {type: "HANDLE_CHANGE", payload: text}
}

function hold(url){
  return {type: "HOLD_POKIMON", payload: url}
}


export {
  like,
  dislike,
  toggleDark,
  handleChange,
  hold
}
