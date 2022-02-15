-- Table: public.language_lang

-- DROP TABLE IF EXISTS public.language_lang;

CREATE TABLE IF NOT EXISTS public.language_lang
(
    id int NOT NULL,
    code character varying(5) COLLATE pg_catalog."default" NOT NULL,
    lang character varying(4) COLLATE pg_catalog."default" NOT NULL,
    "name" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT language_lang_pkey PRIMARY KEY (id, code, lang),
    CONSTRAINT language_lang_id_fkey FOREIGN KEY (id, code)
        REFERENCES public.language (id, code) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
