NAME=demo
VERSION=0.0.2
APPDIR=/usr/src/app

.PHONY: build test

debug:
	echo $(NAME):$(VERSION)

build:
	docker build -t $(NAME):$(VERSION)-build . -f Dockerfile.build

	# Disable docker ignore
	mv .dockerignore .dockerignore_bak
	docker create --name extract $(NAME):$(VERSION)-build
	docker cp extract:$(APPDIR) ./app
	docker rm -f extract

	echo Building $(NAME):$(VERSION)

	docker build --no-cache -t $(NAME):$(VERSION) .
	rm -r ./app

	mv .dockerignore_bak .dockerignore

test:
	docker run --rm $(NAME):$(VERSION) npm test

testsh:
	docker run --rm -it $(NAME):$(VERSION) sh