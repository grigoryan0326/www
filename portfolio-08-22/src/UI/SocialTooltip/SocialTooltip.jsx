import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaThreads } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"

import "./SocialTooltip.scss"

const SocialTooltip = () => {
  return (
    <ul className='example-1'>
      <li className='icon-content'>
        <a
          href='https://www.instagram.com/grigoryan0326/'
          target='_blank'
          rel='noreferrer'
          aria-label='Instagram'
          data-social='instagram'
        >
          <div className='filled'></div>
          <FaInstagram />
        </a>
        <div className='tooltip'>Instagram</div>
      </li>
      <li className='icon-content'>
        <a
          href='https://www.linkedin.com/in/grigoryan0326/'
          target='_blank'
          rel='noreferrer'
          aria-label='Linkedin'
          data-social='linkedin'
        >
          <div className='filled'></div>
          <FaLinkedin />
        </a>
        <div className='tooltip'>Linkedin</div>
      </li>
      <li className='icon-content'>
        <a
          href='https://www.threads.net/@grigoryan0326'
          target='_blank'
          rel='noreferrer'
          aria-label='Threads'
          data-social='threads'
        >
          <div className='filled'></div>
          <FaThreads />
        </a>
        <div className='tooltip'>Threads</div>
      </li>
      <li className='icon-content'>
        <a
          href='https://www.facebook.com/grigoryan.00'
          target='_blank'
          rel='noreferrer'
          aria-label='Facebook'
          data-social='facebook'
        >
          <div className='filled'></div>
          <FaFacebook />
        </a>
        <div className='tooltip'>Facebook</div>
      </li>
    </ul>
  )
}
export default SocialTooltip
