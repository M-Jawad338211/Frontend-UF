import React from 'react';
import type { Metadata } from 'next';
import { config } from '@/config';
import Developers from '../../../components/dashboard/Developers/index'
export const metadata = { title: `Developer | Dashboard | ${config.site.name}` } satisfies Metadata;
export default function page() {
  return (
   <Developers/>
  );
}
