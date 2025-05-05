import {CookieValueTypes, getCookie} from "cookies-next/client";

export function getFirstVisit(): CookieValueTypes {
  return getCookie("firstVisit");
}