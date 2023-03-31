import { useState } from 'react';
// import { Form } from "react-router-dom";

function ImageForm() {

    const [images, setImages] = useState([])

    async function handleOpenWidget(event) {

        event.preventDefault();

        var myWidget = await window.cloudinary.createUploadWidget({
            cloudName: 'dwireitjj',
            uploadPreset: 'wjv22jj3',
            sources: [
                "local",
                "url",
                "camera",
                "google_drive",
                "facebook",
                "instagram",
            ],
            showAdvancedOptions: false,
            defaultSource: "local",
            maxFiles: 5,
            folder: "project_folder",
            
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                // console.log('Done! Here is the image info: ', result.info); 
                setImages((prevImg) => [...prevImg, { url: result.info.url, public_id: result.info.public_id }])
            }
        })
        myWidget.open();
    }
    return <>
        <div className="App">
            <button id="upload-widget" className="cloudinary-button" onClick={handleOpenWidget}>Upload Pictures</button>
        </div>
        <div>
            {images.map(image=>{
                return <div key={image.public_id}>
                    {(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image.url)) && <img src={image.url} alt={image.public_id} />}
                    { !(/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(image.url)) && <iframe src={image.url} frameborder="0" title={image.public_id} allowFullScreen></iframe> }
                    {console.log(image.url)}
                </div>
            })}
        </div>
    </>
}

export default ImageForm;