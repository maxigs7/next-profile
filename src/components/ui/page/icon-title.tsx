import {
  AcademicCapIcon,
  BriefcaseIcon,
  GlobeIcon,
  IdentificationIcon,
  LocationMarkerIcon,
  SparklesIcon,
  UserCircleIcon,
} from '@/components';
import { ComponentPropsWithoutRef, useMemo } from 'react';

export type IconType =
  | 'academic-cap'
  | 'briefcase'
  | 'globe'
  | 'identification'
  | 'location-marker'
  | 'sparkles'
  | 'user-circle';

type MapType = Record<IconType, React.ElementType<ComponentPropsWithoutRef<'svg'>>>;

export const useIcon = (icon?: IconType) => {
  const titleIcons: MapType = useMemo(
    () => ({
      'academic-cap': AcademicCapIcon,
      briefcase: BriefcaseIcon,
      globe: GlobeIcon,
      identification: IdentificationIcon,
      'location-marker': LocationMarkerIcon,
      sparkles: SparklesIcon,
      'user-circle': UserCircleIcon,
    }),
    [],
  );
  if (!icon) return undefined;
  return titleIcons[icon];
};
