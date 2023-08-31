# Use Node.js 18.15.0 as the base image
FROM node:18.15.0

ENV APP_PORT = 3000



# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Command to run the Node.js app
CMD [ "node", "index.js" ]