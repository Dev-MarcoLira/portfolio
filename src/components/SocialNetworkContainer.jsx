import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/marco-antonio-lira-barros-975a21218/' },
  { name: "github", icon: <FaGithub /> , link: 'https://github.com/Dev-MarcoLira'},
  { name: "instagram", icon: <FaInstagram />, link: 'https://www.instagram.com/marco_pcg/' },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      
        <a target="blank" href={socialNetworks[0].link} className="social-btn" id={socialNetworks[0].name} key={socialNetworks[0].name}>
          {socialNetworks[0].icon}
        </a>
      
        <a target="blank" href={socialNetworks[1].link} className="social-btn" id={socialNetworks[1].name} key={socialNetworks[1].name}>
          {socialNetworks[1].icon}
        </a>
        
        <a target="blank" href={socialNetworks[2].link} className="social-btn" id={socialNetworks[2].name} key={socialNetworks[2].name}>
          {socialNetworks[2].icon}
        </a>

    </section>
  );
};

export default SocialNetworkContainer;