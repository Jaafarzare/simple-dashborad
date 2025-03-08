"use client";

import { SlSocialTwitter } from "react-icons/sl";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export default function ShareButton() {
  const [clickedTwitter, setClickedTwitter] = useState(0);
  const [clickedWhatsApp, setClickedWhatsApp] = useState(0);
  const [clickedTelegram, setClickedTelegram] = useState(0);

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    toast.success("لینک داشبورد در Twitter کپی شد!");

    setClickedTwitter((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("clickedTwitter", newCount.toString());
      return newCount;
    });
  };

  const handleShareWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`,
      "_blank"
    );
    setClickedWhatsApp((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("clickedWhatsApp", newCount.toString());
      return newCount;
    });
  };

  const handleShareTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}`,
      "_blank"
    );
    setClickedTelegram((prev) => {
      const newCount = prev + 1;
      localStorage.setItem("clickedTelegram", newCount.toString());
      return newCount;
    });
  };

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
    <div className="flex gap-2">
      <Button variant="outline" onClick={handleCopyLink}>
        <SlSocialTwitter />
        <span className="mr-2">{clickedTwitter}</span>
      </Button>

      <Button variant="outline" onClick={handleShareWhatsApp}>
        <FaWhatsapp />
        <span className="mr-2">{clickedWhatsApp}</span>
      </Button>

      <Button variant="outline" onClick={handleShareTelegram}>
        <FaTelegramPlane />
        <span className="mr-2">{clickedTelegram}</span>
      </Button>
    </div>
  );
}
