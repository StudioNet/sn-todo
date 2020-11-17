FROM node:14.11.0

WORKDIR /

COPY . .

RUN ["npm", "install"]

CMD ["npm", "run", "start"]

EXPOSE 4200
