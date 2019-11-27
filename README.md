# Forum-concept

Forum-concept is a mock article aggregation, web content rating and discussion website styled similarly to Reddit.

Users can view articles and comments (which are filterable and sortable), as well as up and down vote any articles or comments they like or dislike.
If users are logged in they are also able write their own comments on articles. Each user has their own profile page, which lists out any articles they've posted.

## To run this project locally:

1. Click on the repo's "Clone or Download" button link and copy the URL (https://github.com/jcraggs/fe-forum-concept.git)
2. Navigate to where you'd like the application to be copied in your command line and write:

   ```
   git clone https://github.com/jcraggs/fe-forum-concept.git
   ```

3. Navigate to the newly-created folder in your command line interface and type `npm install` to install all dependencies.

4. To run, simply type the comment `npm start`. The minimum version of node required to run this project is v12.9.1

## How does it work?

A database which uses PostgreSQL has already been set up (see: https://github.com/jcraggs/forum-concept). This database contains all the articles, users and comments which are avaliable on the website. The database is accesible via an API and is hosted on Heroku (see: https://forum-concept.herokuapp.com/api).

The front end website has been made with React which accesses the database via its exposed API. React is able to make requests to the backend via Axios, a JavaScript library which essentially promisifies HTTP requests.

The website is hosted here: https://forum-concept.netlify.com

## File Structure

```raw
.
├── public
│   ├── _redirects                ->    tells netifly to serve the index.html page
│   ├── favicon.ico               ->    display icon in the browser
│   └── index.html                ->    html file for the react app (all the application components are loaded into this)
│
├── src
│   ├── components
│   │   ├── Article.jsx           ->    page showing a clicked article and associated comments
│   │   ├── ArticleCards.jsx      ->    container for the single article cards
│   │   ├── ArticleQuery.jsx      ->    drop down select boxes to filter/sort articles
│   │   ├── CommentCards.jsx      ->    responsible for rending the component containing comments and input boxes
│   │   ├── CommentQuery.jsx      ->    drop down select boxes to filter/sort comments
│   │   ├── DownvoteItem.jsx      ->    button for downvoting a n article or comment
│   │   ├── ErrorMsg.jsx          ->    renders if an error is encountered
│   │   ├── Footer.jsx            ->    contains a link to my github
│   │   ├── FullArticleCard.jsx   ->    responsible for showing the full article contents
│   │   ├── Header.jsx            ->    contains the homepage header link and log in/out buttons
│   │   ├── Home.jsx              ->    page which renders all of the available articles
│   │   ├── InputComment.jsx      ->    comment box which renders if a user is logged in
│   │   ├── Loading.jsx           ->    renders whilst the request to the API is taking place
│   │   ├── LogIn.jsx             ->    page allowing a user to be selected from a drop down list and logged in
│   │   ├── LogInButton.jsx       ->    button for logging in and out
│   │   ├── LogInSubTitle.jsx     ->    a reminder link within the full article page that a user needs to log in to comment
│   │   ├── Main.jsx              ->    responsible for routing of the various pages
│   │   ├── SingleArticleCard.jsx ->    induvidual article card showing a preview of the article
│   │   ├── SingleCommentCard.jsx ->    induvidual comment card showing the contents of the comment
│   │   ├── TopicQuery.jsx        ->    drop down select boxes to filter/sort topics
│   │   ├── Topics.jsx            ->    page showing all articles from a particular topic
│   │   ├── UpvoteItem.jsx        ->    button for upvoting an article or comment
│   │   ├── User.jsx              ->    page showing the user card and associated articles
│   │   └── UserCard.jsx          ->    induvidual card showing the details of the user- name and avatar
│   │
│   ├── api.js                    ->    contains the api request functions
│   ├── App.js                    ->    contains the header, main and footer components
│   ├── index.css                 ->    styling file for the components of the website
│   └── index.js                  ->    renders the app in the index.html
│
├── .gitignore                    ->    contains the local files to be ignored e.g. node_modules and knexfile.js
├── AvaliableScripts.md           ->    markdown document containing information on the reactscripts for this project
├── howToDeploy.md                ->    markdown document containing information on how to host the project on netlify
├── package.json                  ->    contains the metadata of the npm dependencies and scripts of the project
├── package-lock.json & yarn.lock ->    auto-generated files which store an exact version dependency tree
└── README.md                     ->    markdown document containing all the project information
```

## App component stucture

```raw
App.js
├── Header
│   └── LogInButton
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
│   │           ├── UpvoteItem
│   │           └── DownvoteItem
│   │
│   ├── Article ("/articles/:article_id")
│   │   ├── LogInSubTitle
│   │   ├── FullArticleCard
│   │   │   ├── UpvoteItem
│   │   │   └── DownvoteItem
│   │   ├── CommentQuery
│   │   └── CommentCards
│   │       ├── InputComment
│   │       └── SingleCommentCard
│   │           ├── UpvoteItem
│   │           └── DownvoteItem
│   │
│   └── User ("/users/:user_id")
│       ├── UserCard
│       └── ArticleCards
│
└── Footer
```
