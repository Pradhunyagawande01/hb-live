// // Digital-swag.jsx
// import { useState, useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
//   User,
//   Download,
//   Share,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Upload,
//   Camera,
//   Copy,
//   Check,
// } from "lucide-react";

// import { toPng } from "html-to-image";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "../components/ui/dropdown-menu.jsx";
// import { Button } from "../components/ui/button.jsx";

// import { Input } from "../Components/ui/input.jsx";

// import { useMobile } from "../hooks/use-mobile.js";

// import { cn } from "../lib/utils.js";

// export default function Digitalswag() {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState(null);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [currentDate, setCurrentDate] = useState("");
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [hashtagCopied, setHashtagCopied] = useState(false);
//   const [handleCopied, setHandleCopied] = useState(false);

//   const badgeRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const isMobile = useMobile();

//   // Date Logocs
//   useEffect(() => {
//     const now = new Date();
//     const opts = { day: "numeric", month: "long", year: "numeric" };
//     setCurrentDate(now.toLocaleDateString("en-US", opts));
//   }, []);

//   // Handlers (upload, camera, clipboard bord copy)
//   const handleNameChange = (e) => setName(e.target.value);
//   const handleFileUpload = (e) => {
//     const f = e.target.files?.[0];
//     if (!f) return;
//     const r = new FileReader();
//     r.onload = (ev) => setImage(ev.target.result);
//     r.readAsDataURL(f);
//   };
//   const handleUploadClick = () => fileInputRef.current?.click();
//   const copyToClipboard = (text, type) =>
//     navigator.clipboard.writeText(text).then(() => {
//       if (type === "hashtag") {
//         setHashtagCopied(true);
//         setTimeout(() => setHashtagCopied(false), 2000);
//       } else {
//         setHandleCopied(true);
//         setTimeout(() => setHandleCopied(false), 2000);
//       }
//     });

//   const handleCameraClick = async () => {
//     try {
//       setIsCameraOpen(true);
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) videoRef.current.srcObject = stream;
//     } catch {
//       setIsCameraOpen(false);
//     }
//   };
//   const handleCapture = () => {
//     if (!videoRef.current || !canvasRef.current) return;
//     const ctx = canvasRef.current.getContext("2d");
//     canvasRef.current.width = videoRef.current.videoWidth;
//     canvasRef.current.height = videoRef.current.videoHeight;
//     ctx.drawImage(videoRef.current, 0, 0);
//     setImage(canvasRef.current.toDataURL("image/png"));
//     videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//     setIsCameraOpen(false);
//   };
//   const handleCloseCamera = () => {
//     videoRef.current?.srcObject?.getTracks().forEach((t) => t.stop());
//     setIsCameraOpen(false);
//   };

//   // ——  DOWNLOAD HANDLER USING html-to-image (downld logic here) ——
//   const handleDownload = () => {
//     if (!badgeRef.current) return;
//     setIsDownloading(true);

//     toPng(badgeRef.current, {
//       cacheBust: true,
//       pixelRatio: 4,
//       backgroundColor: null,
//     })
//       .then((dataUrl) => {
//         const link = document.createElement("a");
//         link.download = `Hack4Brahma-Badge-${name || "YourName"}.png`;
//         link.href = dataUrl;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       })
//       .catch((err) => {
//         console.error("Download error:", err);
//       })
//       .finally(() => {
//         setIsDownloading(false);
//       });
//   };

//   const handleShare = (platform) => {
//     const text = encodeURIComponent(
//       `Check out my Hack4Brahma Digital Badge! #Hack4Brahma @Hack4Brahma`
//     );
//     const url = encodeURIComponent(window.location.href);
//     let shareUrl = "";
//     if (platform === "linkedin") {
//       shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
//     } else if (platform === "twitter") {
//       shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
//     } else {
//       alert(
//         "To share on Instagram, please download the image and upload it to your Instagram account."
//       );
//       return;
//     }
//     window.open(shareUrl, "_blank");
//   };

//   return (
//     <main className="min-h-screen w-full bg-gradient-to-r from-yellow-300 via-green-300 to-cyan-400 flex flex-col items-center justify-center p-4">
//       <motion.h1
//         className="text-4xl md:text-6xl font-bold text-center mb-8"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Get Your Digital Swag
//       </motion.h1>

//       <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
//         {/* Badge Preview */}
//         <motion.div
//           className="w-full max-w-md"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <div ref={badgeRef} className="bg-teal-900 rounded-lg p-4 relative">
//             <div className="flex justify-center mb-2">
//               <div className="text-yellow-300 font-bold flex items-center text-xl">
//                 <span>&lt;</span>
//                 <span>Hack4Brahma</span>
//                 <span>/&gt;</span>
//                 <span className="ml-1">:D</span>
//               </div>
//             </div>
//             <div className="text-white text-xs text-center mb-2">
//               {currentDate} | Venue Here
//             </div>
//             <div className="relative aspect-square border-4 border-yellow-300 rounded-md overflow-hidden mb-4">
//               <div className="absolute inset-0 bg-black/20 z-10" />
//               {image ? (
//                 <img
//                   src={image}
//                   alt="Uploaded"
//                   className="w-full h-full object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-950 flex items-center justify-center">
//                   <User className="w-1/2 h-1/2 text-red-500" />
//                 </div>
//               )}
//               <div className="absolute top-4 left-4 flex space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={i} className="w-2 h-2 bg-yellow-300 rounded-full" />
//                 ))}
//               </div>
//               <div className="absolute top-4 right-4">
//                 <div className="w-4 h-4 border border-white/50 rotate-45" />
//               </div>
//               <div className="absolute bottom-4 right-4 text-lg font-bold text-cyan-400 writing-mode-vertical transform rotate-180">
//                 HACKER<span className="text-4xl">⌁</span>
//               </div>
//             </div>
//             <motion.div
//               className="bg-yellow-300 text-black font-bold py-2 px-4 rounded-md text-center mb-4"
//               animate={{ scale: name ? [1, 1.05, 1] : 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               {name || "Your Name"}
//             </motion.div>
//             <div className="text-center text-sm mb-4">
//               <span className="text-yellow-300">Innovate</span>
//               <span className="text-white">-</span>
//               <span className="text-yellow-300">Elevate</span>
//               <span className="text-white">-</span>
//               <span className="text-cyan-400">Transform</span>
//             </div>
//             <div className="flex justify-center space-x-4">
//               {["Uber", "Meta", "Drdo"].map((s) => (
//                 <div
//                   key={s}
//                   className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center text-xs"
//                 >
//                   {s}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         {/* Controls */}
//         <motion.div
//           className="w-full max-w-md"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <div className="bg-black/10 backdrop-blur-sm p-6 rounded-lg">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Hack4Brahma Digital Badge
//             </h2>
//             <p className="mb-4">
//               🧠 Hack4Brahma&#39;s here. Flex that badge like it&#39;s your
//               whole career.
//             </p>

//             <p className="mb-4">
//               Personalize your Hack4Brahma Badge with your name and photo.
//               Download it and spread the word on social media using
//               <span className="flex items-center mt-1 mb-1">
//                 <span className="font-bold mr-2">#Hack4Brahma</span>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-6 px-2"
//                   onClick={() => copyToClipboard("#Hack4Brahma", "hashtag")}
//                 >
//                   {hashtagCopied ? (
//                     <Check className="h-3 w-3" />
//                   ) : (
//                     <Copy className="h-3 w-3" />
//                   )}
//                 </Button>
//               </span>
//               and tagging
//               <span className="flex items-center mt-1">
//                 <span className="font-bold mr-2">@Hack4Brahma</span>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-6 px-2"
//                   onClick={() => copyToClipboard("@Hack4Brahma", "handle")}
//                 >
//                   {handleCopied ? (
//                     <Check className="h-3 w-3" />
//                   ) : (
//                     <Copy className="h-3 w-3" />
//                   )}
//                 </Button>
//               </span>
//             </p>

//             <p className="text-sm italic mb-6">
//               *📸 Upload away — your images aren&#39;t saved. Even our servers
//               have short-term memory loss :)
//             </p>

//             <Input
//               type="text"
//               placeholder="Enter Your Name"
//               value={name}
//               onChange={handleNameChange}
//               className="bg-black text-white mb-4"
//             />

//             <div className="grid grid-cols-2 gap-2">
//               <Button
//                 onClick={handleUploadClick}
//                 variant="outline"
//                 className="bg-black text-white"
//               >
//                 <Upload className="mr-2 h-4 w-4" /> UPLOAD
//               </Button>
//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />

//               <Button
//                 onClick={handleCameraClick}
//                 variant="outline"
//                 className="bg-black text-white"
//               >
//                 <Camera className="mr-2 h-4 w-4" /> CAMERA
//               </Button>

//               <Button
//                 onClick={handleDownload}
//                 disabled={isDownloading}
//                 className={cn(
//                   "bg-black text-white",
//                   isDownloading && "opacity-70"
//                 )}
//               >
//                 {isDownloading ? (
//                   <div className="flex items-center">
//                     <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
//                     PROCESSING
//                   </div>
//                 ) : (
//                   <>
//                     <Download className="mr-2 h-4 w-4" /> DOWNLOAD
//                   </>
//                 )}
//               </Button>

//               <DropdownMenu>
//                 <DropdownMenuTrigger asChild>
//                   <Button className="bg-black text-white">
//                     <Share className="mr-2 h-4 w-4" /> SHARE
//                   </Button>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent>
//                   <DropdownMenuItem onClick={() => handleShare("linkedin")}>
//                     <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => handleShare("twitter")}>
//                     <Twitter className="mr-2 h-4 w-4" /> Twitter
//                   </DropdownMenuItem>
//                   <DropdownMenuItem onClick={() => handleShare("instagram")}>
//                     <Instagram className="mr-2 h-4 w-4" /> Instagram
//                   </DropdownMenuItem>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>

//             {/* Camera Modal */}
//             {isCameraOpen && (
//               <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//                 <div className="bg-white rounded-lg p-4 max-w-md w-full">
//                   <h3 className="text-xl font-bold mb-4">Take a Photo</h3>
//                   <div className="relative aspect-video bg-black rounded-md overflow-hidden mb-4">
//                     <video
//                       ref={videoRef}
//                       autoPlay
//                       playsInline
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <canvas ref={canvasRef} className="hidden" />
//                   <div className="flex justify-between">
//                     <Button onClick={handleCloseCamera} variant="outline">
//                       Cancel
//                     </Button>
//                     <Button
//                       onClick={handleCapture}
//                       className="bg-black text-white"
//                     >
//                       <Camera className="mr-2 h-4 w-4" /> Capture
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </motion.div>
//       </div>
//     </main>
//   );
// }

// Digital-swag.jsx

// import React, { useState, useRef, useEffect } from "react";
// import AnimatedTitle from "../Components/AnimatedTitle";

// import {
//   User,
//   Download,
//   Share,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Upload,
//   Camera,
//   Copy,
//   Check,
//   X,
// } from "lucide-react";

// // Import html-to-image for download functionality
// import { toPng } from "html-to-image";

// // Note: In a real project, you would have these UI components defined
// // This assumes you have these components already defined elsewhere
// // Simple placeholder implementations are used here for completeness

// // Dropdown Menu Components
// const DropdownMenu = ({ children }) => {
//   return <div className="relative inline-block text-left">{children}</div>;
// };

// const DropdownMenuTrigger = ({ asChild, children }) => {
//   return React.cloneElement(children, {
//     onClick: (e) => {
//       e.stopPropagation();
//       e.currentTarget.nextElementSibling.classList.toggle("hidden");
//     },
//   });
// };

// const DropdownMenuContent = ({ children, className }) => {
//   return (
//     <div
//       className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-900 border border-green-900 hidden z-10 ${className}`}
//     >
//       <div className="py-1">{children}</div>
//     </div>
//   );
// };

// const DropdownMenuItem = ({ onClick, children, className }) => {
//   return (
//     <div
//       className={`flex items-center px-4 py-2 text-sm text-white cursor-pointer hover:bg-green-900/50 ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </div>
//   );
// };

// // Button Component
// const Button = ({ children, onClick, disabled, className, variant, size }) => {
//   let baseClasses =
//     "inline-flex items-center justify-center rounded font-medium focus:outline-none";

//   if (size === "sm") {
//     baseClasses += " px-2 py-1 text-xs";
//   } else {
//     baseClasses += " px-4 py-2 text-sm";
//   }

//   if (variant === "outline") {
//     baseClasses += " border";
//   }

//   return (
//     <button
//       type="button"
//       className={`${baseClasses} ${className}`}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// // Input Component
// const Input = ({ id, type, placeholder, value, onChange, className }) => {
//   return (
//     <input
//       id={id}
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className={`block w-full rounded border px-3 py-2 ${className}`}
//     />
//   );
// };

// // Main Component
// export default function ProfessionalDigitalSwag() {
//   const [name, setName] = useState("");
//   const [image, setImage] = useState(null);
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [currentDate, setCurrentDate] = useState("");
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [hashtagCopied, setHashtagCopied] = useState(false);
//   const [handleCopied, setHandleCopied] = useState(false);

//   const badgeRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   // Date Logic
//   useEffect(() => {
//     const now = new Date();
//     const opts = { day: "numeric", month: "long", year: "numeric" };
//     setCurrentDate(now.toLocaleDateString());
//   }, []);

//   // Utility function to combine classNames
//   const cn = (...classes) => {
//     return classes.filter(Boolean).join(" ");
//   };

//   // Handlers
//   const handleNameChange = (e) => setName(e.target.value);

//   const handleFileUpload = (e) => {
//     const f = e.target.files?.[0];
//     if (!f) return;
//     const r = new FileReader();
//     r.onload = (ev) => setImage(ev.target.result);
//     r.readAsDataURL(f);
//   };

//   const handleUploadClick = () => fileInputRef.current?.click();

// const copyToClipboard = (text, type) => {
//   navigator.clipboard.writeText(text).then(() => {
//     if (type === "hashtag") {
//       setHashtagCopied(true);
//       setTimeout(() => setHashtagCopied(false), 2000);
//     } else {
//       setHandleCopied(true);
//       setTimeout(() => setHandleCopied(false), 2000);
//     }
//   });
// };

//   const handleCameraClick = async () => {
//     try {
//       setIsCameraOpen(true);
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       if (videoRef.current) videoRef.current.srcObject = stream;
//     } catch (error) {
//       console.error("Camera error:", error);
//       setIsCameraOpen(false);
//     }
//   };

//   const handleCapture = () => {
//     if (!videoRef.current || !canvasRef.current) return;
//     const ctx = canvasRef.current.getContext("2d");
//     canvasRef.current.width = videoRef.current.videoWidth;
//     canvasRef.current.height = videoRef.current.videoHeight;
//     ctx.drawImage(videoRef.current, 0, 0);
//     setImage(canvasRef.current.toDataURL("image/png"));
//     videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//     setIsCameraOpen(false);
//   };

//   const handleCloseCamera = () => {
//     if (videoRef.current && videoRef.current.srcObject) {
//       videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
//     }
//     setIsCameraOpen(false);
//   };

//   // Download handler
//   const handleDownload = () => {
//     if (!badgeRef.current) return;
//     setIsDownloading(true);

//     toPng(badgeRef.current, {
//       cacheBust: true,
//       pixelRatio: 4,
//       backgroundColor: null,
//     })
//       .then((dataUrl) => {
//         const link = document.createElement("a");
//         link.download = `Hack4Brahma-Badge-${name || "YourName"}.png`;
//         link.href = dataUrl;
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//       })
//       .catch((err) => {
//         console.error("Download error:", err);
//       })
//       .finally(() => {
//         setIsDownloading(false);
//       });
//   };

//   const handleShare = (platform) => {
//     const text = encodeURIComponent(
//       `Check out my Hack4Brahma Digital Badge! #Hack4Brahma @Hack4Brahma`
//     );
//     const url = encodeURIComponent(window.location.href);
//     let shareUrl = "";

//     if (platform === "linkedin") {
//       shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
//     } else if (platform === "twitter") {
//       shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
//     } else if (platform === "instagram") {
//       alert(
//         "To share on Instagram, please download the image and upload it to your Instagram account."
//       );
//       return;
//     }

//     window.open(shareUrl, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Header gradient */}
//       {/* <div className="h-2 w-full bg-gradient-to-r from-green-900 to-[#198F51]"></div> */}

//       <main className="container mx-auto px-4 py-12">
//         {/* <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
//           Professional <span style={{ color: "#198F51" }}>Digital Badge</span>
//         </h1> */}

//         <AnimatedTitle
//           className="text-4xl md:text-5xl font-bold text-center mb-8"
//           title="<b>Digital</b> <b>Badge</b> "
//           containerClass="sm:mt-8 !text-black text-center reveal-element"
//         />

//         <div className="w-full mt-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
//           {/* Badge Preview */}
//           <div className="w-full md:w-1/2 flex flex-col items-center">
//             <h2
//               className="text-xl font-medium mb-4"
//               style={{ color: "#198F51" }}
//             >
//               Preview
//             </h2>

//             <div
//               ref={badgeRef}
//               className="w-full max-w-md bg-gradient-to-br from-[#1a1f1c] to-[#0e1511] rounded-xl p-6 border border-green-700 shadow-[0_4px_25px_rgba(34,197,94,0.3)] font-sans"
//             >
//               {/* Top row */}
//               <div className="flex justify-between items-center mb-4">
//                 <div className="bg-green-600 text-black font-bold text-xs px-3 py-1 rounded uppercase border border-green-900 shadow">
//                   COMMANDER
//                 </div>
//                 <div className="text-green-400 text-xs px-2 py-1 rounded  font-mono">
//                   {currentDate}
//                 </div>
//               </div>

//               {/* Image */}
//               <div className="relative aspect-square bg-[#1c211d] rounded-lg overflow-hidden mb-5 border-2 border-green-700 shadow-inner">
//                 <div className="absolute inset-0 bg-black/10 z-10" />
//                 {image ? (
//                   <img
//                     src={image}
//                     alt="Badge"
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <User className="w-1/3 h-1/3 text-green-500/70" />
//                   </div>
//                 )}

//                 {/* Top-left dots */}
//                 <div className="absolute top-3 left-3 flex space-x-1">
//                   {[...Array(3)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="w-1.5 h-1.5 bg-green-400 rounded-full"
//                     />
//                   ))}
//                 </div>

//                 {/* Bottom-right title */}
//                 <div className="absolute bottom-3 right-3">
//                   <div className="text-[10px] font-bold bg-green-700/80 text-green-100 px-2 py-0.5 rounded border border-green-400 uppercase tracking-wider shadow">
//                     OP: HACK4BRAHMA
//                   </div>
//                 </div>

//                 {/* Top-right location */}
//                 <div className="absolute top-3 right-3 text-green-300 text-[10px] bg-[#1a1f1a] px-2 py-0.5 rounded border border-green-800 tracking-tight">
//                   SECTOR 9A
//                 </div>

//                 {/* Bottom-left tag */}
//                 <div className="absolute bottom-3 left-3 text-[10px] font-bold bg-[#142518] text-green-400 px-2 py-0.5 rounded border border-green-600 uppercase tracking-wide">
//                   CLASSIFIED
//                 </div>
//               </div>

//               {/* Name */}
//               <div className="bg-[#1c2f24] border border-green-700 text-green-200 font-semibold py-2 px-4 rounded text-center mb-4 text-sm uppercase shadow-inner tracking-wide">
//                 {name || "MAJOR NAME"}
//               </div>

//               {/* Motto */}
//               <div className="text-center text-xs mb-6 uppercase font-medium text-green-400 tracking-widest">
//                 <span className="text-green-500">INNOVATE</span>
//                 <span className="text-green-700 mx-2">|</span>
//                 <span className="text-green-400">LEAD</span>
//                 <span className="text-green-700 mx-2">|</span>
//                 <span className="text-green-300">EXECUTE</span>
//               </div>

//               {/* Sponsors */}
//               <div className="flex justify-center space-x-3">
//                 {["UBER", "META", "DRDO"].map((sponsor) => (
//                   <div
//                     key={sponsor}
//                     className="bg-[#0e1511] border border-green-700 rounded-full px-3 h-10 flex items-center justify-center text-xs text-green-300 font-medium uppercase shadow-sm tracking-wider"
//                   >
//                     {sponsor}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Controls  */}
//                 {/* RIGHT SIDE */}

// <div className="w-full md:w-1/2">
//   <div className="bg-gray-900 rounded-lg p-6 border border-green-900/50">
//     <h2 className="text-2xl font-bold mb-2">Customize Your Badge</h2>
//     <p className="text-green-400 text-sm mb-6">
//       Create your professional digital badge for Hack4Brahma
//     </p>

//     <div className="space-y-6">
//       <div>
//         <label
//           htmlFor="name"
//           className="block text-sm font-medium text-gray-300 mb-1"
//         >
//           Your Name
//         </label>
//         <Input
//           id="name"
//           type="text"
//           placeholder="Enter your full name"
//           value={name}
//           onChange={handleNameChange}
//           className="bg-black border-green-800 focus:border-green-500 text-white"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-medium text-gray-300 mb-3">
//           Profile Photo
//         </label>
//         <div className="grid grid-cols-2 gap-3">
//           <Button
//             onClick={handleUploadClick}
//             variant="outline"
//             className="bg-black border-green-700 hover:bg-green-900/30 text-green-400"
//           >
//             <Upload className="mr-2 h-4 w-4" /> Select File
//           </Button>
//           <input
//             ref={fileInputRef}
//             type="file"
//             accept="image/*"
//             onChange={handleFileUpload}
//             className="hidden"
//           />

//           <Button
//             onClick={handleCameraClick}
//             variant="outline"
//             className="bg-black border-green-700 hover:bg-green-900/30 text-green-400"
//           >
//             <Camera className="mr-2 h-4 w-4" /> Use Camera
//           </Button>
//         </div>
//       </div>

// <div className="pt-2 border-t border-green-900/50">
//   <p className="text-xs text-gray-400 mb-4">
//     Share your badge on social media using:
//   </p>
//   <div className="flex flex-col space-y-2 mb-4">
//     <div className="flex items-center justify-between p-2 bg-black/50 rounded border border-green-900/30">
//       <span className="text-green-400 font-mono">
//         #Hack4Brahma
//       </span>
//       <Button
//         size="sm"
//         onClick={() =>
//           copyToClipboard("#Hack4Brahma", "hashtag")
//         }
//         className="bg-green-800 hover:bg-green-700 text-white h-7 px-2"
//       >
//         {hashtagCopied ? (
//           <Check className="h-3 w-3" />
//         ) : (
//           <Copy className="h-3 w-3" />
//         )}
//       </Button>
//     </div>
//     <div className="flex items-center justify-between p-2 bg-black/50 rounded border border-green-900/30">
//       <span className="text-green-400 font-mono">
//         @Hack4Brahma
//       </span>
//       <Button
//         size="sm"
//         onClick={() =>
//           copyToClipboard("@Hack4Brahma", "handle")
//         }
//         className="bg-green-800 hover:bg-green-700 text-white h-7 px-2"
//       >
//         {handleCopied ? (
//           <Check className="h-3 w-3" />
//         ) : (
//           <Copy className="h-3 w-3" />
//         )}
//       </Button>
//     </div>
//   </div>
// </div>

//       <div className="pt-2 border-t border-green-900/50">
//         <p className="text-xs text-gray-400 italic mb-4">
//           * Your images are not stored permanently. They are only used
//           to generate your badge.
//         </p>
//         <div className="grid grid-cols-2 gap-3">
//           <Button
//             onClick={handleDownload}
//             disabled={isDownloading}
//             className="bg-green-700 hover:bg-green-600 text-white"
//           >
//             {isDownloading ? (
//               <div className="flex items-center">
//                 <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
//                 PROCESSING
//               </div>
//             ) : (
//               <>
//                 <Download className="mr-2 h-4 w-4" /> DOWNLOAD
//               </>
//             )}
//           </Button>

//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button className="bg-black border-green-700 hover:bg-green-900/30 text-green-400">
//                 <Share className="mr-2 h-4 w-4" /> SHARE
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="bg-gray-900 border-green-900">
//               <DropdownMenuItem
//                 onClick={() => handleShare("linkedin")}
//                 className="hover:bg-green-900/50"
//               >
//                 <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
//               </DropdownMenuItem>
//               <DropdownMenuItem
//                 onClick={() => handleShare("twitter")}
//                 className="hover:bg-green-900/50"
//               >
//                 <Twitter className="mr-2 h-4 w-4" /> Twitter
//               </DropdownMenuItem>
//               <DropdownMenuItem
//                 onClick={() => handleShare("instagram")}
//                 className="hover:bg-green-900/50"
//               >
//                 <Instagram className="mr-2 h-4 w-4" /> Instagram
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//           {/* RIGHT side */}

//         </div>
//       </main>

//       {/* Camera Modal */}
//       {isCameraOpen && (
//         <div
//           className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
//           onClick={handleCloseCamera}
//         >
//           <div
//             className="bg-gray-900 rounded-lg p-6 max-w-md w-full border border-green-800"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-bold text-green-400">Take a Photo</h3>
//               <Button
//                 onClick={handleCloseCamera}
//                 variant="outline"
//                 size="sm"
//                 className="rounded-full w-8 h-8 p-0 border-green-700 hover:bg-green-900/30 flex items-center justify-center"
//               >
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>

//             <div className="relative aspect-video bg-black rounded-md overflow-hidden mb-6 border border-green-700">
//               <video
//                 ref={videoRef}
//                 autoPlay
//                 playsInline
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <canvas ref={canvasRef} className="hidden" />

//             <div className="flex justify-end">
//               <Button
//                 onClick={handleCapture}
//                 className="bg-green-700 hover:bg-green-600 text-white"
//               >
//                 <Camera className="mr-2 h-4 w-4" /> Capture
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
const template = "/img/final_frame.png";
const defaultAvatar = "/img/final_defaultIMG.jpg";
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
      <div className="min-h-[100vh] flex items-center py-8 md:py-12 relative bg-black text-white">
        <DottedBg
          dotColor="rgba(255,255,255,.25)"
          bgColor="black"
          dotSize={2}
          baseSpacing={30}
          repelRadius={100}
          explodeStrength={25}
          returnSpeed={0.5}
        >
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
                    {/* share using{" "}
                <a
                  className="underline text-emerald-300 hover:text-lime-300"
                  href="https://twitter.com/search?q=%23acehack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  #AceHack
                </a>{" "}
                and tag{" "}
                <a
                  className="underline text-emerald-300 hover:text-lime-300"
                  href="https://twitter.com/AceHack_uemj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Hack4Brahma
                </a> */}
                    .
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
            <Footer />
          </div>
        </DottedBg>
      </div>
      
    </>
  );
};

export default Digitalswag;
