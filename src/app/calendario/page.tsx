import NavBar from "@/components/nav-bar";

export default function TransactionsPage() {
    return (
        <>
            <NavBar active="calendario" />

            <main className="flex justify-center items-center">
                <div className="bg-[#E2D4BA] min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold" >Calendário</h2>
                </div>
            </main>
        </>
    )
}