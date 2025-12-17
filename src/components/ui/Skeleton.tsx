import { CSSProperties } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
};

export default function Skeleton({ className, style }: Props) {
  return <div className={`skeleton ${className ?? ""}`} style={style} />;
}
