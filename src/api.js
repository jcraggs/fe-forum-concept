import axios from "axios";

export const getAllArticles = async query => {
  const { data } = await axios.get(
    "https://forum-concept.herokuapp.com/api/articles",
    {
      params: { topic: query }
    }
  );

  return data.articles;
};

export const getArticleInfo = async article_id => {
  const { data } = await axios.get(
    `https://forum-concept.herokuapp.com/api/articles/${article_id}`
  );

  return data.article;
};

export const getAllComments = async article_id => {
  const { data } = await axios.get(
    `https://forum-concept.herokuapp.com/api/articles/${article_id}/comments`
  );

  return data.comments;
};
