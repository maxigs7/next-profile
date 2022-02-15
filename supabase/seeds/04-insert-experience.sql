INSERT INTO public.experience(
  "profileId", company, "companyId", "startDate", "endDate")
SELECT p.id, 'Desarrollos NEA', 'desnea', '2012-07-02', '2016-03-31'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.experience AS e WHERE e."companyId" = 'desnea' AND e."profileId" = p.id);

INSERT INTO public.experience_lang(
  id, lang, "position", summary)
SELECT e.id, 'en', 'Full Stack Developer', 'Developing web systems from scratch for local clients using AngularJS and ASP.NET MVC to get improvements in the clients processes and making their interactions and decisions easier.'
FROM public.experience AS e
WHERE e."companyId" = 'desnea'
  AND NOT EXISTS(SELECT 1 FROM public.experience_lang AS el WHERE el.lang = 'en' AND el.id = e.id);

INSERT INTO public.experience_lang(
  id, lang, "position", summary)
SELECT e.id, 'es', 'Desarrollador Full Stack', 'Developing web systems from scratch for local clients using AngularJS and ASP.NET MVC to get improvements in the clients processes and making their interactions and decisions easier.'
FROM public.experience AS e
WHERE e."companyId" = 'desnea'
  AND NOT EXISTS(SELECT 1 FROM public.experience_lang AS el WHERE el.lang = 'es' AND el.id = e.id);

INSERT INTO public.experience(
  "profileId", company, "companyId", "startDate", "endDate")
SELECT p.id, 'Devlights', 'devlights', '2016-04-01', '2019-05-31'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.experience AS e WHERE e."companyId" = 'devlights' AND e."profileId" = p.id);

INSERT INTO public.experience_lang(
  id, lang, "position", summary)
SELECT e.id, 'en', 'Full Stack Developer', 'I had worked for a US client in different types of projects, using technologies such as AngularJS or Angular and ASP.NET MVC 5. Developed Mobile Applications for healthcare companies using Ionic 2.'
FROM public.experience AS e
WHERE e."companyId" = 'devlights'
  AND NOT EXISTS(SELECT 1 FROM public.experience_lang AS el WHERE el.lang = 'en' AND el.id = e.id);

INSERT INTO public.experience_lang(
  id, lang, "position", summary)
SELECT e.id, 'es', 'Desarrollador Full Stack', 'I had worked for a US client in different types of projects, using technologies such as AngularJS or Angular and ASP.NET MVC 5. Developed Mobile Applications for healthcare companies using Ionic 2.'
FROM public.experience AS e
WHERE e."companyId" = 'devlights'
  AND NOT EXISTS(SELECT 1 FROM public.experience_lang AS el WHERE el.lang = 'es' AND el.id = e.id);

INSERT INTO public.experience(
  "profileId", company, "companyId", "startDate", "endDate")
SELECT p.id, 'Overactive', 'overactive', '2019-06-03', '2020-09-11'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.experience AS e WHERE e."companyId" = 'overactive' AND e."profileId" = p.id);

INSERT INTO public.experience_lang(
  id, lang, "position", summary)
SELECT e.id, 'en', 'Full Stack Developer', 'Working for XPO Logistic account using microservices oriented architecture with .NET Core 3 and Angular 9 following SCRUM practices. Creating microservices from scratch using its own library and working different frontend modules.'
FROM public.experience AS e
WHERE e."companyId" = 'overactive'
  AND NOT EXISTS(SELECT 1 FROM public.experience_lang AS el WHERE el.lang = 'en' AND el.id = e.id);

INSERT INTO public.experience_lang(
  id, lang, "position", summary)
SELECT e.id, 'es', 'Desarrollador Full Stack', 'Working for XPO Logistic account using microservices oriented architecture with .NET Core 3 and Angular 9 following SCRUM practices. Creating microservices from scratch using its own library and working different frontend modules.'
FROM public.experience AS e
WHERE e."companyId" = 'overactive'
  AND NOT EXISTS(SELECT 1 FROM public.experience_lang AS el WHERE el.lang = 'es' AND el.id = e.id);

INSERT INTO public.experience(
  "profileId", company, "companyId", "startDate", "endDate")
SELECT p.id, 'Spark Digital', 'spark-digital', '2020-09-14', NULL
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.experience AS e WHERE e."companyId" = 'spark-digital' AND e."profileId" = p.id);

INSERT INTO public.experience_lang(
  id, lang, "position", summary)
SELECT e.id, 'en', 'Frontend Developer', 'Working at Rappi for 4 months as an Angular Developer, developing new features, bugs fixing, improving performance and SEO. Currently working at Slice, which is a pizza''s selling platform in the USA, where my role is React Developer, implementing new features, bug fixing and improving performance as well as SEO.'
FROM public.experience AS e
WHERE e."companyId" = 'spark-digital'
  AND NOT EXISTS(SELECT 1 FROM public.experience_lang AS el WHERE el.lang = 'en' AND el.id = e.id);

INSERT INTO public.experience_lang(
  id, lang, "position", summary)
SELECT e.id, 'es', 'Desarrollador Frontend', 'Working at Rappi for 4 months as an Angular Developer, developing new features, bugs fixing, improving performance and SEO. Currently working at Slice, which is a pizza''s selling platform in the USA, where my role is React Developer, implementing new features, bug fixing and improving performance as well as SEO.'
FROM public.experience AS e
WHERE e."companyId" = 'spark-digital'
  AND NOT EXISTS(SELECT 1 FROM public.experience_lang AS el WHERE el.lang = 'es' AND el.id = e.id);
