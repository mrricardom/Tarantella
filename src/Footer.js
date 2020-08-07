import React from "react"
import Linkedin from "./Linkedin.png"
import Github from "./Github.png"

function Footer() {
  return (
    <footer>
      <p>
        Ricardo Martini &copy; 2020, Tarantella was inspired by Apple. Icons
        were taken from the 'ionicons' by benjsperry on icon-icons.com. General
        song image thanks to Juli Clover on macrumors.com. Special thanks to Ali
        Spittel and Soleil Solomon for coding advice.
      </p>
      <div>
        <a href="https://www.linkedin.com/in/ricardo-martini-096346117/">
          <img src={Linkedin} />
        </a>

        <a href="https://github.com/mrricardom">
          <img src={Github} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
