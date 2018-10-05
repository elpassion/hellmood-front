const Happy = props => (
  <svg
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={72}
    height={30}
    viewBox='0 0 72 30'
    {...props}
  >
    <defs>
      <linearGradient id='b' x1='0%' y1='0%' y2='100%'>
        <stop offset='0%' stopColor='#6B9E71' />
        <stop offset='100%' stopColor='#39653E' />
      </linearGradient>
      <path
        id='a'
        d='M11 10c6.075 0 11-4.477 11-10H0c0 5.523 4.925 10 11 10z'
      />
      <linearGradient id='c' x1='50%' x2='50%' y1='0%' y2='100%'>
        <stop offset='0%' stopColor='#6DAF75' />
        <stop offset='100%' stopColor='#6EBE76' />
      </linearGradient>
    </defs>
    <g fill='none' fillRule='evenodd'>
      <circle cx={62} cy={10} r={10} fill='#FFF' fillRule='nonzero' />
      <circle cx={62} cy={10} r={4} fill='#547B57' fillRule='nonzero' />
      <circle cx={10} cy={10} r={10} fill='#FFF' fillRule='nonzero' />
      <circle cx={10} cy={10} r={4} fill='#547B57' fillRule='nonzero' />
      <path
        stroke='#5EA866'
        strokeLinecap='round'
        strokeWidth={2}
        d='M31 13h10'
      />
      <g transform='translate(25 20)'>
        <mask id='d' fill='#fff'>
          <use xlinkHref='#a' />
        </mask>
        <use fill='url(#b)' fillRule='nonzero' xlinkHref='#a' />
        <ellipse
          cx={16.5}
          cy={14}
          fill='url(#c)'
          fillRule='nonzero'
          mask='url(#d)'
          rx={10.5}
          ry={10}
        />
      </g>
    </g>
  </svg>
);

export default Happy;
