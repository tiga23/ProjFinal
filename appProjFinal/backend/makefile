up:
	docker compose up -d postgres && docker compose up -d strapi

logs:
	docker compose logs -f strapi

down:
	docker compose down

migrate:
	docker compose exec yarn strapi import -f ./database/migrations/inital-db.tag.gz
