'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'; // Use useTheme instead of useColorScheme

import { NoSsr } from '@/components/core/no-ssr';



type Color = 'dark' | 'light';

export interface LogoProps {
  color?: Color;
  emblem?: boolean;
 
}

export function Logo({ color = 'dark', emblem }: LogoProps): React.JSX.Element {
  let url: string;

  if (emblem) {
    url = color === 'light' ? '/assets/unitfactor.svg' : '/assets/ufLogo.svg';
  } else {
    url = color === 'light' ? '/assets/ufLogo.svg' : '/assets/unitfactor.svg';
  }

  return <Box component="img" alt="logo" src={url} width={100} height={100}/>;
}

export interface DynamicLogoProps {
  colorDark?: Color;
  colorLight?: Color;
  emblem?: boolean;
  height?: number;
  width?: number;
}

export function DynamicLogo({
  colorDark = 'light',
  colorLight = 'dark',

  ...props
}: DynamicLogoProps): React.JSX.Element {
  const theme = useTheme();
  const colorScheme = theme.palette.mode; // Access the color scheme from theme
  const color = colorScheme === 'dark' ? colorDark : colorLight;

  return (
    <NoSsr fallback={<Box/>}>
      <Logo color={color}  {...props}  />
    </NoSsr>
  );
}
