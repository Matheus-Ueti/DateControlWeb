import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "calendario" | "categorias"
}

const links = [
    { label: "dashboard", href: "/dashboard" },
    { label: "calendário", href: "/calendario" },
    { label: "categorias", href: "/categories" },
]

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-b-4 border-[#653239]"

    return (
        <nav className="flex justify-between bg-[#AF7A6D] px-6 pt-6">
            <h1 className="text-2xl font-bold">Date Control</h1>
            <ul className="flex gap-12">
                {links.map(link =>
                    <li key={link.label} className={active === link.label ? classActive : ""}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                )}

            </ul>
            <img className="size-12 rounded-full" src="http://github.com/Matheus-Ueti.png" alt="avatar" />
        </nav>
    )
}