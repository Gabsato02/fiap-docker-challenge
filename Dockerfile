FROM node:18
WORKDIR /fiap-docker-challenge
ARG PORT_BUILD=3000
ENV PORT=$PORT_BUILD
EXPOSE $PORT_BUILD
COPY . .
RUN npm install
ENTRYPOINT npm start

CMD ['npm', 'start']