import crash from "../assets/crashroyal.png";
import round from "../assets/round.jpg";
import imageGame from "../assets/crashbg.png";
import imoon from "../assets/imoon.jpg";
import badge from "../assets/badge.jpg";
import menu1 from "../assets/menu.jpg";
import mute from "../assets/mute.png";
import fair from "../assets/fairness.jpg";
import hash from "../assets/hash.jpg";
import info from "../assets/info.jpg";
import player from "../assets/Player.png";
import labels from "../assets/Labels.jpg";
import gameplay from "../assets/gameplay.png";
import chat from "../assets/chat.jpg";
import underImage from "../assets/classic_image2.jpg";
import autocat from "../assets/autocashout.jpg";
import insurance from "../assets/insurance.jpg";
import chips from "../assets/chips.jpg";
import over from "../assets/over.jpg";
import rangeImage from "../assets/Range_img.jpg";
import gameBoardPic from '../assets/screencresh.png'

export const tabData = [
  {
    name: "Classic",
  },

  {
    name: "Over/Under",
  },
  {
    name: "Range",
  },
];
export const userData = [
  {
    name: "Players",
  },

  {
    name: "Chat",
  },
];
export const betAmountValue = [
  { value: "1" },
  { value: "5" },
  { value: "9" },
  { value: "10" },
  { value: "50" },
  { value: "90" },
  { value: "100" },
  { value: "500" },
];
export const gameModeData = ["Classic", "Over/Under", "Range"];
export const buttonLabels = [
  "How To Play",
  "Game Board",
  "Game Tabs",
  "Player Actions",
  "Game Modes",
  "Optimal Strategy RTP",
];
export const svgIcon = {
  socketIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="33"
      fill="none"
      viewBox="0 0 36 33"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#DC6803"
        d="M6 .175c1.063 0 2 .937 2 2v6H4v-6c0-1.063.875-2 2-2zm12 0c1.063 0 2 .937 2 2v6h-4v-6c0-1.063.875-2 2-2zm-16 10h20c1.063 0 2 .937 2 2 0 .187-.063.312-.063.437C19.313 13.925 16 18.175 16 23.175c0 .75.063 1.437.188 2.125a8.906 8.906 0 01-2.188.687v4.188c0 1.125-.938 2-2 2-1.125 0-2-.875-2-2v-4.188a9.998 9.998 0 01-8-9.812v-2c-1.125 0-2-.875-2-2 0-1.063.875-2 2-2zm25 22c-5 0-9-4-9-9 0-4.938 4-9 9-9 4.938 0 9 4.062 9 9 0 5-4.063 9-9 9zm0-3c.813 0 1.5-.625 1.5-1.5 0-.813-.688-1.5-1.5-1.5-.875 0-1.5.687-1.5 1.5 0 .875.625 1.5 1.5 1.5zm0-12c-.563 0-1 .5-1 1v5c0 .562.438 1 1 1 .5 0 1-.438 1-1v-5c0-.5-.5-1-1-1z"
      ></path>
    </svg>
  ),
  backIcon: (
    <svg
      aria-hidden="true"
      focusable="false"
      dataPrefix="fas"
      width="20"
      height="20"
      data-icon="arrow-left"
      class="svg-inline--fa fa-arrow-left fa-fw fa-xs "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#EDEBF4"
        d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
      ></path>
    </svg>
  ),
  emojiIcon: (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M48 96C74.4375 96 96 74.625 96 48C96 21.5625 74.4375 0 48 0C21.375 0 0 21.5625 0 48C0 74.625 21.375 96 48 96ZM29.8125 72.9375C29.25 74.625 27.5625 75.375 26.0625 75C24.375 74.4375 23.625 72.75 24 71.25C27.1875 61.3125 36.75 54 48 54C59.0625 54 68.625 61.3125 71.8125 71.25C72.1875 72.75 71.4375 74.4375 69.75 75C68.25 75.375 66.5625 74.625 66 72.9375C63.75 65.625 56.625 60 48 60C39.1875 60 32.0625 65.625 29.8125 72.9375ZM39 39C39 42.375 36.375 45 33 45C29.625 45 27 42.375 27 39C27 35.8125 29.625 33 33 33C36.375 33 39 35.8125 39 39ZM63 45C59.625 45 57 42.375 57 39C57 35.8125 59.625 33 63 33C66.375 33 69 35.8125 69 39C69 42.375 66.375 45 63 45Z"
        fill="#B7ACCB"
      ></path>
    </svg>
  ),
  imageGame: imageGame,
  round: round,
  imoon: imoon,
  badge: badge,
  menu1: menu1,
  mute: mute,
  fair: fair,
  hash: hash,
  info: info,
  labels: labels,
  gameplay: gameplay,
  player: player,
  chat: chat,
  chips: chips,
  autocat: autocat,
  rangeImage: rangeImage,
  underImage: underImage,
  insurance: insurance,
  over: over,
  gameBoardPic: gameBoardPic,
  activeIcon: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      opacity="1"
      color="#FB6514"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ visibility: "visible", color: "rgb(251, 101, 20)" }}
    >
      <path
        fill-rule="evenodd"
        d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"
      ></path>
    </svg>
  ),
  blackIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      fill="none"
      viewBox="0 0 10 16"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#D1CDE2"
        d="M9.102 5.029L6.23 7.899l2.872 2.9a.843.843 0 010 1.23.843.843 0 01-1.23 0L5 9.158l-2.898 2.87a.843.843 0 01-1.23 0 .843.843 0 010-1.23L3.741 7.9.872 5.029a.843.843 0 010-1.23.843.843 0 011.23 0L5 6.668 7.871 3.8a.843.843 0 011.23 0 .843.843 0 010 1.23z"
      ></path>
    </svg>
  ),
  insuranceIcon: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      opacity="0.5"
      color="#FB6514"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ visibility: "visible", color: "rgb(251, 101, 20)" }}
    >
      <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"></path>
      <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
    </svg>
  ),
  mlogo: (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ visibility: "visible" }}
    >
      <path
        d="M1.94452 4.45163C1.35718 4.81655 1 5.45897 1 6.15044V10.8496C1 11.541 1.35718 12.1835 1.94452 12.5484L6.44452 15.3442C7.09088 15.7458 7.90912 15.7458 8.55548 15.3442L13.0555 12.5484C13.6428 12.1835 14 11.541 14 10.8496V6.15044C14 5.45897 13.6428 4.81654 13.0555 4.45163L8.55548 1.65577C7.90912 1.25419 7.09088 1.25419 6.44452 1.65577L1.94452 4.45163Z"
        fill="#F2659F"
        stroke="#CB2D6E"
      ></path>
      <path
        d="M4.65934 11V5.36H5.51534L7.51534 9.048L9.50734 5.36H10.3473V11H9.41934V7.2L7.80334 10.144H7.20334L5.58734 7.216V11H4.65934Z"
        fill="white"
      ></path>
    </svg>
  ),
  AdminLogo: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      color="#463E5E"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ visibility: "visible" }}
    >
      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
    </svg>
  ),
  rightIcon: (
    <svg
      aria-hidden="true"
      focusable="false"
      dataPrefix="fas"
      data-icon="chevron-right"
      width="20"
      height="16"
      class="svg-inline--fa fa-chevron-right fa-fw "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      color="#EDEBF4"
      style={{ visibility: "visible" }}
    >
      <path
        fill="currentColor"
        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
      ></path>
    </svg>
  ),
  infoIcon: (
    <svg
      aria-hidden="true"
      focusable="false"
      dataPrefix="fas"
      width="22"
      height="25"
      data-icon="circle-info"
      class="svg-inline--fa fa-circle-info fa-fw fa-xs "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path
        fill="#EDEBF4"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
      ></path>
    </svg>
  ),
  // closeIconwhite: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" fill="none" viewBox="0 0 20 25" style={{ visibility: "visible" }}><path fill="#EDEBF4" d="M2.5 1.75h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.468 2.468 0 01-2.5-2.5V4.25c0-1.367 1.094-2.5 2.5-2.5zm4.336 5.586c-.39.39-.39.976 0 1.328L8.672 10.5l-1.836 1.836c-.39.39-.39.976 0 1.328.351.39.937.39 1.289 0l1.836-1.836 1.836 1.836c.39.39.976.39 1.328 0 .39-.351.39-.937 0-1.328L11.289 10.5l1.836-1.836c.39-.351.39-.937 0-1.328-.352-.352-.938-.352-1.328 0L9.96 9.172 8.125 7.336a.92.92 0 00-1.29 0z"></path></svg>,
  closeIconwhite: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="25"
      fill="none"
      viewBox="0 0 20 25"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#EDEBF4"
        d="M2.5 1.75h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.468 2.468 0 01-2.5-2.5V4.25c0-1.367 1.094-2.5 2.5-2.5zm4.336 5.586c-.39.39-.39.976 0 1.328L8.672 10.5l-1.836 1.836c-.39.39-.39.976 0 1.328.351.39.937.39 1.289 0l1.836-1.836 1.836 1.836c.39.39.976.39 1.328 0 .39-.351.39-.937 0-1.328L11.289 10.5l1.836-1.836c.39-.351.39-.937 0-1.328-.352-.352-.938-.352-1.328 0L9.96 9.172 8.125 7.336a.92.92 0 00-1.29 0z"
      ></path>
    </svg>
  ),

  sendIcon: (
    <svg
      stroke="currentColor"
      fill="#fb6514"
      strokeWidth="0"
      viewBox="0 0 512 512"
      height="18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"></path>
    </svg>
  ),
  closeIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="25"
      fill="none"
      viewBox="0 0 20 25"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#EDEBF4"
        d="M2.5 1.75h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.468 2.468 0 01-2.5-2.5V4.25c0-1.367 1.094-2.5 2.5-2.5zm4.336 5.586c-.39.39-.39.976 0 1.328L8.672 10.5l-1.836 1.836c-.39.39-.39.976 0 1.328.351.39.937.39 1.289 0l1.836-1.836 1.836 1.836c.39.39.976.39 1.328 0 .39-.351.39-.937 0-1.328L11.289 10.5l1.836-1.836c.39-.351.39-.937 0-1.328-.352-.352-.938-.352-1.328 0L9.96 9.172 8.125 7.336a.92.92 0 00-1.29 0z"
      ></path>
    </svg>
  ),
  balanceIcon: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      color="#463E5E"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "rgb(70, 62, 94)", visibility: "visible" }}
    >
      <path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"></path>
    </svg>
  ),
  image: crash,
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#BBB7C9"
        d="M3.375 5.75A1.851 1.851 0 011.5 3.875C1.5 2.844 2.32 2 3.375 2A1.88 1.88 0 015.25 3.875 1.866 1.866 0 013.375 5.75zm8.625 0a1.851 1.851 0 01-1.875-1.875C10.125 2.844 10.945 2 12 2a1.88 1.88 0 011.875 1.875A1.866 1.866 0 0112 5.75zM0 9.008A2.49 2.49 0 012.484 6.5h1.008c.375 0 .727.094 1.055.234-.047.164-.047.352-.047.516 0 .914.375 1.71 1.008 2.25H.492A.48.48 0 010 9.008zm9.492.492H9.47c.633-.54 1.008-1.336 1.008-2.25 0-.164 0-.352-.024-.516.305-.14.656-.234 1.031-.234h1.008A2.51 2.51 0 0115 9.008a.5.5 0 01-.516.492H9.492zm.258-2.25a2.25 2.25 0 11-4.501-.001 2.25 2.25 0 014.501.001zM3 13.39a3.12 3.12 0 013.117-3.14H8.86A3.14 3.14 0 0112 13.39c0 .329-.281.61-.633.61H3.61A.605.605 0 013 13.39z"
      ></path>
    </svg>
  ),
  doller: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#D5D2DF"
        d="M9 4.25H6L4.875 2.586C4.711 2.352 4.898 2 5.18 2h4.617c.281 0 .469.352.305.586L9 4.25zM6 5h3c.07.07.188.14.305.21 1.312.845 4.195 2.673 4.195 6.54A2.25 2.25 0 0111.25 14h-7.5a2.25 2.25 0 01-2.25-2.25c0-3.867 2.86-5.695 4.195-6.54.094-.07.211-.14.305-.21zm1.969 2.25a.47.47 0 00-.469-.469.476.476 0 00-.492.469v.14c-.117.048-.235.07-.352.141-.351.14-.656.446-.75.867-.023.235 0 .47.094.68.094.211.258.352.398.469.282.187.633.281.915.375h.046c.329.117.54.187.68.281.07.047.094.07.094.094 0 .023.023.07 0 .164 0 .07-.047.14-.188.21-.14.048-.375.095-.68.048-.14-.024-.374-.117-.609-.188a.333.333 0 00-.14-.047.444.444 0 00-.586.282.478.478 0 00.28.609c.048 0 .071.023.118.023.188.07.469.165.703.211v.141c0 .281.211.492.469.492a.476.476 0 00.469-.492v-.117c.117-.024.234-.07.351-.117.375-.141.68-.446.75-.891A1.177 1.177 0 009 9.922a1.124 1.124 0 00-.398-.469c-.282-.21-.657-.328-.961-.422-.352-.094-.563-.164-.704-.258-.07-.046-.093-.07-.093-.093 0 0-.024-.024 0-.117 0-.047.047-.118.187-.188.164-.07.399-.094.68-.047.094 0 .422.07.516.094.234.07.492-.094.562-.328a.469.469 0 00-.328-.586c-.117-.024-.352-.07-.492-.094V7.25z"
      ></path>
    </svg>
  ),
  arrowDown: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      fill="none"
      viewBox="0 0 12 16"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#FB8111"
        d="M1.102 9.602l4.476-4.29c.14-.117.281-.187.422-.187.14 0 .258.047.375.14l4.477 4.29c.234.234.234.586.023.797-.21.234-.563.234-.797.023L6 6.485l-4.125 3.937a.56.56 0 01-.797-.024c-.21-.234-.21-.585.024-.796z"
      ></path>
    </svg>
  ),
  homeIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#D1CDE2"
        d="M15.848 7.75c0 .492-.41.875-.875.875h-.875L14.125 13v.656a1.08 1.08 0 01-1.094 1.094H10.844a1.063 1.063 0 01-1.094-1.094V11.25a.9.9 0 00-.875-.875h-1.75a.881.881 0 00-.875.875v2.406a1.08 1.08 0 01-1.094 1.094H2.97a1.063 1.063 0 01-1.094-1.094v-3.062V8.625H1a.864.864 0 01-.875-.875c0-.246.082-.465.273-.656l7-6.125C7.59.777 7.808.75 8 .75c.191 0 .41.055.574.191l6.973 6.153c.219.191.328.41.3.656z"
      ></path>
    </svg>
  ),
  soundOff: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 512 512"
      color="#dcdae0"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "rgb(220, 218, 224)", visibility: "visible" }}
    >
      <path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path>
    </svg>
  ),
  plane: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#D1CDE2"
        d="M4.2 4.25h2.46C8.82.668 12.184.531 14.207.914c.328.055.574.3.629.629.383 2.023.246 5.387-3.336 7.547v2.46c0 .684-.383 1.34-.984 1.696l-2.407 1.422c-.218.137-.464.137-.656 0-.219-.11-.328-.328-.328-.574v-3.117c0-.63-.246-1.23-.684-1.668a2.358 2.358 0 00-1.668-.684H1.656c-.246 0-.465-.11-.574-.328-.137-.192-.137-.438 0-.656l1.422-2.407a1.998 1.998 0 011.695-.984zm8.394 0c0-.602-.492-1.094-1.094-1.094a1.08 1.08 0 00-1.094 1.094c0 .629.465 1.094 1.094 1.094a1.08 1.08 0 001.094-1.094zm-7.055 9.352C4.2 14.969 1 14.75 1 14.75s-.219-3.2 1.148-4.54a2.41 2.41 0 013.391 0c.93.93.93 2.462 0 3.392zm-1.285-.985a.761.761 0 000-1.12.761.761 0 00-1.121 0C2.668 11.933 2.75 13 2.75 13s1.066.082 1.504-.383z"
      ></path>
    </svg>
  ),
  eye: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      fill="none"
      viewBox="0 0 14 16"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#D1CDE2"
        d="M7 14.75c-3.883 0-7-3.117-7-7 0-3.855 3.117-7 7-7 3.855 0 7 3.145 7 7 0 3.883-3.145 7-7 7zM5.906 9.937c-.383 0-.656.301-.656.657 0 .383.273.656.656.656h2.188a.648.648 0 00.656-.656c0-.356-.3-.656-.656-.656h-.219V7.53c0-.355-.3-.656-.656-.656H5.906c-.383 0-.656.3-.656.656 0 .383.273.657.656.657h.657v1.75h-.657zM7 6a.881.881 0 00.875-.875A.9.9 0 007 4.25a.881.881 0 00-.875.875c0 .492.383.875.875.875z"
      ></path>
    </svg>
  ),
  crossIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="16"
      fill="none"
      viewBox="0 0 10 16"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#D1CDE2"
        d="M9.102 5.029L6.23 7.899l2.872 2.9a.843.843 0 010 1.23.843.843 0 01-1.23 0L5 9.158l-2.898 2.87a.843.843 0 01-1.23 0 .843.843 0 010-1.23L3.741 7.9.872 5.029a.843.843 0 010-1.23.843.843 0 011.23 0L5 6.668 7.871 3.8a.843.843 0 011.23 0 .843.843 0 010 1.23z"
      ></path>
    </svg>
  ),
  historyIcon1: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="11"
      fill="none"
      viewBox="0 0 19 11"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#FFFAF5"
        d="M12.25 2.3c-.563 0-1-.438-1-1 0-.531.438-1 1-1h5c.531 0 1 .469 1 1v5c0 .562-.469 1-1 1-.563 0-1-.438-1-1V3.737L10.937 9.02a.964.964 0 01-1.406 0L6.25 5.737 1.937 10.02a.964.964 0 01-1.406 0 .964.964 0 010-1.407l5-5a.964.964 0 011.407 0l3.312 3.282L14.813 2.3H12.25z"
      ></path>
    </svg>
  ),
  historyIcon2: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="21"
      fill="none"
      viewBox="0 0 17 21"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#FFFAF5"
        d="M2.594 4.644A7.982 7.982 0 018.25 2.3c4.406 0 8 3.594 8 8 0 4.437-3.594 8-8 8a8.227 8.227 0 01-4.594-1.406c-.437-.344-.562-.97-.25-1.407.313-.468.938-.562 1.406-.25.97.688 2.157 1.063 3.438 1.063 3.313 0 6-2.688 6-6 0-3.313-2.688-6-6-6A6.001 6.001 0 004 6.08l.969.938c.468.5.125 1.28-.532 1.28H1a.722.722 0 01-.75-.75V4.113c0-.656.781-1 1.281-.531l1.063 1.063zM8.25 6.3h-.031a.74.74 0 01.75.75v2.969L11 12.049a.684.684 0 010 1.032.684.684 0 01-1.031 0l-2.25-2.25c-.157-.125-.219-.312-.219-.531V7.05a.74.74 0 01.75-.75z"
      ></path>
    </svg>
  ),
  timer: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      color="#463E5E"
      height="17"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: "rgb(70, 62, 94)", visibility: "visible" }}
    >
      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path>
    </svg>
  ),
  minusIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#A39EB4"
        d="M16.875 11.75c0 .383-.3.656-.656.656H8.78a.632.632 0 01-.656-.656c0-.355.273-.656.656-.656h7.438c.355 0 .656.3.656.656z"
      ></path>
      <rect
        width="23"
        height="23"
        x="1"
        y="0.5"
        stroke="#A39EB4"
        rx="7.5"
      ></rect>
    </svg>
  ),
  plusIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#A39EB4"
        d="M18.188 11.75c0 .383-.301.656-.657.656h-4.375v4.375c0 .383-.3.684-.656.684-.383 0-.656-.3-.656-.684v-4.375H7.469c-.383 0-.657-.273-.657-.629 0-.382.274-.683.657-.683h4.375V6.719c0-.356.273-.63.656-.63.355 0 .656.274.656.63v4.375h4.375c.356 0 .657.3.657.656z"
      ></path>
      <rect
        width="23"
        height="23"
        x="1"
        y="0.5"
        stroke="#A39EB4"
        rx="7.5"
      ></rect>
    </svg>
  ),
  history: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="15"
      fill="none"
      viewBox="0 0 16 15"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#8B859F"
        d="M9.188 10.719a.964.964 0 01-1.407 0L5.47 8.438l-1.782 1.78a.964.964 0 01-1.406 0 .964.964 0 010-1.405l2.5-2.5a.964.964 0 011.407 0L8.5 8.592l1.781-1.78L9.25 5.78c-.469-.468-.125-1.281.531-1.281h3.469a.76.76 0 01.75.75v3.469c0 .656-.813 1-1.281.5l-1.031-1-2.5 2.5z"
      ></path>
    </svg>
  ),
  menu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="16"
      fill="none"
      viewBox="0 0 14 16"
      style={{ visibility: "visible" }}
    >
      <path
        fill="#D1CDE2"
        d="M.875 3.375c0-.465.383-.875.875-.875h10.5a.9.9 0 01.875.875c0 .492-.41.875-.875.875H1.75a.864.864 0 01-.875-.875zm0 4.375c0-.465.383-.875.875-.875h10.5a.9.9 0 01.875.875c0 .492-.41.875-.875.875H1.75a.864.864 0 01-.875-.875zm12.25 4.375c0 .492-.41.875-.875.875H1.75a.864.864 0 01-.875-.875c0-.465.383-.875.875-.875h10.5a.9.9 0 01.875.875z"
      ></path>
    </svg>
  ),
  borderLine: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3"
      height="26"
      fill="none"
      viewBox="0 0 3 26"
      style={{ visibility: "visible" }}
    >
      <rect
        class="main-seperator"
        width="2"
        height="25"
        x="0.5"
        y="0.5"
        fill="#332C4A"
        rx="1"
      ></rect>
    </svg>
  ),
  roundState: (
    <svg
      width="26"
      height="20"
      viewBox="0 0 26 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ visibility: "visible" }}
    >
      <path
        d="M1.75 2.5C2.41406 2.5 3 3.08594 3 3.75V16.25C3 16.9531 2.41406 17.5 1.75 17.5C1.04688 17.5 0.5 16.9531 0.5 16.25V3.75C0.5 3.08594 1.04688 2.5 1.75 2.5ZM10.1094 5.39062C10.6172 5.85938 10.6172 6.67969 10.1094 7.14844L8.50781 8.75H17.4531L15.8516 7.14844C15.3438 6.67969 15.3438 5.85938 15.8516 5.39062C16.3203 4.88281 17.1406 4.88281 17.6094 5.39062L21.3594 9.14062C21.8672 9.60938 21.8672 10.4297 21.3594 10.8984L17.6094 14.6484C17.1406 15.1562 16.3203 15.1562 15.8516 14.6484C15.3438 14.1797 15.3438 13.3594 15.8516 12.8906L17.4531 11.25H8.50781L10.1094 12.8906C10.6172 13.3594 10.6172 14.1797 10.1094 14.6484C9.64062 15.1562 8.82031 15.1562 8.35156 14.6484L4.60156 10.8984C4.09375 10.4297 4.09375 9.60938 4.60156 9.14062L8.35156 5.39062C8.82031 4.88281 9.64062 4.88281 10.1094 5.39062ZM25.5 3.75V16.25C25.5 16.9531 24.9141 17.5 24.25 17.5C23.5469 17.5 23 16.9531 23 16.25V3.75C23 3.08594 23.5469 2.5 24.25 2.5C24.9141 2.5 25.5 3.08594 25.5 3.75Z"
        fill="#968EB0"
      ></path>
    </svg>
  ),
  hoverInfo: (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="circle-info"
      class="svg-inline--fa fa-circle-info fa-fw fa-xs "
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ visibility: "visible" }}
    >
      <path
        fill="currentColor"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
      ></path>
    </svg>
  ),
  sound: (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 576 512"
      color="#dcdae0"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      style={{ visibility: "visible" }}
    >
      <path d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path>
    </svg>
  ),
};
export const headerMenuData = (isSoundOn) => [
  {
    icon: svgIcon.arrowDown,
  },
  {
    icon: svgIcon.homeIcon,
  },
  {
    icon: isSoundOn ? svgIcon.sound : svgIcon.soundOff, // Toggle sound icons
  },
  {
    icon: svgIcon.plane,
  },
  {
    icon: svgIcon.eye,
  },
];
const names = [
   'John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 
   'Grace', 'Hank', 'Ivy', 'Jack', 'Kate', 'Leo', 'Mia', 'Nina', 
   'Oscar', 'Paul', 'Quinn', 'Rose', 'Sam', 'Tina', 'Uma', 'Vera', 
   'Will', 'Xena', 'Yara', 'Zane','vivek','rajukamal','vishwas','nimish'
 ];
 
 const images = [
   'https://jaunpur123.s3.ap-south-1.amazonaws.com/1726820689672_black-brown-darkGray-1.webp',
   'https://jaunpur123.s3.ap-south-1.amazonaws.com/1726820743139_blue-red-darkGray-1.webp',
   'https://jaunpur123.s3.ap-south-1.amazonaws.com/1726820771155_default-planev3.webp',
   'https://jaunpur123.s3.ap-south-1.amazonaws.com/1726820798609_lightGreen-rose-violet-4.webp',
   'https://jaunpur123.s3.ap-south-1.amazonaws.com/1726820836177_purple-lightGreen-gray-7.webp',
   'https://jaunpur123.s3.ap-south-1.amazonaws.com/1726820870494_red-yellow-lightGray-3.webp',
   'https://jaunpur123.s3.ap-south-1.amazonaws.com/1726820899792_red-yellow-lightGray-3.webp',
   'https://jaunpur123.s3.ap-south-1.amazonaws.com/1726820933607_yellow-white-violet-6.webp',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529977657_av-12.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529977843_av-13.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529978029_av-14.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529978236_av-15.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529978413_av-16.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529978670_av-17.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529978895_av-28.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529979111_av-29.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529979291_av-38.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529979460_av-39.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529979700_av-58.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529979887_av-59.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529980057_av-64.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529980274_av-65.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529980483_av-66.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529980739_av-67.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529980923_av-70.png',
   // 'https://jaunpur123.s3.ap-south-1.amazonaws.com/1716529981135_av-71.png'
 
   // Add more image URLs as needed
 ];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomDummyBets = () => {
    const count = getRandomNumber(500, 3000); 
    const bets = Array.from({ length: count }, () => ({
        plane_status: 'bet',
        avatar: getRandomElement(images),
        name: getRandomElement(names),
        bet_id: `bet:${getRandomNumber(500, 20000)}:${getRandomNumber(500, 20000)}`,
        max_mult: null, 
        maxAutoCashout: null, 
        final_amount: null// Example random bet amount
    }));

    return { bets, count }; 
};