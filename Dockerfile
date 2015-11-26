FROM node:0.10.38

MAINTAINER Zalando SE

RUN npm install http-server -g

# scm-source.json must be in /
# all other files can be copy wherever you want
COPY scm-source.json /
COPY css /css
COPY js /js
COPY schema /schema
COPY index.html /

EXPOSE 8000

CMD http-server / -p 8000
