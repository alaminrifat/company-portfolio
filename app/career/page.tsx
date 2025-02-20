import React from "react";

const page = () => {
  return (
    <>
      {/* Add contained glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="glow glow-1 left-0 top-0" />
        <div className="glow glow-2 right-0 bottom-0" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen pt-16 md:pt-24 lg:pt-32 relative overflow-hidden w-full">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-48"></div>
      </section>
    </>
  );
};

export default page;
