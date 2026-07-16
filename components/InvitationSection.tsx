import type { ReactNode } from "react";
import AnimatedText from "./AnimatedText";

interface InvitationSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function InvitationSection({ children, className = "", style }: InvitationSectionProps) {
  return (
    <section className={`invitation-section ${className}`} style={style}>
      <AnimatedText>{children}</AnimatedText>
    </section>
  );
}
