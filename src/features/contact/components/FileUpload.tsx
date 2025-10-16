import React, { useCallback, useState } from "react";

interface FileUploadProps {
  files: File[];
  onFilesChange: (files: File[]) => void;
  errors?: string[];
  maxFiles?: number;
  maxSize?: number; // in MB
  acceptedTypes?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ files, onFilesChange, errors = [], maxFiles = 5, maxSize = 10, acceptedTypes = "image/*,.pdf,.doc,.docx,.txt" }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFiles = useCallback(
    (newFiles: File[]) => {
      const validateFile = (file: File): string | null => {
        if (file.size > maxSize * 1024 * 1024) {
          return `File size must be less than ${maxSize}MB`;
        }
        return null;
      };

      const validFiles: File[] = [];
      const errors: string[] = [];

      newFiles.forEach((file) => {
        const error = validateFile(file);
        if (error) {
          errors.push(`${file.name}: ${error}`);
        } else {
          validFiles.push(file);
        }
      });

      if (validFiles.length > 0) {
        const updatedFiles = [...files, ...validFiles].slice(0, maxFiles);
        onFilesChange(updatedFiles);
      }

      if (errors.length > 0) {
        // You could emit these errors to a toast system here
        console.warn("File validation errors:", errors);
      }
    },
    [files, onFilesChange, maxFiles, maxSize],
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    handleFiles(selectedFiles);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragOver(false);

      const droppedFiles = Array.from(e.dataTransfer.files);
      handleFiles(droppedFiles);
    },
    [handleFiles],
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    onFilesChange(updatedFiles);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${isDragOver ? "border-royal-blue-500 bg-royal-blue-50" : "border-gray-300 hover:border-gray-400"}`} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
        <div className="space-y-4">
          <div className="flex justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
          </div>
          <div>
            <p className="text-lg font-medium text-gray-900">Drop files here or click to browse</p>
            <p className="text-sm text-gray-500 mt-1">
              Support for images, PDF, and documents (max {maxFiles} files, {maxSize}MB each)
            </p>
          </div>
          <input type="file" multiple accept={acceptedTypes} onChange={handleFileInput} className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
            Choose Files
          </label>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Selected Files</h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button type="button" onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Error Display */}
      {errors.length > 0 && (
        <div className="space-y-1">
          {errors.map((error, index) => (
            <p key={index} className="text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      )}

      {/* Info */}
      <div className="text-xs text-gray-500 space-y-1">
        <p>• Maximum {maxFiles} files allowed</p>
        <p>• Maximum {maxSize}MB per file</p>
        <p>• Supported formats: Images, PDF, Word documents, and text files</p>
      </div>
    </div>
  );
};

export default FileUpload;
