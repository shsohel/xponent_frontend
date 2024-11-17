import Image from "next/image";

export default function Header (){
    return (
        <header className="bg-white p-2">
            <nav className="flex justify-center">
                {/* Logo */}
                <Image
                src="/logo.svg"
                width={100}
                height={80}
                alt="Logo"
                />
            </nav>
        </header>
    )
}