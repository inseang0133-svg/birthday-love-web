"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

type Memory = {
  id: number;
  image: string;
  title: string;
  message: string;
};

const planetMemories: Memory[] = [
  {
    id: 1,
    image: "/photos-360/photo1.jpg",
    title: "งาน 10 ชาติพันธุ์",
    message: "มาๆนั่งเก้าอี้นี่เดี๋ยวเค้าถ่ายให้ 💖",
  },
  {
    id: 2,
    image: "/photos-360/photo2.jpg",
    title: "เล่นดอกไม้ไฟสิ้นปี🎉",
    message: "งอนที่ออกมาไม่เจอใครอี้ว่ะตาแดงหมดดูสิโอ๋ๆ ❤️‍🩹",
  },
  {
    id: 3,
    image: "/photos-360/photo3.jpg",
    title: "อร่อยสุดอ่ะเครป🍕",
    message: "ไม่พาไปกินเท่ากับ งอน สถานเดียวดูสีหน้าตอนได้กิน !!",
  },
  {
    id: 4,
    image: "/photos-360/photo4.jpg",
    title: "ปากแดงๆจะไว้ใจได้ก๋า🎈",
    message: "คิดว่าหัวโตแล้วน่ารักมากป้ะะ🐖",
  },
  {
    id: 5,
    image: "/photos-360/photo5.jpg",
    title: "เห็นมะเค้าก็ถ่ายรูปสวยนะ📸",
    message: "ภาพเผลอๆมันออกมาดี✨",
  },
  {
    id: 6,
    image: "/photos-360/photo6.jpg",
    title: "งาน 10 ชาติพันธุ์",
    message: "555ลองมาภ่ายฟิวคนแก่👩‍🦯",
  },
  {
    id: 7,
    image: "/photos-360/photo7.jpg",
    title: "คาเฟ่เชียงรัตน์🌿",
    message: "มีมุมนี้ดีสุดในร้านละร้อนก็ร้อน🕊️🌞",
  },
  {
    id: 8,
    image: "/photos-360/photo8.jpg",
    title: "🍲ร้านหมูทะ",
    message: "ให้เดาว่าจะพูดว่าอะไร🗣️",
  },
  {
    id: 9,
    image: "/photos-360/photo9.jpg",
    title: "ไรเหยอเพ้👻",
    message: "นอนทั้งอย่างนี้ไปเลยติดทนนาน😵‍💫",
  },
  {
    id: 10,
    image: "/photos-360/photo10.jpg",
    title: "🧸คาเฟ่",
    message: "รูปนี้น่ารักก✨",
  },
  {
    id: 11,
    image: "/photos-360/photo11.jpg",
    title: "กล้ามเพ้ใหญ่ป้ะ💪",
    message: "เอาไว้ปกป้อง❌ เอาไว้ 🤛 ✅",
  },
  {
    id: 12,
    image: "/photos-360/photo12.jpg",
    title: "ชอบจังนะหัวโตๆเนี่ย🐷",
    message: "🤒",
  },
  {
    id: 13,
    image: "/photos-360/photo13.jpg",
    title: "เห็นไหม🔥",
    message: "ไหนบอกไม่มีรูปดีไง✨",
  },
  {
    id: 14,
    image: "/photos-360/photo14.jpg",
    title: "🐋คาเฟ่วาฬ",
    message: "ชอบรูปนี้สุดละเป็นรูปแรกที่ขอตั้งหน้าจอ⚡️",
  },
  {
    id: 15,
    image: "/photos-360/photo15.jpg",
    title: "กินข้าวข้างทางครั้งแรก☺️",
    message: "มันก็จะเขินๆหน่อยนะหลังเลิกงาน🍽️",
  },
  {
    id: 16,
    image: "/photos-360/photo16.jpg",
    title: "👾คาเฟ่Horizon",
    message: "มุมเผลอๆ🫦",
  },
  
];

const museumMemories: Memory[] = [
  {
    id: 1,
    image: "/photos-museum/photo1.jpg",
    title: "HOPPY",
    message: "คือท่าอัลไล เป็ดก๊าบๆหรอ💖",
  },
  {
    id: 2,
    image: "/photos-museum/photo2.jpg",
    title: "ทำหน้าไม่ถูก",
    message: "อรุ่มเจาะไปเลย🌷",
  },
  {
    id: 3,
    image: "/photos-museum/photo3.jpg",
    title: "ฮอมคาเฟ่",
    message: "รูปคู่เสียดายไม่เห็นเป็ดในเฟรม🦢",
  },
  {
    id: 4,
    image: "/photos-museum/photo4.jpg",
    title: "HOPPY🌱",
    message: "55555🌬️ ",
  },
  {
    id: 5,
    image: "/photos-museum/photo5.jpg",
    title: "ตอนไปดูหนังคิมิซึโนะ🎞️",
    message: "เรื่องแรกที่ไปดูเลย 🎥",
  },
  {
    id: 6,
    image: "/photos-museum/photo6.jpg",
    title: "วันเกิดเค้า🍰",
    message: "พาเค้าไปปล่อยปลา 🐟",
  },
  {
    id: 7,
    image: "/photos-museum/photo7.jpg",
    title: "ปลาดุก🐟🐟",
    message: "ปลาที่พึ่งปล่อยไป 😂",
  },
  {
    id: 8,
    image: "/photos-museum/photo8.jpg",
    title: "หัวโตมั่ง👻",
    message: "น่ารักเมะ 🥰",
  },
  {
    id: 9,
    image: "/photos-museum/photo9.jpg",
    title: "🌵งาน 10 ชาติพันธุ์",
    message: "ลองเป็นหมนุ่มสาวทรงหนวด 👴👵",
  },
  {
    id: 10,
    image: "/photos-museum/photo10.jpg",
    title: "กินคลีน🍀",
    message: "เมนูแรกเลยที่ทำกินกัน จะผอมไม่ไหว✨",
  },
  {
    id: 11,
    image: "/photos-museum/photo11.jpg",
    title: "🌿HOPPY",
    message: "เต้นให้ดูหน่อย💫",
  },
  {
    id: 12,
    image: "/photos-museum/photo12.jpg",
    title: "🪵งาน 10 ชาติพันธุ์",
    message: "มาระบายสีกันเค้าระบายหมุเด้งๆๆ 🎨",
  },
  {
    id: 13,
    image: "/photos-museum/photo13.jpg",
    title: "รูปคู่ 🧑‍🤝‍🧑",
    message: "2 นิ้วฉู้ตายยย ✌️",
  },
  {
    id: 14,
    image: "/photos-museum/photo14.jpg",
    title: "คาเฟ่สวนคุณปู่🐛",
    message: "บรรยากาศดีมากอยากไปอีก🌷",
  },
  {
    id: 15,
    image: "/photos-museum/photo15.jpg",
    title: "📹ตอนไปดูหนังคิมิซึโนะ",
    message: "เข้าจริงฟิลเตอร์นี้อ่ะ🎞️",
  },
  {
    id: 16,
    image: "/photos-museum/photo16.jpg",
    title: "🏘️HOPPY",
    message: "ขี้เล่นแต่ นิสัยจริงๆเล่นขี้ 😅",
  },
  {
    id: 17,
    image: "/photos-museum/photo17.jpg",
    title: "🎍🪴ฮอมคาเฟ่",
    message: "ชิวๆดีเนอะคาเฟ่นี้ 😉",
  },
  {
    id: 18,
    image: "/photos-museum/photo18.jpg",
    title: "🌱HOPPY",
    message: "เอิ่มมมม--- 🌟",
  },
  {
    id: 19,
    image: "/photos-museum/photo19.jpg",
    title: "💐ฮอมคาเฟ่💐",
    message: "บรรยากาสดีขนาดนี้มันน่า... 🦏",
  },
  {
    id: 20,
    image: "/photos-museum/photo20.jpg",
    title: "📽️ตอนไปดูหนังคิมิซึโนะ",
    message: "น่ารักกกรูปนี้อ่ะ 🌷🧸",
  },
  {
    id: 21,
    image: "/photos-museum/photo21.jpg",
    title: "🐎HORIZON ",
    message: "โพสท่าไปคนละ 1 แมทต์ 👯",
  },
  {
    id: 22,
    image: "/photos-museum/photo22.jpg",
    title: "🌲ฮอมคาเฟ่",
    message: "รูปไหนก็ดูอ้วนหนุบหนับไปหมด 🐷",
  },
  {
    id: 23,
    image: "/photos-museum/photo23.jpg",
    title: "นานาหมูกระทะ🐷",
    message: "รูปนี้คนถ่ายสวยมากถ้าจำไม่ผิดใกล้ๆวันคริสมาส 🎄",
  },
  {
    id: 24,
    image: "/photos-museum/photo24.jpg",
    title: "รูปคู่🤩",
    message: "รูปที่เจนด้วย Ai อันนี้เวอร์นะแต่หน้าเหมือนเค้าด้วย 😍",
  },
  {
    id: 25,
    image: "/photos-museum/photo25.jpg",
    title: "HOPPY☘️",
    message: "เป็นรูปคู่ที่เอ็นเกจดีมากเวอร์ 💐🎉",
  },
  {
    id: 26,
    image: "/photos-museum/photo26.jpg",
    title: "รูปคู่🤌",
    message: "อันนี้รูปคู่รูปแรกเลยแหละ 🫣",
  },
  {
    id: 27,
    image: "/photos-museum/photo27.jpg",
    title: "ตอนไปดูหนังคิมิซึโนะ🎥",
    message: "ชนแก้วว 🥂",
  },
  {
    id: 28,
    image: "/photos-museum/photo28.jpg",
    title: "🏕️ค่าเฟ่เปี่ยมสุขที่ชร.หลังมอ",
    message: "เป็นคาเฟ่ที่บรรยากาสดีมากแต่ตอนเราไปร้อนไปหน่อย 🍃",
  },
  {
    id: 29,
    image: "/photos-museum/photo29.jpg",
    title: "งานฤดูหนาวหน้าอำเภอ☃️",
    message: "วันนี้เขามาธีมชมพูแหละ 🌷🌸",
  },
  {
    id: 30,
    image: "/photos-museum/photo30.jpg",
    title: "ฮอมคาเฟ่☘️",
    message: "ไอ่ข้าวโพดนั้นอย่าหาสั่งมาอีกนะ555 🙅",
  },
  {
    id: 31,
    image: "/photos-museum/photo31.jpg",
    title: "🎍ฮอมคาเฟ่",
    message: "ดูบรรยากาสดิดีมากๆอ่ะ 🌷🌞",
  },
  {
    id: 32,
    image: "/photos-museum/photo32.jpg",
    title: "วันเกิดณิชาพาไปเปิดโลก🕊️",
    message: "พามากินข้าวเป่าเค้ก 🍝",
  },
  {
    id: 33,
    image: "/photos-museum/photo33.jpg",
    title: "วันเกิดณิชาพาไปเปิดโลก👣👀",
    message: "รูปนี้น่ารักก 🥰",
  },
  {
    id: 34,
    image: "/photos-museum/photo34.jpg",
    title: "ไปให้อาหารสัตว์ที่ ชม.🧚‍♂️",
    message: "อัลปาก้าตัวนี้ขี้เกียจสุด แต่ขนก็นุ่มสุด 🦙",
  },
  {
    id: 35,
    image: "/photos-museum/photo35.jpg",
    title: "🦚ไปให้อาหารสัตว์ที่ ชม.",
    message: "🐏มีคนโดนรุ่มมม 🐑🐐",
  },
  {
    id: 36,
    image: "/photos-museum/photo36.jpg",
    title: "🌴พาณิชาไปเปิดโลก",
    message: "🌷สวนดอกไม้งามชร. 🌷",
  },
  {
    id: 37,
    image: "/photos-museum/photo37.jpg",
    title: "วันเกิดแม่อ้วน🎉",
    message: "ณิชาจะแจ้งเกิดไมค์ทองคำ 🎙️",
  },

];

const galaxyMemories: Memory[] = [
  {
    id: 1,
    image: "/photos-galaxy/photo1.jpg",
    title: "นีโอ",
    message: "ตอนตัดขนใหม่ๆหล่อเชียวนะ🥰",
  },
  {
    id: 2,
    image: "/photos-galaxy/photo2.jpg",
    title: "นี่รูปคู่นีโอ กับ ชาร์โค",
    message: "พ่อหนุ่มก็อตซิล่า กับ นายแบบถุงเท้ายาว🤣",
  },
  {
    id: 3,
    image: "/photos-galaxy/photo3.jpg",
    title: "ชาร์โค",
    message: "ลายชัดไหมฮ่ะม๊ามี๊🦍",
  },
  {
    id: 4,
    image: "/photos-galaxy/photo4.jpg",
    title: "นีโอ ชาร์โค GEN 2",
    message: "ล้นที่นอนแล้วรับไม่ไหวแล้วที่นอน 🚑",
  },
  {
    id: 5,
    image: "/photos-galaxy/photo5.jpg",
    title: "ชาร์โค🐈‍⬛",
    message: "ผมไม่ได้กินเยอะนะงับผมยังผอมอยู่ ⭐",
  },
  {
    id: 6,
    image: "/photos-galaxy/photo6.jpg",
    title: "🍊3 แสบ ที่มีคนเอาไปตัวเดียว🍊",
    message: "แยกออกไหมไหนส้มจี๊ ไหนส้มโอ🔥",
  },
  {
    id: 7,
    image: "/photos-galaxy/photo7.jpg",
    title: "🍊ส้มจี๊ด",
    message: "อยากยืดๆๆ 🐈",
  },
  {
    id: 8,
    image: "/photos-galaxy/photo8.jpg",
    title: "ส้มจี๊ดด🍊",
    message: "โลกใบนี้ช่างโหดร้ายเหลือเกินนนน ☄️",
  },
  {
    id: 9,
    image: "/photos-galaxy/photo9.jpg",
    title: "แขนชาหมดแล้วจี๊ดด😵‍💫",
    message: "เลือดแขนม๊ามี๊ไม่ไหลแล้วว🦾",
  },
  {
    id: 10,
    image: "/photos-galaxy/photo10.jpg",
    title: "เอ้า",
    message: "ใครหลับใครตื่น!! 🥱",
  },
  {
    id: 11,
    image: "/photos-galaxy/photo11.jpg",
    title: "เลิกงานมาก็หายเหนื่อยล่ะ🥳",
    message: "ความสุขแหละ 😍",
  },
  {
    id: 12,
    image: "/photos-galaxy/photo12.jpg",
    title: "น้าชาร์โค🥰",
    message: "กำลังสอนเด็กๆงับ 👾",
  },
  {
    id: 13,
    image: "/photos-galaxy/photo13.jpg",
    title: "นอนสบายๆทุกรองเท้า🛌",
    message: "ยิ่งรองเท้าไหนแรงๆยิ่งหลับสบาย 🤮",
  },
  {
    id: 14,
    image: "/photos-galaxy/photo14.jpg",
    title: "นีโอ & ชาร์โค",
    message: "จากรูปใครสบายที่สุด 🛌",
  },
  {
    id: 15,
    image: "/photos-galaxy/photo15.jpg",
    title: "จากรูปคิดว่าใครสมควรได้รับมรดก?",
    message: "โอ 🍃 ณิชา 🍃",
  },
  {
    id: 16,
    image: "/photos-galaxy/photo16.jpg",
    title: "2 ส้มแสบ🍊",
    message: "จะช่วยปะป๊าาาเก็บแก้วมังกรร 👣",
  },
  {
    id: 17,
    image: "/photos-galaxy/photo17.jpg",
    title: "น้าชาร์โคสอนยืดๆๆ🥰",
    message: "ดูแล้วจำ นำไปปฏิบัติ🤙",
  },
  {
    id: 18,
    image: "/photos-galaxy/photo18.jpg",
    title: "ไอ่นีโอ🤔",
    message: "ค่า BMI แมวคิดยังไง ความสมมาตร คอกับตัวอยู่ตรงไหน 🫢",
  },
  {
    id: 19,
    image: "/photos-galaxy/photo19.jpg",
    title: "วันนี้มานอนกับน้านีโอ🤣",
    message: "พื้นที่ไม่มีไว้ให้พวกสมัครเล่น 🐷",
  },
  {
    id: 20,
    image: "/photos-galaxy/photo20.jpg",
    title: "นีโอ🐈",
    message: "ทุกวันนี้เป็นเจ้าของบ้านไปทุกที 🏠",
  },
  {
    id: 21,
    image: "/photos-galaxy/photo21.jpg",
    title: "หอมๆมากเลย🌬️",
    message: "นอนสบายสุดๆฟินเฟอร์ 🔥",
  },
  {
    id: 22,
    image: "/photos-galaxy/photo22.jpg",
    title: "ถึงเวลาน้านีโอต้องดูแลน้องๆงับ🐈",
    message: "เกือบขิด ☠️",
  },
  {
    id: 23,
    image: "/photos-galaxy/photo23.jpg",
    title: "จะซ้ายทีขวาที🐾",
    message: "ก็อปความสบายไว้หมดแล้วนอนท่าไหนจะได้เปลี่ยนไปท่านั้นด้วย 🛌",
  },
  {
    id: 24,
    image: "/photos-galaxy/photo24.jpg",
    title: "สิเบิ่งดาวเด้อ☄️",
    message: "ป่าวหรอกจองแมงตัวนี้ไว้แล้ว 🦋",
  },
  {
    id: 25,
    image: "/photos-galaxy/photo25.jpg",
    title: "ดูสมัยเอามาแรกๆ🤌",
    message: "ตัวกระปุ๊กกระปิ๊กมากก 🥹",
  },
  {
    id: 26,
    image: "/photos-galaxy/photo26.jpg",
    title: "🍼นีโอ GEN 1",
    message: "อยากมีลายสก็อตติช บ้างมันขาวเกินตอนนี้🌗",
  },
  {
    id: 27,
    image: "/photos-galaxy/photo27.jpg",
    title: "🍼นีโอ GEN 1",
    message: "ดูสิตอนนั้นยังตัวเล็กๆอยู่เลยตอนอ้วนมาใหม่ๆ 🍼",
  },
  {
    id: 28,
    image: "/photos-galaxy/photo28.jpg",
    title: "🍼นีโอ GEN 1",
    message: "สมัยโดดเดี่ยวยังไม่มีชาร์โค้เข้ามา🍃",
  },
  {
    id: 29,
    image: "/photos-galaxy/photo29.jpg",
    title: "รูปคู่เดียวที่มี🐱🐱",
    message: "ดูพอมีเพื่อนมานี่ไม่เหงาแล้วทุกวัน😻",
  },
  {
    id: 30,
    image: "/photos-galaxy/photo30.jpg",
    title: "🍼นีโอ GEN 1",
    message: "อยากนอนไหนก็ได้ เพราะอาบน้ำได้ตลอดชิวๆ 💦",
  },
  {
    id: 31,
    image: "/photos-galaxy/photo31.jpg",
    title: "🍼นีโอ GEN 1",
    message: "ขวานฟ้าาาา หน้าดำๆๆๆ 🔮🌚",
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);

    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (opened) {
      const timer = setTimeout(() => setShowGallery(true), 6500);
      return () => clearTimeout(timer);
    }
  }, [opened]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-rose-300 to-fuchsia-300 text-white">
      {!opened && mounted && <Confetti width={size.width} height={size.height} />}

      <AnimatePresence mode="wait">
        {!opened ? (
          <motion.div
            key="card"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 max-w-md rounded-3xl bg-white/90 p-10 text-center shadow-2xl backdrop-blur-md"
          >
            <h1 className="mb-6 text-3xl font-bold text-pink-500">
              💖สุขสันต์วันเกิดไอ่อ้วน💖
            </h1>

            <p className="mb-5 text-lg text-gray-700">
              ยิ้มเยอะๆ มีความสุขในทุกๆวันนะ ✨
              
            </p>

            <p className="mb-5 text-1lg text-gray-700">
              🤏🏻 เป็นกำลังใจให้เสมอ 🧸⤾
              
            </p>

            <img
              src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
              className="mx-auto mb-6 rounded-2xl"
              alt="cute gif"
            />

            <motion.button
              onClick={() => setOpened(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-pink-500 px-6 py-3 font-bold text-white shadow-lg"
            >
              เปิดกรุความทรงจำ 💌
            </motion.button>
          </motion.div>
        ) : showGallery ? (
          <GalleryHub key="gallery" />
        ) : (
          <UniverseIntro key="universe" />
        )}
      </AnimatePresence>
    </main>
  );
}

function UniverseIntro() {
  return (
    <motion.div
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.3 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2b1055,#080013_65%,#000)]" />

      {Array.from({ length: 100 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ))}

      <motion.div
        className="relative z-10 flex h-[900px] w-[900px] items-center justify-center rounded-full"
        initial={{ scale: 3.2, opacity: 0 }}
        animate={{ scale: 0.72, opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <div className="absolute h-28 w-28 rounded-full bg-yellow-300 shadow-[0_0_80px_30px_rgba(255,215,0,0.7)]" />
        <Orbit size={220} duration={7} planet="bg-blue-400" planetSize="h-5 w-5" />
        <Orbit size={330} duration={10} planet="bg-pink-400" planetSize="h-7 w-7" />
        <Orbit size={460} duration={14} planet="bg-purple-400" planetSize="h-6 w-6" />
        <Orbit size={600} duration={18} planet="bg-orange-400" planetSize="h-9 w-9" />
        <Orbit size={760} duration={25} planet="bg-cyan-300" planetSize="h-8 w-8" />
      </motion.div>

      <motion.div
        className="absolute z-20 text-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 4, duration: 1.2 }}
      >
        <h1 className="text-6xl font-black text-pink-400 drop-shadow-[0_0_25px_rgba(244,114,182,1)] md:text-8xl">
          รักปาร์ตี้ ปีต้าร์🎀🧸
        </h1>
        <p className="mt-4 text-2xl text-pink-100">
          ถ้าถามว่ารักแค่ไหน╰(°▽°)╯
        </p>
        <p className="mt-4 text-2xl text-pink-100">
          ก็คงต้องบอกว่ามากกว่าดาวทั้งหมดในจักรวาล 💖
        </p>
        <p className="mt-4 text-2xl text-pink-100">
          ถ้าเทียบกับบนโลกก็ต้องบอกว่า📜
        </p>
        <p className="mt-4 text-2xl text-pink-100">
          มากกว่า ฟ้า🩵
        </p>
        <p className="mt-4 text-2xl text-pink-100">
          มากกว่า น้ำ🌊
        </p>
        <p className="mt-4 text-2xl text-pink-100">
          มากกว่า ทะเลและเม็ดทราย🛋🫧
        </p>
        <p className="mt-4 text-2xl text-pink-100">
          แต่น้อยกว่า ชมพู่🐻
        </p>
      </motion.div>
    </motion.div>
  );
}

function MemoryPlanet() {
  const [rotate, setRotate] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startRotate, setStartRotate] = useState(0);
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <motion.div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#28104e,#090014_70%,#000)] text-white"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="absolute top-20 z-40 max-w-[90vw] text-center text-2xl font-black text-pink-400 drop-shadow-[0_0_20px_rgba(244,114,182,1)] md:top-8 md:text-4xl">
        โตขึ้นอีกปี อายุจะ 30 แล้วเราเห้ออ!!  💖
      </h1>

      <p className="absolute bottom-6 z-40 max-w-[90vw] text-center text-xs text-pink-100 md:text-sm">
        ลากซ้ายขวาเพื่อหมุน แล้วกดที่รูปเพื่ออ่านข้อความ 💫
      </p>

      <div
        className="relative h-[820px] w-full touch-none overflow-visible"
        style={{ perspective: "900px" }}
        onPointerDown={(e) => {
          setStartX(e.clientX);
          setStartRotate(rotate);
        }}
        onPointerMove={(e) => {
          if (e.buttons !== 1) return;
          const diff = e.clientX - startX;
          setRotate(startRotate + diff * 0.35);
        }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-[300px] w-[300px]"
          style={{
            transformStyle: "preserve-3d",
            transform: `translate(-50%, -50%) rotateY(${rotate}deg)`,
          }}
        >
          {planetMemories.map((memory, i) => {
            const angle = (360 / planetMemories.length) * i;
            const layer = i % 4;
            const y = [-190, -60, 70, 200][layer];
            const z = 330 - layer * 20;

            return (
              <button
                key={memory.id}
                onClick={() => setSelected(memory)}
                className="absolute left-1/2 top-1/2 h-32 w-24 overflow-hidden rounded-2xl border border-white/30 bg-white/10 shadow-2xl transition hover:scale-110 md:h-40 md:w-28"
                style={{
                  transform: `
                    rotateY(${angle}deg)
                    translateZ(${z}px)
                    translateY(${y}px)
                    translate(-50%, -50%)
                  `,
                }}
              >
                <img
                  src={memory.image}
                  className="h-full w-full object-cover"
                  alt={memory.title}
                />
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="max-w-sm rounded-3xl bg-white p-5 text-center text-gray-800 shadow-2xl"
              initial={{ scale: 0.7, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.7, y: 40 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selected.image}
                className="mb-4 h-72 w-full rounded-2xl object-cover"
                alt={selected.title}
              />

              <h2 className="mb-2 text-2xl font-black text-pink-500">
                {selected.title}
              </h2>

              <p className="mb-5 text-base leading-relaxed">
                {selected.message}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="rounded-full bg-pink-500 px-6 py-3 font-bold text-white"
              >
                ปิดข้อความ 💌
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Orbit({
  size,
  duration,
  planet,
  planetSize,
}: {
  size: number;
  duration: number;
  planet: string;
  planetSize: string;
}) {
  return (
    <div
      className="absolute rounded-full border border-white/20"
      style={{ width: size, height: size }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <div
          className={`absolute left-1/2 top-0 -translate-x-1/2 rounded-full ${planet} ${planetSize} shadow-[0_0_20px_rgba(255,255,255,0.8)]`}
        />
      </motion.div>
    </div>
  );
}
function LoveMuseum3D() {
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <motion.div
      className="absolute inset-0 z-30 overflow-y-auto bg-[radial-gradient(circle_at_top,#3b0764,#05000c_70%,#000)] px-5 py-16 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="mb-3 text-center text-4xl font-black text-pink-400">
        ช่วงเวลาที่ทำสิ่งต่างๆตลอดระยะเวลา 2 ปี 💖
      </h1>

      <p className="mb-12 text-center text-pink-100">
        🌾 อาจจะล้มลุกคลุกคลานบ้างมีช่วงเหนื่อยช่วงแย่แต่เราผ่านมันมาหมดแล้ว 🌾
      </p>

      <div className="mx-auto max-w-5xl space-y-10">
        {museumMemories.map((memory, i) => (
          <motion.button
            key={memory.id}
            onClick={() => setSelected(memory)}
            initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120, rotateY: i % 2 === 0 ? 25 : -25 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7 }}
            className={`flex w-full items-center gap-5 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md ${
              i % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <img
              src={memory.image}
              className="h-44 w-32 rounded-2xl object-cover shadow-xl md:h-64 md:w-48"
              alt={memory.title}
            />

            <div className="flex-1 text-left">
              <p className="text-sm text-pink-200">Memory #{memory.id}</p>
              <h2 className="text-2xl font-black text-pink-300">
                {memory.title}
              </h2>
              <p className="mt-3 line-clamp-3 text-sm text-pink-50">
                {memory.message}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <MemoryModal selected={selected} onClose={() => setSelected(null)} />
    </motion.div>
  );
}
function TimelineGalaxy() {
  const [selected, setSelected] = useState<Memory | null>(null);

  return (
    <motion.div
      className="absolute inset-0 z-30 overflow-y-auto bg-[radial-gradient(circle_at_center,#1e1b4b,#090014_70%,#000)] px-5 py-16 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="mb-3 text-center text-4xl font-black text-pink-400">
        เด็กๆแสนสน 🐿✨
      </h1>

      <p className="mb-16 text-center text-pink-100">
        ไม่ว่าจะผ่านมากี่รุ่นก็รักทุกตัว
      </p>

      <div className="relative mx-auto min-h-[2600px] max-w-4xl">
        <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-pink-400 via-purple-400 to-cyan-300 opacity-50" />

        {galaxyMemories.map((memory, i) => {
          const leftSide = i % 2 === 0;

          return (
            <motion.button
              key={memory.id}
              onClick={() => setSelected(memory)}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.12, rotate: 2 }}
              transition={{ duration: 0.5 }}
              className={`absolute flex w-40 flex-col items-center rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md md:w-52 ${
                leftSide ? "left-0 md:left-20" : "right-0 md:right-20"
              }`}
              style={{ top: `${i * 55}px` }}
            >
              <div className="mb-2 h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_20px_rgba(244,114,182,1)]" />

              <img
                src={memory.image}
                className="h-36 w-full rounded-2xl object-cover md:h-44"
                alt={memory.title}
              />

              <p className="mt-3 text-xs text-pink-200">
                ดาวดวงที่ {memory.id}
              </p>

              <h2 className="mt-1 line-clamp-2 text-sm font-bold text-pink-100">
                {memory.title}
              </h2>
            </motion.button>
          );
        })}
      </div>

      <MemoryModal selected={selected} onClose={() => setSelected(null)} />
    </motion.div>
  );
}

function MemoryModal({
  selected,
  onClose,
}: {
  selected: Memory | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-w-sm rounded-3xl bg-white p-5 text-center text-gray-800 shadow-2xl"
            initial={{ scale: 0.7, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.7, y: 40 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              className="mb-4 h-72 w-full rounded-2xl object-cover"
              alt={selected.title}
            />

            <h2 className="mb-2 text-2xl font-black text-pink-500">
              {selected.title}
            </h2>

            <p className="mb-5 text-base leading-relaxed">
              {selected.message}
            </p>

            <button
              onClick={onClose}
              className="rounded-full bg-pink-500 px-6 py-3 font-bold text-white"
            >
              ปิดข้อความ 💌
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function GalleryHub() {
  const [mode, setMode] = useState<"planet" | "museum" | "timeline">("planet");
  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    if (!menuOpen) return;

    const timer = setTimeout(() => {
      setMenuOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [menuOpen, mode]);

  const wakeMenu = () => {
    setMenuOpen(true);
  };

  return (
    <div className="absolute inset-0 z-30" onPointerMove={wakeMenu}>
      <LoveEmojiEffects />

      <motion.div
        className="fixed left-1/2 top-4 z-[80] -translate-x-1/2"
        animate={{
          opacity: menuOpen ? 1 : 0.75,
          scale: menuOpen ? 1 : 0.9,
        }}
      >
        {menuOpen ? (
          <div className="flex gap-2 rounded-full border border-white/20 bg-black/40 p-2 backdrop-blur-md">
            <button
              onClick={() => setMode("planet")}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                mode === "planet" ? "bg-pink-500 text-white" : "text-pink-100"
              }`}
            >
              360°
            </button>

            <button
              onClick={() => setMode("museum")}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                mode === "museum" ? "bg-pink-500 text-white" : "text-pink-100"
              }`}
            >
              Museum
            </button>

            <button
              onClick={() => setMode("timeline")}
              className={`rounded-full px-4 py-2 text-sm font-bold ${
                mode === "timeline" ? "bg-pink-500 text-white" : "text-pink-100"
              }`}
            >
              Galaxy
            </button>
          </div>
        ) : (
          <button
            onClick={wakeMenu}
            className="rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-bold text-pink-100 backdrop-blur-md"
          >
            เมนู 💖
          </button>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {mode === "planet" && <MemoryPlanet key="planet" />}
        {mode === "museum" && <LoveMuseum3D key="museum" />}
        {mode === "timeline" && <TimelineGalaxy key="timeline" />}
      </AnimatePresence>
    </div>
  );
}
function LoveEmojiEffects() {
  const emojis = ["💖", "💕", "💗", "💘", "💝", "💞", "🌸", "✨", "🥰", "🫶"];

  const heartPoints = Array.from({ length: 34 }, (_, i) => {
    const t = (Math.PI * 2 * i) / 34;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y =
      -(
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t)
      );

    return { x: x * 7, y: y * 7 };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-[35] overflow-hidden">
      {Array.from({ length: 24 }).map((_, i) => {
        const emoji = emojis[i % emojis.length];

        return (
          <motion.div
            key={`fall-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 18}px`,
            }}
            initial={{ y: -80, opacity: 0, rotate: 0 }}
            animate={{
              y: "110vh",
              opacity: [0, 0.8, 0.8, 0],
              rotate: 360,
              x: [0, Math.random() * 70 - 35, Math.random() * 70 - 35],
            }}
            transition={{
              duration: 6 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {emoji}
          </motion.div>
        );
      })}

      <SideHeartEffect side="left" points={heartPoints} emojis={emojis} />
      <SideHeartEffect side="right" points={heartPoints} emojis={emojis} />
    </div>
  );
}

function SideHeartEffect({
  side,
  points,
  emojis,
}: {
  side: "left" | "right";
  points: { x: number; y: number }[];
  emojis: string[];
}) {
  return (
    <motion.div
      className={`absolute top-1/2 hidden md:block ${
        side === "left" ? "left-[16%]" : "right-[16%]"
      }`}
    >
      {points.map((p, i) => {
        const emoji = emojis[i % emojis.length];
        const direction = side === "left" ? -1 : 1;

        const explodeX =
          p.x + direction * (180 + Math.random() * 320);

        const explodeY =
          p.y + (Math.random() * 500 - 250);

        return (
          <motion.div
            key={`${side}-heart-${i}`}
            className="absolute"
            style={{ fontSize: 22 }}
            initial={{
              x: p.x,
              y: p.y,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              x: [p.x, p.x, explodeX],
              y: [p.y, p.y, explodeY],
              opacity: [0, 0.9, 0.9, 0],
              scale: [0, 1, 1, 0],
              rotate: [0, 0, 360],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              delay: i * 0.025,
              times: [0, 0.25, 0.6, 1],
              ease: "easeInOut",
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </motion.div>
  );
}