import React, { useState, useRef } from 'react';

export const Slide = (props: any) => {
  const slide = useRef<HTMLInputElement | any>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    const el = slide.current;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLLIElement>) => {
    slide.current.style.setProperty('--x', 0);
    slide.current.style.setProperty('--y', 0);
  };

  const handleSlideClick = () => props.handleSlideClick(props.slide.index);

  const imageLoaded = (event: any) => {
    event.target.style.opacity = 1;
  };

  const { internalRoute, projectImage, title } = props.slide;

  console.log(props.slide);

  const current = props.current;
  let classNames = 'slide';

  if (current === props.index) classNames += ' slide--current';
  else if (current - 1 === props.index) classNames += ' slide--previous';
  else if (current + 1 === props.index) classNames += ' slide--next';
  else if (current + 1) classNames += ' slide--next';

  return (
    <li
      ref={slide}
      className={classNames}
      onClick={handleSlideClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <img className="slide__image" alt={title} src={projectImage} onLoad={imageLoaded} />
      </div>

      <article className="slide__content">
        <h2 className="slide__headline">{title}</h2>
        <button className="slide__action btn">View</button>
      </article>
    </li>
  );
};
