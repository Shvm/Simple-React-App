/**
 * Created by shivamsahu on 2/28/16.
 */
define(['require', 'react', 'react_dom'], function (require, React, ReactDOM) {
    var Comments = React.createClass({
       render: function() {
           return (
               <div className="comments">
                   <h2 className="commentAuthor">
                       {this.props.author}
                   </h2>
                   <h2>
                       {this.props.children.toString()}
                   </h2>
               </div>
           )
       }
    });
    return Comments;
});