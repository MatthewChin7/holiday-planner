import { FamilyLogin } from "@/components/auth/FamilyLogin";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-900/50" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex flex-col gap-12">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-400">
            Chin Family Planner
          </h1>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            Intentional planning for meaningful moments. Who is checking in?
          </p>
        </div>

        <FamilyLogin />
      </div>
    </main>
  );
}
