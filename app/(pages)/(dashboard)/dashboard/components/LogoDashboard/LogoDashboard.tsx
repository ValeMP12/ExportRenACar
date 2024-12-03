import Link from "next/link";
import Image from "next/image";

export function LogoDashboard() {
    return (
        <Link href="/" className="flex items-center h-20 gap-2 border-b cursor-pointer min-h-20 px-6">
            <Image src={'/logo.svg'} alt="expor rent a car" width={100} height={100} priority/>
        </Link>
    )
}
