import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Comment from "./Comment"
import config from "../../config.js"

const commentQuery = gql`
  query($postId: ID!) {
    comments(where: { contentId: $postId }) {
      nodes {
        ...CommentFields
        children {
          nodes {
            ...CommentFields
          }
        }
      }
    }
  }

  fragment CommentFields on Comment {
    id
    date
    approved
    content
    author {
      ...AuthorFields
    }
  }

  fragment AuthorFields on CommentAuthor {
    name
    url
  }
`

const CommentList = ({ postId, comments }) => (
  <>
    {config.dynamicComments === true ? (
        <Query query={commentQuery} variables={{ postId }}>
          {({ loading, error, data }) => {
            if (loading) return `Loading comments...`
            if (error) return `Error loading comments...`

            return (
              <ol className="comment-list list-none p-0 m-0">
                {data.comments.nodes.map(comment => (
                  <div className="comment-thread" key={comment.id}>
                  <Comment
                    key={comment.id}
                    commentId={comment.id}
                    date={comment.date}
                    authorName={comment.author.name}
                    authorUrl={comment.author.url}
                    classes={''}
                  >
                    {comment.content}
                  </Comment>

                  { comment.children.nodes && comment.children.nodes.map(reply => (

                    <Comment
                      key={reply.id}
                      replyId={reply.id}
                      date={reply.date}
                      authorName={reply.author.name}
                      authorUrl={reply.author.url}
                      classes={'ml-6'}
                    >
                      {reply.content}
                    </Comment>
                  ))}
                  
                  </div>
                ))}
              </ol>
            )
          }}
        </Query>      
    ) : (
      <ol className="comment-list">
        {comments.map(comment => (
          <Comment
            key={comment.node.wordpress_id}
            commentId={comment.node.wordpress_id}
            date={comment.node.date}
            authorName={comment.node.author_name}
            authorUrl={comment.node.author_url}
          >
            {comment.node.content}
          </Comment>
        ))}
      </ol>
    )}
  </>
)

export default CommentList
