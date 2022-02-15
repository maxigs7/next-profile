-- Table: public.certificate_lang

-- DROP TABLE IF EXISTS public.certificate_lang;

CREATE TABLE IF NOT EXISTS public.certificate_lang
(
    id int NOT NULL,
    lang character varying(4) COLLATE pg_catalog."default" NOT NULL,
    "name" character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT certificate_lang_pkey PRIMARY KEY (id, lang),
    CONSTRAINT certificate_lang_id_fkey FOREIGN KEY (id)
        REFERENCES public.certificate (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
