FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json* ./

# If package-lock.json exists use npm ci, otherwise npm install
RUN if [ -f package-lock.json ]; then \
      npm ci --production=false; \
    else \
      npm install --production=false; \
    fi


COPY . .
EXPOSE 8080
CMD ["node", "src/index.js"]
