import { FunctionComponent } from 'react';
import { IconProps } from '@/lib/interface';

const CV: FunctionComponent<IconProps> = ({ size, color, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width={size}
    height={size}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <g transform="translate(0 24) scale(1 -1)">
      <g fill="none">
        <path
          d="M17.75 2.007a2.25 2.25 0 0 1 2.245 2.096l.005.154v15.498A2.25 2.25 0 0 1 17.904 22l-.154.005H6.25a2.25 2.25 0 0 1-2.245-2.096L4 19.755V4.257a2.25 2.25 0 0 1 2.096-2.245l.154-.005h11.5zM7.75 7a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5zM7 11.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75zM7.75 15a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5z"
          fill={color}
        />
      </g>
    </g>
  </svg>
);

export default CV;
