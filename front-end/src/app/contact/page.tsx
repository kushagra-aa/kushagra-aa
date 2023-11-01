"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import InputGroup from "@/components/UI/input/InputGroup";
import styles from "./page.module.css";
import Input from "@/components/UI/input/Input";
import TextArea from "@/components/UI/input/TextArea";
import Button from "@/components/UI/button/Button";
import { SendIcon } from "@/components/Icons";
import { Socials } from "@/models/Social";
import { AddContactRequestType } from "@/types/addContactRequestType";

const getSocialsAPI = async () => {
  const response = await fetch(`/api/socials`).then((resp) => resp);
  let socials: Socials | undefined = undefined;
  if (response.status === 200)
    socials = await response.json().then((d) => d.data);
  return socials;
};
const makeContactRequest = async (body: AddContactRequestType) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return response;
};

export default function Contact() {
  const [socials, setSocials] = useState<Socials>();
  const contactFormRef = useRef<HTMLFormElement>(null!);

  const handleContactFromSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contactRequestBody: AddContactRequestType = {
      name: contactFormRef.current.full_name.value,
      email: contactFormRef.current.email.value,
      subject: contactFormRef.current.subject.value,
      message: contactFormRef.current.message.value,
    };
    // TODO: Add Toasts for the events
    const resp = await makeContactRequest(contactRequestBody);
    // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
    const data = await resp.json();
    // if (resp.status === 200) makeToast('success', data.message)
    // else makeToast("error :>> ", data.error);
  };

  const getSocials = async () => {
    await getSocialsAPI().then((resp) => {
      setSocials(resp);
    });
  };

  useEffect(() => {
    getSocials();
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <p className={styles.sub}>
          Want to <span>Connect?</span>
        </p>
        <h1>Contact Me</h1>
      </div>
      <section>
        <form ref={contactFormRef} onSubmit={handleContactFromSubmit}>
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
        {socials ? (
          <>
            <h4>My Socials</h4>
            <h4>Direct Message Me</h4>
            <div className={styles.socials}>
              <a
                href={socials.instagram.link}
                target="_blank"
                title="Instagram"
              >
                <Image
                  src={socials.instagram.icon}
                  alt="instagram"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.behance.link} target="_blank" title="Behance">
                <Image
                  src={socials.behance.icon}
                  alt="behance"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.github.link} target="_blank" title="GitHub">
                <Image
                  src={socials.github.icon}
                  alt="github"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.linkedin.link} target="_blank" title="LinkedIn">
                <Image
                  src={socials.linkedin.icon}
                  alt="linkedin"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.x.link} target="_blank" title="X">
                <Image src={socials.x.icon} alt="x" fill sizes="100%" />
              </a>
            </div>
            <div className={styles.message}>
              <a href={socials.telegram.link} target="_blank" title="Telegram">
                <Image
                  src={socials.telegram.icon}
                  alt="telegram"
                  fill
                  sizes="100%"
                />
              </a>
              <a href={socials.mail.link} target="_blank" title="EMail">
                <Image src={socials.mail.icon} alt="mail" fill sizes="100%" />
              </a>
              <a href={socials.call.link} target="_blank" title="Mobile No.">
                <Image src={socials.call.icon} alt=".call" fill sizes="100%" />
              </a>
              <a href={socials.whatsapp.link} target="_blank" title="WhatsApp">
                <Image
                  src={socials.whatsapp.icon}
                  alt="whatsapp"
                  fill
                  sizes="100%"
                />
              </a>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
