# NodeAGC

`ps : this thing is not mine, i just add some function to my own interes, if you're the real owner of this script contact me``

## Use with nginx

add this to your nginx config

```
proxy_pass http://127.0.0.1:8994;
proxy_set_header  Host               $host;
proxy_set_header  X-Forwarded-For    $proxy_add_x_forwarded_for;
proxy_set_header  X-Forwarded-Proto  $scheme;
proxy_set_header  Accept-Encoding    "";
```

