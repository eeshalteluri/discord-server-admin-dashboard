import React from "react";

interface ImageUploadProps {
    onChange: (base64: string) => void;
    label: string;
    value?: string;
    disabled?: boolean
}

const ImageUpload : React.FC<ImageUploadProps> = () => {
  return (
    <div className="w-full p-4 text-white text-center border-2 border-dotted rounded-md border-neutral-700"
    >
        Upload your Avatar Image
    </div>
  )
}

export default ImageUpload