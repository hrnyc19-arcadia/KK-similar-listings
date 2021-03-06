import React from 'react'

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      className={className}
      key='slick-next'
      viewBox="0 0 18 18"
      role="img"
      aria-label="Next"
      focusable="false"
      style={{
        ...style,
        height: '24px',
        width: '24px',
        fill: 'rgb(118, 118, 118)',
      }}
      onClick={onClick}
    >
      <path
        d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
        fillRule="evenodd"
      ></path>
    </svg>
  )
}