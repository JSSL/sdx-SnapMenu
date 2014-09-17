/**
 * @jsx React.DOM
 */
var React = require('react');

var Header = React.createClass({
  propTypes: {
    open: React.PropTypes.bool
  },

  render: function() {
    var className = this.props.open ? 'SnapMenu--open' : '';
    className += ' SnapMenu'
    return (
      <section className={className}>
        <div className="SnapMenu__drawer">
          {this.props.children}
        </div>
        <div onClick={this.onDismissClick} className="SnapMenu__dismiss"></div>
      </section>
    );
  },

  onDismissClick: function(){
    this.props.onDismiss();
  }

});

module.exports = Header;
