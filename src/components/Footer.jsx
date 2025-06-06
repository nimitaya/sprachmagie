import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-between py-2 px-5 bg-yellow-400 mt-auto  text-xs sm:text-sm md:text-base lg:text-lg ">
      {/* logo-name */}
      <div className="flex items-center space-x-0.5">
       {/*  <img src="/logo.png" alt="Logo" width={100} height={100} /> */}
       <h1 className="text-xs sm:text-sm md:text-base lg:text-lg ">Sprachmagie</h1>
      </div>

      {/* copyrite */}
      <div className="text-center">
        <p>
          {" "}
          © {new Date().getFullYear()} Sprachmagie Erstellt von S. Schweren, N.
          Petrukhina, O. Prydalna
        </p>
      </div>

      {/* youtube */}
      <div>
        <a href="https://www.youtube.com/intl/ALL_de/kids/ " className="text-red-600">
          <BsYoutube size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
