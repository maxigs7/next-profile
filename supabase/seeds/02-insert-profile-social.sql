INSERT INTO public.profile_social(
	id, network, username, url)
SELECT p.id, 'linkedin', 'maxigs7', 'https://linkedin.com/ar/maxigs7'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.profile_social AS ps WHERE ps.network = 'linkedin' AND ps.id = p.id);

INSERT INTO public.profile_social(
	id, network, username, url)
SELECT p.id, 'skype', 'max.g14', 'skype:max.g14?call'
FROM public.profile AS p
WHERE username = 'maxigs7'
  AND NOT EXISTS(SELECT 1 FROM public.profile_social AS ps WHERE ps.network = 'skype' AND ps.id = p.id);