# Use Node.js Alpine base image
FROM node:20.12.0-alpine3.19

# Set working directory
WORKDIR /usr/src/app

# Copy only necessary files for installing dependencies (better caching)
COPY frontend/package.json frontend/package-lock.json frontend/tsconfig.json ./

# Install dependencies with deterministic behavior
RUN npm ci

# Copy the rest of the frontend code
COPY frontend ./

# Build the frontend (TypeScript + Vite)
RUN npm run build

# Expose the preview port (adjust as per Vite config)
EXPOSE 4173

# Start the Vite preview server
CMD ["npm", "run", "preview"]

