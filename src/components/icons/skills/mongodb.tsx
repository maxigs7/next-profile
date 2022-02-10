import { ComponentPropsWithoutRef } from 'react';

const MongoDbIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 279 75"
  >
    <path
      d="M33.61 30.085C29.7825 13.2 21.805 8.70499 19.77 5.52749C18.9309 4.12772 18.1875 2.67272 17.545 1.17249C17.4375 2.67249 17.24 3.61749 15.965 4.75499C13.405 7.03749 2.5325 15.8975 1.6175 35.0825C0.764996 52.97 14.7675 64 16.6175 65.14C18.04 65.84 19.7725 65.155 20.6175 64.5125C27.3675 59.88 36.59 47.53 33.6175 30.085"
      fill="#10AA50"
    />
    <path
      d="M18.125 55.615C17.7725 60.0425 17.52 62.615 16.625 65.145C16.625 65.145 17.2125 69.36 17.625 73.825H19.085C19.4333 70.6808 19.965 67.5596 20.6775 64.4775C18.7875 63.5475 18.1975 59.5 18.125 55.615Z"
      fill="#B8C4C2"
    />
    <path
      d="M20.675 64.48C18.765 63.5975 18.2125 59.465 18.1275 55.615C18.5999 49.2641 18.7375 42.8928 18.54 36.5275C18.44 33.1875 18.5875 5.59249 17.7175 1.55249C18.3126 2.9208 18.9983 4.24791 19.77 5.52499C21.805 8.70499 29.785 13.2 33.61 30.085C36.59 47.5 27.4175 59.8175 20.675 64.48Z"
      fill="#12924F"
    />
    <path
      d="M272.425 58.3751C271.607 58.375 270.808 58.1331 270.127 57.6799C269.446 57.2266 268.915 56.5822 268.599 55.8277C268.283 55.0732 268.198 54.2422 268.353 53.4393C268.509 52.6364 268.898 51.8973 269.473 51.3151C270.047 50.7328 270.78 50.3333 271.581 50.1668C272.382 50.0004 273.214 50.0744 273.973 50.3795C274.731 50.6846 275.383 51.2072 275.846 51.8817C276.308 52.5561 276.561 53.3523 276.572 54.17C276.587 54.7214 276.49 55.2702 276.288 55.7833C276.086 56.2964 275.782 56.7633 275.394 57.156C275.007 57.5487 274.544 57.8591 274.034 58.0686C273.524 58.2781 272.976 58.3823 272.425 58.3751ZM272.425 50.455C271.678 50.4501 270.946 50.667 270.322 51.0784C269.698 51.4897 269.21 52.0769 268.921 52.7657C268.631 53.4545 268.552 54.2137 268.694 54.9474C268.836 55.681 269.192 56.356 269.718 56.8869C270.244 57.4177 270.916 57.7805 271.648 57.9293C272.38 58.0782 273.14 58.0063 273.832 57.7229C274.523 57.4394 275.115 56.9572 275.532 56.3372C275.949 55.7172 276.173 54.9873 276.175 54.24C276.185 53.7433 276.094 53.2496 275.91 52.7883C275.725 52.327 275.45 51.9074 275.1 51.5544C274.751 51.2014 274.334 50.9223 273.874 50.7334C273.415 50.5446 272.922 50.4499 272.425 50.455ZM273.425 56.85L272.355 54.5425H271.492V56.85H270.865V51.6H272.412C273.565 51.6 274.045 52.1 274.045 53.0675C274.045 53.8375 273.682 54.3175 273.007 54.465L274.112 56.8425L273.425 56.85ZM271.517 54H272.425C273.16 54 273.44 53.75 273.44 53.08C273.44 52.41 273.172 52.1825 272.345 52.1825H271.517V54Z"
      fill="#21313C"
    />
    <path
      d="M210.697 54.595C211.82 55.4925 214.062 55.8625 216.04 55.8625C218.602 55.8625 221.115 55.3875 223.57 53.17C226.07 50.8975 227.79 47.42 227.79 41.8675C227.79 36.5325 225.76 32.2025 221.595 29.6675C219.245 28.19 216.2 27.6075 212.727 27.6075C211.727 27.6075 210.697 27.66 210.112 27.925C209.873 28.1144 209.703 28.3783 209.63 28.675C209.525 29.625 209.525 36.86 209.525 41.1375C209.525 45.5225 209.525 51.6375 209.63 52.3875C209.685 53.0225 210.005 54.1375 210.697 54.605V54.595ZM200.037 25.2325C200.945 25.2325 204.395 25.39 206 25.39C209 25.39 211.072 25.2325 216.68 25.2325C221.38 25.2325 225.335 26.5 228.162 28.9275C231.582 31.8875 233.412 36.005 233.412 41.0225C233.412 48.1525 230.162 52.2725 226.895 54.595C223.645 57.025 219.417 58.3975 213.395 58.3975C210.19 58.3975 204.687 58.2925 200.095 58.24H200C199.785 57.8175 200.392 56.17 200.767 56.1275C202.017 55.9875 202.347 55.9375 202.922 55.7C203.892 55.3025 204.12 54.8075 204.227 53.065C204.387 49.79 204.335 45.8825 204.335 41.445C204.335 38.2775 204.387 32.0975 204.282 30.1425C204.12 28.5075 203.43 28.085 202.032 27.7675C201.041 27.557 200.04 27.3985 199.032 27.2925C198.927 26.975 199.747 25.5425 200.015 25.2325"
      fill="#21313C"
    />
    <path
      d="M246.65 27.9125C246.438 27.965 246.17 28.495 246.17 28.7575C246.115 30.66 246.063 35.6225 246.063 39.055C246.076 39.1206 246.109 39.1808 246.156 39.2279C246.204 39.275 246.264 39.3071 246.33 39.32C247.023 39.3725 248.733 39.4275 250.175 39.4275C252.205 39.4275 253.38 39.1625 254.02 38.845C255.73 38 256.52 36.15 256.52 34.145C256.52 29.55 253.315 27.8075 248.563 27.8075C247.92 27.7993 247.278 27.8344 246.64 27.9125H246.65ZM258.765 49.0375C258.765 44.39 255.345 41.75 249.095 41.75C248.83 41.75 246.845 41.6975 246.373 41.8025C246.213 41.855 246.053 41.96 246.053 42.0675C246.053 45.395 245.998 50.7275 246.16 52.84C246.268 53.7375 246.91 55.005 247.708 55.375C248.563 55.85 250.485 55.955 251.82 55.955C255.505 55.955 258.765 53.8975 258.765 49.0375ZM237 25.325C237.483 25.325 238.903 25.4825 242.535 25.4825C245.953 25.4825 248.73 25.3775 252.035 25.3775C256.148 25.3775 261.808 26.8575 261.808 32.9825C261.808 35.9825 259.673 38.4225 256.895 39.585C256.735 39.6375 256.735 39.7425 256.895 39.795C260.848 40.795 264.318 43.2275 264.318 47.875C264.318 52.4175 261.488 55.27 257.375 57.065C254.875 58.175 251.768 58.5425 248.625 58.5425C246.223 58.5425 239.783 58.2925 236.203 58.3325C235.828 58.175 236.545 56.4825 236.865 56.22C237.685 56.1948 238.499 56.0672 239.288 55.84C240.568 55.525 240.72 55.1125 240.88 53.21C240.988 51.5725 240.988 45.71 240.988 41.5375C240.988 35.8325 241.043 31.98 240.988 30.0775C240.935 28.6 240.4 28.1225 239.385 27.86C238.585 27.7 237.25 27.5425 236.183 27.385C235.915 27.12 236.738 25.535 237.003 25.325"
      fill="#21313C"
    />
    <path
      d="M45.4375 58.375C45.2999 58.037 45.2443 57.6712 45.275 57.3075C45.263 57.0596 45.3192 56.8132 45.4375 56.595C46.1283 56.4954 46.8128 56.356 47.4875 56.1775C48.4325 55.9425 48.7875 55.4275 48.8425 54.2225C48.9975 51.375 49.0075 46.0325 48.9525 42.2775V42.1675C48.9525 41.7625 48.9525 41.2125 48.4525 40.825C47.5737 40.2737 46.6196 39.8526 45.62 39.575C45.1725 39.4425 44.925 39.2075 44.9375 38.9325C44.95 38.6575 45.2325 38.3325 45.815 38.2175C47.3625 38.06 51.4175 37.0925 53.01 36.3575C53.174 36.5712 53.25 36.8395 53.2225 37.1075C53.2225 37.2725 53.1975 37.4475 53.18 37.6275C53.135 38.1575 53.085 38.76 53.085 39.36C53.0948 39.4329 53.1247 39.5016 53.1714 39.5584C53.2182 39.6152 53.2798 39.6578 53.3495 39.6814C53.4191 39.7051 53.494 39.7088 53.5656 39.6922C53.6372 39.6756 53.7028 39.6393 53.755 39.5875C56.7875 37.21 59.505 36.3625 60.8975 36.3625C63.19 36.3625 64.975 37.4575 66.3575 39.7125C66.3892 39.7669 66.4343 39.8123 66.4886 39.8443C66.5429 39.8762 66.6045 39.8937 66.6675 39.895C66.7247 39.8945 66.781 39.8801 66.8315 39.8531C66.882 39.8261 66.9252 39.7873 66.9575 39.74C69.745 37.625 72.5075 36.3625 74.3575 36.3625C78.7274 36.3625 81.3399 39.635 81.3399 45.1125C81.3399 46.6875 81.3249 48.685 81.3099 50.5475C81.2974 52.1825 81.2849 53.715 81.2849 54.775C81.2849 55.025 81.6299 55.745 82.1474 55.8875C82.7874 56.2 83.7099 56.36 84.8774 56.56H84.9224C85.0099 56.875 84.8249 58.0975 84.6474 58.3475C84.3574 58.3475 83.9574 58.3225 83.4574 58.2975C82.5499 58.2525 81.3049 58.19 79.8574 58.19C76.9524 58.19 75.435 58.245 73.985 58.34C73.875 57.9775 73.8375 56.8075 73.97 56.5625C74.5704 56.4686 75.1648 56.3392 75.75 56.175C76.6749 55.87 76.9424 55.45 76.9999 54.2225C77.0224 53.35 77.1899 45.6625 76.8925 43.8375C76.6175 41.945 75.1924 39.73 72.075 39.73C70.9175 39.73 69.05 40.2125 67.27 41.5625C67.1595 41.6876 67.0975 41.8481 67.095 42.015V42.0525C67.305 43.0375 67.305 44.1875 67.305 45.925C67.305 46.925 67.305 47.9675 67.2925 49.01C67.28 51.13 67.27 53.13 67.305 54.6425C67.305 55.6725 67.9275 55.92 68.43 56.1175C68.7025 56.1775 68.9175 56.23 69.135 56.28C69.5525 56.3825 69.9875 56.4875 70.635 56.59C70.7308 57.0292 70.7222 57.4848 70.61 57.92C70.5835 58.0834 70.5193 58.2383 70.4225 58.3725C68.8075 58.3175 67.15 58.27 64.7575 58.27C64.0325 58.27 62.85 58.3 61.805 58.3275C60.9575 58.35 60.1575 58.3725 59.7025 58.375C59.5794 58.0847 59.5247 57.7699 59.5425 57.455C59.5169 57.1584 59.575 56.8605 59.71 56.595L60.3525 56.4775C60.9125 56.3775 61.3975 56.2925 61.8525 56.1775C62.6425 55.9275 62.94 55.4975 62.9975 54.49C63.1525 52.14 63.2725 45.3675 62.94 43.6725C62.375 40.9525 60.8275 39.5725 58.3375 39.5725C56.88 39.5725 55.0375 40.275 53.5325 41.4025C53.3877 41.5435 53.2737 41.7128 53.1975 41.9C53.1214 42.0871 53.0848 42.288 53.09 42.49C53.09 43.2975 53.09 44.2575 53.09 45.2875C53.09 48.6875 53.0675 52.92 53.15 54.75C53.2 55.315 53.4 55.985 54.4575 56.23C54.69 56.2975 55.09 56.3625 55.555 56.44C55.8225 56.485 56.115 56.5325 56.4175 56.5875C56.5136 57.1862 56.4648 57.7992 56.275 58.375C55.81 58.375 55.2375 58.345 54.5825 58.3175C53.5825 58.2725 52.3325 58.2175 50.92 58.2175C49.25 58.2175 48.0875 58.2725 47.155 58.3175C46.5275 58.3475 45.985 58.3725 45.4425 58.375"
      fill="#21313C"
    />
    <path
      d="M99.0501 38.6225C98.1477 38.6038 97.2602 38.8535 96.5 39.34C94.645 40.4675 93.7 42.72 93.7 46.03C93.7 52.225 96.8025 56.5525 101.245 56.5525C102.436 56.5903 103.598 56.1789 104.5 55.4C105.865 54.2875 106.59 52.0125 106.59 48.8275C106.59 42.725 103.558 38.6225 99.045 38.6225H99.0501ZM99.9001 58.85C91.875 58.85 89.0175 52.9625 89.0175 47.455C89.0175 43.6075 90.59 40.6 93.6925 38.5125C95.8656 37.1672 98.3599 36.4299 100.915 36.3775C107.038 36.3775 111.315 40.78 111.315 47.0875C111.315 51.3725 109.608 54.7575 106.375 56.8725C104.823 57.8225 102.125 58.85 99.9001 58.85Z"
      fill="#21313C"
    />
    <path
      d="M180.75 38.6225C179.846 38.602 178.956 38.8518 178.195 39.34C176.34 40.4675 175.395 42.72 175.395 46.03C175.395 52.225 178.498 56.5525 182.94 56.5525C184.135 56.5928 185.3 56.1813 186.205 55.4C187.57 54.2875 188.292 52.0125 188.292 48.8275C188.292 42.725 185.262 38.6225 180.75 38.6225ZM181.605 58.85C173.58 58.85 170.723 52.9625 170.723 47.4575C170.723 43.605 172.295 40.6 175.4 38.5125C177.572 37.1664 180.065 36.429 182.62 36.3775C188.742 36.3775 193.02 40.7825 193.02 47.085C193.02 51.375 191.313 54.7575 188.08 56.87C186.528 57.8225 183.83 58.85 181.605 58.85Z"
      fill="#21313C"
    />
    <path
      d="M153.73 38.4125C151.258 38.4125 149.658 40.365 149.658 43.3875C149.658 46.41 151.035 50.0025 154.908 50.0025C155.573 50.0025 156.778 49.7075 157.375 49.05C158.275 48.2225 158.875 46.5125 158.875 44.7075C158.875 40.765 156.955 38.4125 153.743 38.4125H153.73ZM153.423 59.2725C152.724 59.2649 152.035 59.437 151.423 59.7725C149.465 61.0225 148.558 62.2725 148.558 63.725C148.558 65.085 149.085 66.1675 150.22 67.1275C151.595 68.2925 153.45 68.86 155.888 68.86C160.685 68.86 162.835 66.28 162.835 63.725C162.835 61.945 161.943 60.7525 160.105 60.0775C158.69 59.56 156.325 59.275 153.43 59.275L153.423 59.2725ZM153.75 71.525C150.87 71.525 148.795 70.9175 147.023 69.5525C145.298 68.2225 144.523 66.2475 144.523 64.8825C144.541 64.0028 144.877 63.1595 145.468 62.5075C145.968 61.9375 147.13 60.87 149.818 59.0225C149.859 59.0048 149.895 58.9752 149.92 58.9374C149.945 58.8996 149.958 58.8553 149.958 58.81C149.958 58.7595 149.942 58.7101 149.911 58.6702C149.88 58.6302 149.837 58.6019 149.788 58.59C147.575 57.7425 146.908 56.34 146.705 55.59C146.705 55.5625 146.705 55.52 146.683 55.4725C146.62 55.1775 146.56 54.8975 146.963 54.61C147.273 54.39 147.768 54.095 148.298 53.7825C149.046 53.3683 149.763 52.9013 150.445 52.385C150.482 52.3456 150.509 52.2984 150.524 52.2469C150.54 52.1954 150.544 52.141 150.535 52.0879C150.526 52.0348 150.505 51.9844 150.474 51.9406C150.443 51.8968 150.402 51.8606 150.355 51.835C147.08 50.735 145.43 48.3025 145.43 44.585C145.42 43.4258 145.69 42.2812 146.216 41.2484C146.743 40.2157 147.511 39.3252 148.455 38.6525C149.773 37.61 153.08 36.3575 155.223 36.3575H155.348C157.55 36.41 158.793 36.8725 160.513 37.5075C161.491 37.8613 162.528 38.0258 163.568 37.9925C165.39 37.9925 166.188 37.415 166.873 36.7425C166.984 37.0454 167.043 37.3649 167.048 37.6875C167.089 38.4562 166.881 39.2177 166.453 39.8575C166.08 40.375 165.203 40.75 164.4 40.75C164.318 40.75 164.238 40.75 164.15 40.7375C163.728 40.7078 163.309 40.6383 162.9 40.53L162.695 40.6025C162.63 40.6975 162.673 40.8025 162.725 40.9375C162.738 40.9639 162.748 40.9915 162.755 41.02C162.901 41.6872 163.001 42.3639 163.053 43.045C163.053 46.9325 161.52 48.625 159.863 49.88C158.26 51.0824 156.357 51.8194 154.363 52.01C154.32 52.01 154.113 52.0275 153.723 52.0625C153.473 52.085 153.148 52.115 153.1 52.115H153.053C152.693 52.215 151.753 52.6625 151.753 53.495C151.753 54.185 152.178 55.0425 154.21 55.1975L155.525 55.29C158.205 55.4775 161.553 55.71 163.128 56.2425C164.172 56.6099 165.075 57.2973 165.706 58.2071C166.338 59.1169 166.666 60.2027 166.645 61.31C166.645 64.7975 164.165 68.0775 160.013 70.0825C158.054 71.0178 155.91 71.499 153.74 71.49"
      fill="#21313C"
    />
    <path
      d="M141.465 56.515C140.29 56.3575 139.433 56.1975 138.42 55.7225C138.221 55.5166 138.09 55.2549 138.045 54.9725C137.938 53.335 137.938 48.5825 137.938 45.4725C137.938 42.935 137.513 40.7225 136.438 39.135C135.155 37.3375 133.34 36.2825 130.99 36.2825C128.908 36.2825 126.13 37.7075 123.835 39.6625C123.78 39.715 123.428 40.05 123.435 39.53C123.443 39.01 123.523 37.955 123.573 37.28C123.595 37.1007 123.575 36.9186 123.514 36.7485C123.453 36.5783 123.353 36.4247 123.223 36.3C121.723 37.05 117.515 38.05 115.958 38.2025C114.823 38.4225 114.535 39.515 115.748 39.8925H115.765C116.736 40.1601 117.662 40.5677 118.515 41.1025C118.995 41.4725 118.943 42 118.943 42.4225C118.995 45.96 118.995 51.4 118.835 54.3575C118.783 55.52 118.46 55.9425 117.605 56.155L117.685 56.1275C117.034 56.2906 116.374 56.4142 115.708 56.4975C115.44 56.76 115.44 58.2925 115.708 58.61C116.243 58.61 118.958 58.4525 121.208 58.4525C124.303 58.4525 125.905 58.61 126.708 58.61C127.03 58.24 127.135 56.815 126.923 56.4975C126.183 56.464 125.449 56.3577 124.73 56.18C123.878 55.97 123.663 55.545 123.61 54.5975C123.505 52.1125 123.505 46.8325 123.505 43.24C123.505 42.24 123.77 41.7625 124.09 41.49C125.158 40.54 126.923 39.9075 128.47 39.9075C129.97 39.9075 130.97 40.3825 131.72 41.015C132.594 41.7772 133.141 42.8457 133.25 44C133.463 46 133.408 50.0225 133.408 53.5C133.408 55.4025 133.25 55.88 132.555 56.09C132.235 56.2475 131.38 56.4075 130.365 56.5125C130.045 56.83 130.15 58.3075 130.365 58.625C131.753 58.625 133.365 58.4675 135.705 58.4675C138.643 58.4675 140.513 58.625 141.26 58.625C141.58 58.255 141.688 56.875 141.475 56.5125"
      fill="#21313C"
    />
  </svg>
);

export default MongoDbIcon;