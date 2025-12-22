import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image src="/images/logo-daremi.png" alt="Daremi" width={135} height={60} priority />
    </Link>
  );
}
