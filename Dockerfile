FROM node:latest

WORKDIR /usr/src/app/admin-dashboard

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project into the container
COPY . .

# Build the Angular project
RUN npm run build --prod

# Expose the desired port
EXPOSE 4567

# Serve the Angular build using `npx serve`
CMD ["npx", "serve", "-s", "dist/admin-dashboard", "-l", "4567"]
