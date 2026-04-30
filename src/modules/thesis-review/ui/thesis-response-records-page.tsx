import Link from "next/link";

import {
  exampleFindings,
  exampleResponseSections,
} from "../application/thesis-review.snapshot";

export function ThesisResponseRecordsPage() {
  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_55%)]" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200/75">
              Ruta de registros
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Registros de respuesta
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
              Vista dedicada para consultar respuestas del agente, hallazgos relevantes y trazabilidad por seccion.
            </p>
          </div>
          <Link
            href="/"
            className="rounded-full border border-[var(--line)] bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Volver al inicio
          </Link>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                  Respuesta del agente
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Ejemplo de salida interpretada
                </h2>
              </div>
              <div className="rounded-full border border-sky-300/15 bg-sky-300/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-sky-100">
                Registro demo
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {exampleResponseSections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-[1.35rem] border border-white/10 bg-slate-950/40 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-semibold text-white">
                      {section.title}
                    </h3>
                    <span className="rounded-full border border-sky-300/15 bg-sky-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-100">
                      {section.tone}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    {section.content}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                  Hallazgos y trazabilidad
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Registros listos para seguimiento
                </h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/65">
                Modo lectura
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {exampleFindings.map((finding) => (
                <article
                  key={finding.title}
                  className="rounded-[1.35rem] border border-[var(--line)] bg-white/[0.04] p-4 transition hover:bg-white/[0.06]"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base font-semibold text-white">
                      {finding.title}
                    </h3>
                    <span className="rounded-full border border-emerald-300/15 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-emerald-100">
                      {finding.severity}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                    {finding.detail}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-slate-950/45 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                Trazabilidad
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Capitulo 1</p>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">
                    Justificacion y definicion del problema.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Capitulo 2</p>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">
                    Referencias teoricas y citas observables.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white">Conclusiones</p>
                  <p className="mt-2 text-sm text-[var(--ink-soft)]">
                    Coherencia final con objetivos y resultados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
