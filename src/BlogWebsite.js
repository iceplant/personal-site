import React, { useState } from 'react';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comments: [], currentText:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({currentText: event.target.value});
  }

  handleSubmit(event) {
    const commentToAdd = this.state.currentText
    this.setState({comments: [...this.state.comments,commentToAdd], currentText:''})  //FCC said not to do this in case something happens between the two state accesses but I feel like it's chill?...
    //maybe changing it to the commentToAdd beforehand fixes the issue since we're not referencing state twice in the setState
    //Understand better what this does and whether I need it
    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>{this.state.comments.map((comment, commentIndex) => (
          <div id='comment-block' style={{border:'2px red solid'}}>
            <div>{comment}</div>
            <button onClick={()=>{
              const updatedComments = [...this.state.comments.slice(0,commentIndex), ...this.state.comments.slice(commentIndex+1)];
              this.setState({comments:updatedComments})}}>Delete Comment</button>
            <div><CommentsSection /></div>
          </div>
        ))}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Comment:
            <input type="text" value={this.state.currentText} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

const TaxesPost = () => {
return (<div>
  Some information about the taxe rate visualization I did.
</div>)};

// const NeutrinoPost = () => (<div>
//   Some information about the taxe rate visualization I did.
// </div>);

// const posts = [TaxesPost, NeutrinoPost];

const BlogWebsite = () => {
  localStorage.setItem("lastname", "Smith");
  return (<div><TaxesPost /> <CommentsSection removeSelf={()=>{}}/></div>)
};


export default BlogWebsite;