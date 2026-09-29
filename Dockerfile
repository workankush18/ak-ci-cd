FROM ubuntu

RUN apt-get update && apt-get install -y nodejs npm

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ENTRYPOINT ["node", "onboarding_service.js"]