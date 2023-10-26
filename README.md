# Media Data Hub

Media Data Hub is design for you to own the metadata of your media.

Media Data Hub is [PocketBase](https://github.com/pocketbase/pocketbase) v0.19.0 with predefined schemas.
Although PocketBase comes with a web UI, Media Data Hub targets for people who know programming to import data via API.

## About

When you use media server like Plex and Jellyfin, they usually have builtin agents that rely on external metadata providers.

However, using external metadata providers has several problems. The metadata can be changed. There are many complaints on metadata and artworks unexpected changes after refresh.

Moreover, the metadata may not fits what you like. Although you can edit them in media server, it can be painful to migrate to different media servers.

Last but not least, the metadata may not exists. Private media or languages beside English may not be available on external metadata providers.

## Features

All features that come with PocketBase are supported:

- Upload to S3
- Automatic backup database
- OAuth login

## Setup

### Minimal

1. Clone this repository.
2. Download PocketBase from [release page](https://github.com/pocketbase/pocketbase/releases) to the folder that contains `pb_migrations`.

```
pocketbase serve --http=0.0.0.0:8080
```

### Docker

```
version: "3"

services:
  media-data-hub:
    image: ghcr.io/media-data-hub/media-data-hub:latest
    restart: unless-stopped
    ports:
      - 8080:8080
    volumes:
      - data:/app/pb_data

volumes:
  data:
```

## Configuration

See [PocketBase](https://pocketbase.io/docs/going-to-production/).
