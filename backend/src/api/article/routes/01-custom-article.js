module.exports = {
  routes: [
    {
      method: "PATCH",
      path: "/article/:id/likes/:userID",
      handler: "article.updateLikes",
    },
  ],
};
