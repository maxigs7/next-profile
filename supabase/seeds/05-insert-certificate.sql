INSERT INTO public.certificate(
  "profileId", issuer, "issuerId", date)
SELECT p.id, 'Microsoft', 'microsoft', '2016-09-01'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.certificate AS c WHERE c.date = '2016-09-01' AND c."profileId" = p.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'en', 'Microsoft Certified Solutions Associate: Web Applications Charter Member'
FROM public.certificate AS c
WHERE c."date" = '2016-09-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'en' AND cl.id = c.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'es', 'Microsoft Certified Solutions Associate: Web Applications Charter Member'
FROM public.certificate AS c
WHERE c."date" = '2016-09-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'es' AND cl.id = c.id);

INSERT INTO public.certificate(
  "profileId", issuer, "issuerId", date)
SELECT p.id, 'Microsoft', 'microsoft', '2016-09-02'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.certificate AS c WHERE c.date = '2016-09-02' AND c."profileId" = p.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'en', 'Microsoft Certified Solutions Developer: Web Applications'
FROM public.certificate AS c
WHERE c."date" = '2016-09-02'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'en' AND cl.id = c.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'es', 'Microsoft Certified Solutions Developer: Web Applications'
FROM public.certificate AS c
WHERE c."date" = '2016-09-02'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'es' AND cl.id = c.id);

INSERT INTO public.certificate(
  "profileId", issuer, "issuerId", date)
SELECT p.id, 'Microsoft', 'microsoft', '2015-12-01'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.certificate AS c WHERE c.date = '2015-12-01' AND c."profileId" = p.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'en', 'Microsoft Certified Solutions Developer: Web Applications'
FROM public.certificate AS c
WHERE c."date" = '2015-12-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'en' AND cl.id = c.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'es', 'Microsoft Certified Solutions Developer: Web Applications'
FROM public.certificate AS c
WHERE c."date" = '2015-12-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'es' AND cl.id = c.id);

INSERT INTO public.certificate(
  "profileId", issuer, "issuerId", date)
SELECT p.id, 'Microsoft', 'microsoft', '2014-12-01'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.certificate AS c WHERE c.date = '2014-12-01' AND c."profileId" = p.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'en', 'Microsoft Specialist'
FROM public.certificate AS c
WHERE c."date" = '2014-12-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'en' AND cl.id = c.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'es', 'Microsoft Specialist'
FROM public.certificate AS c
WHERE c."date" = '2014-12-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'es' AND cl.id = c.id);

INSERT INTO public.certificate(
  "profileId", issuer, "issuerId", date)
SELECT p.id, 'Microsoft User Group Argentina', 'mug', '2014-10-01'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.certificate AS c WHERE c.date = '2014-10-01' AND c."profileId" = p.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'en', 'Cross Platform Mobile Development with Xamarin'
FROM public.certificate AS c
WHERE c."date" = '2014-10-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'en' AND cl.id = c.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'es', 'Cross Platform Mobile Development with Xamarin'
FROM public.certificate AS c
WHERE c."date" = '2014-10-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'es' AND cl.id = c.id);

INSERT INTO public.certificate(
  "profileId", issuer, "issuerId", date)
SELECT p.id, 'Microsoft', 'microsoft', '2014-09-01'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.certificate AS c WHERE c.date = '2014-09-01' AND c."profileId" = p.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'en', 'Microsoft Certified Professional'
FROM public.certificate AS c
WHERE c."date" = '2014-09-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'en' AND cl.id = c.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'es', 'Microsoft Certified Professional'
FROM public.certificate AS c
WHERE c."date" = '2014-09-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'es' AND cl.id = c.id);

INSERT INTO public.certificate(
  "profileId", issuer, "issuerId", date)
SELECT p.id, 'Platzi', 'platzi', '2013-01-01'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.certificate AS c WHERE c.date = '2013-01-01' AND c."profileId" = p.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'en', 'Professional Frontend Course'
FROM public.certificate AS c
WHERE c."date" = '2013-01-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'en' AND cl.id = c.id);

INSERT INTO public.certificate_lang(
  id, lang, name)
SELECT c.id, 'es', 'Professional Frontend Course'
FROM public.certificate AS c
WHERE c."date" = '2013-01-01'
  AND NOT EXISTS(SELECT 1 FROM public.certificate_lang AS cl WHERE cl.lang = 'es' AND cl.id = c.id);
