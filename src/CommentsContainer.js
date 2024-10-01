import React from "react";

const commentsData = [

  {
    name: "John Doe",
    text: "This video is absolutely amazing! The cinematography is on point, and I loved the storyline. Well done!",
    replies: [],
  },
  {
    name: "Jane Smith",
    text: "I agree with John! This is one of the best videos I’ve seen in a while. The editing is top-notch.",
    replies: [
      {
        name: "Michael Scott",
        text: "Totally! The video had me hooked from the start. Can’t wait to see more content like this.",
        replies: [],
      },
    ],
  },
  {
    name: "Alice Johnson",
    text: "This was good, but I feel like the pacing could have been a bit better. Some scenes felt a little too rushed for me.",
    replies: [
      {
        name: "Chris Evans",
        text: "I respect your opinion, but I think the pacing was intentional to keep the tension high!",
        replies: [],
      },
    ],
  },
  {
    name: "Robert Downey",
    text: "Such an inspiring video! Really motivated me to pursue my own creative projects.",
    replies: [],
  },

];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;