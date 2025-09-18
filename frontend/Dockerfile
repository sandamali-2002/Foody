#Use Node 20 (latest LTS)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Run the development server and listen on all network interfaces
CMD ["npm", "run", "dev", "--", "--host"]