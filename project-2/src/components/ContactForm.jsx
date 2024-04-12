import CustomButton from "./CustomButton"
import { MessageSquareText, Phone, Mail } from "lucide-react";

const ContactForm = () => {
  return (
    <section>
      <div className="leftSide">
        <div className="contactForm">
          <CustomButton text="VIA SUPPORT CHAT" icon={<MessageSquareText />} />
          <CustomButton text="VIA CALL" icon={<Phone />} />
        </div>
        <CustomButton text="VIA EMAIL FORM" icon={<Mail fontSize="24px" />} />
        <form>
          <div className="formControler">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="formControler">
            <label htmlFor="email">E-Mail</label>
            <input type="text" id="name" />
          </div>
          <div className="formControler">
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="4"></textarea>
          </div>
          <div className="submitBtn">
            <button type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      <div className="rightSide">
        <img src="./images/contact.svg" alt="frame.png" />
      </div>
    </section>
  );
}

export default ContactForm