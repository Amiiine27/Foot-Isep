import RoundButton from "./RoundButton";
import LinkElement from './LinkElement';
import logo from "../../public/logo.png";
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <nav className="mx-7 my-1 flex items-center justify-between">
        <div className="w-[12rem]">
          <Link href="/">
          <img src={logo.src} alt="Logo du site" className="w-28" />
        </Link>
        </div>
        

        <div className="gap-12 flex">
          <LinkElement label="A propos" url="a-propos"/>
          <LinkElement label="Contact" url="contact"/>
          <LinkElement label="FAQ" url="faq"/>
        </div>

        <Link href="/login">
          <RoundButton label="Connexion" width={12} />
        </Link>
      </nav>
    </>
  );
}
