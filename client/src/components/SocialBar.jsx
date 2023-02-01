import React from "react";
import Email from "./Socials/Email";
import Facebook from "./Socials/Facebook";
import Instagram from "./Socials/Instagram";
import Linkedin from "./Socials/Linkedin";
import Personal from "./Socials/Personal";
import Reddit from "./Socials/Reddit";
import TikTok from "./Socials/TikTok";
import Twitter from "./Socials/Twitter";

export const SocialBar = ({ user, profile }) => {
  const { firstName, lastName, email, profileImage } = user;
  const {
    linkedin,
    facebook,
    instagram,
    twitter,
    tiktok,
    reddit,
    personalWebsite,
  } = profile;
console.log(linkedin)
  return (
    <div className="social-buttons">
      {profile?.personalWebsite !== "" && <Personal personalWebsite={personalWebsite} />}
      {user?.email !== "" &&<Email email={email}/>}
      {profile?.linkedin !== "" &&<Linkedin linkedin={linkedin}/>}
      {profile?.facebook !== "" && <Facebook facebook={facebook}/>}
      {profile?.instagram !== "" &&<Instagram instagram={instagram}/>}
      {profile?.twitter !== "" &&<Twitter twitter={twitter} />}
      {profile?.tiktok !== "" &&<TikTok tiktok={tiktok}/>}
      {profile?.reddit !== "" &&<Reddit reddit={reddit}/>}
    </div>
  );
};
