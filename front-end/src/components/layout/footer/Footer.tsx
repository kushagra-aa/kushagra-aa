import "./footer.css";
import Link from "next/link";
import Button from "@/components/UI/button/Button";
import Socials from "./Socials";

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
      <Socials />
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
