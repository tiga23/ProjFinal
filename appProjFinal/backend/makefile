up:
	docker compose up -d postgres && yarn develop

logs:
	docker compose logs -f strapi

down:
	docker compose down

migrate:
	yarn strapi import -f ./database/migrations/inital-db.tar.gz
