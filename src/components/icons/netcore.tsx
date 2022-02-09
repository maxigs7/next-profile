import { ComponentPropsWithoutRef } from 'react';

const NetCoreIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 75 75"
  >
    <g clipPath="url(#netcore-icon)">
      <path
        fill="#5C2D91"
        d="M37.5 75C58.21 75 75 58.21 75 37.5S58.21 0 37.5 0 0 16.79 0 37.5 16.79 75 37.5 75Z"
      />
      <path
        fill="#fff"
        d="M11.508 10.547a37.5 37.5 0 1 0 52.945 52.945L11.508 10.547Z"
        opacity=".1"
      />
      <path
        fill="#fff"
        d="M8.672 43.652A1.581 1.581 0 0 1 7.5 43.16a1.617 1.617 0 0 1-.48-1.172 1.641 1.641 0 0 1 .48-1.172 1.57 1.57 0 0 1 1.172-.504 1.606 1.606 0 0 1 1.172.504 1.63 1.63 0 0 1 .492 1.172 1.603 1.603 0 0 1-.492 1.172 1.618 1.618 0 0 1-1.172.492ZM31.957 43.36h-3.07l-10.98-17.04a7.032 7.032 0 0 1-.68-1.336h-.094c.104.973.143 1.952.117 2.93V43.36h-2.496V21.996H18l10.688 16.735c.445.695.734 1.171.867 1.43h.058a22.59 22.59 0 0 1-.152-3.142V21.997h2.496V43.36ZM48.855 43.36H37.5V21.995h10.828v2.262h-8.273v7.101h7.71v2.25h-7.71v7.407h8.812l-.011 2.343ZM65.625 24.258h-6.21v19.101h-2.497V24.258h-6.14v-2.262h14.847v2.262Z"
      />
      <path
        fill="#F2F2F2"
        d="M30.61 57.89c-.847.41-1.78.608-2.72.575a4.38 4.38 0 0 1-3.363-1.348 4.993 4.993 0 0 1-1.265-3.515 5.229 5.229 0 0 1 1.418-3.82 4.829 4.829 0 0 1 3.61-1.454c.8-.027 1.599.112 2.343.41v1.172a4.687 4.687 0 0 0-2.344-.586 3.588 3.588 0 0 0-2.754 1.172 4.266 4.266 0 0 0-1.055 3.023 4.066 4.066 0 0 0 .985 2.872 3.352 3.352 0 0 0 2.59 1.066 4.85 4.85 0 0 0 2.566-.656l-.012 1.09ZM35.402 58.465a3.259 3.259 0 0 1-2.496-1.043 3.645 3.645 0 0 1-.925-2.613 3.796 3.796 0 0 1 .972-2.766 3.516 3.516 0 0 1 2.613-.996 3.152 3.152 0 0 1 2.45.973c.623.75.937 1.71.879 2.683a3.773 3.773 0 0 1-.95 2.695 3.327 3.327 0 0 1-2.543 1.067Zm.082-6.41a2.145 2.145 0 0 0-1.71.738 3.035 3.035 0 0 0-.633 2.039c-.041.712.184 1.414.633 1.969a2.166 2.166 0 0 0 1.71.726 2.062 2.062 0 0 0 1.676-.703 3.07 3.07 0 0 0 .586-2.015 3.117 3.117 0 0 0-.586-2.028 2.05 2.05 0 0 0-1.676-.726ZM44.367 52.406a1.383 1.383 0 0 0-.855-.222 1.441 1.441 0 0 0-1.172.68 3.14 3.14 0 0 0-.48 1.85v3.587h-1.172v-7.032h1.171v1.465a2.46 2.46 0 0 1 .739-1.172c.305-.265.697-.41 1.101-.41.227-.01.453.022.668.094v1.16ZM51.234 55.078h-4.957c-.033.655.18 1.3.598 1.805a2.18 2.18 0 0 0 1.664.633 3.516 3.516 0 0 0 2.18-.785v1.054a4.079 4.079 0 0 1-2.45.668 2.976 2.976 0 0 1-2.343-.96 3.926 3.926 0 0 1-.856-2.696 3.844 3.844 0 0 1 .926-2.672 2.99 2.99 0 0 1 2.344-1.031 2.65 2.65 0 0 1 2.133.89c.54.712.805 1.593.75 2.485l.011.61Zm-1.172-.95a2.344 2.344 0 0 0-.468-1.51 1.605 1.605 0 0 0-1.29-.54 1.816 1.816 0 0 0-1.347.574 2.59 2.59 0 0 0-.691 1.489l3.797-.012Z"
      />
    </g>
    <defs>
      <clipPath id="netcore-icon">
        <path fill="#fff" d="M0 0h75v75H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default NetCoreIcon;
