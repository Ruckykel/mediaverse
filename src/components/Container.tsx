import React from "react";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({ className = "", children }: ContainerProps) {
  return <div className={`container ${className}`}>{children}</div>;
}


