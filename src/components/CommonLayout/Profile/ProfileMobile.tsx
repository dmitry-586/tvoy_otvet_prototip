// import { NavMenuProps } from "@/interfaces/interfaces";
// import { m } from "framer-motion";
// import Image from "next/image";
// import { useState } from "react";
// import ChangePassword from "./ChangePassword";
// import PersonalInformation from "./PersonalInformation";

// const ProfileMobile: React.FC<NavMenuProps> = ({
//   isCollapsed,
//   toggleSidebar,
// }) => {
//   const [activeTab, setActiveTab] = useState("");

//   return (
//     <m.div
//       initial={{ right: "-100vw", display: "none" }}
//       animate={{
//         right: isCollapsed ? 0 : "-100vw",
//         display: isCollapsed ? "block" : "none",
//       }}
//       transition={{
//         duration: 0.2,
//         type: "spring",
//         stiffness: 200,
//         damping: 23,
//       }}
//       className="w-full top-[72px] bg-white absolute overflow-auto border-t z-30"
//     >
//       {activeTab === "Личная информация" ? (
//         <PersonalInformation
//           setActiveTab={setActiveTab}
//           toggleSidebar={toggleSidebar}
//         />
//       ) : activeTab === "Смена пароля" ? (
//         <ChangePassword

//           setActiveTab={setActiveTab}
//           toggleSidebar={toggleSidebar}
//         />
//       ) : (
//         <>
//           <div className="flex justify-between h-[72px] items-center px-5 py-6 border-b sticky top-0 bg-white">
//             <p>Настройки профиля</p>
//             <Image
//               src="/Header/X.svg"
//               alt="close"
//               width={16}
//               height={16}
//               onClick={toggleSidebar}
//               className="cursor-pointer"
//             />
//           </div>
//           <div>
//             <div className="flex flex-col justify-center items-center">
//               <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#D8D8D8] rounded-full mt-5">
//                 <Image
//                   src="/Header/User.svg"
//                   alt="User"
//                   width={50}
//                   height={50}
//                 />
//               </div>
//               <button className="flex gap-2 w-[182px] h-10 border rounded-[20px] justify-center items-center mt-[14px] text-[#404B52] text-sm">
//                 Загрузить фото
//                 <Image
//                   src="/Header/UploadSimple.svg"
//                   alt="upload"
//                   width={20}
//                   height={20}
//                 />
//               </button>
//             </div>
//             <div className="mt-5 flex gap-[10px] pb-10 flex-wrap items-center justify-center">
//               <button
//                 onClick={() => setActiveTab("Личная информация")}
//                 className="w-[320px] shadow-custom rounded-full text-[#000000B2] flex px-3 py-2 gap-3 items-center"
//               >
//                 <Image
//                   src="/Header/profileUserMobile.svg"
//                   alt="profileUserMobile"
//                   width={22}
//                   height={22}
//                 />
//                 <p>Личная информация</p>
//               </button>
//               <button
//                 onClick={() => setActiveTab("Смена пароля")}
//                 className="w-[320px] shadow-custom rounded-full text-[#000000B2] flex px-3 py-2 gap-3 items-center"
//               >
//                 <Image
//                   src="/Header/profilePasswordMobile.svg"
//                   alt="profilePasswordMobile"
//                   width={22}
//                   height={22}
//                 />
//                 <p>Смена пароля</p>
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </m.div>
//   );
// };

// export default ProfileMobile;
