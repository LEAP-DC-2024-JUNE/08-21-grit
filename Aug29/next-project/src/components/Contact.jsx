import Image from "next/image";
import IconMail from "../Icons/Icon-mail.png";
import IconMail1 from "../Icons/IconDarkEnv.png";
import Icon2 from "../Icons/Icon2.png";
import Icon3 from "../Icons/Icon DarkButton.png";
import IconPhone from "../Icons/Icon-phone.png";
import IconPhone1 from "../Icons/IconDarkPhone.png";
import IconLinks from "../Icons/Links.png";
import IconFooter from "../Icons/Iconfooter.png";
import IconC from "../Icons/IconDarkC.png";
import { useTheme } from "next-themes";
import IconLinks1 from "../Icons/Links-Dark.png";

const Contact = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      <div className=" mt-24 flex flex-col items-center">
        <button className="w-28 h-8 rounded-2xl bg-slate-300 font-normal text-black text-center dark:bg-[#374151]">
          Get in touch
        </button>
      </div>
      <div>
        <p className="w-[576] mt-4 flex justify-center">
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex justify-center mt-8 gap-4">
        {theme == "dark" ? (
          <Image src={IconMail1} width={32} height={32} />
        ) : (
          <Image src={IconMail} width={32} height={32} />
        )}

        <p className="text-xl bold">suvdaa.emam@gmail.com</p>
        {theme == "dark" ? (
          <Image src={Icon3} width={32} height={32} />
        ) : (
          <Image src={Icon2} width={32} height={32} />
        )}
      </div>
      <div className="flex justify-center mt-2 gap-4">
        {theme == "dark" ? (
          <Image src={IconPhone1} width={32} height={32} />
        ) : (
          <Image src={IconPhone} width={32} height={32} />
        )}

        <p className="text-xl bold">+1 576 484 4499</p>
        {theme == "dark" ? (
          <Image src={Icon3} width={32} height={32} />
        ) : (
          <Image src={Icon2} width={32} height={32} />
        )}
      </div>
      <div className=" flex flex-col items-center mt-8 mb-8">
        <p>You may also find me on these platforms!</p>
        {theme == "dark" ? (
          <Image src={IconLinks1} width={116} height={36} />
        ) : (
          <Image src={IconLinks} width={116} height={36} />
        )}
      </div>

      <div className="flex justify-center mt-36 bg-slate-100 dark:bg-black">
        {theme == "dark" ? (
          <Image src={IconC} width={16} height={16} />
        ) : (
          <Image src={IconFooter} width={16} height={16} />
        )}

        <p>2024 | Greetings with ❤️️ from Virginia</p>
      </div>
    </div>
  );
};

export default Contact;
