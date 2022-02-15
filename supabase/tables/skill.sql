-- Table: public.skill

-- DROP TABLE IF EXISTS public.skill;

CREATE TABLE IF NOT EXISTS public.skill
(
    id int NOT NULL,
    "key" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "name" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT skill_pkey PRIMARY KEY (id, "key"),
    CONSTRAINT skill_id_fkey FOREIGN KEY (id)
        REFERENCES public.profile (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
