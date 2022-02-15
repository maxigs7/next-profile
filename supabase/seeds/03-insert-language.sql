INSERT INTO public.language(
  id, code, level)
SELECT p.id, 'en', 4
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.language AS l WHERE l.code = 'en' AND l.id = p.id);

INSERT INTO public.language_lang(
	id, code, lang, name)
SELECT p.id, 'en', 'en', 'English'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.language_lang AS l WHERE l.code = 'en' AND l.lang = 'en' AND l.id = p.id);

INSERT INTO public.language_lang(
	id, code, lang, name)
SELECT p.id, 'en', 'es', 'Ingles'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.language_lang AS l WHERE l.code = 'en' AND l.lang = 'es' AND l.id = p.id);

INSERT INTO public.language(
  id, code, level)
SELECT p.id, 'es', 5
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.language AS l WHERE l.code = 'es' AND l.id = p.id);

INSERT INTO public.language_lang(
	id, code, lang, name)
SELECT p.id, 'es', 'en', 'Spanish'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.language_lang AS l WHERE l.code = 'es' AND l.lang = 'en' AND l.id = p.id);

INSERT INTO public.language_lang(
	id, code, lang, name)
SELECT p.id, 'es', 'es', 'Español'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.language_lang AS l WHERE l.code = 'es' AND l.lang = 'es' AND l.id = p.id);

