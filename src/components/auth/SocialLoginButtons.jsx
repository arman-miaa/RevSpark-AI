import { FcGoogle } from "react-icons/fc";
import { SiApple, SiFacebook } from "react-icons/si";

const socialProviders = [
  {
    name: "google",
    icon: <FcGoogle className="text-2xl" />,
    textColor: "text-black",
  },
  {
    name: "Facebook",
    icon: <SiFacebook className="text-2xl" />,
    textColor: "text-blue-800",
  },
  {
    name: "Apple",
    icon: <SiApple className="text-2xl" />,
    textColor: "text-black",
  },
];

const SocialLoginButtons = ({ onLogin }) => {
  return (
    <div className="flex flex-col gap-4">
      {socialProviders.map(({ name, textColor, icon }) => (
        <button
          key={name}
          onClick={() => onLogin(name)}
          className={`border border-gray-300 cursor-pointer rounded-lg py-2 px-4 flex items-center pl-16 gap-3 font-medium hover:opacity-90 transition`}
        >
          <span className={`${textColor}`}>{icon}</span>
          <span className="text-sm sm:text-base">Continue with {name}</span>
        </button>
      ))}
    </div>
  );
};

export default SocialLoginButtons;
