import React from "react";
import Child from "./imagechild";
 
 const Parent = () => {
    const images = [{image: "pic1.jpg"},
                  {image: "pic2.jpg"},
                  {image: "pic3.jpg"},
                  {image: "pic4.jpg"},
                  {image: "pic5.jpg"},
                  {image: "pic6.jpg"},
                  {image: "pic7.jpg"},
                  {image: "pic8.jpg"}
    ]

    const videos =[
        {videos:"vedio1.mp4"},
        {videos:"vedio1.mp4"},
    ]

    return(
 
        <div>
 
            <Child images = {images}
            videos ={videos} />
 
        </div>
 
    )
 }
 
 export default Parent;