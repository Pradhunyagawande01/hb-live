import React, { useState, useRef, useEffect } from "react";
const template = "/img/final_frame.png";
const defaultAvatar = "/img/final_frame.png";
import FancyButton from "./FancyButton";
import AnimatedTitle from "../Components/AnimatedTitle";
import DottedBg from "../Components/DottedBg";

import { toPng } from "html-to-image";
import Footer from "../Components/Footer";

const Digitalswag = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");

  const canvasRef = useRef(null);
  const imageInputRef = useRef(null);
  const defaultAvatarRef = useRef(null);

  useEffect(() => {
    drawSwag();
  }, [name, image]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const defaultAvatarImg = defaultAvatarRef.current;

    defaultAvatarImg.onload = () => {
      ctx.drawImage(defaultAvatarImg, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        setImage({
          src: reader.result,
          width: img.width,
          height: img.height,
        });
      };
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadSwag = () => {
    const canvas = canvasRef.current;
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");
    const scaleFactor = 2;

    tempCanvas.width = canvas.width * scaleFactor;
    tempCanvas.height = canvas.height * scaleFactor;

    tempCtx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      tempCanvas.width,
      tempCanvas.height
    );

    const dataURL = tempCanvas.toDataURL("image/png", 1.0);
    const downloadLink = document.createElement("a");
    downloadLink.href = dataURL;
    downloadLink.download = "generated_swag.png";
    downloadLink.click();
  };

  const drawSwag = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (image) {
      const uploadedImage = new Image();
      uploadedImage.onload = () => {
        let sx, sy, sWidth, sHeight;
        const aspectRatioCanvas = canvas.width / canvas.height;
        const aspectRatioImage = uploadedImage.width / uploadedImage.height;

        if (aspectRatioImage > aspectRatioCanvas) {
          sWidth = uploadedImage.height * aspectRatioCanvas;
          sHeight = uploadedImage.height;
          sx = (uploadedImage.width - sWidth) / 2;
          sy = 0;
        } else {
          sWidth = uploadedImage.width;
          sHeight = uploadedImage.width / aspectRatioCanvas;
          sx = 0;
          sy = (uploadedImage.height - sHeight) / 2;
        }

        ctx.drawImage(
          uploadedImage,
          sx,
          sy,
          sWidth,
          sHeight,
          0,
          0,
          canvas.width,
          canvas.height
        );
      };
      uploadedImage.src = image.src;
    } else {
      const defaultAvatarImg = defaultAvatarRef.current;
      ctx.drawImage(defaultAvatarImg, 0, 0, canvas.width, canvas.height);
    }

    const templateImage = new Image();
    templateImage.onload = () => {
      ctx.drawImage(templateImage, 0, 0, canvas.width, canvas.height);
      const fontSize = canvas.width * 0.045;
      ctx.font = `bold ${fontSize}px serif`;
      ctx.fillStyle = "#4a2419";
      ctx.textAlign = "center";
      const textY = canvas.height - canvas.height * 0.2;
      ctx.fillText(
        (name && "•↣ " + name + " ↢•") || "Your Name Here",
        canvas.width / 2,
        textY
      );
    };
    templateImage.src = template;
  };

  return (
    <>
      <div className="min-h-[100vh] flex items-center py-8 md:py-12 relative text-white">
        {/* <DottedBg
          dotColor="rgba(255,255,255,.25)"
          bgColor="black"
          dotSize={2}
          baseSpacing={30}
          repelRadius={100}
          explodeStrength={25}
          returnSpeed={0.5}
        > */}
          <div className="container mx-auto px-4 md:px-0">
            <div className="flex justify-center mb-6">
              <AnimatedTitle
                className="text-4xl md:text-5xl font-bold text-center mb-8"
                title="<b>Digital</b> <b>Badge</b> "
                containerClass="sm:mt-8 text-center text-emerald-300"
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center xl:mx-40">
              <div className="w-full md:w-[80%] flex justify-center mb-5 md:mb-0">
                <div className="w-full aspect-[4/5] max-w-[900px]">
                  <canvas
                    ref={canvasRef}
                    width={900}
                    height={1125}
                    className="w-full h-full rounded-md border-4 border-[#2E2D29] shadow-lg bg-black"
                  />
                </div>
                <img
                  ref={defaultAvatarRef}
                  src={defaultAvatar}
                  alt="Default Avatar"
                  style={{ display: "none" }}
                />
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col justify-between md:ml-10 bg-black/50 p-6 rounded-md shadow-xl">
                <div className="text-center md:text-left mb-4 lg:mb-5">
                  <h2 className="text-2xl md:text-4xl font-medium text-white mb-4 mt-2">
                    Hack
                    <span className="font-semibold text-[#06AD63] text-[5rem]">
                      4
                    </span>
                    Brahma
                  </h2>
                  <p className="text-green-200 font-medium mb-2">
                    Get ready to unleash your inner tech warrior at Hack4Brahma!
                    Show off your hype and rep the hackathon spirit with our
                    exclusive digital badge because legends don’t just join,
                    they leave a mark!
                  </p>
                  <p className="text-green-200 font-medium mb-2">
                    Personalize your badge with your name and photo. Download
                    and share your badge on social media.
                  </p>
                  <p className="text-xs text-lime-400 italic">
                    *We don’t store your image. Your privacy is our priority.
                  </p>
                </div>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                  placeholder="Enter Your Name"
                  className="rounded-md bg-emerald-800/80 px-4 py-2 text-white text-lg mb-4 placeholder-gray-300 focus:outline-none"
                />

                <div className="flex flex-col md:flex-row justify-end gap-3">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={imageInputRef}
                    style={{ display: "none" }}
                  />
                  <div
                    onClick={() => imageInputRef.current.click()}
                    className="w-full md:w-auto"
                  >
                    <FancyButton data="Upload photo" id="upload" />
                  </div>

                  <div
                    onClick={handleDownloadSwag}
                    className="w-full md:w-auto"
                  >
                    <FancyButton data="Download" id="download" />
                  </div>

                  <a
                    href="https://ctt.ac/cxM88"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto block"
                  >
                    <FancyButton data="Share" id="share" />
                  </a>
                </div>
              </div>
            </div>
            {/* <Footer /> */}
          </div>
        {/* </DottedBg> */}
      </div>
      
    </>
  );
};

export default Digitalswag;
