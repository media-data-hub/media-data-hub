ARG BASE_IMAGE=alpine:latest

FROM $BASE_IMAGE as builder
ARG PB_VERSION=0.36.4
ARG TARGETARCH

RUN apk add --no-cache \
    unzip \
    ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${TARGETARCH}.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /app/

FROM  $BASE_IMAGE
WORKDIR /app

COPY --chmod=744 --from=builder /app/pocketbase /app/pocketbase
COPY --chmod=644 ./pb_migrations /app/pb_migrations

EXPOSE 8080

CMD ["/app/pocketbase", "serve", "--http=0.0.0.0:8080"]
