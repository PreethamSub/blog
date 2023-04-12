"use client";

import Container from "@/components/container";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Contact({ settings }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting }
  } = useForm({
    mode: "onTouched"
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = settings?.w3ckey || "YOUR_ACCESS_KEY_HERE";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Stablo Template",
      subject: "New Contact Message from Stablo Website"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <Container>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
        Contact
      </h1>

      <div className="grid my-10 md:grid-cols-2">
        <div className="my-10">
          <h2 className="text-2xl font-semibold dark:text-white">
            Contact Me
          </h2>
          <p className="max-w-sm my-5">
            Have something to say? I'm listening! Get in touch with me via:
          </p>

          <ul>
            <li>
            <FontAwesomeIcon icon={['fab', 'google']} />
              <a href="mailto:preethamsub@gmail.com">
                Google
              </a>
            </li>
            <li>
            <FontAwesomeIcon icon={['fab', 'instagram']} />
              <a href="https://www.instagram.com/preetham0308/">
                Instagram
              </a>
            </li>
            <li>
            <FontAwesomeIcon icon={['fab', 'discord']} />
              <a href="https://discord.gg/Z5dBARyZet">
                Discord
              </a>
            </li>
            <li>
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
              <a href="https://www.linkedin.com/in/preetham-s-1117aa23b/">
                LinkedIn
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={['fab', 'github']} />
              <a href="https://github.com/PreethamSub">
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
