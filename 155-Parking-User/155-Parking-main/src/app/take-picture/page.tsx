"use client";

import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import Paper from "@mui/material/Paper";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Header } from "@/src/components";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

export default function TakePicture() {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = () => {
    const image = webcamRef?.current?.getScreenshot();
    setImgSrc(image);
  };

  return (
    <Stack
      flexDirection="column"
      style={{
        width: "100vw",
        height: "100svh",
        background: "background.paper",
      }}
    >
      {/* Header */}
      <Header mb={0} title="Take A Picture" showBackBtn />

      <Paper
        elevation={0}
        sx={{
          flex: 1,
          background: "black",
          borderRadius: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {!imgSrc ? (
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/png"
            videoConstraints={{
              facingMode: { ideal: "environment" },
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <Stack>
            <img
              src={imgSrc}
              alt="captured"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
            <Stack
              sx={{
                position: "absolute",
                bottom: 10,
                width: 1,
                left: "50%",
                transform: "translate(-50%, -50%)",
                maxWidth: "md",
                px: 2,
              }}
              flexDirection={{ xs: "column", md: "row" }}
              gap={2}
            >
              <Button
                size="large"
                variant="contained"
                fullWidth
                onClick={() => setImgSrc(null)}
              >
                Retake Picture
              </Button>

              <Button
                size="large"
                variant="contained"
                fullWidth
                LinkComponent={Link}
                href="/enter-detail"
              >
                Continue
              </Button>
            </Stack>
          </Stack>
        )}
      </Paper>

      {/* Bottom Capture Button */}
      {!imgSrc && (
        <Stack
          sx={{
            padding: "20px",
            background: "#0c1a1a",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Fab
            onClick={capture}
            sx={{
              border: "5px solid #2DC98A",
              width: 80,
              height: 80,
              background: "#ffffff",
              color: "#000",
              "&:hover": { background: "#f1f1f1" },
            }}
          >
            {/* <CameraAltIcon sx={{ fontSize: 40 }} /> */}
          </Fab>
        </Stack>
      )}
    </Stack>
  );
}

// "use client";

// import { Header } from "@/src/components";
// import React, { useRef, useState } from "react";
// import Webcam from "react-webcam";

// export default function TakePicture() {
//   const webcamRef = useRef(null);
//   const [imgSrc, setImgSrc] = useState(null);

//   const capture = () => {
//     const image = webcamRef.current.getScreenshot();
//     setImgSrc(image);
//   };

//   return (
//     <div className="w-screen h-screen bg-[#0c1a1a] flex flex-col">
//       {/* Header */}
//       <Header title="Take A Picture" showBackBtn />

//       <div className="flex items-center px-4 py-4 bg-[#0c1a1a]">
//         <button
//           onClick={() => window.history.back()}
//           className="text-white text-xl"
//         >
//           ←
//         </button>
//         <h1 className="text-white text-lg ml-4">Take A Picture</h1>
//       </div>

//       {/* Camera Preview */}
//       <div className="flex-1 relative bg-black">
//         {!imgSrc ? (
//           <Webcam
//             ref={webcamRef}
//             screenshotFormat="image/png"
//             videoConstraints={{
//               facingMode: { ideal: "environment" }, // rear camera
//             }}
//             className="w-full h-full object-cover"
//           />
//         ) : (
//           <img src={imgSrc} className="w-full h-full object-cover" />
//         )}
//       </div>

//       {/* Capture Button */}
//       {!imgSrc && (
//         <div className="py-6 bg-[#0c1a1a] flex justify-center">
//           <button
//             onClick={capture}
//             className="w-20 h-20 rounded-full bg-white flex items-center justify-center"
//           >
//             📷
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
