import React from 'react';
import VisionMission from 'partials/vision-mission';
import { NextSeo } from 'next-seo';

export default function VisionMissionPage() {
  return (
    <>
      <NextSeo title="Vision Mission" description="Vision Mission" />
      <VisionMission />
    </>
  );
}
