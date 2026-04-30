"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  insightCards,
  reviewStages,
  valueMetrics,
} from "../application/thesis-review.snapshot";

export function ThesisReviewHome() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % reviewStages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const currentStage = reviewStages[activeStage];
  const progress = ((activeStage + 1) / reviewStages.length) * 100;

  return (
    <main className="relative flex-1 overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.16),transparent_55%)]" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-10">
          <div className="glass-panel animate-appear inline-flex w-fit items-center gap-3 rounded-full px-4 py-2 text-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            Disenado para revision academica asistida por IA
          </div>

          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[var(--brand)]">
                Plataforma de analisis de tesis
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Sube una tesis y recibe una respuesta clara, util y bien
                presentada.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--ink-soft)] sm:text-xl">
                Una interfaz pensada para universidades, asesores y alumnos:
                carga de documentos, lectura del agente y resultados trazables
                en una sola experiencia.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/cargar-tesis"
                className="rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
              >
                Cargar tesis
              </Link>
              <Link
                href="/registros-respuesta"
                className="rounded-full border border-[var(--line)] bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver registros de respuesta
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {valueMetrics.map((metric) => (
              <article
                key={metric.label}
                className="glass-panel rounded-3xl p-5 animate-appear-delay"
              >
                <p className="text-sm text-[var(--ink-soft)]">{metric.label}</p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                  {metric.helper}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="animate-float absolute left-0 top-20 hidden h-24 w-24 rounded-[2rem] bg-emerald-300/15 blur-xl lg:block" />
          <div className="animate-float absolute bottom-12 right-2 hidden h-32 w-32 rounded-full bg-sky-300/15 blur-2xl lg:block" />

          <div className="glass-panel mesh-card w-full rounded-[2rem] p-5 sm:p-7">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5 text-white shadow-2xl sm:p-6">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-emerald-300/80">
                    Flujo principal
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
                    Panel del agente revisor
                  </h2>
                </div>
                <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-100">
                  Estado: analizando flujo
                </div>
              </div>

              <div className="mt-6 grid gap-5 xl:grid-cols-[0.82fr_1.18fr]">
                <div className="space-y-3">
                  {reviewStages.map((stage, index) => {
                    const isActive = activeStage === index;

                    return (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setActiveStage(index)}
                        className={`w-full rounded-[1.35rem] border p-4 text-left transition duration-300 ${
                          isActive
                            ? "stage-glow border-emerald-400/40 bg-emerald-400/10"
                            : "border-white/10 bg-white/5 hover:border-emerald-400/25 hover:bg-white/8"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-mono text-sm ${
                              isActive
                                ? "bg-emerald-300 text-slate-950"
                                : "bg-white/10 text-emerald-200"
                            }`}
                          >
                            0{index + 1}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-base font-semibold">
                                {stage.title}
                              </h3>
                              <span className="rounded-full bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/65">
                                {stage.id}
                              </span>
                            </div>

                            <p className="mt-2 text-sm leading-6 text-slate-300">
                              {stage.description}
                            </p>

                            <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-emerald-200/80">
                              <span
                                className={`h-1.5 rounded-full ${
                                  isActive ? "w-8 bg-emerald-300" : "w-4 bg-white/20"
                                }`}
                              />
                              {isActive ? "Etapa activa" : "En espera"}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <div className="rounded-[1.4rem] border border-emerald-400/20 bg-[linear-gradient(135deg,rgba(34,197,94,0.12),rgba(56,189,248,0.08))] p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.32em] text-emerald-200/75">
                          Vista activa
                        </p>
                        <h3 className="mt-3 text-3xl font-semibold text-white">
                          {currentStage.title}
                        </h3>
                      </div>
                      <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-emerald-100">
                        Paso 0{activeStage + 1}
                      </div>
                    </div>

                    <div className="mt-6 rounded-[1.25rem] border border-white/10 bg-slate-950/50 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300 text-sm font-bold text-slate-950">
                          0{activeStage + 1}
                        </div>
                        <div className="flow-arrow text-emerald-200/90">
                          <svg
                            aria-hidden="true"
                            className="h-5 w-16"
                            viewBox="0 0 56 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 8H51M51 8L45 2M51 8L45 14"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/70">
                          {currentStage.id}
                        </span>
                      </div>

                      <p className="mt-5 max-w-xl text-base leading-7 text-slate-200">
                        {currentStage.description}
                      </p>

                      <div className="mt-5 rounded-[1.25rem] border border-emerald-400/15 bg-emerald-400/8 p-4 text-sm leading-6 text-emerald-50">
                        {currentStage.emphasis}
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/55">
                        <span>Avance del flujo</span>
                        <span>{Math.round(progress)}%</span>
                      </div>

                      <div className="h-3 rounded-full bg-white/10 p-1">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#22c55e_0%,#38bdf8_100%)] transition-[width] duration-500"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1">
                    {reviewStages.map((stage, index) => {
                      const isActive = index === activeStage;

                      return (
                        <div key={stage.id} className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => setActiveStage(index)}
                            className={`rounded-full border px-4 py-2 text-sm transition ${
                              isActive
                                ? "border-emerald-300/40 bg-emerald-300/12 text-white"
                                : "border-white/10 bg-white/5 text-white/65 hover:bg-white/8"
                            }`}
                          >
                            {stage.title}
                          </button>
                          {index < reviewStages.length - 1 ? (
                            <div className="flow-arrow text-emerald-200/80">
                              <svg
                                aria-hidden="true"
                                className="h-4 w-8"
                                viewBox="0 0 32 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 8H27M27 8L21 2M27 8L21 14"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {insightCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface-strong)] p-4"
                >
                  <h3 className="text-base font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
