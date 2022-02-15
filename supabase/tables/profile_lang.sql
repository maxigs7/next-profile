-- Table: public.profile_lang

-- DROP TABLE IF EXISTS public.profile_lang;

CREATE TABLE IF NOT EXISTS public.profile_lang
(
    id int NOT NULL,
    lang character varying(4) COLLATE pg_catalog."default" NOT NULL,
    title character varying(100) COLLATE pg_catalog."default" NOT NULL,
    summary text COLLATE pg_catalog."default",
    CONSTRAINT profile_lang_pkey PRIMARY KEY (id, lang),
    CONSTRAINT profile_lang_id_fkey FOREIGN KEY (id)
        REFERENCES public.profile (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
