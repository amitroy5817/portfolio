"use client";
import { useState } from "react";
import { useMousePosition } from "react-haiku";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [interestValue, setInterestValue] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");

  async function sendInterestEmail(email) {
    setSending(true);
    setMessage("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          user_email: email,
          message: `Hello Amit,<br><b>${email}</b> is interested in working with you!`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );          

      setMessage(
        "Thank you for your interest! I'll reach out to your email ASAP :)"
      );
      setInterestValue("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessage("❌ Failed to send. Please try again.");
    }

    setSending(false);
  }

  return (
    <footer className="mb-25 mx-auto relative" id="footer">
      <div className="flex justify-center items-center relative w-fit mx-auto flex-col">
        <div className="flex flex-col">
          <a
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="text-5xl font-bold cursor-pointer py-5 px-10 text-center text-black dark:text-white"
            href="https://drive.google.com/file/d/1NNrVXNYnFDxTiC22ZL8VzBFajaV4vdSz/view?usp=sharing"
          >
            LET<span className="text-red-500">'</span>S WORK TOGETHER
          </a>

          {isHovering && (
            <div
              className="fixed pointer-events-none z-50 transition-all duration-100 ease-in"
              style={{
                left: x + 15,
                top: y + 15,
              }}
            >
              <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105 flex items-center gap-2 whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="icon is-small"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 9L5 4H3V9V10V11L13 11V13H11V15H13V13H15V11L17 11V9H15V7H13V5H11V7L13 7V9H5Z"
                    fill="currentColor"
                  ></path>
                </svg>
                DOWNLOAD CV
              </button>
            </div>
          )}

          <span className="text-center text-black dark:text-white">
            Open for <b>freelance Projects</b> // <b>Internships</b>
          </span>
          <span className="text-center max-w-md mx-auto text-black dark:text-white">
            Have a project in mind or just want to say hi? My inbox is always open.
          </span>

          {/* Contact Input Box */}
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!interestValue.trim()) return;
              await sendInterestEmail(interestValue);
            }}
            className="flex flex-col md:flex-row items-center gap-2 my-4"
          >
            <input
              type="email"
              placeholder="Leave your email at my inbox :)"
              className="flex-1 border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-full px-4 py-2 w-74 focus:outline-none focus:ring-2 focus:ring-red-400 dark:focus:ring-red-500"
              value={interestValue}
              onChange={(e) => setInterestValue(e.target.value)}
              required
              disabled={sending}
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
            </button>
          </form>

          {message && (
            <span className="text-sm text-center mt-2 w-full text-black dark:text-white">{message}</span>
          )}
        </div>

        <p className="text-gray-500 dark:text-gray-400">or reach out directly to my email</p>
        <a
          href="mailto:hello@amitroy.tech"
          className="text-center text-gray-700 dark:text-gray-300"
        >
          hello@amitroy.tech
        </a>
      </div>

      <span className="text-center text-black/5 dark:text-white/5 text-[6em] md:text-[15em] font-bold absolute -bottom-25 left-15 pointer-events-none leading-none">
        v2.0.0
      </span>
    </footer>
  );
}
