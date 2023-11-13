import './Post.css';

export default function Post() {
  return (
    <div className='post'>
        <img className='postImg'
        src="https://i.pinimg.com/originals/3e/a1/37/3ea1371e08a4634823d8fbfa2ae14f65.jpg" 
        alt="" />
        <div className="postInfo">
            <div className="postCats">
              <span className="postCat">Music</span>
              <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
            Lorem ipsum dolor sit amet. 
            </span>  
            <hr/>
            <span className="postDate">
             1 hour ago    
            </span>  
        </div>
        <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum qui quasi,
                corporis laboriosam tempore placeat cumque dignissimos 
                sunt harum temporibus ipsum sequi quos inventore ipsam ad!
                Rem, repudiandae eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum qui quasi,
                corporis laboriosam tempore placeat cumque dignissimos 
                sunt harum temporibus ipsum sequi quos inventore ipsam ad!
                Rem, repudiandae eius.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nostrum qui quasi,
                corporis laboriosam tempore placeat cumque dignissimos 
                sunt harum temporibus ipsum sequi quos inventore ipsam ad!
                Rem, repudiandae eius.
        </p>
    </div>
  )
}
