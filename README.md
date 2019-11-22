# Forum-concept

Forum-concept is a mock article aggregation, web content rating and discussion website styled similarly to Reddit.

Users can view articles and comments (which are filterable and sortable), as well as up and down vote any articles or comments they like or dislike.
If users are logged in they are also able write their own comments on articles. Each user has their own profile page, which lists out any articles they've posted.

## To run this project locally:

1. Fork this repo
2. Click your repo's "Clone or Download" link and copy the URL (which will look something like https://github.com/xxxxx/forum-concept.git)
3. Navigate to where you'd like the application to be copied in your command line and write:

   ```
   git clone //your URL//
   ```

Open the newly-created folder in your CLI and type `npm install` to install all dependencies.

The minimum version of node required to run this project is v12.9.1

To run, simply type the comment `npm start`.

## Project Info

The hosted version is found here: https://forum-concept.netlify.com
The back-end repository is found here: https://github.com/jcraggs/forum-concept
The hosted-version of the back-end API is found here: https://forum-concept.herokuapp.com/api

## File Structure

```raw
.
├── public
│   ├── _redirects ->
│   ├── favicon.ico -> display icon in the browser
│   └── index.html ->
│
├── src
│   ├── components
│   │   ├── Article.jsx           ->    page showing a clicked article and associated comments
│   │   ├── ArticleCards.jsx      ->    container for the single article cards
│   │   ├── ArticleQuery.jsx      ->    drop down select boxes to filter/sort articles
│   │   ├── CommentCards.jsx      ->    responsible for rending the component containing comments and input boxes
│   │   ├── CommentQuery.jsx      ->    drop down select boxes to filter/sort comments
│   │   ├── DownvoteArticle.jsx   ->    button for downvoting an article
│   │   ├── DownvoteComment.jsx   ->    button for downvoting a comment
│   │   ├── ErrorMsg.jsx          ->    renders if an error is encountered
│   │   ├── ErrorPage.jsx         ->    page which renders if the user navigates to an invalid url
│   │   ├── Footer.jsx            ->    contains a link to my github
│   │   ├── FullArticleCard.jsx   ->    responsible for showing the full article contents
│   │   ├── Header.jsx            ->    contains the homepage header link and log in/out buttons
│   │   ├── Home.jsx              ->    page which renders all of the available articles
│   │   ├── InputComment.jsx      ->    comment box which renders if a user is logged in
│   │   ├── Loading.jsx           ->    renders whilst the request to the API is taking place
│   │   ├── LogIn.jsx             ->    page allowing a user to be selected from a drop down list and logged in
│   │   ├── LogInSubTitle.jsx     ->    a reminder link within the full article page that a user needs to log in to comment
│   │   ├── Main.jsx              ->    responsible for routing of the various pages
│   │   ├── SingleArticleCard.jsx ->    induvidual article card showing a preview of the article
│   │   ├── SingleCommentCard.jsx ->    induvidual comment card showing the contents of the comment
│   │   ├── TopicQuery.jsx        ->    drop down select boxes to filter/sort topics
│   │   ├── Topics.jsx            ->    page showing all articles from a particular topic
│   │   ├── UpvoteArticle.jsx     ->    button for upvoting an article
│   │   ├── UpvoteComment.jsx     ->    button for downvoting an article
│   │   ├── User.jsx              ->    page showing the user card and associated articles
│   │   └── UserCard.jsx          ->    induvidual card showing the details of the user- name and avatar
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

## App component stucture

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
