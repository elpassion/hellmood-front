const Unhappy = props => (
  <svg width={72} height={30} {...props} viewBox='0 0 72 30'>
    <g fill='none'>
      <circle cx={62} cy={10} r={10} fill='#FFF' />
      <circle cx={62} cy={10} r={4} fill='#EA7980' />
      <circle cx={10} cy={10} r={10} fill='#FFF' />
      <circle cx={10} cy={10} r={4} fill='#EA7980' />
      <path
        stroke='#F28684'
        strokeLinecap='round'
        strokeWidth={2}
        d='M31 13h10'
      />
      <path
        stroke='#E0676E'
        strokeLinecap='round'
        strokeWidth={2}
        d='M26 26c2.963-2 6.296-3 10-3 3.704 0 7.037 1 10 3'
      />
    </g>
  </svg>
);

export default Unhappy;
