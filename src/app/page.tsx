// import React from 'react';
// import { Facebook, Twitter, Instagram, Linkedin, Phone, Clock, MapPin } from 'lucide-react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Main Content Area with Background */}
//       <div className="flex-1 relative overflow-hidden">
//         {/* Background Image - Full coverage */}
//         <div 
//           className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('/images/professional-woman.png')`,
//           }}
//         >
//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-black/9 bg-opacity-40"></div>
//         </div>

//         {/* Header */}
//       {/* Top Bar */}
// {/* Top Bar */}
// {/* Top Bar */}
// {/* Top Contact Bar */}
// <div className="relative z-10 bg-black/40 backdrop-blur-md">
//   <div className="flex items-center justify-between px-6 py-3 lg:px-12 text-white text-sm">
//     {/* Phone */}
//     <div className="flex items-center space-x-2">
//       <Phone size={16} className="text-white" />
//       <span>+254 712 345 678</span>
//     </div>

//     {/* Hours */}
//     <div className="hidden lg:flex items-center space-x-2">
//       <Clock size={16} className="text-white" />
//       <span>Mon - Fri: 9am - 6pm, Sat: 10am - 4pm</span>
//     </div>

//     {/* Location */}
//     <div className="hidden lg:flex items-center space-x-2">
//       <MapPin size={16} className="text-white" />
//       <span>Senteu Plaza, Kilimani, Nairobi</span>
//     </div>

//     {/* Social Media Icons */}
//     <div className="flex items-center space-x-3">
//       <Facebook size={16} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
//       <Twitter size={16} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
//       <Instagram size={16} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
//       <Linkedin size={16} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
//       <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
//         <span className="text-black text-xs font-bold">t</span>
//       </div>
//     </div>
//   </div>
// </div>


//         {/* Navigation */}
//         {/* ---------- NAVBAR ---------- */}
// <nav className="relative z-10 flex justify-center mt-2">
//   <div className="flex items-center justify-between w-[90%] max-w-7xl bg-black/40 backdrop-blur-md rounded-full px-8 py-3">
//     {/* Logo */}
//     <div className="flex items-center">
//       <img
//         src="/images/webmasters-logo.png"
//         alt="Web Masters"
//         className="h-10 w-auto"
//       />
//     </div>

//     {/* Menu */}
//     <div className="hidden lg:flex items-center space-x-8">
//       <a href="#" className="text-white hover:text-red-500 transition">About</a>
//       <a href="#" className="text-white hover:text-red-500 transition">Services</a>
//       <a href="#" className="text-white hover:text-red-500 transition">Portfolio</a>
//       <a href="#" className="text-white hover:text-red-500 transition">Insights</a>
//       <a href="#" className="text-white hover:text-red-500 transition">Careers</a>
//       <a href="#" className="text-white hover:text-red-500 transition">Contact Us</a>
//     </div>

//     {/* Buttons */}
//     <div className="flex items-center space-x-4">
//       <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full">
//         Sign Up
//       </button>
//       <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-full">
//         Sign In
//       </button>
//     </div>
//   </div>
// </nav>


//         {/* Main Content */}
//         <main className="relative z-10 flex items-center min-h-[60vh] px-6 lg:px-12 pb-20">
//           <div className="max-w-4xl">
//             <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight mb-6">
//               Building Africa's Next Generation Of Startups
//             </h1>
            
//             <p className="text-white text-lg lg:text-xl mb-8 max-w-2xl leading-relaxed">
//               From eCitizen to high-growth ventures, we transform bold ideas into scalable businesses.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
//                 Book a Consultation
//               </button>
//               <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
//                 View Case Studies
//               </button>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Trusted By Section - Plain White */}
//       <section className="bg-white">
//         <div className="px-6 lg:px-12 py-12">
//           <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
//             <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
//               Trusted By
//             </h2>
//             <div className="flex items-center justify-center gap-8 flex-wrap">
//               {/* Placeholder client logos */}
//               <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                 <span className="text-gray-400 text-xs">Logo 1</span>
//               </div>
//               <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                 <span className="text-gray-400 text-xs">Logo 2</span>
//               </div>
//               <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                 <span className="text-gray-400 text-xs">Logo 3</span>
//               </div>
//               <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
//                 <span className="text-gray-400 text-xs">Logo 4</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';
const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content Area with Background */}
      <div className="flex-1 relative overflow-hidden">
        {/* Background Image - Full screen coverage */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat min-h-screen"
          style={{
            backgroundImage: `url('/images/professional-woman.png')`,
          }}
        >

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>
        </div>

        {/* Top Contact Bar */}
        <div className="relative z-10 bg-black/40 backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-3 lg:px-12 text-white text-sm">
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-white" />
              <span>+254 712 345 678</span>
            </div>

            {/* Hours */}
            <div className="hidden lg:flex items-center space-x-2">
              <Clock size={16} className="text-white" />
              <span>Mon - Fri: 9am - 6pm, Sat: 10am - 4pm</span>
            </div>

            {/* Location */}
            <div className="hidden lg:flex items-center space-x-2">
              <MapPin size={16} className="text-white" />
              <span>Senteu Plaza, Kilimani, Nairobi</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <Facebook size={16} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
              <Twitter size={16} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
              <Instagram size={16} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
              <Linkedin size={16} className="text-white hover:text-red-500 cursor-pointer transition-colors" />
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-xs font-bold">t</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {/* Navigation */}
<nav className="relative z-10 flex justify-center mt-2">
  <div className="flex items-center justify-between w-[90%] max-w-7xl bg-black/40 backdrop-blur-md rounded-full px-8 py-3">
    {/* Logo */}
    <div className="flex items-center" id="logo-block">
      <Image
        src="/images/webmasters-logo.png"
        alt="Web Masters"
        className="h-10 w-auto"
      />
    </div>

    {/* Menu */}
    <div className="hidden lg:flex items-center space-x-8">
      <a href="#" className="text-white hover:text-red-500 transition">About</a>
      <a href="#" className="text-white hover:text-red-500 transition">Services</a>
      <a href="#" className="text-white hover:text-red-500 transition">Portfolio</a>
      <a href="#" className="text-white hover:text-red-500 transition">Insights</a>
      <a href="#" className="text-white hover:text-red-500 transition">Careers</a>
      <a href="#" className="text-white hover:text-red-500 transition">Contact Us</a>
    </div>

    {/* Buttons */}
    <div className="flex items-center space-x-4">
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full">
        Sign Up
      </button>
      <button className="border border-white text-white hover:bg-white hover:text-black px-6 py-2 rounded-full">
        Sign In
      </button>
    </div>
  </div>
</nav>

{/* Main Content - Locked to Logo */}
<main className="relative z-10 flex items-center min-h-[60vh] w-[90%] max-w-7xl mx-auto pt-12 pb-12">
  {/* This wrapper uses the same left offset as logo */}
  <div className="w-full" style={{ marginLeft: "0" }}>
    <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6 max-w-2xl">
      Building Africa's Next Generation Of Startups
    </h1>
    
    <p className="text-white text-lg lg:text-xl mb-8 max-w-lg leading-relaxed">
      From eCitizen to high-growth ventures, we transform bold ideas into scalable businesses.
    </p>

    <div className="flex flex-col sm:flex-row gap-4">
      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
        Book a Consultation
      </button>
      <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition-colors transform hover:scale-105">
        View Case Studies
      </button>
    </div>
  </div>
</main>


      </div>

      {/* Trusted By Section */}
      <section className="bg-white">
        <div className="px-6 lg:px-12 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Trusted By
            </h2>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {/* Placeholder client logos */}
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">Logo 1</span>
              </div>
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">Logo 2</span>
              </div>
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">Logo 3</span>
              </div>
              <div className="w-24 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">Logo 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
