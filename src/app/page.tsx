import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-blue-600">Next.js + Tailwind + ShadCN</h1>
        <Button>Click Me</Button>
      </div>
    </main>
  );
}
