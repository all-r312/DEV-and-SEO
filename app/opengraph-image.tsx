import { ImageResponse } from "next/og";

export const alt = "DEV and SEO — Websites that work harder. SEO that helps you grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px", background: "#f7f9fc", color: "#101828", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 28, fontWeight: 700 }}><span style={{ display: "flex", width: 54, height: 54, borderRadius: 14, alignItems: "center", justifyContent: "center", background: "#1769ff", color: "white" }}>&lt;/&gt;</span> DEV <span style={{ color: "#667085", fontWeight: 400 }}>and</span> SEO</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 920 }}>
        <div style={{ color: "#1769ff", fontSize: 22, letterSpacing: 3, textTransform: "uppercase" }}>Digital, made more useful</div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 72, lineHeight: 1.1, fontWeight: 700 }}><span>Websites that work harder.</span><span style={{ color: "#1769ff" }}>SEO that helps you grow.</span></div>
      </div>
      <div style={{ display: "flex", fontSize: 22, color: "#667085" }}>Thoughtful web development & practical SEO · Based in Pakistan</div>
    </div>,
    size,
  );
}
