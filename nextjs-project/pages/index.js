import React, { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://interintellect.com/wp-content/uploads/2022/04/santamonica-1024x530.jpg",
    address: "calicut hospital ",
    discription: "This is the first meetup",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://www.factoryforty.be/wp-content/uploads/2018/11/unusual-business-meeting.jpg",
    address: "calicut temple",
    discription: "This is the second meetup",
  },
];

const HomePage = () => {
  return (
    <Fragment>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Fragment>
  );
};

export default HomePage;
