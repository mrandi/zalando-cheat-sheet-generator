FROM python

MAINTAINER Zalando SE

# scm-source.json must be in /
# all other files can be copy wherever you want
COPY * /

EXPOSE 8080

CMD python -m http.server 8000
