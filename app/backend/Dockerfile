# Stage 1: build (not required for pure node, but keeps parity for more complex builds)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./

# If package-lock.json exists use npm ci, otherwise npm install
RUN if [ -f package-lock.json ]; then \
      npm ci --production=false; \
    else \
      npm install --production=false; \
    fi


# Stage 2: runtime
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "src/index.js"]
