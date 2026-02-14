import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — Our Work | Mediaverse",
  description:
    "Explore Mediaverse's portfolio — websites, media production, graphic design, and video editing projects that showcase our craft and creativity.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
