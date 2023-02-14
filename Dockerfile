WORKDIR /viio_test_API

ENV PORT 9000

# Copy package.json and package-lock.json files
COPY package*.json /viio_test_API/

COPY . /viio_test_API/

# Copy environment variables
COPY .env ./

# Install all dependencies
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

