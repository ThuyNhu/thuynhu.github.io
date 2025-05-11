"use client";
import * as React from "react";
import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "lucide-react";
import {DateTime} from "luxon";

export function isDark(datetime: DateTime) {
  return datetime.hour < 6 && datetime.hour >= 18;
}

export default function DateTimeText() {
  const [timeNow, setTimeNow] = useState(DateTime.now());

  useEffect(() => {
    setInterval(() => {
      setTimeNow(DateTime.now());
    }, 1000);
  }, []);

  return (<>
      <div className="flex flex-row gap-2 items-center group/datetime">
        <p>{timeNow.toFormat("HH:mm:ss")}</p>
        {isDark(timeNow)
          ? <SunIcon className="size-4 group-hover/datetime:text-yellow-500 animate-[spin_10s_linear_infinite]"/>
          : <MoonIcon className="size-4 group-hover/datetime:text-blue-500"/>
        }
        <p>{timeNow.toFormat("dd-MM-yyyy")}</p>
      </div>
    </>
  );
}