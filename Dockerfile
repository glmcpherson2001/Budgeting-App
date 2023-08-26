# Use Node.js 18.15.0 as the base image
FROM node:18.15.0

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Run migrations using Sequelize CLI
RUN npx sequelize-cli db:migrate

# Expose the port the app runs on
EXPOSE 3000

# Command to run the Node.js app
CMD [ "node", "index.js" ]