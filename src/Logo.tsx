import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export const Logo = (props: LogoProps) => {
  return (
    <svg
      width={138}
      height={120}
      viewBox="0 0 138 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.901 100.377L28.03 74.484 0 66.209 24.291 48.59l35.77 7.474 20.288-32.033L137.207.007 112.648 75.82l25.093 44.045-103.84-19.487zm99.035 15.749L81.684 26.701l-44.846 71.54 96.098 17.885zM35.503 95.038l23.224-36.57-33.101-6.942 9.877 43.512zm75.544-22.423l21.889-67.803-48.85 20.555 26.961 47.248zm-83.553-1.068l-4.27-18.953L6.138 65.14l21.355 6.407z"
        fill="#77D380"
      />
    </svg>
  );
};
