export type SkillId =
  | 'angular'
  | 'git'
  | 'html5'
  | 'ionic'
  | 'javascript'
  | 'mongodb'
  | 'netcore'
  | 'nextjs'
  | 'nodejs'
  | 'react'
  | 'redux'
  | 'sqlserver';

export interface ISkill {
  id: SkillId;
  level?: number;
  name: string;
}
