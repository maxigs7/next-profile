import { ComponentPropsWithoutRef } from 'react';

const NodeJsIcon: React.FC<ComponentPropsWithoutRef<'svg'>> = ({ className, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 202 75"
  >
    <path
      d="M175.38 30.2423C174.949 30.2423 174.53 30.3314 174.159 30.5413L162.42 37.3206C161.66 37.7581 161.198 38.585 161.198 39.4642V52.9984C161.198 53.8773 161.66 54.7028 162.42 55.1417L165.485 56.9084C166.975 57.6428 167.524 57.631 168.202 57.631C170.407 57.631 171.666 56.2928 171.666 53.967V40.6146C171.666 40.4258 171.503 40.2907 171.317 40.2907H169.847C169.658 40.2907 169.498 40.4293 169.498 40.6146V53.9739C169.498 55.0049 168.424 56.042 166.682 55.1704L163.495 53.3012C163.382 53.2399 163.295 53.128 163.295 53.0023V39.468C163.295 39.3398 163.381 39.2088 163.495 39.1441L175.209 32.3891C175.319 32.326 175.45 32.326 175.558 32.3891L187.273 39.1441C187.384 39.2109 187.472 39.3356 187.472 39.468V53.0023C187.472 53.1315 187.408 53.2638 187.298 53.3261L175.559 60.0812C175.455 60.1411 175.316 60.1411 175.21 60.0812L172.194 58.2868C172.104 58.2341 171.982 58.2383 171.895 58.2868C171.063 58.7586 170.906 58.8133 170.125 59.0842C169.933 59.1511 169.64 59.2553 170.225 59.583L174.163 61.904C174.538 62.1208 174.956 62.2279 175.385 62.2279C175.819 62.2279 176.231 62.124 176.606 61.904L188.345 55.149C189.105 54.7069 189.567 53.8846 189.567 53.0057V39.4714C189.567 38.5922 189.105 37.7671 188.345 37.3278L176.606 30.5486C176.238 30.3386 175.816 30.2496 175.385 30.2496L175.38 30.2423ZM178.521 39.9134C175.178 39.9134 173.187 41.3362 173.187 43.7018C173.187 46.2652 175.163 46.9733 178.371 47.2906C182.21 47.6665 182.509 48.2301 182.509 48.9856C182.509 50.2961 181.464 50.8548 178.995 50.8548C175.892 50.8548 175.21 50.0803 174.982 48.5339C174.955 48.3683 174.827 48.2349 174.658 48.2349H173.134C173.042 48.237 172.954 48.2744 172.889 48.3394C172.824 48.4043 172.787 48.4919 172.785 48.5838C172.785 50.5594 173.859 52.8956 178.991 52.8956C182.706 52.8956 184.848 51.4406 184.848 48.8827C184.848 46.3539 183.118 45.6705 179.515 45.1935C175.877 44.7085 175.527 44.4764 175.527 43.6232C175.527 42.9193 175.821 41.9777 178.518 41.9777C180.926 41.9777 181.816 42.4973 182.182 44.1213C182.213 44.2737 182.348 44.3984 182.506 44.3984H184.03C184.123 44.3984 184.214 44.3409 184.279 44.2737C184.343 44.202 184.388 44.1213 184.379 44.0243C184.143 41.2274 182.278 39.9117 178.522 39.9117L178.521 39.9134Z"
      fill="#83CD29"
    />
    <path
      d="M106.365 12.5002C106.234 12.5004 106.105 12.5348 105.991 12.6C105.878 12.6662 105.784 12.7608 105.718 12.8745C105.653 12.9882 105.618 13.1169 105.617 13.2481V32.3153C105.617 32.5023 105.53 32.67 105.368 32.7639C105.288 32.8102 105.198 32.8346 105.106 32.8346C105.014 32.8346 104.924 32.8102 104.844 32.7639L101.729 30.9695C101.501 30.838 101.243 30.7687 100.981 30.7687C100.718 30.7687 100.46 30.838 100.233 30.9695L87.7963 38.1475C87.3314 38.4156 87.0481 38.9317 87.0481 39.4683V53.8246C87.0477 54.0874 87.1166 54.3455 87.248 54.5731C87.3793 54.8006 87.5683 54.9895 87.796 55.1206L100.233 62.2989C100.46 62.4307 100.718 62.5002 100.981 62.5002C101.244 62.5002 101.501 62.4307 101.729 62.2989L114.166 55.1206C114.393 54.9895 114.583 54.8006 114.714 54.5731C114.845 54.3455 114.914 54.0874 114.914 53.8246V18.0334C114.914 17.4889 114.617 16.9779 114.141 16.7126L106.739 12.5747C106.622 12.5099 106.494 12.4985 106.365 12.4999V12.5002ZM26.3575 30.4208C26.1202 30.4305 25.8975 30.4717 25.6844 30.5953L13.2476 37.7733C13.0197 37.9042 12.8306 38.093 12.6993 38.3206C12.568 38.5482 12.4993 38.8065 12.5 39.0693L12.5253 58.3363C12.5253 58.6044 12.6639 58.8531 12.8994 58.9841C13.1305 59.1227 13.417 59.1227 13.647 58.9841L21.0245 54.7468C21.4922 54.4697 21.797 53.9861 21.797 53.4512V44.4532C21.797 43.9162 22.0793 43.4243 22.5452 43.1576L25.6858 41.3383C25.9128 41.2063 26.1708 41.1374 26.4334 41.1387C26.696 41.1372 26.9543 41.2061 27.1813 41.3383L30.3204 43.1566C30.7857 43.4233 31.068 43.9159 31.068 44.4521V53.4498C31.068 53.9854 31.3798 54.4717 31.8405 54.7454L39.218 58.9827C39.4501 59.1213 39.7359 59.1213 39.9656 58.9827C40.1942 58.8511 40.3397 58.6027 40.3397 58.3349L40.3646 39.0686C40.3661 38.8057 40.2977 38.5471 40.1663 38.3194C40.0349 38.0917 39.8454 37.903 39.6171 37.7726L27.1802 30.595C26.97 30.4717 26.7462 30.4301 26.5072 30.4204H26.3582L26.3575 30.4208ZM138.118 30.5953C137.856 30.5946 137.597 30.6635 137.37 30.7949L124.933 37.9732C124.469 38.2417 124.185 38.7325 124.185 39.2688V53.6251C124.185 54.1648 124.489 54.654 124.957 54.9207L137.295 61.9528C137.75 62.2126 138.306 62.2324 138.765 61.9771L146.242 57.8146C146.48 57.683 146.64 57.437 146.641 57.1668C146.642 56.8966 146.501 56.6534 146.267 56.519L133.754 49.3407C133.52 49.207 133.356 48.9364 133.356 48.6676V44.1785C133.356 43.9104 133.522 43.6644 133.754 43.5307L137.642 41.2873C137.874 41.1536 138.158 41.1536 138.391 41.2873L142.281 43.5307C142.394 43.5961 142.489 43.6905 142.555 43.8043C142.62 43.918 142.655 44.0471 142.654 44.1785V47.7178C142.654 47.8491 142.688 47.9782 142.754 48.092C142.82 48.2057 142.914 48.3001 143.028 48.3655C143.261 48.5 143.544 48.5006 143.776 48.3655L151.228 44.0295C151.691 43.7607 151.977 43.2685 151.977 42.7339V39.2698C151.977 39.0072 151.908 38.7492 151.776 38.5217C151.645 38.2942 151.456 38.1053 151.229 37.9739L138.866 30.7956C138.639 30.664 138.381 30.5952 138.118 30.596L138.118 30.5953ZM100.931 41.3133C101 41.313 101.069 41.33 101.13 41.3628L105.392 43.8303C105.508 43.8972 105.592 44.0209 105.592 44.1542V49.0892C105.592 49.2233 105.509 49.3466 105.392 49.4131L101.13 51.8806C101.014 51.9464 100.873 51.9464 100.756 51.8806L96.4944 49.4131C96.3783 49.3462 96.2948 49.2226 96.2948 49.0892V44.1535C96.2948 44.0198 96.3786 43.8972 96.4944 43.8296L100.756 41.3625C100.814 41.3289 100.866 41.313 100.931 41.313V41.3126V41.3133Z"
      fill="#404137"
    />
    <path
      d="M63.7193 30.5202C63.4567 30.5197 63.1986 30.5885 62.9711 30.7197L50.5339 37.8731C50.069 38.1412 49.7863 38.6577 49.7863 39.194V53.5503C49.7856 53.813 49.8544 54.0712 49.9857 54.2987C50.117 54.5262 50.3061 54.715 50.5339 54.8459L62.9711 62.0242C63.1982 62.156 63.4562 62.2255 63.7188 62.2255C63.9814 62.2255 64.2394 62.156 64.4666 62.0242L76.9038 54.8459C77.1314 54.7147 77.3204 54.5259 77.4518 54.2983C77.5831 54.0708 77.652 53.8126 77.6517 53.5499V39.1936C77.6517 38.6567 77.369 38.1405 76.9034 37.8727L64.4662 30.7194C64.2389 30.5876 63.9807 30.5187 63.718 30.5198L63.7193 30.5202ZM138.094 43.3315C138.044 43.3315 137.989 43.3315 137.944 43.3557L135.552 44.7518C135.507 44.7765 135.47 44.8126 135.443 44.8563C135.417 44.9 135.403 44.9499 135.402 45.0008V47.7427C135.402 47.8459 135.462 47.9401 135.552 47.9921L137.944 49.3629C137.985 49.3883 138.033 49.4018 138.081 49.4018C138.129 49.4018 138.177 49.3883 138.218 49.3629L140.611 47.9921C140.699 47.9412 140.76 47.8459 140.76 47.7427V45.0008C140.76 44.8976 140.7 44.8034 140.611 44.7514L138.218 43.3554C138.174 43.3291 138.143 43.3311 138.093 43.3311L138.094 43.3315Z"
      fill="#83CD29"
    />
  </svg>
);

export default NodeJsIcon;