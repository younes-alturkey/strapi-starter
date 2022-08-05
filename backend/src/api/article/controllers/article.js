"use strict";

/**
 *  article controller
 */

("use strict");

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  async updateLikes(ctx) {
    try {
      const { id, userID } = ctx.params;
      const article = await strapi.entityService.findOne(
        "api::article.article",
        id,
        {
          fields: ["likes", "likedUserIDs"],
        }
      );

      const articleLikes = article.likes ? article.likes : 0;
      const likedUserIDsArr = article.likedUserIDs ? article.likedUserIDs : [];
      const userIDStr = userID.toString();

      if (Array.isArray(likedUserIDsArr) && likedUserIDsArr.length > 0) {
        const userIndex = likedUserIDsArr.indexOf(userIDStr);
        if (userIndex !== -1) {
          let newLikedUserIDsArr = [...likedUserIDsArr];
          newLikedUserIDsArr = newLikedUserIDsArr.filter(
            (user) => user !== userIDStr
          );
          const newLikesCount = articleLikes - 1;
          const updatedArticle = await strapi.entityService.update(
            "api::article.article",
            id,
            {
              data: {
                likes: newLikesCount > 0 ? newLikesCount : 0,
                likedUserIDs: newLikedUserIDsArr,
              },
            }
          );

          return { article: updatedArticle };
        } else {
          const newLikedUserIDsArr = likedUserIDsArr;
          newLikedUserIDsArr.push(userIDStr);
          const newLikesCount = articleLikes + 1;
          const updatedArticle = await strapi.entityService.update(
            "api::article.article",
            id,
            {
              data: {
                likes: newLikesCount,
                likedUserIDs: newLikedUserIDsArr,
              },
            }
          );

          return { article: updatedArticle };
        }
      } else {
        const newLikedUserIDsArr = likedUserIDsArr;
        newLikedUserIDsArr.push(userIDStr);
        const newLikesCount = articleLikes + 1;
        const updatedArticle = await strapi.entityService.update(
          "api::article.article",
          id,
          {
            data: {
              likes: newLikesCount,
              likedUserIDs: newLikedUserIDsArr,
            },
          }
        );
        return { article: updatedArticle };
      }
    } catch (error) {
      console.error(error);
      return {
        updatedLikes: false,
        error,
      };
    }
  },
  async find(ctx) {
    // some logic here
    const { data, meta } = await super.find(ctx);
    // some more logic

    return { data, meta };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    try {
      const article = await strapi.entityService.findOne(
        "api::article.article",
        id,
        {
          fields: ["views"],
        }
      );
      const updated = await strapi.entityService.update(
        "api::article.article",
        id,
        {
          data: {
            views: article.views ? article.views + 1 : 1,
          },
        }
      );
      const coreResponse = await super.findOne(ctx);

      return {
        response: { ...updated, ...coreResponse, updatedViewsCount: true },
      };
    } catch (error) {
      console.error(error);
      const coreResponse = await super.findOne(ctx);
      return {
        response: { ...coreResponse, updatedViewsCount: false },
        error,
      };
    }
  },

  async create(ctx) {
    // some logic here
    const response = await super.create(ctx);
    // some more logic

    return response;
  },

  async update(ctx) {
    // some logic here
    const response = await super.update(ctx);
    // some more logic

    return response;
  },

  async delete(ctx) {
    // some logic here
    const response = await super.delete(ctx);
    // some more logic

    return response;
  },
}));
