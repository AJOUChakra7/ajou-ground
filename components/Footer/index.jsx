import { Icon } from '@iconify/react';
import Link from 'node_modules/next/link';

export default function Footer() {
  return (
    <footer className="h-[3.875rem] bg-white fixed z-9999 flex justify-around gap-2 items-center text-center bottom-0 py-4 w-full shadow-[0_-2px_10px_rgba(0,0,0,0.10)] full:w-[25rem]">
      <Link href="/location">
        <div className="transition-0.35s active:bg-gray-100 px-4 py-2 rounded-md active:opacity-80 active:animate-pull hover:cursor-pointer items-center flex flex-col gap-1">
          <Icon icon="material-symbols:location-on" height="18" width="18" />
          <span>장소</span>
        </div>
      </Link>
      <Link className="transition-0.35s shadow-xl active:bg-primary-lightdark hover:cursor-pointer active:animate-pull bg-primary-main rounded-full p-4 px-7 fixed bottom-0 flex flex-col gap-2" href="/">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_260)">
            <path d="M9.17278 0L0.989564 11.7269C0.405797 12.5326 0.0642445 13.4819 0.00351149 14.4674C-0.0572215 15.4528 0.165285 16.4353 0.64588 17.3037L4.91229 23.7318C5.14707 24.1083 5.4744 24.4215 5.86453 24.643C6.25466 24.8645 6.69524 24.9872 7.14624 25H10.346C10.0176 24.8643 9.73301 24.6441 9.52239 24.363L4.78193 17.211C4.33041 16.4666 4.08343 15.6208 4.06494 14.7556C4.13207 14.0104 4.37112 13.2897 4.76415 12.6477L9.22611 6.10958L14.488 14.136C14.656 14.3658 14.7463 14.6411 14.7463 14.9236C14.7463 15.206 14.656 15.4813 14.488 15.7111C14.488 15.7111 14.0969 16.1049 13.1311 15.798L14.9739 18.5777C15.0793 18.7101 15.2128 18.8185 15.3652 18.8955C15.5177 18.9725 15.6854 19.0162 15.8568 19.0236C16.0059 19.0073 16.1498 18.9607 16.2793 18.8869C16.4089 18.8131 16.5213 18.7137 16.6094 18.5951L17.9782 16.435C17.9782 16.435 18.9796 15.1436 17.9249 13.1399L9.17278 0Z" fill="white"/>
            <path d="M19.9514 23.9286L24.0045 17.9581C24.5883 17.1523 24.9298 16.2031 24.9906 15.2176C25.0513 14.2321 24.8288 13.2497 24.3482 12.3813L17.0005 1.30877C16.7657 0.932233 16.4384 0.618987 16.0482 0.397502C15.6581 0.176018 15.2175 0.0533134 14.7665 0.0405273H11.5667C11.8941 0.177956 12.1783 0.397769 12.3904 0.677547L20.0936 12.1091C20.0936 12.1091 21.1188 13.6321 20.9706 14.9293C20.9043 15.6747 20.6652 16.3956 20.2714 17.0373L17.6167 21.091C17.5146 21.2446 17.3806 21.3755 17.2234 21.4752C17.0662 21.575 16.8893 21.6414 16.7042 21.6701H15.0747C14.6948 21.5733 14.3679 21.3367 14.1621 21.0099L10.5061 15.5895C10.3424 15.3564 10.2578 15.079 10.2642 14.7963C10.2705 14.5137 10.3676 14.2402 10.5416 14.0144C10.5416 14.0144 10.9268 13.6206 11.8926 13.9275L10.0498 11.1478C9.94506 11.0161 9.81249 10.9081 9.66113 10.8312C9.50978 10.7542 9.34321 10.7101 9.1728 10.7019C9.02377 10.7182 8.87987 10.7648 8.75029 10.8386C8.62071 10.9124 8.5083 11.0118 8.42025 11.1304L7.05144 13.2963C7.05144 13.2963 6.05002 14.5819 7.09885 16.5856L12.0289 23.9808C12.214 24.2587 12.4589 24.4939 12.7464 24.6699C13.034 24.8459 13.3574 24.9586 13.694 25H18.1263C18.4974 24.9824 18.8582 24.8753 19.1766 24.6884C19.4951 24.5015 19.7612 24.2405 19.9514 23.9286Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_1_260">
            <rect width="25" height="25" fill="white"/>
            </clipPath>
            </defs>
          </svg>
          <p className="text-white">홈</p>
      </Link>
      <Link href="/setting">
        <div className="transition-0.35s active:bg-gray-100 px-4 py-2 rounded-md active:opacity-80 hover:cursor-pointer active:animate-pull items-center flex flex-col gap-1">
          <Icon icon="uiw:setting" height="18" width="18" />
          <span>설정</span>
        </div>
      </Link>
    </footer>
  )
}

