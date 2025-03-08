"use client";

import { useEffect, useState } from "react";
import { CustomCard } from "./CustomCard ";

export default function SocialClickedShow() {
  const [clickedTwitter, setClickedTwitter] = useState(0);
  const [clickedWhatsApp, setClickedWhatsApp] = useState(0);
  const [clickedTelegram, setClickedTelegram] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setClickedTwitter(
        parseInt(localStorage.getItem("clickedTwitter") || "0")
      );
      setClickedWhatsApp(
        parseInt(localStorage.getItem("clickedWhatsApp") || "0")
      );
      setClickedTelegram(
        parseInt(localStorage.getItem("clickedTelegram") || "0")
      );
    }
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div>
        <CustomCard
          title="توییتر"
          description="تعداد کلیک ها"
          content={<p className="text-2xl font-bold">{clickedTwitter}</p>}
        />
      </div>

      <div>
        <CustomCard
          title="واتساپ"
          description="تعداد کلیک ها"
          content={<p className="text-2xl font-bold">{clickedWhatsApp}</p>}
        />
      </div>

      <div>
        <CustomCard
          title="تلگرام"
          description="تعداد کلیک ها"
          content={<p className="text-2xl font-bold">{clickedTelegram}</p>}
        />
      </div>
    </div>
  );
}
