import React from 'react';
import type { Metadata } from 'next';

import { config } from '@/config';
import BusinessDevelopers from '../../../components/dashboard/BusinessDevelopers/index'

export const metadata = { title: `Business Developer | Dashboard | ${config.site.name}` } satisfies Metadata;
export default function page() {
  return (
<BusinessDevelopers/>
  );
}
