import Clock from "../../UI/Clock/Clock"
import ContactsTooltip from "../../UI/ContactsTooltip/ContactsTooltip"
import PageBackgroundManager from "../../utils/PageBackgroundManager"
import SocialTooltip from "../../UI/SocialTooltip/SocialTooltip"
import Particle from "../../UI/Particle/Particle"
import "./Contacts.scss"

const Contacts = () => {
  return (
    <section className='contactsWrapper'>
      <Particle />
      <PageBackgroundManager page='contacts' />
      <div className='contactsLeft'>
        <h2 className='contactsTitle'>Get in Touch</h2>
        <div className='clockWrapper'>
          <p className='clockText'>
            Time is ticking, but I still don't see your message.
          </p>
          <Clock />
        </div>
      </div>
      <div className='contactsRight'>
        <p className='contactsRightText'>
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out!
        </p>
        <div className="contactsTooltipsContainer">
          <div className='contactsTooltipWrapper'>
            <p className="contactsTooltipText">You can find me here!</p>
            <ContactsTooltip />
          </div>
          <div className='socialTooltipWrapper'>
            <p className="socialTooltipText">I'd also be happy to see you on social media.</p>
            <SocialTooltip />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacts
