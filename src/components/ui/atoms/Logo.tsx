import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image src="/images/logo-daremi-mob.png" alt="Daremi" width={170} height={65} priority />
    </Link>
  );
}
