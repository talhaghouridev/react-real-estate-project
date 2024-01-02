import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const NAV_LINKS = [
  {
    name: "Residencies",
    path: "#residencies",
  },
  {
    name: "Our Value",
    path: "##value",
  },
  {
    name: "Contact Us",
    path: "#contact-us",
  },
  {
    name: "Get Started",
    path: "#get-started",
  },
];

const COMPANIES_IMAGE = [
  "./prologis.png",
  "./tower.png",
  "./equinix.png",
  "./realty.png",
];

const CONTACT_US = [
  {
    icon: MdCall,
    name: "Call",
    date: "021 123 145 14",
    btn: "Call now",
  },
  {
    icon: BsFillChatDotsFill,
    name: "Chat",
    date: "021 123 145 14",
    btn: "Chat now",
  },
  {
    icon: BsFillChatDotsFill,
    name: "Video Call",
    date: "021 123 145 14",
    btn: "Video Call now",
  },
  {
    icon: HiChatBubbleBottomCenter,
    name: "Message",
    date: "021 123 145 14",
    btn: "Message now",
  },
];

const FOOTER_LINKS = ["Property", "Services", "Product", "About Us"];

export { NAV_LINKS, COMPANIES_IMAGE, CONTACT_US ,FOOTER_LINKS};
