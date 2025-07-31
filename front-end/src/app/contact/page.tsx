"use client";

import { FormEvent, useRef, useState } from "react";
import InputGroup from "@/components/UI/input/InputGroup";
import Input from "@/components/UI/input/Input";
import TextArea from "@/components/UI/input/TextArea";
import Button from "@/components/UI/button/Button";
import { SendIcon } from "@/components/Icons";
import { AddContactRequestType } from "@/types/addContactRequestType";
import Socials from "@/components/Socials";
import styles from "./page.module.css";

const makeContactRequest = async (body: AddContactRequestType) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(body),
  });
  return response;
};

export default function Contact() {
  const [isFormLoading, setIsFormLoading] = useState(false);
  const contactFormRef = useRef<HTMLFormElement>(null!);

  const handleContactFromSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormLoading) return;
    setIsFormLoading(true);
    const contactRequestBody: AddContactRequestType = {
      name: contactFormRef.current.full_name.value,
      email: contactFormRef.current.email.value,
      subject: contactFormRef.current.subject.value,
      message: contactFormRef.current.message.value,
    };
    // TODO: Add Toasts for the events
    const resp = await makeContactRequest(contactRequestBody).then((r) => {
      setIsFormLoading(false);
      return r;
    });
    // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
    const data = await resp.json();
    // if (resp.status === 200) makeToast('success', data.message)
    // else makeToast("error :>> ", data.error);
  };

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
          className={isFormLoading ? styles.contact_form_loading : ""}
          ref={contactFormRef}
          onSubmit={handleContactFromSubmit}
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
      </section>
      <div className={styles.socials_container}>
        <h3>Other means to Connect</h3>
        <Socials />
      </div>
    </div>
  );
}
