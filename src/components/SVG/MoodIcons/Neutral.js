const Neutral = props => (
  <svg width={72} height={30} {...props} viewBox='0 0 72 30'>
    <g fill='none' fillRule='evenodd'>
      <circle cx={62} cy={10} r={10} fill='#FFF' fillRule='nonzero' />
      <circle cx={62} cy={10} r={4} fill='#AC863A' fillRule='nonzero' />
      <circle cx={10} cy={10} r={10} fill='#FFF' fillRule='nonzero' />
      <circle cx={10} cy={10} r={4} fill='#AC863A' fillRule='nonzero' />
      <path
        stroke='#F5BC48'
        strokeLinecap='round'
        strokeWidth={2}
        d='M31 13h10'
      />
      <path
        stroke='#E49F00'
        strokeLinecap='round'
        strokeWidth={2}
        d='M26 24h20'
      />
    </g>
  </svg>
);

export default Neutral;
