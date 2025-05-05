"use client";
import * as React from "react";
import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "lucide-react";

export function isDay() {
  const now = new Date();
  return now.getHours() >= 6 && now.getHours() < 18;
}

export default function DateTimeText() {
  const [timeNow, setTimeNow] = useState("");

  useEffect(() => {
    setInterval(() => {
      setTimeNow(new Date().toLocaleString());
    }, 1000);
  }, []);

  return (<>
      <div className="flex flex-row gap-4 items-center group/datetime">
        {!isDay()
          ? <SunIcon className="size-5 group-hover/datetime:text-yellow-500 animate-[spin_10s_linear_infinite]"/>
          : <MoonIcon className="size-5 group-hover/datetime:text-blue-500"/>
        }
        <p>{timeNow}</p>
      </div>
    </>
  );
}