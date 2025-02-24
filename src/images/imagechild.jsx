import './image.css';

const Child = (props) => {
    return(
        <div className='image'>
 
            {props.images.map((images, index) =>(

                  <img src={`/images/${images.image}`} alt={index} />

            ))}

            <div className="video">
                {props.videos.map((video)=>(
                    <video src={`/images/${video.videos}`} controls>Video</video>
                ))}
            </div>
        </div>
 
    )
}
export default Child;