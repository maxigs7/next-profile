-- Table: public.profile_social

-- DROP TABLE IF EXISTS public.profile_social;

CREATE TABLE IF NOT EXISTS public.profile_social
(
    id int NOT NULL,
    network character varying(20) COLLATE pg_catalog."default" NOT NULL,
    username character varying(30) COLLATE pg_catalog."default" NOT NULL,
    url character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT profile_social_pkey PRIMARY KEY (id, network),
    CONSTRAINT profile_social_id_fkey FOREIGN KEY (id)
        REFERENCES public.profile (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
