import { FaGlobe, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const cards = [
  {
    icon: <FaGlobe size={18} />,
    title: "Globe",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gradient: "bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600",
    to: "https://www.dinio.in/"
  },
  {
    icon: <FaInstagram size={18} />,
    title: "Instagram",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gradient: "bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500",
    to: "https://www.instagram.com/dinio.in/"
  },
  {
    icon: <FaLinkedin size={18} />,
    title: "LinkedIn",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gradient: "bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500",
    to: "https://www.linkedin.com/company/dinio-in/"
  },
  {
    icon: <FaYoutube size={18} />,
    title: "YouTube",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    gradient: "bg-gradient-to-t from-red-500 via-pink-600 to-purple-600",
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