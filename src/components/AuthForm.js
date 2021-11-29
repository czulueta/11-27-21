import React from "react" 

export default function AuthForm(){
  return(
    <form>
      <input
        type="text"
        name=""
        value={}
        onChange={handleChange}
        placeholder="" />
      <input
        type="text"
        name=""
        value={}
        onChange={handleChange}
        placeholder="" />
      <button>{ btnText }</button>
      <p style={{color: "red"}}>{ errMsg }</p>
    </form>
  )
}