import React, { useState } from "react";
import Header from "../components/header";
import goodImage from "../Assets/Good.jpg";
import sadImage from "../Assets/Sad.png";
import angryImage from "../Assets/Angry.jpg";
import veryGood from "../Assets/Good.png";
import feedbackImg from "../Assets/Feedback.jpg";
import neutralImage from "../Assets/Neutral.jpg";

const Rating = () => {
  const [rating, setRating] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");

  const handleRatingChange = (value: string) => {
    setRating(value);
    if (value === "Satisfied" || value === "Very Satisfied") {
      setComment("");
    }
  };

  return (
    <div className="max-h-max">
      <Header />
      <div className="bg-white rounded-lg shadow-2xl p-4 mt-10 mx-3 h-[500px]">
        <h2 className="text-2xl font-bold mb-4">
          How was your overall Experience
        </h2>
        <div className="flex items-center space-x-2 pr-[-500px] ">
          {[
            "Very Dissatisfied",
            "Dissatisfied",
            "Neutral",
            "Satisfied",
            "Very Satisfied",
          ].map((value) => (
            <div key={value} className="flex flex-col items-center ">
              <button
                onClick={() => handleRatingChange(value)}
                className={`${
                  rating === value ? "text-blue-500" : "text-gray-800 text-sm"
                } px-4 py-2 focus:outline-none border border-gray-300 rounded-full flex flex-col items-center`}
              >
                <img
                  src={
                    value === "Very Dissatisfied"
                      ? angryImage
                      : value === "Dissatisfied"
                      ? sadImage
                      : value === "Neutral"
                      ? neutralImage
                      : value === "Satisfied"
                      ? goodImage
                      : value === "Very Satisfied"
                      ? veryGood
                      : ""
                  }
                  alt={`Rating ${value}`}
                  className="w-12 h-12"
                />
                {value}
              </button>
              {rating === value &&
                (value === "Neutral" ||
                  value === "Dissatisfied" ||
                  value === "Very Dissatisfied") && <p>{value}</p>}
            </div>
          ))}
        </div>
        {(rating === "Dissatisfied" ||
          rating === "Very Dissatisfied" ||
          rating === "Neutral") && (
          <div className="mt-4">
            <textarea
              placeholder="Please provide your comments..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        )}
        <button
          onClick={() => {
            // You can handle the form submission here
            console.log("Rating:", rating);
            console.log("Comment:", comment);
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Rating;
