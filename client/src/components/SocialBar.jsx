import React from "react";
import Email from "./Socials/Email";
import Facebook from "./Socials/Facebook";
import Instagram from "./Socials/Instagram";
import Linkedin from "./Socials/Linkedin";
import Personal from "./Socials/Personal";
import Reddit from "./Socials/Reddit";
import TikTok from "./Socials/TikTok";
import Twitter from "./Socials/Twitter";

export const SocialBar = () => {
  return (
    <div className="social-buttons">
      <Personal />
      <Email />
      <Linkedin />
      <Facebook />
      <Instagram />
      <Twitter />
      <TikTok />
      <Reddit />
    </div>
  );
};
