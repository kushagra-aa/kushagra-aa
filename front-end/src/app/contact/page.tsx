"use client";

import Image from "next/image";
import { useRef } from "react";
import { SendIcon } from "@/components/Icons";
import Socials from "@/components/Socials";
import Button from "@/components/UI/button/Button";
import Input from "@/components/UI/input/Input";
import InputGroup from "@/components/UI/input/InputGroup";
import TextArea from "@/components/UI/input/TextArea";
import styles from "./page.module.css";

export default function Contact() {
  const contactFormRef = useRef<HTMLFormElement>(null!);

  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <p className={styles.sub}>
          Want to <span>Connect?</span>
        </p>
        <h1>Contact Me</h1>
      </div>
      <section>
        <form
          className=""
          ref={contactFormRef}
          action="https://formspree.io/f/xgvpejga"
          method="POST"
          // onSubmit={handleContactFromSubmit}
        >
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
              required
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
              required
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
              required
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
              required
            />
          </InputGroup>
          <Button
            className={`${styles.contact_form_submit}`}
            type="button"
            size="medium"
          >
            <button type="submit">
              Send
              <SendIcon />
            </button>
          </Button>
        </form>
        <div className={styles.contact_ill}>
          <div>
            <Image src="/contact.png" alt="contact" fill sizes="100%" />
          </div>
        </div>
      </section>
      <div className={styles.socials_container}>
        <h3>Other means to Connect</h3>
        <Socials />
      </div>
    </div>
  );
}
