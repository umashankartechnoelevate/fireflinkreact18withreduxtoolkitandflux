import React from "react";
import { TextField } from "@mui/material";

const TailWindCss = () => {
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <h1 class="bg-blue-500 text-white px-8 hover:bg-red-500">
          {" "}
          TailWindCss Module
        </h1>
      </div>
      <div class="bg-blue-100">
        <h1>Form</h1>
        <form action="">
          <input type="email" class="peer" />
          <p class="invisible peer-invalid:visible text-red-500">
            please provide a valid email address
          </p>
        </form>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button type="button" class="bg-gray-300 ..." disabled>
          <svg
            class="motion-reduce:hidden animate-spin ..."
            viewBox="24 24 24 24"
          ></svg>
          Processing...
        </button>
      </div>

      {/* Responsive Design using tailwind css */}
      <div class="container mx-auto flex space-x-4 flex-wrap">
        <div
          class="w-full lg:w-1/4 md:w-1/3"
          style={{
            border: "1px solid red",
            height: "100px",
            backgroundColor: "yellow",
          }}
        ></div>
        <div
          class="w-full lg:w-1/4"
          style={{
            border: "1px solid red",
            height: "100px",
            backgroundColor: "yellow",
          }}
        ></div>
        <div
          class="w-full lg:w-1/4"
          style={{
            border: "1px solid red",
            height: "100px",
            backgroundColor: "yellow",
          }}
        ></div>
      </div>
    </>
  );
};

export default TailWindCss;
