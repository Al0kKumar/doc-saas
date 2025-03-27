"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Nav";
import { FileUpload } from "@/components/Fileupload";
import { PreviewSection } from "@/components/Preview";


const FeaturePage = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const handleFileSelect = (selectedFile: File, previewUrl: string) => {
    setFile(selectedFile);
    setPreview(previewUrl);
  };

  const handleConvert = async () => {
    if (!file) return;
    // Simulate an API call to process the file
    setTimeout(() => {
      localStorage.setItem("resultUrl", "https://example.com/processed-image.png");
      router.push("/convert/jpgtopng/result");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      {/* Spacer to offset fixed navbar */}
      <div className="pt-20"></div>

      {/* Top Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Jpg to Png</h1>
        <p className="text-lg text-gray-300">
          Upload your image to convert it from jpg to png  while maintaining quality.
        </p>
      </div>

      {/* File Upload or Preview Section */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        {!file ? (
          <FileUpload onFileSelect={handleFileSelect} />
        ) : (
          <PreviewSection previewUrl={preview} onConvert={handleConvert} />
        )}
      </div>
    </div>
  );
};

export default FeaturePage;
