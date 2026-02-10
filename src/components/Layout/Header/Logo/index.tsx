import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
  src="/images/logo/logo.png"
  alt="logo"
  width={150}
  height={45}
  quality={100}
  style={{
    maxWidth: "150px",
    height: "auto",
    objectFit: "contain"
  }}
/>

    </Link>
  );
};

export default Logo;
