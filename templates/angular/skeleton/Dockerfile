# Stage 1: Build the Angular application
FROM node:22 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Serve the Angular application with Nginx
FROM nginx:alpine

COPY --from=build /app/dist/angular-security-manager/browser /usr/share/nginx/html

EXPOSE 80

RUN rm /etc/nginx/conf.d/default.conf
COPY ./.nginx/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]