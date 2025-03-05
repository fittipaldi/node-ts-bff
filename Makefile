PROJECT_PATH := $(patsubst %/,%,$(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
OUTPUT_PATH := $(PROJECT_PATH)/_output
PROTO_URL=https://raw.githubusercontent.com/fittipaldi/node-ts-grpc/main/proto/demo/demo.proto
PROTO_DIR=proto
PROTO_PATH=proto/demo.proto

TAG ?=  $(shell git -C "$(PROJECT_PATH)" rev-parse HEAD)
ifdef VERSION
override TAG = $(VERSION)
endif

.PHONY: download-proto
download-proto: ## Download the demo.proto project dependencies
	mkdir -p $(PROTO_DIR)
	curl -o $(PROTO_PATH) $(PROTO_URL)

.PHONY: install
install: ## Install project dependencies
	npm install

.PHONY: reinstall
reinstall: ## Reinstall project dependencies, delete the node_modules folder and recreate
	rm -rf node_modules
	make install

.PHONY: build
build: ## Build the application
	npm run build

.PHONY: start
start: build ## Start the application after building
	npm run start

.PHONY: dev
dev: ## Run the application in development mode
	npm run dev

.PHONY: test
test: ## Run tests
	npm run test

.PHONY: clean
clean: ## Clean the build artifacts
	rm -rf dist

.PHONY: test_coverage
test_coverage: ## Run tests with coverage reporting
	npm run test:coverage

.PHONY: run_doc
run_doc: ## Start the server to build the swagger doc page
	mkdir -p docs/assets
	cp -r node_modules/swagger-ui-dist/*.js node_modules/swagger-ui-dist/*.css docs/assets
	npx http-server docs

.PHONY: make_doc
make_doc: ## Organize the files for swagger doc page
	mkdir -p docs/assets
	cp -r node_modules/swagger-ui-dist/*.js node_modules/swagger-ui-dist/*.css docs/assets

help:
	@echo "Available commands:"
	@printf "%-30s %s\n" "Command" "Description"
	@echo "----------------------- ------------------------------------------"
	@grep -E '^[a-zA-Z._-]+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
