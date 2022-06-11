# STAGE 1: BUILD #

FROM node:16-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

# STAGE 2: NGINX #

# FROM nginx:1.16.0-alpine as prod-stage

# COPY --from=build-step /app/dist/gestion-de-personal /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
