import React from "react";
import { Message, DialogItem } from "components";

import './home.scss';

const Home = () => {
  return (
    <section className="home">
      <div className="dialogs">
        <DialogItem user={{
          fullname: 'Andrew Gragas',
          isOnline: false,
        }} unreaded={15} />
      </div>
      <div className="dialogs">
        <DialogItem user={{
          fullname: 'Andrew Gragas',
          isOnline: true,
        }} unreaded={1} />
      </div>
      <div className="dialogs">
        <DialogItem user={{
          fullname: 'Andrew Gragas',
          isOnline: false,
        }} unreaded={0} />
      </div>
      
      {/* <Dialogs Items={[
        {
          user: {
            fillname: 'Andrew Gragas',
            avatar: null,
          },
          message:
          {
            text: "Hello, bro, it's me, Gragas",
            isReaded: false,
            created_at: newDate()
          }
        }
      ] }/> */}

      {/* <Message avatar="https://sun1.userapi.com/sun1-16/s/v1/ig2/ZaMa2f-gB3vIYwzSl2EMVxhdlJzraJVk6F0XUY2xiYZEG69d3nimpODP_pQNKkA5emNT-_evwP7pb_085n2ukEle.jpg?size=100x100&quality=95&crop=40,40,320,320&ava=1"
        text="Hello, I want money and love🤤"
        date="Mon Jun 06 2022 16:10:44"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://images.unsplash.com/photo-1653085315536-1379bc836161?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDUzMDYzMA&ixlib=rb-1.2.1&q=80&w=100'
          },
          {
            filename: 'image.jpg',
            url: 'https://images.unsplash.com/photo-1653085315536-1379bc836161?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDUzMDYzMA&ixlib=rb-1.2.1&q=80&w=100'
          },
          {
            filename: 'image.jpg',
            url: 'https://images.unsplash.com/photo-1653085315536-1379bc836161?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDUzMDYzMA&ixlib=rb-1.2.1&q=80&w=100'
          },
        ]}
      />
      <Message avatar="https://sun1.userapi.com/sun1-95/s/v1/ig2/8ywjV8MxrP4KuJ9Rjo8jLEP4MZKt1_SWKo5I8mDHtDrSKW9hny9pNdfohKSJkXCChkzXiuXuFOgPuJz1qltl3l7j.jpg?size=100x100&quality=95&crop=220,172,450,450&ava=1"
        text="Hello, I am too🤤"
        date="Mon Jun 06 2022 16:24:44"
        isMe={true}
        isReaded={false}
      />
      <Message avatar="https://sun1.userapi.com/sun1-16/s/v1/ig2/ZaMa2f-gB3vIYwzSl2EMVxhdlJzraJVk6F0XUY2xiYZEG69d3nimpODP_pQNKkA5emNT-_evwP7pb_085n2ukEle.jpg?size=100x100&quality=95&crop=40,40,320,320&ava=1"
        date="Mon Jun 06 2022 16:24:44"
        attachments={[
        {
          filename: 'image.jpg',
          url: 'https://images.unsplash.com/photo-1653085315536-1379bc836161?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=100&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NDUzMDYzMA&ixlib=rb-1.2.1&q=80&w=100'
        },
      ]}
      />
      <Message avatar="https://sun1.userapi.com/sun1-16/s/v1/ig2/ZaMa2f-gB3vIYwzSl2EMVxhdlJzraJVk6F0XUY2xiYZEG69d3nimpODP_pQNKkA5emNT-_evwP7pb_085n2ukEle.jpg?size=100x100&quality=95&crop=40,40,320,320&ava=1"
        isTyping
      /> */}
    </section>
  );
};

export default Home;