import  { Component } from 'react';
import blog from './blog';
import blogForm from './bolgForm';

class final extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  addComment = (comment) => {
    this.setState((prevState) => ({
      comments: [...prevState.comments, comment],
    }));
  };

  render() {
    return (
      <div>
        <h1>React Blog</h1>
        <blogForm addComment={this.addComment} />
        <blog comments={this.state.comments} />
      </div>
    );
  }
}

export default final;
