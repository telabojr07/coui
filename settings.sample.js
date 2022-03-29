module.exports = {
  name_web: "Master Resep Makanan Lezat",
  author: "Koki Paten",
  remove_comment_html: true,
  target: "https://resep.makananenak.my.id",
  map_permalink: ["page", "content", "sitemap", "host"],
  name_folder_sitemap: "sitemap",

  element_remove: [
    "#___gcse_0", //gsc

  ],

  costom_element_remove: [
    {
      target: "resep2021.web.app",
      element_remove_selector: [
        '.navbar-logo',
      ],
      string_replace_rules: [
        {
          target: "https://www.funcoding.xyz/",
          replace: "https://yayasangambut.com/"
        }
      ],
      replace_element_value: [
        {
          target: ".navbar-caption",
          replace: "${nameWeb}"
        }
      ],
      replace_string: [
        {
          target: "resep2021",
          replace: "${nameWeb}",
        }
      ],
    },



  ],
  inject_element_head: [
    {
      name_element: "beforehead",
      data_attribute: [],
      data_innerHTML: "",
      position: "",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "name",
          value_attribute: "viewport",
        },
        {
          name_attribute: "content",
          value_attribute:
            "width=device_width, initial_scale=1.0, user_scalable=1.0, minimum_scale=1.0, maximum_scale=5.0",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "name",
          value_attribute: "google_site_verification",
        },
        {
          name_attribute: "content",
          value_attribute: "DhIOtnG1suTXf3j_9BCbfsZQEps5KbYjUrKiliVwa0M",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "name",
          value_attribute: "description",
        },
        {
          name_attribute: "content",
          value_attribute: "${descriptionPost}",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "charset",
          value_attribute: "UTF_8",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "property",
          value_attribute: "og:type",
        },
        {
          name_attribute: "content",
          value_attribute: "article",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "property",
          value_attribute: "og:title",
        },
        {
          name_attribute: "content",
          value_attribute: "${titlePost}",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "property",
          value_attribute: "og:description",
        },
        {
          name_attribute: "content",
          value_attribute: "${descriptionPost}",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "property",
          value_attribute: "og:url",
        },
        {
          name_attribute: "content",
          value_attribute: "${urlPost}",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "property",
          value_attribute: "og:site_name",
        },
        {
          name_attribute: "content",
          value_attribute: "${nameWeb}",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "property",
          value_attribute: "article:published_time",
        },
        {
          name_attribute: "content",
          value_attribute: "${timePublish}",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
    {

      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "name",
          value_attribute: "google-site-verification",
        },
        {
          name_attribute: "value",
          value_attribute: "bh0x4IBBzzFwzvlKjHAaQmm3-d3BQdeAf678Br7x7ro",
        },

      ],
      data_innerHTML: "",
      position: "start",
    },
    {
      name_element: "meta",
      data_attribute: [
        {
          name_attribute: "property",
          value_attribute: "article:author",
        },
        {
          name_attribute: "content",
          value_attribute: "${authorPost}",
        },
      ],
      data_innerHTML: "",
      position: "start",
    },
  ],
  inject_element_body: [
    {
      name_element: "center",
      data_attribute: [],
      data_innerHTML: "<big></big>",
      position: "start",
    },
    {
      name_element: "afterbody",
      data_attribute: [],
      data_innerHTML: "",
      position: "end",
    },
    {
      name_element: "script",
      data_attribute: [
        {
          name_attribute: "src",
          value_attribute: "/assets/inject.js",
        },
      ],
      data_innerHTML: "",
      position: "end",
    },
  ],
};
