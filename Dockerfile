FROM node:22-alpine3.19

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .

RUN npm install

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Quando executar o container, ele vai rodar o comando para criar as migrations e rodar o servidor
CMD ["npm", "run", "start:prod"]