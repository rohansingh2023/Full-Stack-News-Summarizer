import { fireEvent, render, screen } from "@testing-library/react";
import Summarizer from "../pages/Summarizer";
import { expect, it, vi } from "vitest";

global.fetch = vi.fn();

async function createSummary({ article, maxL }) {
  return (
    await fetch(`${import.meta.env.VITE_SERVER_URL}/summary`, {
      method: "POST",
      body: JSON.stringify({ article, maxL }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
}

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

test("Article should be rendered", () => {
  render(<Summarizer />);
  const summarizeInp = screen.getByTestId("article");
  expect(summarizeInp).toBeInTheDocument();
});

test("Range should be rendered", () => {
  render(<Summarizer />);
  const summarizeInp = screen.getByTestId("range");
  expect(summarizeInp).toBeInTheDocument();
});

test("Summarize Button should be rendered", () => {
  render(<Summarizer />);
  const summarizeBtn = screen.getByTestId("summarizeBtn");
  expect(summarizeBtn).toBeInTheDocument();
  fireEvent.click(summarizeBtn);
});

test("If Summarize field if empty or not", () => {
  render(<Summarizer />);
  const summarizeInp = screen.getByTestId("article");
  expect(summarizeInp.value).toEqual("");
});

test("Article is summarized properly", async () => {
  const todoListResponse = [{}];

  const todo = {};
  const response = {
    data: "Over the past decade, advancements in technology have revolutionized various industries, and the impact is particularly profound in the field of healthcare. From electronic medical records and telemedicine to artificial intelligence and genomics, innovative technologies have significantly transformed how healthcare is delivered. Overall, these technological advancements are revolutionizing healthcare, enhancing patient care, and paving the way for a future where technology plays a central role in improving health outcomes and transforming the healthcare landscape. Back to Mail Online home.Back to the page you came from. Back To the pageyou came from, back to the pages you came From. Back into the page.",
  };

  fetch.mockResolvedValue(createFetchResponse(response));

  const newTodo = await createSummary({
    article:
      "Over the past decade, advancements in technology have revolutionized various industries, and the impact is particularly profound in the field of healthcare. From electronic medical records and telemedicine to artificial intelligence and genomics, innovative technologies have significantly transformed how healthcare is delivered, improving patient outcomes and streamlining processes. Electronic medical records (EMRs) have replaced traditional paper-based systems, enabling healthcare providers to securely store and access patient information electronically. This transition has enhanced the efficiency of medical record management, allowing for faster retrieval of patient data, reduced errors, and improved coordination of care among multiple healthcare professionals. Telemedicine has also emerged as a valuable tool, leveraging video conferencing and remote monitoring technologies to deliver healthcare services remotely. This has proved especially beneficial for patients in rural areas or those with limited mobility, providing access to quality care without the need for extensive travel. Artificial intelligence (AI) has made significant strides in healthcare, powering applications such as image recognition, natural language processing, and predictive analytics. AI algorithms can analyze medical images, assist in diagnosing diseases, and even predict patient outcomes, supporting healthcare professionals in making more accurate and timely decisions. Genomics, the study of an individuals genetic makeup, has seen tremendous advancements due to technological innovations. Sequencing technologies have become faster and more affordable, enabling personalized medicine based on a patients genetic profile. This has opened new avenues for targeted therapies and precision medicine, tailoring treatments to a patients unique genetic characteristics. Overall, these technological advancements are revolutionizing healthcare, enhancing patient care, and paving the way for a future where technology plays a central role in improving health outcomes and transforming the healthcare landscape.",
    maxL: 200,
  });

  expect(fetch).toHaveBeenCalledWith(
    `${import.meta.env.VITE_SERVER_URL}/summary`,
    {
      method: "POST",
      body: JSON.stringify({
        article:
          "Over the past decade, advancements in technology have revolutionized various industries, and the impact is particularly profound in the field of healthcare. From electronic medical records and telemedicine to artificial intelligence and genomics, innovative technologies have significantly transformed how healthcare is delivered, improving patient outcomes and streamlining processes. Electronic medical records (EMRs) have replaced traditional paper-based systems, enabling healthcare providers to securely store and access patient information electronically. This transition has enhanced the efficiency of medical record management, allowing for faster retrieval of patient data, reduced errors, and improved coordination of care among multiple healthcare professionals. Telemedicine has also emerged as a valuable tool, leveraging video conferencing and remote monitoring technologies to deliver healthcare services remotely. This has proved especially beneficial for patients in rural areas or those with limited mobility, providing access to quality care without the need for extensive travel. Artificial intelligence (AI) has made significant strides in healthcare, powering applications such as image recognition, natural language processing, and predictive analytics. AI algorithms can analyze medical images, assist in diagnosing diseases, and even predict patient outcomes, supporting healthcare professionals in making more accurate and timely decisions. Genomics, the study of an individuals genetic makeup, has seen tremendous advancements due to technological innovations. Sequencing technologies have become faster and more affordable, enabling personalized medicine based on a patients genetic profile. This has opened new avenues for targeted therapies and precision medicine, tailoring treatments to a patients unique genetic characteristics. Overall, these technological advancements are revolutionizing healthcare, enhancing patient care, and paving the way for a future where technology plays a central role in improving health outcomes and transforming the healthcare landscape.",
        maxL: 200,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  expect(newTodo).toStrictEqual(response);
});
