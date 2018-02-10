NAME=demo
VERSION=0.0.1

.PHONY: build test

debug:
	echo $(NAME):$(VERSION)

build:
	docker build -t $(NAME):$(VERSION) .

test:
	docker run --rm $(NAME):$(VERSION) npm test