const IconMore = props => (
  <svg
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={20}
    height={20}
    {...props}
  >
    <defs>
      <path
        id="a"
        d="M14 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM8 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zM2 0c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(2 8)">
      <mask id="b" fill="#fff">
        <use xlinkHref="#a" />
      </mask>
      <use fill="#A9AFC1" xlinkHref="#a" />
      <g fill="#A7B1D1" mask="url(#b)">
        <path d="M-2-8h21v21H-2z" />
      </g>
    </g>
  </svg>
)

export default IconMore
