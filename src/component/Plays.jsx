import React from 'react'
import "./Plays.css"
const Plays = () => {
  return (
      <div className="plays">

      <h1>Events In Chandigarh</h1>

      {/* Categories */}
      <div className="categories-1">
        <button>Workshops</button>
        <button>Comedy Shows</button>
        <button>Music Shows</button>
        <button>Performances</button>
        <button>Kids</button>
        <button>Meetups</button>
        <button>Exhibitions</button>
        <button>New Year Parties</button>
      </div>

      {/* Events */}
      <div className="plays-list">

        <div className="plays-card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAxOCBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00420747-zszavqxfts-portrait.jpg"
            alt="Chirag Panjwani Live"
          />
          <h3>Chirag Panjwani Live</h3>
          <p>Studio XO: Mohali</p>
          <p>Stand up Comedy</p>
          <b>₹ 599 onwards</b>
        </div>

        <div className="plays-card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCA5IEphbg%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@pt-v1.png,t-false,lfo-top_right,lx-N5,ly-0,w-160,l-end/et00514011-jzersgvnmv-portrait.jpg"
            alt="Lakhwinder Wadali"
          />
          <h3>Lakhwinder Wadali India Tour - Chandigarh</h3>
          <p>Omaxe International Trade...</p>
          <p>Concerts</p>
          <b>₹ 499 onwards</b>
        </div>

        <div className="plays-card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxOSBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-image,i-discovery-catalog@@icons@@pt-v1.png,t-false,lfo-top_right,lx-N5,ly-0,w-160,l-end/et00500405-zkfpuqzjcj-portrait.jpg"
            alt="Straight Up"
          />
          <h3>Straight Up - A standup Solo by Jaspreet Singh</h3>
          <p>Tagore Theatre: Chandigarh</p>
          <p>Stand up Comedy</p>
          <b>₹ 799 onwards</b>
        </div>

        <div className="plays-card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U3VuLCAyNyBTZXA%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00459232-txkpfvdmzy-portrait.jpg"
            alt="Masoom Vichar"
          />
          <h3>Masoom Vichar</h3>
          <p>The Laugh Club: Chandigarh</p>
          <p>Stand up Comedy</p>
          <b>₹ 799</b>
        </div>
         <div className="plays-card">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC,e-usm-2-2-0.5-0.008:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyIE9jdA%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00512615-aprscqqdkv-portrait.jpg"
            alt=""
          />
          <h3>Kuch Bhi Mat Bol:Rohit Shah</h3>
          <p>The Laugh Club: Chandigarh</p>
          <p>Stand up Comedy</p>
          <b>₹ 799</b>
        </div>

      </div>

    </div>
  )
}

export default Plays
