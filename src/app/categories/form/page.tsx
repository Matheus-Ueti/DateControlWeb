"use client"

import { createCategory } from "@/actions/category-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Check } from "lucide-react"; // Importando Check
import Link from "next/link";
import { useActionState } from "react"; // Corrigido useActionState

const initialState = {
    values: {
        name: "",
        icon: "",
    },
    errors: {
        name: "",
        icon: "",
    },
};

export default function CategoryFormPage() {
    const [state, formAction, pending] = useActionState(createCategory, initialState); // Corrigido

    return (
        <>
            <NavBar active="categorias" /> 
            <main className="flex justify-center items-center">
                <div className="bg-slate-900 min-w-2/3 p-6 rounded m-6">
                    <h2 className="text-lg font-bold">Cadastrar categoria</h2>

                    <form action={formAction} className="space-y-4"> 
                        <div>
                            <Input
                                name="name"
                                placeholder="Nome da categoria" 
                                aria-invalid={state.errors.name ? "true" : "false"} 
                                defaultValue={String(state?.values.name || '')} 
                            />
                            <span className="text-sm text-destructive">{state.errors.name}</span> 
                        </div>

                        <div>
                            <Input
                                name="icon"
                                placeholder="Ícone da categoria" 
                                aria-invalid={state.errors.icon ? "true" : "false"} 
                                defaultValue={String(state?.values.icon || '')} 
                            />
                            <span className="text-sm text-destructive">{state.errors.icon}</span> 
                        </div>

                        <div className="flex justify-around">
                            <Button variant="outline" asChild>
                                <Link href="/categories">
                                    <ArrowLeft className="mr-2" />
                                    Cancelar
                                </Link>
                            </Button>

                            <Button type="submit" disabled={pending}> 
                                <Check className="mr-2" />
                                Salvar
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
}

    