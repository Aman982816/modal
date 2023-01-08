import { useState ,useRef} from 'react'
import AvatarEditor from 'react-avatar-editor'
import YourSvg from "./upload.svg";
export default function Modal() {
// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
  var a = document.createElement('a');
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}
  const [img ,setImg]= useState(null)
  const [preview ,sePreview]= useState(null)
  const editor = useRef(null);

  const onCrop =(view)=>{
sePreview(view)
  }
  return (
    <>
 <div  style={{
  position:"fixed",
  left:0,
  top:0,
  right:0,
  display:'flex',
  flexDirection:'column',
  justifyContent:"center",
  alignItems:"center",
  height:"100vh",
  width:"100vw",
  border:"2px solid black"

 }}>


<div
style={{
  border:"2px solid yellow",
  height:"450px",
  width:"450px",
display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}}

>
{!img&&<label for="myfile"  style={{
  display:'flex',
  flexDirection:"column",
  alignItems:"center"
}}>
  

<img src={YourSvg} style={{width:"14%"}}alt="Your SVG" />
  
  upload image</label>}
  <input type="file" id='myfile' style={{display:'none'}} onChange={e=>setImg(e.target.files[0])} />
{img&&<AvatarEditor

ref={editor}
        image={img}
        width={250}
        height={250}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={2.5}
        rotate={0}

        style={{
          border:"2px solid green"
        }}
      />
      }


    

</div>

<div>

      {img&&<button onClick={() => {

// alert('click')
        // if (editor) {
          // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
          // drawn on another canvas, or added to the DOM.
          const canvas = editor.current.getImage()

          console.log({canvash:canvas})
          const dataURL = canvas.toDataURL();
console.log(dataURL);
downloadImage(dataURL, 'my-canvas.jpeg');


          // If you want the image resized to the canvas size (also a HTMLCanvasElement)
          const canvasScaled = editor.current.getImageScaledToCanvas()
          console.log({canvash2:canvasScaled})
        // }
      }}>Download</button>}

<button onClick={e=>{
        setImg(null)
      }}>cancel</button>

  </div>

  </div>
    </>
  )
}
