Forum-concept is a mock article aggregation, web content rating and discussion website styled similarly to Reddit.

File Structure

```raw
.
├── public
│   ├── favicon.ico ->
│   └── index.html ->
│
├── src
│   ├── components
│   │   ├── Article.jsx
│   │   ├── ArticleCards.jsx
│   │   ├── ArticleQuery.jsx
│   │   ├── CommentCards.jsx
│   │   ├── CommentQuery.jsx
│   │   ├── DownvoteArticle.jsx
│   │   ├── DownvoteComment.jsx
│   │   ├── ErrorMsg.jsx
│   │   ├── ErrorPage.jsx
│   │   ├── Footer.jsx
│   │   ├── FullArticleCard.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── InputComment.jsx
│   │   ├── Loading.jsx
│   │   ├── LogIn.jsx
│   │   ├── LogInSubTitle.jsx
│   │   ├── Main.jsx
│   │   ├── SingleArticleCard.jsx
│   │   ├── SingleCommentCard.jsx
│   │   ├── TopicQuery.jsx
│   │   ├── Topics.jsx
│   │   ├── UpvoteArticle.jsx
│   │   ├── UpvoteComment.jsx
│   │   ├── User.jsx
│   │   └── UserCard.jsx
│   │
│   ├── api.js
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   └── index.js
│
├── .gitignore -> contains the local files to be ignored e.g. node_modules and knexfile.js
├── AvaliableScripts.md -> markdown document containing information on the reactscripts for this project
├── package.json -> contains the metadata of the npm dependencies and scripts of the project
├── package-lock.json & yarn.lock -> auto-generated files which store an exact version dependency tree
└── README.md -> markdown document containing all the project information
```

App component stucture

```raw
App.js
├── Header
│
├── Main
│   ├── LogIn ("/log-in")
│   │
│   ├── Topics ("/articles/topics/:topic")
│   │   ├── TopicQuery
│   │   └── SingleArticleCard
│   │
│   ├── Home ("/")
│   │   ├── ArticleQuery
│   │   └── ArticleCards
│   │       └── SingleArticleCard
│   │           ├── UpvoteArticle
│   │           └── DownvoteArticle
│   │
│   ├── Article ("/articles/:article_id")
│   │   ├── LogInSubTitle
│   │   ├── FullArticleCard
│   │   │   ├── UpvoteArticle
│   │   │   └── DownvoteArticle
│   │   ├── CommentQuery
│   │   └── CommentCards
│   │       ├── InputComment
│   │       └── SingleCommentCard
│   │           ├── UpvoteComment
│   │           └── DownvoteComment
│   │
│   ├── User ("/users/:user_id")
│   │   ├── UserCard
│   │   └── ArticleCards
│   │
│   └── ErrorPage ("/*")
│
└── Footer
```
