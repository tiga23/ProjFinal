#!/bin/bash
set -xeuo pipefail

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  -- Setup DB
  CREATE DATABASE proj_final_db;
  \c proj_final_db
  DROP SCHEMA if exists proj_final_app cascade;
  CREATE SCHEMA proj_final_app;
  ALTER DATABASE proj_final_db SET search_path TO proj_final_app;
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
EOSQL
