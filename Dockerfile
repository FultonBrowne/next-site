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

EXPOSE 3000

# Run your Next.js app
CMD ["npm", "start"]
