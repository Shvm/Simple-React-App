/**
     * Created by shivamsahu on 2/28/16.
     */
define (["require", "react", "react_dom", 'jsx!./Comments'], function (require, React, ReactDOM) {

    var CommentList = React.createClass({
        render: function() {
            var Comments = require('./Comments')
            var commentNodes = this.props.data.map(function(comments) {
                return (
                    <Comments author = {comments.author} key = {comments.id}>
                        {comments.text}
                    </Comments>
                )
            })
            return (
                <div className="commentList">
                    {commentNodes}
                </div>
            );
        }
    });
    return CommentList;
});