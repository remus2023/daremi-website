import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image src="/images/logo-daremi.png" alt="Daremi" width={160} height={80} priority />
    </Link>
  );
}
