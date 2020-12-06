import React from "react"

const Container = ({ children }) => {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 700,
        padding: `10% 1.125rem  10% 1.5rem`,
      }}
    >
      {children}
    </div>
  )
}

export default Container
