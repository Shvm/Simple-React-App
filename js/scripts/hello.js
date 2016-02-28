/** @jsx React.DOM */
define(["react","react_dom"], function (React, ReactDOM) {
  return {
      stuff : function() {
        var IndexComponent = React.createClass({
            render: function () {
                return (
                    <div>
                        Some Stuff goes here
                    </div>
                );
            }
        });

        return IndexComponent;
      }
    };
});