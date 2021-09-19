import React from 'react';
import Contact from 'partials/contact';
import { NextSeo } from 'next-seo';

export default function ContactPage() {
  return (
    <>
      <NextSeo title="Contact" description="Contact" />
      <Contact />
    </>
  );
}
