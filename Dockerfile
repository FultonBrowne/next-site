# Step 1: Build your Next.js application
# Use the official lightweight Node.js 16 image.
# https://hub.docker.com/_/node
FROM node:19-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you use yarn)
COPY package*.json ./
# If you're using yarn with a `yarn.lock` file, uncomment the next line
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you're using yarn, run the following command instead
# RUN yarn install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build your Next.js application for production.
RUN npm run build

# Step 2: Serve the Next.js application using a Node.js server
# Use the official lightweight Node.js 16 image.
FROM node:19-alpine

# Set the working directory
WORKDIR /app

# Copy the built Next.js application from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Install production dependencies only
RUN npm install next

# Expose the port the app runs on
EXPOSE 3000

# Run your Next.js app
CMD ["npm", "start"]
