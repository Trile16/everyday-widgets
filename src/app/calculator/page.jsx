"use client";

import { useState } from "react";
import Link from "next/link";

export default function Calculator() {
  const [calculation, setCalculation] = useState([]);
  const [accCalc, setAccCalc] = useState("");

  return (
    <div className="bg-gradient-to-r from-blue to-purple rounded-xl p-8 w-5/6 max-w-xl h-[40rem] flex flex-col justify-between items-center">
      <h1 className="text-4xl/8 p-8 text-center">Calculator</h1>
      <div className="h-5/6 w-8/12 bg-gray-light rounded-xl flex flex-col justify-center items-center">
        <h2 className="h-12 w-5/6 bg-gray flex justify-end items-center text-5xl">
          {accCalc}
        </h2>
        <br />
        <div className="w-5/6 text-center">
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 7]);
              setAccCalc([...calculation, 7].join(""));
            }}
          >
            7
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 8]);
              setAccCalc([...calculation, 8].join(""));
            }}
          >
            8
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 9]);
              setAccCalc([...calculation, 9].join(""));
            }}
          >
            9
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              if (
                calculation[calculation.length - 1] != "+" &&
                calculation[calculation.length - 1] != "-" &&
                calculation[calculation.length - 1] != "*" &&
                calculation[calculation.length - 1] != "/"
              ) {
                setCalculation([...calculation, "+"]);
                setAccCalc([...calculation, "+"].join(""));
              }
            }}
          >
            +
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 4]);
              setAccCalc([...calculation, 4].join(""));
            }}
          >
            4
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 5]);
              setAccCalc([...calculation, 5].join(""));
            }}
          >
            5
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 6]);
              setAccCalc([...calculation, 6].join(""));
            }}
          >
            6
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              if (
                calculation[calculation.length - 1] != "+" &&
                calculation[calculation.length - 1] != "-" &&
                calculation[calculation.length - 1] != "*" &&
                calculation[calculation.length - 1] != "/"
              ) {
                setCalculation([...calculation, "-"]);
                setAccCalc([...calculation, "-"].join(""));
              }
            }}
          >
            -
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 1]);
              setAccCalc([...calculation, 1].join(""));
            }}
          >
            1
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 2]);
              setAccCalc([...calculation, 2].join(""));
            }}
          >
            2
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 3]);
              setAccCalc([...calculation, 3].join(""));
            }}
          >
            3
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              if (
                calculation[calculation.length - 1] != "+" &&
                calculation[calculation.length - 1] != "-" &&
                calculation[calculation.length - 1] != "*" &&
                calculation[calculation.length - 1] != "/"
              ) {
                setCalculation([...calculation, "*"]);
                setAccCalc([...calculation, "*"].join(""));
              }
            }}
          >
            *
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, 0]);
              setAccCalc([...calculation, 0].join(""));
            }}
          >
            0
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([...calculation, "."]);
              setAccCalc([...calculation, "."].join(""));
            }}
          >
            .
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              if (
                calculation[calculation.length - 1] != "+" &&
                calculation[calculation.length - 1] != "-" &&
                calculation[calculation.length - 1] != "*" &&
                calculation[calculation.length - 1] != "/"
              ) {
                setCalculation([...calculation, "/"]);
                setAccCalc([...calculation, "/"].join(""));
              }
            }}
          >
            /
          </button>
          <button
            className="bg-purple text-xl w-12 h-12 m-2 rounded-lg"
            onClick={() => {
              setCalculation([eval(accCalc)]);
              setAccCalc(eval(accCalc));
            }}
          >
            =
          </button>
        </div>
        <br />
        <button
          className="bg-green text-xl w-20 h-12 rounded-lg"
          onClick={() => {
            setCalculation([]);
            setAccCalc("");
          }}
        >
          CLEAR
        </button>
      </div>
      <Link
        href="/"
        className="bg-blue rounded-xl w-20 text-center border-2 transition hover:border-green"
      >
        Home
      </Link>
    </div>
  );
}
