import './SinglePost.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img 
        src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" 
        alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit.
          <div className="singlePostEdit">
          <i class=" singlePostIcon fa-solid fa-pen-to-square"></i>
          <i class=" singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Bayzid</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus unde 
          quidem neque pariatur. Optio recusandae quae esse inventore, placeat 
          tempora ullam rerum soluta nesciunt doloremque sunt, qui doloribus similique? 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus unde 
          quidem neque pariatur. Optio recusandae quae esse inventore, placeat 
          tempora ullam rerum soluta nesciunt doloremque sunt, qui doloribus similique?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum possimus unde 
          quidem neque pariatur. Optio recusandae quae esse inventore, placeat 
          tempora ullam rerum soluta nesciunt doloremque sunt, qui doloribus similique?        
        </p>
      </div>
    </div>
  )
}
