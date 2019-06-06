import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'

import './Footer.scss'

const Footer = () => (
  <footer>
    <p>F<FontAwesomeIcon icon={faBolt} />ash is brought to you by K Strickland<a href="https://github.com/kstrickland0612"><FontAwesomeIcon icon={faGithub} /></a></p>
  </footer>
)

export default Footer
