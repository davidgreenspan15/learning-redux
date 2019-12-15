const defaultState ={
  likes: 0,
  text: "",
  darkMode: false,
  thangs: [],
  pokimon: ""
}

function reducer (prevState=defaultState, action){
  switch(action.type){
    case "LIKE":
      return {...prevState, likes: prevState.likes + 1}
    case "DISLIKE":
      return {...prevState, likes: prevState.likes - 1}
    case "DARK_MODE":
      return {...prevState, darkMode: !prevState.darkMode}
    case "HANDLE_CHANGE":
      return {...prevState, text: action.payload}
    case "PRINT":
      return {...prevState, thangs: [...prevState.thangs, prevState.text], text: ""}
    case "DEPRINT":
      return {
        ...prevState,
        thangs: prevState.thangs.filter(thang => {
          return thang !== action.payload
        })}
      case "HOLD_POKIMON";
        return {
          ...prevtstae, pokimon: action.payload
        }
    default:
      return prevState
  }

}

export default reducer
