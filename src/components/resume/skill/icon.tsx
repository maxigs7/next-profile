import {
  AngularIcon,
  GitIcon,
  Html5Icon,
  IonicIcon,
  JavascriptIcon,
  MongoDbIcon,
  NetCoreIcon,
  NextJsIcon,
  NodeJsIcon,
  ReactIcon,
  ReduxIcon,
  SqlServerIcon,
} from '@/components';
import { SkillId } from '@/model';
import { ComponentPropsWithoutRef, useMemo } from 'react';

type MapType = Record<SkillId, React.ElementType<ComponentPropsWithoutRef<'svg'>> | undefined>;

export const useIcon = (icon: SkillId) => {
  const skillIcons: MapType = useMemo(
    () => ({
      angular: AngularIcon,
      git: GitIcon,
      html5: Html5Icon,
      ionic: IonicIcon,
      javascript: JavascriptIcon,
      mongodb: MongoDbIcon,
      netcore: NetCoreIcon,
      nextjs: NextJsIcon,
      nodejs: NodeJsIcon,
      react: ReactIcon,
      redux: ReduxIcon,
      sqlserver: SqlServerIcon,
    }),
    [],
  );

  return skillIcons[icon];
};
