import CryptoHunter from "../files/Images/Projects/Cryptohunter.png";
import Vaishnavi from "../files/Images/Projects/vaishnavi.png";
import Chat from "../files/Images/Projects/ChatApp.png";
import TalkaTive from "../files/Images/Projects/talk a tive.png";

const ProjectData = [
  {
    Name: "Crypto Hunter (Web Application)",
    disc: "Crypto-Hunter is a website that provides information about crypto currency.To get crypto currency data, I used the Coingecko API.ChartJs was used to show the past performance of Crypto.The website's user interface was created using MUI.",
    github: "#",
    live: "https://theb0se-crypto-app.netlify.app",
    img: CryptoHunter,
    tools: ["React Js", "Firebase", "Chart Js", "CoinGeko Api", "MUI"],
  },
  {
    Name: "Vaishnavi Tours & Travles (Website)",
    disc: "It is a very simple lending page that is meant to serve the needs of a cab company and travel agency. In order to create it, I used HTML, CSS, Javascript, Bootstrap, etc.",
    github: "https://github.com/Theb0se/Vaishnavi_travles",
    live: "https://theb0se.github.io/Vaishnavi_travles",
    img: Vaishnavi,
    tools: ["Html", "css", "javascript", "bootstrap", "Jquery", "Email Js"],
  },
  {
    Name: "Chat App (Design)",
    disc: "This is a Ui Design for a client. I creat it on Figma. this is under development right now",
    github: "#",
    live: "#",
    img: Chat,
    tools: ["Figma"],
  },
  {
    Name: "Talk-a-Tive (chat App/Website)",
    disc: "Talk a tive is a React Based Live Chat app Aims to provide better Chatting Experience.I had implement Realtime chatting Feature Using Websocket and very Minimal Ui Using Chakra Ui",
    github: "#",
    live: "https://react-talk-a-tive.herokuapp.com/",
    img: TalkaTive,
    tools: [
      "React Js",
      "Node Js",
      "Express JS",
      "Web Socket",
      "Chakra UI",
      "Mongo DB",
    ],
  },
];

export default ProjectData;
