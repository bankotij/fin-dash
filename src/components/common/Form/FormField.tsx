import React from "react";
interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}
const FormField = ({ label, children, className = "" }: FormFieldProps) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {children}
    </div>
  );
};
export default FormField;