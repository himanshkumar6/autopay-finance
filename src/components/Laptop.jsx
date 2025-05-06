import Bar from "./Bar.jsx";


const Laptop = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden lg:overflow-hidden lg:overflow-x-hidden bottom-40 z-0 lg:bottom-0 bg-[radial-gradient(circle,_rgba(3,197,94,0.5)_0%,_#000000_100%)]">
      {/* Radial Glow (hidden on lg and up) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(3,197,94,0.5)_0%,_#000000_70%)] lg:bg-[radial-gradient(circle,_rgba(3,197,95,0.5)_0%,_#000000_45%)] z-0 " />

      {/* Foreground */}
      <div className="relative z-10 text-white text-center">
        {/* Laptop */}
        <div className="relative inline-block">
          <img
            src="https://raw.githubusercontent.com/himanshkumar6/autopay-finance/refs/heads/main/src/assets/Laptop.png"
            alt="Laptop"
            className="w-full max-w-96 lg:max-w-2xl h-auto lg:h-auto"
          />

          {/* Phone over Laptop */}
          <img
            src="https://raw.githubusercontent.com/himanshkumar6/autopay-finance/refs/heads/main/src/assets/Phone.png"
            alt="Phone on Laptop"
            className="absolute top-[20%] left-[271px] w-[6rem] lg:top-[10%] lg:left-[80%] lg:w-[30%] h-auto lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Laptop;
