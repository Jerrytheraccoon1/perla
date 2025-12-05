import indexHTML from "./site/index.html";

export default {
  async fetch(request) {
    return new Response(indexHTML, {
      headers: { "content-type": "text/html;charset=UTF-8" },
    });
  },
};
