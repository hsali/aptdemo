FROM node:6.12.3-alpine
COPY . /app
WORKDIR /app
RUN npm install -g typescript
RUN cd /app & npm install
EXPOSE 3000
CMD['npm', 'start']

