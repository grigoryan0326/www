import { BiLogoGmail } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import "./ContactsTooltip.scss"

const ContactsTooltip = () => {
  return (
    <ul className='example-2'>
      <li className='icon-content'>
        <a
          href='mailto:grigoryan0326@gmail.com'
          target='_blank'
          rel='noreferrer'
          aria-label='Gmail'
          data-social='gmail'
        >
          <div className='filled'></div>
          <BiLogoGmail />
        </a>
        <div className='tooltip'>Mail</div>
      </li>
      <li className='icon-content'>
        <a
          href='https://github.com/grigoryan0326'
          target='_blank'
          rel='noreferrer'
          aria-label='Github'
          data-social='github'
        >
          <div className='filled'></div>
          <FaGithub />
        </a>
        <div className='tooltip'>Github</div>
      </li>
      <li className='icon-content'>
        <a
          href='https://t.me/grigoryan0326'
          target='_blank'
          rel='noreferrer'
          aria-label='Telegram'
          data-social='telegram'
        >
          <div className='filled'></div>
          <FaTelegramPlane />
        </a>
        <div className='tooltip'>Telegram</div>
      </li>
      <li
        className='icon-content'
      >
        <a
          href='tel:+37499989399'
          target='_blank'
          rel='noreferrer'
          aria-label='Phone'
          data-social='phone'
        >
          <div className='filled'></div>
          <IoCall />
        </a>
        <div className='tooltip'>Call</div>
      </li>
    </ul>
  )
}
export default ContactsTooltip
