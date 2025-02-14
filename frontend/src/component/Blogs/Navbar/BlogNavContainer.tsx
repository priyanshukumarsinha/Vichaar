import React from "react";

function BlogNavContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border-b-1 border-gray-100 py-3 px-5 ${className}`}>
      {children}
    </div>
  );
}

export default BlogNavContainer;
