import { FaGlobe, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const cards = [
  {
    icon: <FaGlobe size={18} />,
    title: "Webite",
    desc: "Visit our website to explore all services today.",
    gradient: "bg-gradient-to-r from-[#d88984] via-[#d17bc3] to-[#feb38b]",
    to: "https://www.dinio.in/"
  },
  {
    icon: <FaInstagram size={18} />,
    title: "Instagram",
    desc: "Follow us on Instagram for get lastest updates and stories.",
    gradient: "bg-gradient-to-br from-[#d7d8da] via-[#3c6ec5] to-[#81dcf3]",
    to: "https://www.instagram.com/dinio.in/"
  },
  {
    icon: <FaLinkedin size={18} />,
    title: "LinkedIn",
    desc: "Connect on LinkedIn for news and opportunities.",
    gradient: "bg-gradient-to-br from-[#4345b4] via-[#cd87e3] to-[#ddc8ec]",
    to: "https://www.linkedin.com/company/dinio-in/"
  },
  {
    icon: <FaYoutube size={18} />,
    title: "YouTube",
    desc: "Subscribe on YouTube for tutorials and demos.",
    gradient: "bg-gradient-to-t from-red-500 via-[#fec3c3] to-[#c23d84]",
    to: "https://www.youtube.com/@Dinio-in"
  },
];

export default function Socials() {
  return (
    <div className="min-h-[100dvh] bg-black flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-10">
        <img src="/svgs/logo.svg" alt="Dinio Logo" className="h-[3em] inline-block" />
        <p className="opacity-85 text-white max-w-xl text-xs mt-1 font-semibold">
          Order Smart. Serve Fast.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
        {cards.map((card, idx) => (
          <div key={idx} className="relative hover:scale-102 transition-all">
            <div className={`absolute -inset-2 rounded-2xl opacity-40 blur-xl ${card.gradient}`} />

            <a href={card.to} target="_blank" rel="noopener noreferrer">
              <div className={`relative rounded-2xl cursor-pointer p-[3px] ${card.gradient}`}>
                <div className="bg-black rounded-xl p-3 h-full flex flex-col justify-between aspect-square">
                  <div className="text-white">{card.icon}</div>
                  <div>
                    <h2 className="text-white font-semibold text-sm mb-1">
                      {card.title}
                    </h2>
                    <p className="text-muted-foreground text-xs">{card.desc}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}