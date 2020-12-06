import React from "react"

const Button = ({ children }) => {
  return (
    <button
      style={{
        background: `linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))`,
        borderRadius: `100px`,
        border: `none`,
        color: `white`,
        padding: `6px 16px`,
      }}
    >
      {children}
    </button>
  )
}

export default Button
