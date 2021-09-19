/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useStyles from './style.index';

const data = [
  {
    route: '/',
    name: 'About Us',
    img: '/smile.png',
    imgActive: '/smile-active.png',
  },
  {
    route: '/vision-mission',
    name: 'Vision Mission',
    img: '/pen-tool.png',
    imgActive: '/pen-tool-active.png',
  },
  {
    route: '/contact',
    name: 'Contact',
    img: '/phone-call.png',
    imgActive: '/phone-call-active.png',
  },
];

export default function Navigation() {
  const classes = useStyles();
  const { pathname } = useRouter();
  return (
    <div className={classes.container}>
      {data.map((v) => (
        <Link href={v.route} key={v.name} passHref>
          <LinkContent
            img={v.img}
            imgActive={v.imgActive}
            name={v.name}
            active={pathname === v.route}
          />
        </Link>
      ))}
    </div>
  );
}

const LinkContent = forwardRef(
  ({ onClick, href, name, img, imgActive, active }, ref) => {
    const classes = useStyles();
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`${classes.navBtn} ${active ? classes.navBtnActive : ''}`}
      >
        <img
          src={active ? imgActive : img}
          alt={name}
          className={classes.btnIcon}
        />
        <p
          className={`${classes.navBtnText} ${
            active ? classes.navBtnTextActive : ''
          }`}
        >
          {name}
        </p>
      </a>
    );
  }
);
