.PHONY: help build up down test lint migrate provision-service catalog-update reports-usage

help:
	@echo "Internal Developer Marketplace - Management Commands"
	@echo "---------------------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "provision-service: Trigger self-service provisioning"
	@echo "catalog-update  : Synchronize service catalog with templates"
	@echo "reports-usage   : Generate usage and cost chargeback reports"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

provision-service:
	docker-compose exec api python scripts/provision/new_environment.py

catalog-update:
	docker-compose exec api python scripts/onboard/sync_catalog.py

reports-usage:
	docker-compose exec api python scripts/reports/chargeback_summary.py
