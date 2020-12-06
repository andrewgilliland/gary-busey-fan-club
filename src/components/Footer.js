import React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: `black`,
        color: `white`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        padding: `2rem`,
      }}
    >
      <p>© {new Date().getFullYear()} More to come...</p>
    </footer>
  )
}

export default Footer
