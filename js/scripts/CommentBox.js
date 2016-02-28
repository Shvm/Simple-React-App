/**
 * Created by shivamsahu on 2/28/16.
 */
define(['require', 'jquery', 'react', 'react_dom', 'jsx!./CommentList', 'jsx!./CommentForm'],
    function(require, $, React, ReactDOM) {
    return {
        commentBox: function() {
            var CommentList = require('./CommentList');
            var CommentForm = require('./CommentForm');
            var CommentBox = React.createClass({
                getInitialState: function () {
                  return {data: []};
                },
                handleCommentSubmit: function(comment) {
                    $.ajax({
                        url: this.props.url,
                        dataType: 'json',
                        type: 'POST',
                        data: comment,
                        success: function(data) {
                            this.setState({data: data});
                        }.bind(this),
                        error: function(xhr, status, err) {
                            console.error(this.props.url, status, err.toString());
                        }.bind(this)
                    });
                },
                loadCommentsFromServer: function () {
                    $.ajax ({
                        url: this.props.url,
                        dataType: 'json',
                        cache: false,
                        success: function(data) {
                            this.setState({data: data});
                        }.bind(this),
                        error: function(xhr, status, err) {
                            console.error(this.props.url, status, err.toString());
                        }.bind(this)
                    });
                },
                componentDidMount: function () {
                    this.loadCommentsFromServer();
                    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
                },
                render: function () {
                    return (
                        <div className="commentBox">
                            This is the comment box!
                            <CommentList data = {this.state.data} />
                            <CommentForm onCommentSubmit={this.handleCommentSubmit} />
                        </div>
                    );
                }
            });
            return CommentBox;
        }
    }
});