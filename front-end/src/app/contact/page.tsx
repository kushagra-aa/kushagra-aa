"use client";

import Image from "next/image";
import InputGroup from "@/components/UI/input/InputGroup";
import styles from "./page.module.css";
import Input from "@/components/UI/input/Input";
import TextArea from "@/components/UI/input/TextArea";
import Button from "@/components/UI/button/Button";
import { SendIcon } from "@/components/Icons";
import Socials from "@/dummyData/socials.json";

export default function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <p className={styles.sub}>
          Want to <span>Connect?</span>
        </p>
        <h1>Contact Me</h1>
      </div>
      <section>
        <form>
          <p>
            Fill up the <span>Details</span> and send a <span>Message</span>
          </p>
          <InputGroup
            className={styles.contact_form_input_group}
            title="Full Name"
            inputName="full_name"
          >
            <Input
              id="full_name"
              inputName="full_name"
              type="text"
              placeholder="Enter Your Name"
            />
          </InputGroup>
          <InputGroup
            className={styles.contact_form_input_group}
            title="Email"
            inputName="email"
          >
            <Input
              id="email"
              inputName="email"
              type="text"
              placeholder="Enter Your Email"
            />
          </InputGroup>
          <InputGroup
            className={styles.contact_form_input_group}
            title="Subject"
            inputName="subject"
          >
            <Input
              id="subject"
              inputName="subject"
              type="text"
              placeholder="Enter Message Subject"
            />
          </InputGroup>
          <InputGroup
            className={styles.contact_form_input_group}
            title="Message"
            inputName="message"
          >
            <TextArea
              id="message"
              inputName="message"
              placeholder="Enter Message"
            />
          </InputGroup>
          <Button
            className={styles.contact_form_submit}
            type="button"
            size="medium"
          >
            <button type="submit">
              Send
              <SendIcon />
            </button>
          </Button>
        </form>
      </section>
      <div className={styles.socials_container}>
        <h3>Other means to Connect</h3>
        <h4>My Socials</h4>
        <h4>Direct Message Me</h4>
        <div className={styles.socials}>
          <a href={Socials.instagram.link} target="_blank" title="Instagram">
            <Image
              src={Socials.instagram.icon}
              alt="instagram"
              fill
              sizes="100%"
            />
          </a>
          <a href={Socials.behance.link} target="_blank" title="Behance">
            <Image src={Socials.behance.icon} alt="behance" fill sizes="100%" />
          </a>
          <a href={Socials.github.link} target="_blank" title="GitHub">
            <Image src={Socials.github.icon} alt="github" fill sizes="100%" />
          </a>
          <a href={Socials.linkedin.link} target="_blank" title="LinkedIn">
            <Image
              src={Socials.linkedin.icon}
              alt="linkedin"
              fill
              sizes="100%"
            />
          </a>
          <a href={Socials.x.link} target="_blank" title="X">
            <Image src={Socials.x.icon} alt="x" fill sizes="100%" />
          </a>
        </div>
        <div className={styles.message}>
          <a href={Socials.telegram.link} target="_blank" title="Telegram">
            <Image
              src={Socials.telegram.icon}
              alt="telegram"
              fill
              sizes="100%"
            />
          </a>
          <a href={Socials.mail.link} target="_blank" title="EMail">
            <Image src={Socials.mail.icon} alt="mail" fill sizes="100%" />
          </a>
          <a href={Socials.call.link} target="_blank" title="Mobile No.">
            <Image src={Socials.call.icon} alt=".call" fill sizes="100%" />
          </a>
          <a href={Socials.whatsapp.link} target="_blank" title="WhatsApp">
            <Image
              src={Socials.whatsapp.icon}
              alt="whatsapp"
              fill
              sizes="100%"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
