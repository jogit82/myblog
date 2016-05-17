/**
 * Created by Sandeep on 28/04/15.
 */
var alt = require('../alt');
var PostActions = require('../actions/PostActions');

class PostStore{
    constructor(){
        var self = this;
        this.bindListeners({ // to register to action listeners
            updateCurrentPost: PostActions.UPDATE_CURRENT_POST, // listens to postActions.UPDATE_CURRENT_POST to update the post instance that needs to be shown to the reader
            updatePosts:  PostActions.UPDATE_POSTS // listens to postActions.UPDATE_POSTS and updates the property posts so that we can show a list of posts to the users
        });
        this.on('init', function(){
            self.posts = []; // posts hold an array of posts to display on the homepage
            self.currentPost = null; // currentPost holds a single post instance
            // for a large complex app, you may want to create different posts and currentPost, but for this simple app, this should be enough
        });
    }

    updateCurrentPost(post){ // invoked by PostStore.updateCurrentPost()
        this.currentPost = post; // takes in a single params post and uses it to update the instance property currentPost
    }

    updatePosts(posts){ // invoked by PostStore.updatePosts()
        this.posts = posts; // takes in a single params posts and uses it to update the instance var posts
    }

}

module.exports = alt.createStore(PostStore, 'PostStore'); // register the store using alt.createStore()
// Next step: create actions by going into PostActions.js