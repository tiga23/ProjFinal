FROM node:16

ARG DATABASE_URL=${DATABASE_URL}
ARG PORT=${PORT}
ENV DATABASE_URL ${DATABASE_URL}

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
COPY data/ ./data/
RUN yarn install --frozen-lockfile

COPY . .
#RUN yarn build

EXPOSE ${PORT}
CMD ["yarn", "develop"]

