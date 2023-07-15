import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Summarizer = () => {
  const [article, setArticle] = useState("");
  const [summary, setSummary] = useState("");
  const [textLen, setTextLen] = useState(500);
  const [toShowSummary, setToShowSummary] = useState(false);

  const getSummary = async () => {
    if (article !== "") {
      const refresh = toast.loading("Generating Summaries...");
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/summary`,
          {
            article: article,
            maxL: textLen.toString(),
          }
        );
        setSummary(res.data);
        toast.success("Generated Summaries Successfully!!", {
          id: refresh,
        });
        setToShowSummary(true);
      } catch (error) {
        console.log(error);
        toast.error(error, {
          id: refresh,
        });
      }
    } else {
      alert("Enter some articles!!!");
    }
  };
  return (
    <div>
      <h2 className="mt-5 mx-10 text-rose-500 italic md:text-lg">
        First copy the news article and then paste it in the below area
      </h2>
      <div className="flex flex-col text-center transition-all">
        <textarea
          className="m-10 mt-5 mb-0 p-10 h-96 bg-slate-200 rounded-md shadow-lg outline-none"
          type="text"
          value={article}
          data-testid="article"
          onChange={(e) => setArticle(e.target.value)}
        />
        <input
          type="range"
          min="100"
          max="700"
          value={textLen}
          onChange={(e) => setTextLen(e.target.value)}
          className="mx-auto my-10 w-1/4 "
          id="myRange"
          data-testid="range"
        ></input>
        <button
          onClick={getSummary}
          data-testid="summarizeBtn"
          className=" bg-cyan-300 p-5 md:w-1/4 m-auto mb-2 rounded-md duration-300 hover:bg-cyan-400 hover:shadow-md hover:scale-105"
        >
          Get Summary
        </button>
        {toShowSummary && (
          <div className="flex flex-col items-start" data-testid="summary">
            <h2 className="mt-5  mx-10 -mb-5 text-rose-500 italic md:text-xl">
              Your generated summary is:
            </h2>
            <div className="m-10 mb-10 p-10 max-h-fit bg-slate-200 rounded-md shadow-lg">
              <p>{summary}</p>
            </div>
          </div>
        )}
        {/* <div className={`m-10 mb-10 p-10 max-h-fit bg-slate-200 rounded-md shadow-lg ${!toShowSummary?"hidden":""}`}> */}
      </div>
    </div>
  );
};

export default Summarizer;
