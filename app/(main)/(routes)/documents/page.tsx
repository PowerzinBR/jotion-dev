"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";

const DocumentsPage = () => {
  const { user } = useUser();

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
      <Button>
        <PlusCircleIcon className="h-4 w-4 mr-2" />
        Crie uma nota
      </Button>
    </div>
  );
};

export default DocumentsPage;
