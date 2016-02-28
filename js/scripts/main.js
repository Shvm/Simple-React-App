/**
 * Created by shivamsahu on 2/1/16.
 */
define(["require", "jquery", "react","react_dom", "jsx!./hello", "jsx!./CommentBox",'./sampledata'],
    function(require, $, React, ReactDOM, Hello) {
        var commentBox = require('./CommentBox');
        var CommentBox = commentBox.commentBox();
        var data = require('./sampledata');
        ReactDOM.render(<CommentBox url = "../js/scripts/comments.json" pollInterval={2000} />, document.getElementById('content'));
});
