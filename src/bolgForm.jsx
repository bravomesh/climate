import  { Component } from 'react';

class blogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea
          placeholder="Write a comment..."
          value={this.state.comment}
          onChange={this.handleCommentChange}
        />
        <button type="submit">Add Comment</button>
      </form>
    );
  }
}

export default blogForm;
