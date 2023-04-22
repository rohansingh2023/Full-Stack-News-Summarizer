import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const [article, setArticle] = useState("");
  const [summary, setSummary] = useState("");

  const getSummary = async () => {
    if (article !== "") {
      const refresh = toast.loading("Generating Summaries...");
      try {
        const res = await axios.post("http://127.0.0.1:5000/summary", {
          article: article,
          maxL: "100",
        });
        setSummary(res.data);
        toast.success("Generated Summaries Successfully!!", {
          id: refresh,
        });
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
      <Navbar />

      <div className="flex flex-col text-center transition-all">
        <textarea
          className="m-10 p-10 h-96 bg-slate-200 rounded-md shadow-lg outline-none"
          type="text"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
        />
        <button
          onClick={getSummary}
          className=" bg-cyan-300 p-5 w-1/4 m-auto rounded-md duration-300 hover:bg-cyan-400 hover:shadow-md hover:scale-105"
        >
          Get Summary
        </button>
        <div className="m-10 p-10 max-h-fit bg-slate-200 rounded-md shadow-lg">
          <p>{summary}</p>
          {/* add summary text to above p tag */}
        </div>
      </div>
    </div>
  );
};

export default Home;
