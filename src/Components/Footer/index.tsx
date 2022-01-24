import * as C from "./style";
import Logo_instagram from "../../assets/img/logos_instragram.svg"
import Logo_facebook from "../../assets/img/logos_facebook.svg"
import Logo_whatsapp from "../../assets/img/logos_whatsapp.svg"

const MyPhone = process.env.REACT_APP_MY_NUMBER;
const linkWhatsapp = "https://api.whatsapp.com/send?phone=+" + MyPhone;

export const Footer = () => {
  return(
    <C.Container>
      <C.IconContent>
        <a   href={linkWhatsapp} rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_whatsapp} alt="link whatsapp"/></a>
        <a   href={linkWhatsapp} rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_instagram} alt="link intragram"/></a>
        <a   href={linkWhatsapp} rel="noopener noreferrer" className="linkContactFooter"><img src={Logo_facebook} alt="link facebook"/></a>
      </C.IconContent>
      <p id="copyright">Copyright 	&copy; Fruit Vice, 2022</p>
   
    </C.Container>
  )
};
