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
import { ComponentPropsWithoutRef } from 'react';

type MapType = Record<SkillId, React.ElementType<ComponentPropsWithoutRef<'svg'>> | undefined>;

const classMap: MapType = {
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
};

export const getIcon = (icon: SkillId) => classMap[icon];
