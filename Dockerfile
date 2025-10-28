FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Use a minimal web server to serve the static files
FROM node:20-alpine

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/out .

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]
