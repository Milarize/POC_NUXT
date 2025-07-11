# Use the official Bun image
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1 as production
WORKDIR /usr/src/app

# Copy built application
COPY --from=base /usr/src/app/.output ./.output
COPY --from=base /usr/src/app/package.json ./

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "run", ".output/server/index.mjs"] 