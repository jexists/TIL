FROM node:16-alpine

WORKDIR /app
# WORKDIR -> cd 랑 같은 의미

COPY package.json package-lock.json ./

RUN npm ci
# npm install 보다 ci가 좋음

COPY index.js .

ENTRYPOINT [ "node", "index.js" ]

# docker build -f Dockerfile -t fun-docker .

# docker image

# docker run -d -p 8080:8080 fun-docker
# -d detached
# -p port 설정 (연결)

# docker ps

# docker logs #ID