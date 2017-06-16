FROM localhost:5000/node:7.7

EXPOSE 3089

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm","start"]
