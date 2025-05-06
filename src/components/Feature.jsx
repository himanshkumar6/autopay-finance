import React from 'react';

const features = [
  {
    title: 'Custom APIs for Merchants',
    description: 'Integrate and customize subscription flows tailored for your users. Control UI, UX, and data points collected before checkout.',
    img: '../src/assets/image1.png',
    reverse: false,
  },
  {
    title: 'Mobile-Compatible Checkout',
    description: 'No more wallet hassles. Our checkout works seamlessly across both desktop and mobile Web3 wallets.',
    img: '../src/assets/image2.png',
    reverse: true,
  },
  {
    title: 'Cross-chain Deposits & Withdrawals',
    description: 'Transact across Ethereum, Polygon, Arbitrum, and Optimism using USDT, USDC, DAI, and BUSD—powered by real-time liquidity routing.',
    img: '../src/assets/image3.png',
    reverse: false,
  },
  {
    title: 'Fully On-Chain and Secure',
    description: 'Smart contracts deployed from your wallet. All data and automations stored on-chain. No middlemen. No risks.',
    img: '../src/assets/image4.png',
    reverse: true,
  },
  {
    title: 'Real-time Control Over Token Allowances',
    description: 'Track and manage your subscriptions and token permissions in one place. Transparency meets total control.',
    img: '../src/assets/image5.png',
    reverse: false,
  },
];

const Feature = () => {
  return (
    <div className="bg-black text-white space-y-24 py-12 lg:py-20">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } items-center justify-between px-6 lg:px-32 gap-12 group`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center transition-transform duration-700 group-hover:scale-105">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-[280px] lg:w-[420px] rounded-xl shadow-xl animate-in fade-in zoom-in duration-700"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-xl space-y-4 transition-opacity duration-700 delay-200">
            <h2 className="text-3xl lg:text-4xl font-bold">{feature.title}</h2>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feature;
