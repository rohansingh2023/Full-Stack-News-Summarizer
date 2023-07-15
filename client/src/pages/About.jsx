import React from "react";

const About = () => {
  return (
    <div>
      {/* Stay informed in 60 words. */}
      <div className="flex flex-col gap-5 m-10" data-testid="about">
        <h1 className="text-5xl text-cyan-600 font-BraahOne" data-testid="h1">
          Our Services
        </h1>
        <h2 className="text-3xl text-gray-600 font-Rampart" data-testid="h2">
          We summarize long and boring news articles for your
        </h2>
        <h2 className="text-3xl text-gray-600 font-Rampart" data-testid="h3">
          You can decide the length,{" "}
        </h2>
        <h2 className="text-3xl text-gray-600 font-Rampart" data-testid="h4">
          We give you the news summary !!{" "}
        </h2>
      </div>
      <div className="m-10 font-Greatvibes" data-testid="h5">
        Enjoy Summarizing
      </div>
    </div>
  );
};

export default About;
