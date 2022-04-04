# NodeAGC

`ps : this thing is not mine, i just add some function to my own interes, if you're the real owner of this script contact me`

## Use with nginx

add this to your nginx config

```
proxy_pass http://127.0.0.1:8994;
proxy_set_header  Host               $host;
proxy_set_header  X-Forwarded-For    $proxy_add_x_forwarded_for;
proxy_set_header  X-Forwarded-Proto  $scheme;
proxy_set_header  Accept-Encoding    "";
```


## Configs

important config : 
- settings.js (copy from config.sample.js)
- rules folder (for every single domain setting)
- env file

## rules sample

For every single domain create rules file on the `rules` folder. ex for domain : `anekatempe.web.app` the rules files should be named: `anekatempe.web.app.js`.

Rules sample:
```
module.exports = {
  target: "anekatempe.web.app",
  element_remove_selector: [
    ".navbar-logo", //remove the css element
    'script[src*="googletagmanager"]' // remove script containt google tag manager
    ],  
  replace_script_contains: ["gtag"], // remove script contain certain string
  replace_string_rules: [
    //  you can replace multiple string
    {
      target: "aaa", // string to replace
      replace: "bbb", //replaced string
    },
  ],
  replace_element_value: [
    // you can replace multiple element value
    {
      target: "a.navbar-brand", //element to replace
      replace: "${nameWeb}", // replace with value
    },
    
  ],
  replace_string: [
    {
      target: "resep2026",
      replace: "${nameWeb}",
    },
  ],
};

```

## Starter

Try to run wth example files, just copy paste the file to settings file and rules.

## Run

`node index.js` or use `nodemon.js` on development.