import React from "react";
import "./Review.css";

const Review: React.FC = () => {
  return (
    <div className="review">
      <div className="max-w-screen-sm max-h-screen-sm">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <label
              htmlFor="C_no"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Course No.
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="C_no"
                id="C_no"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="001xxx"
              />
            </div>
          </div>
          <div className="basis-1/2">
            <div className="block text-sm font-medium leading-6 text-gray-900">
              Course Name
            </div>
            <div className="relative mt-2 rounded-md">Eng 3</div>
          </div>
        </div>
        <div>Star rating</div>
        <div className="flex flex-row">
          <div>
            <label
              htmlFor="C_name"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Course Name
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>66</option>
              <option>65</option>
              <option>64</option>
              <option>63</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="C_name"
              className="text-sm font-medium leading-6 text-gray-900"
            >
              Course Name
            </label>
            <select
              id="currency"
              name="currency"
              className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            >
              <option>66</option>
              <option>65</option>
              <option>64</option>
              <option>63</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
