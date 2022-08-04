import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../Type/comments';
import './CommentList.scss';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  return (
    <>
      {comments.map(comment => (
        <div className="CommentInfo">
          <CommentInfo key={comment.id} comment={comment} />
        </div>
      ))}
    </>

  );
};
