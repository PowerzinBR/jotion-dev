"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/use-settings";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "../ui/button";
import { SignOutButton } from "@clerk/clerk-react";

export const SettingsModal = () => {
  const settings = useSettings();

  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium dark:text-white">
            Minhas configurações
          </h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className=" flex flex-col gap-y-1 dark:text-white">
            <Label>Aparência</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Personalize como o Jotion aparece em seu dispositivo
            </span>
          </div>
          <ModeToggle />
        </div>
        <div className="flex flex-col gap-y-1 dark:text-white">
          <Label>Gerenciamento</Label>
          <span className="text-[0.8rem] text-muted-foreground">
            Gerencie sua conta
          </span>
          <SignOutButton>
            <Button
              variant="outline"
              onClick={settings.onClose}
              className="cursor-pointer"
            >
              Sair da conta
            </Button>
          </SignOutButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
