import Image from "next/image";
import "./footer.css";
import Link from "next/link";
import Button from "@/components/UI/button/Button";
import { Socials } from "@/models/Social";

const getSocials = async () => {
  const response = await fetch(`${process.env.URL}/api/socials`).then(
    (resp) => resp,
  );
  let hobbies: Socials | undefined = undefined;
  if (response.status === 200)
    hobbies = await response.json().then((d) => d.data);
  return hobbies;
};

async function Footer() {
  const socials = await getSocials();

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
        {socials ? (
          <>
            <p>
              L<span>et&apos;s connect!</span>
            </p>
            <div className="socials">
              <a href={socials.telegram.link} target="_blank" title="Telegram">
                <Image
                  src={socials.telegram.icon}
                  alt="telegram"
                  fill
                  sizes="100%"
                />
              </a>
              <a
                href={socials.instagram.link}
                target="_blank"
                title="Instagram"
              >
                <Image
                  src={socials.instagram.icon}
                  alt="telegram"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.behance.link} target="_blank" title="Behance">
                <Image
                  src={socials.behance.icon}
                  alt="telegram"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.github.link} target="_blank" title="GitHub">
                <Image
                  src={socials.github.icon}
                  alt="telegram"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.linkedin.link} target="_blank" title="LinkedIn">
                <Image
                  src={socials.linkedin.icon}
                  alt="telegram"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.whatsapp.link} target="_blank" title="WhatsApp">
                <Image
                  src={socials.whatsapp.icon}
                  alt="telegram"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.x.link} target="_blank" title="X">
                <Image src={socials.x.icon} alt="telegram" fill sizes="100%" />
              </a>
            </div>
          </>
        ) : null}
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
          <Link href="/resume.pdf" target="_blank">
            my resume
          </Link>
        </Button>
      </div>
      <div className="bottom">
        <p>&copy; kushagra-aa. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
