import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeIcon,
  IdentificationIcon,
  LocationMarkerIcon,
  SparklesIcon,
  UserCircleIcon,
} from '@/components';
import { ComponentPropsWithoutRef } from 'react';

export type IconType =
  | 'academic-cap'
  | 'briefcase'
  | 'globe'
  | 'identification'
  | 'location-marker'
  | 'sparkles'
  | 'user-circle';

type MapType = Record<IconType, React.ElementType<ComponentPropsWithoutRef<'svg'>>>;

const classMap: MapType = {
  'academic-cap': AcademicCapIcon,
  briefcase: BriefcaseIcon,
  globe: GlobeIcon,
  identification: IdentificationIcon,
  'location-marker': LocationMarkerIcon,
  sparkles: SparklesIcon,
  'user-circle': UserCircleIcon,
};

export const getIcon = (icon: IconType) => classMap[icon];
