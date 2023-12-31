import React from "react";

interface IProps {
  color?: string;
  className?: string;
}

export const Spinner: React.FC<IProps> = ({
  color = "currentColor",
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M364 28.6C420.7 57 459.6 94.4 485 151l-31.4 15c-20-41-63-84-104.6-104.5"
      >
        <animate
          attributeName="fill"
          values="#333;#eee;#333;#333"
          begin="0s"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="#333"
        d="M494 169c20 60 21 114-1 172l-32.8-11.4c15-43.3 15-104 0-148"
      >
        <animate
          attributeName="fill"
          values="#333;#eee;#333;#333"
          begin="0.125s"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="#333"
        d="M485.4 359.2c-28.3 56.6-65.8 95.5-122.4 121l-15.2-31.4c41.3-20 84.2-63 104.7-104.6"
      >
        <animate
          attributeName="fill"
          values="#333;#eee;#333;#333"
          begin="0.250s"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="#333"
        d="M344.5 488.5c-60 20-114 21-172-1l11.4-33c43.2 15 104 15 148 0"
      >
        <animate
          attributeName="fill"
          values="#333;#eee;#333;#333"
          begin="0.375s"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="#333"
        d="M154.3 482.8c-56.6-28.4-95.5-65.8-121-122.4l31.4-15.2c20 41.3 63 84.2 104.6 104.7"
      >
        <animate
          attributeName="fill"
          values="#333;#eee;#333;#333"
          begin="0.500s"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="#333"
        d="M23.7 342.7c-20-60-21-114 1-172l33 11.4c-15 43.5-15 104 0 148"
      >
        <animate
          attributeName="fill"
          values="#333;#eee;#333;#333"
          begin="0.625s"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="#333"
        d="M31.8 151C60 94.2 97.5 55.3 154 30l15.3 31.3c-41.2 20-84 63-104.6 104.6"
      >
        <animate
          attributeName="fill"
          values="#333;#eee;#333;#333"
          begin="0.750s"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="#333"
        d="M173 21c60-20 114-21 172 1l-11.5 32.8c-43.3-15-104-15-148 0"
      >
        <animate
          attributeName="fill"
          values="#333;#eee;#333;#333"
          begin="0.875s"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
      <path
        fill="#eee"
        d="M197 459v-48s-4-4-33-1c-28 3-62-66-65-69 24-10 43 26 65 38h31s3-44 20-37c17 6-72 1-97-61s19-126 20-115c0 9-17-35-10-46 20-24 50 11 69 15 5 0 18-8 59-7 41 0 55 8 60 6 22-10 51-32 65-17 10 12-1 61-1 49s43 81 6 132c-29 46-95 43-84 46 21 15 14 91 14 115l-22 4v-74c0-9-9-10-9-9v85l-21 1v-86h-10v86l-20-1v-83s-8-1-8 10v72"
      />
    </svg>
  );
};
