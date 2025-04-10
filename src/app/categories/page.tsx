import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { CircleAlert, CirclePlus} from "lucide-react";
import Link from "next/link";


//server actions
async function getCategories() {
    const response = await fetch("http://localhost:8080/categories")
    return await response.json()
}

export default async function CategoriesPage() {
    const data: Array<Category> = await getCategories()
    return (
        <>
            <NavBar active="categorias" />

            <main className="flex justify-center items-center">
                <div className="bg-[#E2D4BA] min-w-2/3 p-6 rounded m-6">
                    <div className="flex justify-between">
                        <h2 className="text-lg font-bold" >Categorias</h2>

                        <Button asChild className="bg-[#653239]">
                            <Link href="/categories/form">
                                <CirclePlus />
                            </Link>
                        </Button>

                    </div>

                    {(data.length == 0) ?
                        <Alert>
                            <CircleAlert />
                            <AlertDescription>
                                Nenhuma categoria cadastrada
                            </AlertDescription>
                        </Alert>
                        : ""
                    }

                    {data.map(category => <CategoryItem key={category.id} category={category} />)}

                </div>

            </main>
        </>
    )
}