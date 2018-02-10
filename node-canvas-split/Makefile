NAME=demo
VERSION=0.0.2-build

.PHONY: build test

debug:
	echo $(NAME):$(VERSION)

build:
	docker build -t $(NAME):$(VERSION) .

test:
	docker run --rm $(NAME):$(VERSION) npm test

testsh:
	docker run --rm -it $(NAME):$(VERSION) sh