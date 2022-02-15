INSERT INTO public.profile(
	username, "firstName", "lastName", email, phone, city, country)
SELECT 'maxigs7', 'Maximiliano', 'Gonzalez Schweizer', 'maxi.g14@hotmail.com', '+5493794245853', 'Corrientes', 'Argentina'
WHERE NOT EXISTS (SELECT 1 FROM public.profile WHERE username = 'maxigs7');


INSERT INTO public.profile_lang(
	id, lang, title, summary)
SELECT p.id, 'en', 'Full Stack Developer', 'Insert summary here'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.profile_lang AS pl WHERE pl.lang = 'en' AND pl.id = p.id);

INSERT INTO public.profile_lang(
	id, lang, title, summary)
SELECT p.id, 'es', 'Desarrollador Full Stack', 'Insertar bio aqui'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.profile_lang AS pl WHERE pl.lang = 'es' AND pl.id = p.id);