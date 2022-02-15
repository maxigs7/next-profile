INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'html5', 'HTML5'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'html5' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'javascript', 'Javascript'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'javascript' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'angular', 'Angular'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'angular' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'ionic', 'Ionic'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'ionic' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'react', 'React'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'react' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'nextjs', 'NextJS'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'nextjs' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'redux', 'Redux'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'redux' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'nodejs', 'NodeJS'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'nodejs' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'netcore', '.NET Core'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'netcore' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'mongodb', 'MongoDB'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'mongodb' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'sqlserver', 'SQL Server'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'sqlserver' AND s.id = p.id);

INSERT INTO public.skill(
  id, key, name)
SELECT p.id, 'git', 'GIT'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.skill AS s WHERE s.key = 'git' AND s.id = p.id);
