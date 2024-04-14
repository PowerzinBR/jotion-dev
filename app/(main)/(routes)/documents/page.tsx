"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircleIcon } from "lucide-react";
import { useMutation } from "convex/react";

import { toast } from "react-hot-toast";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Sem título" });

    toast.promise(promise, {
      loading: "Criando uma nova nota...",
      success: "Nova nota criada!",
      error: "Erro ao criar uma nova nota.",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Vazio"
        className="dark:hidden"
      />
      <Image
        src="/empty-dark.png"
        height="300"
        width="300"
        alt="Vazio"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Bem vindo ao Jotion de{" "}
        <span className="font-bold tracking-tight">{user?.firstName}</span>
      </h2>
      <Button onClick={onCreate}>
        <PlusCircleIcon className="h-4 w-4 mr-2" />
        Crie uma nota
      </Button>
    </div>
  );
};

export default DocumentsPage;
