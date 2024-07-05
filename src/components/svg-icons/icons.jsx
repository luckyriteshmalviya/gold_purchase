import * as React from "react";

export const ProfileIcon = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 24;
  const _color = props.color && props.color !== "" ? props.color : "#ffffff";

  return (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 19 20"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      width={_size}
      height={_size}
      stroke={_color}
    >
      <path d="M17.4336 18.8869V16.8869C17.4336 15.826 17.0122 14.8086 16.262 14.0585C15.5119 13.3083 14.4945 12.8869 13.4336 12.8869H5.43359C4.37273 12.8869 3.35531 13.3083 2.60517 14.0585C1.85502 14.8086 1.43359 15.826 1.43359 16.8869V18.8869M13.4336 4.8869C13.4336 7.09604 11.6427 8.8869 9.43359 8.8869C7.22445 8.8869 5.43359 7.09604 5.43359 4.8869C5.43359 2.67776 7.22445 0.886902 9.43359 0.886902C11.6427 0.886902 13.4336 2.67776 13.4336 4.8869Z" />
    </svg>
  );
});

export const AngleLeftCircle = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 30;
  const _color = props.color && props.color !== "" ? props.color : "#2b2b2b";

  return (<svg fill={_color} className={(props.className || "")} viewBox="0 0 24 24" width={_size} height={_size}>
    <path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM8.586,13.414a2,2,0,0,1,0-2.828l4.673-4.673,1.414,1.414L10,12l4.711,4.712L13.3,18.126Z" />
  </svg>)
})

export const BackArrow = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 24;
  const _color = props.color && props.color !== "" ? props.color : "#ffffff";

  return (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 19 20"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      width={_size}
      height={_size}
      stroke={_color}
    >
      <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg>
  );
});

export const AppLogoIcon = React.memo((props) => {
  const _width = props.width && props.width > 0 ? props.width : 80;
  const _height = props.height && props.height > 0 ? props.height : 25;
  const _color = props.color && props.color !== "" ? props.color : "#C4C4C4";
  return (
    <svg width={_width} height={_height} fill="none" viewBox="0 0 90 25">
      <path
        fill={_color}
        d="M.722 11.558h3.991c.214 1.254 1.502 2.113 3.154 2.113 1.593 0 2.696-.736 2.696-1.808 0-2.97-10.23.398-10.23-6.494C.333 2.275 3.273.092 7.5.092a11.597 11.597 0 0 1 4.033.674 4.478 4.478 0 0 1 2.878 4.195H10.47C10.376 4.074 9.182 3.46 7.59 3.46c-1.499 0-2.57.614-2.57 1.533 0 2.725 10.23-.24 10.23 6.34 0 3.37-3.119 5.696-7.597 5.696a10.163 10.163 0 0 1-3.634-.65 5.172 5.172 0 0 1-3.298-4.821ZM17.906 10.584V.721h4.87v8.7c0 1.96 1.163 3.336 2.878 3.336s2.91-1.345 2.91-3.245V.72h4.869v16.325h-4.716V14.29c-1.132 1.68-2.787 2.756-4.84 2.756-3.46 0-5.971-2.725-5.971-6.462ZM53.925 8.502v8.115c0 4.442-3.43 7.474-8.453 7.474a11.666 11.666 0 0 1-3.893-.643 6.774 6.774 0 0 1-4.44-6.402h4.317c.307 1.777 1.869 3.37 3.838 3.37 2.205 0 3.769-1.655 3.769-3.982v-1.501a6.858 6.858 0 0 1-4.534 1.715c-4.534 0-7.916-3.461-7.916-8.156 0-4.871 3.678-8.395 8.76-8.395 4.968.012 8.552 3.545 8.552 8.405Zm-12.435.091c0 2.399 1.621 4.078 3.888 4.078s3.86-1.624 3.86-4.078-1.562-4.195-3.889-4.195c-2.257 0-3.86 1.715-3.86 4.195ZM74.17 8.593v8.453h-4.471v-2.48a6.671 6.671 0 0 1-5.33 2.48c-4.558 0-7.72-3.461-7.72-8.453 0-4.932 3.615-8.484 8.73-8.484 5.114 0 8.79 3.552 8.79 8.484Zm-12.651 0c0 2.42 1.624 4.164 3.89 4.164 2.267 0 3.891-1.744 3.891-4.164s-1.623-4.195-3.89-4.195c-2.267 0-3.891 1.744-3.891 4.195ZM89.699 1.335v4.408H87.3c-.276-.796-1.163-1.345-2.113-1.345-1.562 0-2.665 1.53-2.665 3.735v8.913h-4.87V.721h4.685v2.022C83.227 1.15 84.757.14 86.535.14c1.264 0 2.55.49 3.164 1.195Z"
      />
    </svg>
  );
});

export const WaSupportIcon = React.memo((props) => {
  return (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 34 35"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      width="36"
      height="36"
    >
      <path
        d="M0.773438 34.3141L3.12597 25.7627C1.68048 23.254 0.921375 20.4088 0.925087 17.5135C0.908346 8.38993 8.3175 0.980774 17.4234 0.980774C21.8429 0.980774 25.9925 2.69422 29.1171 5.81977C30.6572 7.35187 31.8779 9.17437 32.7086 11.1817C33.5392 13.189 33.9632 15.3412 33.9561 17.5135C33.9561 26.6194 26.5469 34.0285 17.4401 34.0285C14.6681 34.0285 11.963 33.3392 9.5435 32.0128L0.773438 34.3141ZM9.9305 29.0389L10.4347 29.3412C12.5509 30.5934 14.9644 31.2548 17.4234 31.2565C24.9842 31.2565 31.1506 25.0911 31.1506 17.5293C31.1506 13.867 29.7227 10.4067 27.1348 7.81977C25.8622 6.53999 24.349 5.52471 22.6822 4.83246C21.0154 4.1402 19.2282 3.78465 17.4234 3.78629C9.84581 3.78727 3.68136 9.95271 3.68136 17.5145C3.68136 20.1014 4.40416 22.6391 5.78181 24.8232L6.10086 25.3441L4.70648 30.4175L9.93149 29.0399L9.9305 29.0389Z"
        fill="#c4c4c4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.3072 10.5918C13.0048 9.90249 12.6691 9.88575 12.3835 9.88575C12.1314 9.86901 11.8616 9.86901 11.576 9.86901C11.3081 9.86901 10.8542 9.96945 10.4682 10.3899C10.0812 10.8094 9.02356 11.8011 9.02356 13.8336C9.02356 15.867 10.5016 17.8326 10.7035 18.1014C10.9044 18.3702 13.5593 22.6706 17.7601 24.3348C21.254 25.7124 21.96 25.4436 22.7163 25.3589C23.4716 25.2752 25.1526 24.3683 25.5051 23.3934C25.8409 22.4362 25.8409 21.5962 25.7404 21.4278C25.64 21.2604 25.3534 21.159 24.9507 20.9404C24.5302 20.7395 22.5145 19.7311 22.1284 19.5962C21.7414 19.4623 21.4726 19.3953 21.2038 19.7981C20.9349 20.2186 20.1452 21.1423 19.8941 21.4111C19.6577 21.6799 19.4066 21.7134 19.0029 21.5115C18.5834 21.3107 17.256 20.8734 15.6764 19.4623C14.4495 18.3693 13.6262 17.0093 13.3741 16.6066C13.1398 16.1861 13.3406 15.9675 13.5593 15.7656C13.7444 15.5815 13.9797 15.2791 14.1816 15.0438C14.3825 14.8075 14.4495 14.6233 14.6011 14.3545C14.735 14.0856 14.6681 13.8336 14.5676 13.6327C14.4662 13.4475 13.6774 11.4141 13.3072 10.5908V10.5918Z"
        fill="#c4c4c4"
      />
    </svg>
  );
});

export const GiftPresentIcon = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 38;
  const _color = props.color && props.color !== "" ? props.color : "#5E5E5E";
  return (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 33 33"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      width={_size}
      height={_size}
      stroke={_color}
    >
      <path d="M24.2 16.0889V25.0889H9.8V16.0889M17 25.0889V11.5889M17 11.5889H12.95C12.3533 11.5889 11.781 11.3518 11.359 10.9299C10.9371 10.5079 10.7 9.9356 10.7 9.33887C10.7 8.74213 10.9371 8.16983 11.359 7.74788C11.781 7.32592 12.3533 7.08887 12.95 7.08887C16.1 7.08887 17 11.5889 17 11.5889ZM17 11.5889H21.05C21.6467 11.5889 22.219 11.3518 22.641 10.9299C23.0629 10.5079 23.3 9.9356 23.3 9.33887C23.3 8.74213 23.0629 8.16983 22.641 7.74788C22.219 7.32592 21.6467 7.08887 21.05 7.08887C17.9 7.08887 17 11.5889 17 11.5889ZM8 11.5889H26V16.0889H8V11.5889Z" />
    </svg>
  );
});

export const ArrowRightIcon = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 18;
  const _color = props.color && props.color !== "" ? props.color : "#FFFFFF";

  return (
    <svg
      strokeWidth="1.25"
      viewBox="0 0 6 12"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      width={_size}
      height={_size}
      stroke={_color}
    >
      <path d="M0.931641 1.31714L5.06942 5.95047L0.93164 10.5838" />
    </svg>
  );
});

export const BuyGoldIcon = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 30;
  return (
    <svg
        strokeWidth="1.5"
        height={_size}
        width={_size}
        viewBox="0 0 33 33"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        stroke="currentColor"
    >
      <path d="M7.20312 14.7906H25.5365M8.86979 9.16565H23.8698C24.7903 9.16565 25.5365 10.0051 25.5365 11.0406V22.2906C25.5365 23.3262 24.7903 24.1656 23.8698 24.1656H8.86979C7.94932 24.1656 7.20312 23.3262 7.20312 22.2906V11.0406C7.20312 10.0051 7.94932 9.16565 8.86979 9.16565Z"/>
    </svg>
)
});

export const AutoInvestIcon = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 24;

  return (<svg
      viewBox="0 0 24 24"
      height={_size}
      width={_size}
      className="text-black"
      fill="currentColor"
  >
    <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19V7Z" />
  </svg>)
})

export const AccessPointNetworkIcon = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 16;
  const _className = props.className ? props.className : "";

  return (<svg
      viewBox="0 0 24 24"
      height={_size}
      width={_size}
      className={_className}
  >
    <path d="M4.93,3.93C3.12,5.74 2,8.24 2,11C2,13.76 3.12,16.26 4.93,18.07L6.34,16.66C4.89,15.22 4,13.22 4,11C4,8.79 4.89,6.78 6.34,5.34L4.93,3.93M19.07,3.93L17.66,5.34C19.11,6.78 20,8.79 20,11C20,13.22 19.11,15.22 17.66,16.66L19.07,18.07C20.88,16.26 22,13.76 22,11C22,8.24 20.88,5.74 19.07,3.93M7.76,6.76C6.67,7.85 6,9.35 6,11C6,12.65 6.67,14.15 7.76,15.24L9.17,13.83C8.45,13.11 8,12.11 8,11C8,9.89 8.45,8.89 9.17,8.17L7.76,6.76M16.24,6.76L14.83,8.17C15.55,8.89 16,9.89 16,11C16,12.11 15.55,13.11 14.83,13.83L16.24,15.24C17.33,14.15 18,12.65 18,11C18,9.35 17.33,7.85 16.24,6.76M12,9A2,2 0 0,0 10,11A2,2 0 0,0 12,13A2,2 0 0,0 14,11A2,2 0 0,0 12,9M11,15V19H10A1,1 0 0,0 9,20H2V22H9A1,1 0 0,0 10,23H14A1,1 0 0,0 15,22H22V20H15A1,1 0 0,0 14,19H13V15H11Z" />
  </svg>)
})

export const ArrowDown = React.memo((props) => {
  return (<svg
      className={props.className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
  >
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
    />
  </svg>)
})

export const InfoIcon = React.memo((props) => {
  const _size = props.size && props.size > 0 ? props.size : 24;
  const _className = props.className ? props.className : "";
  return (<svg
      viewBox="0 0 24 24"
      height={_size}
      width={_size}
      className={_className}
      fill="currentColor"
  >
    <path d="M11,9H13V7H11M12,20A8,8 0 1,0 4,12A8,8 0 0,0 12,20M13,17H11V11H13V17Z" />
  </svg>)
})