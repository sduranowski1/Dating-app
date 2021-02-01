import React from 'react'
import Chat from "./Chat";

function Chats() {
    return <div className="chats">
    <Chat
      name="Mark"
      message="Hey how are you 😃!"
      timestamp="40 seconds ago"
      profilePic="https://www.researchgate.net/profile/Marc_Hye-Knudsen/publication/337651327/figure/fig3/AS:830913936121856@1575116728100/Oh-hi-Mark-The-emotion-in-Tommy-Wiseaus-delivery-of-this-line-is-so-incongruous_Q640.jpg"
    />
    <Chat
      name="Oscar"
      message="Loooool"
      timestamp="55 minutes ago"
      profilePic="https://fairfield.pl/wp-content/uploads/2020/09/DSC_0366-scaled-e1600929070291.jpg"
    />
    <Chat
      name="Nicole"
      message="Love you"
      timestamp="2 days ago"
      profilePic="https://profile-images.xing.com/images/8a5c3a56f55741fabf8911d38469b737-5/nicole-distler.1024x1024.jpg"
    />
    <Chat
      name="Cristina"
      message="Tot bé?"
      timestamp="1 week ago"
      profilePic="https://www.instyle.es/medio/2020/06/27/cristina-pedroche-tarta-queso_4aeeb946_812x456.jpg"
    />
  </div>
}

export default Chats;
