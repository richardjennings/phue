
.PHONY: build-dev srv

build-dev:
	docker run --rm -v $$PWD:/app --workdir /app --entrypoint "" node npm install && npm run build-dev

srv:
	docker run --rm -v $$PWD:/app --workdir /app -p 8080:8080 php php -S "0.0.0.0:8080" -t .
