"use client";

// ui
import { Button } from "@plane/ui";

const ErrorPage = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="grid h-screen place-items-center p-4">
      <div className="space-y-8 text-center">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Isso não parece bom.</h3>
          <p className="mx-auto md:w-1/2 text-sm text-custom-text-200">
            Isso fez o NWERP cair, pun intended. Não se preocupe, nossos engenheiros foram notificados. Se você tiver mais
            detalhes, por favor, escreva para{" "}
            <a href="mailto:support@nwerp.com" className="text-custom-primary">
              support@nwerp.com
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Button variant="primary" size="md" onClick={handleRetry}>
            Atualizar
          </Button>
          {/* <Button variant="neutral-primary" size="md" onClick={() => {}}>
            Sign out
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
