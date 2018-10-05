const Satisfied = props => (
  <svg width={72} height={30} {...props}>
    <g fill='none'>
      <circle cx={62} cy={10} r={10} fill='#FFF' />
      <circle cx={62} cy={10} r={4} fill='#6BA670' />
      <circle cx={10} cy={10} r={10} fill='#FFF' />
      <circle cx={10} cy={10} r={4} fill='#6BA670' />
      <path
        stroke='#94D1A1'
        strokeLinecap='round'
        strokeWidth={2}
        d='M31 13h10'
      />
      <path
        stroke='#6BA670'
        strokeLinecap='round'
        strokeWidth={2}
        d='M46 23c-2.963 2-6.296 3-10 3-3.704 0-7.037-1-10-3'
      />
    </g>
  </svg>
);

export default Satisfied;
