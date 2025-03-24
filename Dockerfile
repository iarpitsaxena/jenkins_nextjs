# Use official Node.js image
FROM node:18-alpine  

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install  

# Copy the rest of the application files
COPY . .  

# Build the Next.js application
RUN npm run build  

# Expose port (Next.js default is 3000)
EXPOSE 3000  

# Start the Next.js app
CMD ["npm", "run", "start"]
