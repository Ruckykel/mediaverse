"use client";
import React from "react";
import { useContactModal } from "./ContactModalContext";

type ContactButtonProps = {
    children: React.ReactNode;
    className?: string;
};

export function ContactButton({ children, className = "" }: ContactButtonProps) {
    const { openContactModal } = useContactModal();

    return (
        <button
            type="button"
            onClick={openContactModal}
            className={className}
        >
            {children}
        </button>
    );
}
