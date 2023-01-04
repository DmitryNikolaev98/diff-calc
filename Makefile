install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
	npx jest

watch:
	npx jest --watch

test-coverage:
	npx jest --coverage