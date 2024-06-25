import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, getPhotosByTopic }) => {
  return (
    <div className="topic-list__item" onClick={() => getPhotosByTopic(topic.id)}>
      <span>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;