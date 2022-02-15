-- Table: public.experience_lang

-- DROP TABLE IF EXISTS public.experience_lang;

CREATE TABLE IF NOT EXISTS public.experience_lang
(
    id int NOT NULL,
    lang character varying(4) COLLATE pg_catalog."default" NOT NULL,
    position character varying(50) COLLATE pg_catalog."default" NOT NULL,
    summary text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT experience_lang_pkey PRIMARY KEY (id, lang),
    CONSTRAINT experience_lang_id_fkey FOREIGN KEY (id)
        REFERENCES public.experience (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
