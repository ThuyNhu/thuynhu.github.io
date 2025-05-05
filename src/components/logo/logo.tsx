import {SVGProps} from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (<>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" {...props}>
      <path fill="currentColor"
            d="M60,120C26.862,120,0,93.138,0,60H60V0h60V60h60c0,33.138-26.868,60-60,60h60c0,33.1379-26.868,60-60,60s-60-26.8621-60-60C26.862,120,0,146.868,0,180H60v-60"/>
    </svg>
  </>);
}
