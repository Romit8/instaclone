import React, { useState } from "react";
import "./AddCommentModal.css";

const AddCommentModal = ({ isOpen, closeModal, postId, handleComment, initialComments }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(initialComments || []);
  const [replyText, setReplyText] = useState("");
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [editReplyId, setEditReplyId] = useState(null);
  const [isLikedMap, setIsLikedMap] = useState({});

  const handleAddComment = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        id: Date.now(),
        text: commentText,
        replies: [],
        isLiked: false, // Add isLiked property to the new comment
      };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      handleComment(postId, updatedComments);
      setCommentText("");
    }
  };

  const handleLikeComment = (commentId) => {
    setIsLikedMap((prevMap) => ({
      ...prevMap,
      [commentId]: !prevMap[commentId],
    }));

    const updatedComments = comments.map((comment) =>
      comment.id === commentId ? { ...comment, isLiked: !isLikedMap[commentId] } : comment
    );
    setComments(updatedComments);
    handleComment(postId, updatedComments);
  };

  const isCommentLiked = (commentId) => !!isLikedMap[commentId];

  const handleReply = (commentId) => {
    setActiveCommentId(commentId);
  };

  const handleAddReply = () => {
    if (replyText.trim() !== "") {
      const updatedComments = comments.map((comment) => {
        if (comment.id === activeCommentId) {
          const newReply = {
            id: Date.now(),
            text: replyText,
          };
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        }
        return comment;
      });
      setComments(updatedComments);
      handleComment(postId, updatedComments);
      setReplyText("");
      setActiveCommentId(null);
    }
  };

  const handleEditReply = (replyId, newText) => {
    const updatedComments = comments.map((comment) => {
      const updatedReplies = comment.replies.map((reply) => {
        if (reply.id === replyId) {
          return { ...reply, text: newText };
        }
        return reply;
      });
      return { ...comment, replies: updatedReplies };
    });
    setComments(updatedComments);
    handleComment(postId, updatedComments);
    setEditReplyId(null);
  };

  return (
    <div className={`modal ${isOpen ? "show" : ""}`} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Comment</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Type your comment here..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button type="button" className="btn btn-primary" onClick={handleAddComment}>
              Add Comment
            </button>
            <div className="comment-list">
              {comments.map((comment) => (
                <div key={comment.id} className="comment-item">
                  <div>{comment.text}</div>
                  <div className="comment-actions">
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleLikeComment(comment.id)}
                    >
                      {isCommentLiked(comment.id) ? "Unlike" : "Like"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-secondary"
                      onClick={() => handleReply(comment.id)}
                    >
                      Reply
                    </button>
                  </div>
                  <div className="replies">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="reply-item">
                        {editReplyId === reply.id ? (
                          <div>
                            <textarea
                              className="form-control"
                              rows="1"
                              value={replyText}
                              onChange={(e) => setReplyText(e.target.value)}
                            ></textarea>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                              onClick={() => handleEditReply(reply.id, replyText)}
                            >
                              Save
                            </button>
                          </div>
                        ) : (
                          <div>
                            {reply.text}
                            <button
                              type="button"
                              className="btn btn-sm btn-secondary"
                              onClick={() => setEditReplyId(reply.id)}
                            >
                              Edit
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                    {activeCommentId === comment.id && (
                      <div className="reply-input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your reply here..."
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary"
                          onClick={handleAddReply}
                        >
                          Add Reply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCommentModal;
