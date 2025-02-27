import React, { useRef, useState } from "react";

interface AvatarUploadProps {
  initialImage?: string;
  onImageChange?: (file: File | null) => void;
}
const AvatarUpload = ({ 
  initialImage = "./what.jpg", 
  onImageChange 
}: AvatarUploadProps) => {
  const [image, setImage] = useState(initialImage);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      onImageChange?.(file);
    }
  };
  return (
    <div className="relative w-24 h-24">
      <img 
        src={image} 
        alt="Profile" 
        className="w-24 h-24 rounded-full object-cover border border-gray-200"
      />
      <button
        type="button"
        onClick={handleClick}
        className="absolute bottom-0 right-0 bg-gray-800 rounded-full p-2 cursor-pointer"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          <path d="M17 13.5V8l-5 5 5 5v-4.5"></path>
          <path d="M7 13.5L7 8l5 5-5 5v-4.5"></path>
        </svg>
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
};
export default AvatarUpload;