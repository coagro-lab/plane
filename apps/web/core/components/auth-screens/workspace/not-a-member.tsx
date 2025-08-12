"use client";

import Link from "next/link";
// ui
import { Button } from "@plane/ui";
// layouts
import DefaultLayout from "@/layouts/default-layout";

export const NotAWorkspaceMember = () => (
  <DefaultLayout>
    <div className="grid h-full place-items-center p-4">
      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Não autorizado!</h3>
          <p className="mx-auto w-1/2 text-sm text-custom-text-200">
            Você não é um membro deste espaço de trabalho. Por favor, contate o administrador do espaço de trabalho para obter uma convite ou verifique suas convites pendentes.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Link href="/invitations">
            <span>
              <Button variant="neutral-primary">Verificar convites pendentes</Button>
            </span>
          </Link>
          <Link href="/create-workspace">
            <span>
              <Button variant="primary">Criar novo espaço de trabalho</Button>
            </span>
          </Link>
        </div>
      </div>
    </div>
  </DefaultLayout>
);
