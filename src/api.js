import axios from "axios";

export const getAllArticles = async (topicParam, sortParam, orderParam) => {
  const { data } = await axios.get(
    "https://forum-concept.herokuapp.com/api/articles",
    {
      params: { topic: topicParam, sort_by: sortParam, order: orderParam }
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

export const patchCommentVote = async (comment_id, voteVal) => {
  const {
    data
  } = await axios.patch(
    `https://forum-concept.herokuapp.com/api/comments/${comment_id}`,
    { inc_votes: voteVal }
  );
  return data;
};

export const patchArticleVote = async (article_id, voteVal) => {
  const {
    data
  } = await axios.patch(
    `https://forum-concept.herokuapp.com/api/articles/${article_id}`,
    { inc_votes: voteVal }
  );
  return data;
};

export const postComment = async (article_id, username, comment) => {
  const { data } = await axios.post(
    `https://forum-concept.herokuapp.com/api/articles/${article_id}/comments`,
    {
      username: username,
      body: comment
    }
  );
  return data.comment;
};

export const deleteCommentCard = async comment_id => {
  const { data } = await axios.delete(
    `https://forum-concept.herokuapp.com/api/comments/${comment_id}`
  );
  return data;
};
