FROM node:18.16-slim

WORKDIR /home/app

ARG PORTA_ARG=4567
ENV PORTA ${PORTA_ARG}

COPY . .

EXPOSE ${PORTA_ARG}

CMD ["npm", "start"]