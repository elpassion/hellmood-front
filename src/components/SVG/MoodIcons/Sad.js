const Sad = props => (
  <svg width={72} height={30} {...props}>
    <g fill='none' fillRule='evenodd'>
      <circle cx={62} cy={10} r={10} fill='#FFF' fillRule='nonzero' />
      <circle cx={62} cy={10} r={4} fill='#B2232B' fillRule='nonzero' />
      <circle cx={10} cy={10} r={10} fill='#FFF' fillRule='nonzero' />
      <circle cx={10} cy={10} r={4} fill='#B2232B' fillRule='nonzero' />
      <path
        stroke='#E63741'
        strokeLinecap='round'
        strokeWidth={2}
        d='M31 13h10'
      />
      <path
        stroke='#BE0C16'
        strokeLinecap='round'
        strokeWidth={2}
        d='M5 19h10m42 0h10M42 27c0-2.761-2.686-5-6-5s-6 2.239-6 5'
      />
    </g>
  </svg>
);

export default Sad;
