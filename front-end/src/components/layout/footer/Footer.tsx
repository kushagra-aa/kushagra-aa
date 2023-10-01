import Image from "next/image";
import "./footer.css";
import Link from "next/link";
import Button from "@/components/UI/buttons/Buttons";

const Socials = {
  telegram: "https://t.me/kushagraa_a",
  instagram: "https://www.instagram.com/kushagra.pyjs/",
  behance: "https://www.behance.net/kushagra-aa",
  github: "https://github.com/kushagra-aa",
  linkedin: "https://www.linkedin.com/in/kushagra-aa/",
  whatsapp: "wa.me/918299446479",
  x: "https://twitter.com/a_kushagraa",
};

function Footer() {
  return (
    <footer>
      <div className="left">
        <Button
          size="medium"
          type="link"
          backgroundColor="dark-2"
          foregroundColor="accent-1"
          strokeColor="accent-1"
          stoke="stroke-1"
        >
          <Link href="/">hire me !</Link>
        </Button>
      </div>
      <div className="mid">
        <p>
          L<span>et&apos;s connect!</span>
        </p>
        <div className="socials">
          <a href={Socials.telegram} target="_blank" title="Telegram">
            <Image src="/Icon=telegram.png" alt="telegram" fill />
          </a>
          <a href={Socials.instagram} target="_blank" title="Instagram">
            <Image src="/Icon=instagram.png" alt="telegram" fill />
          </a>
          <a href={Socials.behance} target="_blank" title="Behance">
            <Image src="/Icon=behance.png" alt="telegram" fill />
          </a>
          <a href={Socials.github} target="_blank" title="GitHub">
            <Image src="/Icon=github.png" alt="telegram" fill />
          </a>
          <a href={Socials.linkedin} target="_blank" title="LinkedIn">
            <Image src="/Icon=linkedin.png" alt="telegram" fill />
          </a>
          <a href={Socials.whatsapp} target="_blank" title="WhatsApp">
            <Image src="/Icon=whatsapp.png" alt="telegram" fill />
          </a>
          <a href={Socials.x} target="_blank" title="X">
            <Image src="/Icon=x.png" alt="telegram" fill />
          </a>
        </div>
      </div>
      <div className="right">
        <Button
          size="medium"
          type="link"
          backgroundColor="dark-2"
          foregroundColor="accent-1"
          strokeColor="accent-1"
          stoke="stroke-1"
        >
          <Link href="/">my resume</Link>
        </Button>
      </div>
      <div className="bottom">
        <p>&copy; kushagra-aa. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
