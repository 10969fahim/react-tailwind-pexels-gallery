import React from 'react';

const VideoCard = ({ video }) => {
  // const tags = image.tags.split(',');

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <video width="750" height="500" controls >
      <source src={video.video_files[0].link} type="video/mp4"/>
     </video>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Video by {video.videographer}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {video.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {video.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {video.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {/* {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))} */}
      </div>
    </div>
  )
}

export default VideoCard;
