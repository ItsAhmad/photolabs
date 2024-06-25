import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, getPhotosByTopic }) => {
  const topicList = topics.map(topic => {
    return (
      <TopicListItem topic={topic} key={topic.id} getPhotosByTopic={getPhotosByTopic} />
    );
  });

  return (
    <div className="top-nav-bar__topic-list" >
      {topicList}
    </div>
  );
};

export default TopicList;
