import { ImageResponse } from "next/og";

export const alt = "VIBE: a testnet token on Aptos for the Alpha Protocol ecosystem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 90, background: "#0b0f14", color: "#f5f5f5" }}>
        <div style={{ fontSize: 34, letterSpacing: 8, color: "#22c55e" }}>VIBE</div>
        <div style={{ fontSize: 80, lineHeight: 1.1, marginTop: 24, color: "#e8c76a" }}>The Economics of Sovereignty</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#b9c0cf", maxWidth: 960 }}>A testnet token on Aptos for use inside the Alpha Protocol ecosystem. Not a share or a promise of future value.</div>
        <div style={{ fontSize: 26, marginTop: 56, color: "#22c55e" }}>vibe-token.com</div>
      </div>
    ),
    size,
  );
}
