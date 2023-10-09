import Image from "next/image";
import "./footer.css";
import Link from "next/link";
import Button from "@/components/UI/button/Button";
import Socials from "@/dummyData/socials.json";

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
          <Link href="/contact">hire me !</Link>
        </Button>
      </div>
      <div className="mid">
        <p>
          L<span>et&apos;s connect!</span>
        </p>
        <div className="socials">
          <a href={Socials.telegram.link} target="_blank" title="Telegram">
            <Image
              src={Socials.telegram.icon}
              alt="telegram"
              fill
              sizes="100%"
            />
          </a>
          <a href={Socials.instagram.link} target="_blank" title="Instagram">
            <Image
              src={Socials.instagram.icon}
              alt="telegram"
              fill
              sizes="100%"
            />
          </a>
          <a href={Socials.behance.link} target="_blank" title="Behance">
            <Image
              src={Socials.behance.icon}
              alt="telegram"
              fill
              sizes="100%"
            />
          </a>
          <a href={Socials.github.link} target="_blank" title="GitHub">
            <Image src={Socials.github.icon} alt="telegram" fill sizes="100%" />
          </a>
          <a href={Socials.linkedin.link} target="_blank" title="LinkedIn">
            <Image
              src={Socials.linkedin.icon}
              alt="telegram"
              fill
              sizes="100%"
            />
          </a>
          <a href={Socials.whatsapp.link} target="_blank" title="WhatsApp">
            <Image
              src={Socials.whatsapp.icon}
              alt="telegram"
              fill
              sizes="100%"
            />
          </a>
          <a href={Socials.x.link} target="_blank" title="X">
            <Image src={Socials.x.icon} alt="telegram" fill sizes="100%" />
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
