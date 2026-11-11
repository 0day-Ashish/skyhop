import content from "@/content/site.json";
import { CopyBlock } from "./components/CopyBlock";
import { Faq } from "./components/Faq";
import { Header } from "./components/Header";
import { HeroBot } from "./components/HeroBot";
import { RoundTrip } from "./components/RoundTrip";
import { GithubLink } from "./components/TrackedLink";
import { GithubIcon, MinusIcon, PlusIcon, SkyhopMark } from "./components/icons";

const { site, hero, install, problem, how, goesAlong, modes, safety, commands, faq, cta, footer } = content;

const container = "mx-auto w-full max-w-[1448px] px-4 sm:px-6";
const pillDark =
  "inline-flex h-10 items-center gap-2 rounded-full bg-fg px-3.5 text-base font-medium text-white transition-colors hover:bg-[#383838]";
const pillLight =
  "inline-flex h-10 items-center gap-2 rounded-full bg-surface px-3.5 text-base font-medium text-fg shadow-[0_0_0_1px_var(--border)] transition-colors hover:bg-[#f2f2f2]";

/* ---------- building blocks ---------- */

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl bg-surface shadow-[0_0_0_1px_var(--border),0_8px_30px_rgba(0,0,0,0.04)]">
      <div className="flex h-11 items-center justify-between border-b border-line px-4">
        <span className="flex items-center gap-1 text-[13px] text-muted">
          {title}
          <svg viewBox="0 0 16 16" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M4 6l4 4 4-4" />
          </svg>
        </span>
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </span>
      </div>
      {children}
    </div>
  );
}

function Lead({ strong, rest }: { strong: string; rest: string }) {
  return (
    <p className="text-2xl leading-8 tracking-[-0.02em] text-fg">
      {strong} <span className="text-muted">{rest}</span>
    </p>
  );
}

function SideList({ label, items, mono = false }: { label: string; items: string[]; mono?: boolean }) {
  return (
    <div className="mt-8">
      <p className="text-sm text-muted">{label}</p>
      <ul className={`mt-2 space-y-1.5 text-sm font-medium text-fg ${mono ? "font-mono" : ""}`}>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

/** Vercel-style feature row: big heading, an 8-column mockup and a 3-column aside, alternating sides. */
function Feature({
  id,
  heading,
  flip = false,
  aside,
  children,
}: {
  id: string;
  heading: string;
  flip?: boolean;
  aside: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mt-32 pt-8 md:mt-44">
      <div className={`${container} grid gap-x-5 gap-y-10 lg:grid-cols-12`}>
        <h2
          id={`${id}-h`}
          className={`display text-[40px] text-fg sm:text-[56px] ${flip ? "lg:col-span-7 lg:col-start-5" : "lg:col-span-7"}`}
        >
          {heading}
        </h2>
        {flip ? (
          <>
            <div className="self-center lg:col-span-3 lg:col-start-1 lg:row-start-2">{aside}</div>
            <div className="min-w-0 lg:col-span-8 lg:col-start-5 lg:row-start-2">{children}</div>
          </>
        ) : (
          <>
            <div className="min-w-0 lg:col-span-8 lg:row-start-2">{children}</div>
            <div className="self-center lg:col-span-3 lg:col-start-10 lg:row-start-2">{aside}</div>
          </>
        )}
      </div>
    </section>
  );
}

/** Table on wide screens, stacked cards below 640px. */
function ResponsiveTable({ columns, rows, caption }: { columns: string[]; rows: string[][]; caption: string }) {
  return (
    <>
      <table className="hidden w-full text-left text-sm sm:table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-line">
            {columns.map((c) => (
              <th key={c} scope="col" className="px-5 py-3 text-[13px] font-normal text-muted">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-b border-line last:border-0">
              <th scope="row" className="whitespace-nowrap px-5 py-4 align-top font-mono text-[13px] font-normal text-fg">
                {r[0]}
              </th>
              <td className="px-5 py-4 align-top text-muted">{r[1]}</td>
              <td className="px-5 py-4 align-top text-fg">{r[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="divide-y divide-line sm:hidden">
        {rows.map((r) => (
          <li key={r[0]} className="p-4">
            <p className="font-mono text-[13px] text-fg">{r[0]}</p>
            <dl className="mt-2 space-y-2 text-sm">
              {columns.slice(1).map((c, i) => (
                <div key={c}>
                  <dt className="text-[12px] text-subtle">{c}</dt>
                  <dd className={i === 0 ? "text-muted" : "text-fg"}>{r[i + 1]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}

function Chip({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className={`inline-flex h-7 items-center rounded-full px-2.5 font-mono text-[12px] ${
        accent ? "bg-accent-soft text-accent" : "bg-surface text-fg shadow-[0_0_0_1px_var(--border)]"
      }`}
    >
      {children}
    </span>
  );
}

function BranchesVisual() {
  return (
    <svg viewBox="0 0 360 170" className="w-full max-w-[380px]" aria-hidden="true">
      <text x="20" y="40" className="fill-[var(--muted)] font-mono text-[12px]">your branch</text>
      <path d="M20 60H340" stroke="#171717" strokeWidth="2" />
      {[60, 140, 220, 300].map((x) => (
        <circle key={x} cx={x} cy="60" r="7" fill="#171717" stroke="var(--bg)" strokeWidth="3" />
      ))}
      <path d="M140 60C170 60 170 125 205 125H340" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="5 5" />
      {[240, 310].map((x) => (
        <circle key={x} cx={x} cy="125" r="7" fill="var(--accent)" stroke="var(--bg)" strokeWidth="3" />
      ))}
      <text x="220" y="155" className="fill-[var(--accent)] font-mono text-[12px]">skyhop branch</text>
    </svg>
  );
}

function ChecklistVisual({ items }: { items: string[] }) {
  return (
    <div className="w-full max-w-[300px] rounded-xl bg-surface p-4 shadow-[0_0_0_1px_var(--border),0_8px_30px_rgba(0,0,0,0.05)]" aria-hidden="true">
      <ul className="space-y-2.5">
        {items.map((i) => (
          <li key={i} className="flex items-center gap-2.5 font-mono text-[12px] text-fg">
            <span className="flex size-4 items-center justify-center rounded-full bg-fg text-white">
              <svg viewBox="0 0 16 16" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {i}
            <span className="ml-auto h-1.5 w-16 rounded-full bg-line" />
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-end gap-2 border-t border-line pt-3">
        <span className="rounded-full px-2.5 py-1 text-[12px] text-muted shadow-[0_0_0_1px_var(--border)]">Cancel</span>
        <span className="rounded-full bg-fg px-2.5 py-1 text-[12px] font-medium text-white">Confirm</span>
      </div>
    </div>
  );
}

function SafetyCard({
  card,
  tall = false,
  corner = false,
  visual,
}: {
  card: { title: string; body: string; chips: string[] };
  tall?: boolean;
  corner?: boolean;
  visual?: React.ReactNode;
}) {
  return (
    <li
      className={`relative flex flex-col justify-end overflow-hidden rounded-md border border-line bg-bg p-5 shadow-[0_1px_0_rgba(0,0,0,0.06)] ${
        tall ? "min-h-[300px] sm:row-span-2 sm:min-h-[560px]" : "min-h-[260px]"
      }`}
    >
      {visual ? (
        <div className="absolute inset-x-5 bottom-32 top-6 hidden items-center justify-center sm:flex">{visual}</div>
      ) : null}
      <div className={`absolute right-5 top-5 flex max-w-[70%] flex-wrap justify-end gap-2 ${visual ? "sm:hidden" : ""}`} aria-hidden="true">
        {card.chips.map((c, i) => (
          <Chip key={c} accent={i === card.chips.length - 1 && card.chips.length > 1}>
            {c}
          </Chip>
        ))}
      </div>
      {corner && (
        <div aria-hidden="true" className="absolute bottom-0 right-0 size-28 bg-[linear-gradient(135deg,#e4e4e4_0%,#ffffff_49.5%,var(--accent)_50%)]" />
      )}
      <h3 className="relative max-w-[20rem] text-xl leading-8 tracking-[-0.01em] text-fg">{card.title}</h3>
      <p className="relative mt-1 max-w-[18rem] text-sm leading-5 text-muted">{card.body}</p>
    </li>
  );
}

/* ---------- page ---------- */

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header name={site.name} repo={site.repo} contact={site.contact} />

      <main id="main">
        {/* 2. Hero */}
        <section
          id="top"
          className={`${container} grid items-center gap-y-10 py-12 lg:min-h-[min(calc(100svh-64px-150px),720px)] lg:grid-cols-[1fr_minmax(0,520px)_1fr] lg:gap-x-8 lg:py-6`}
        >
          <div className="lg:max-w-[460px]">
            <h1 className="display text-[44px] text-fg sm:text-[64px]">{hero.headline}</h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#install" className={pillDark}>
                {hero.primaryCta}
              </a>
              <GithubLink where="hero" href={site.repo} className={pillLight}>
                <GithubIcon className="size-4" />
                {hero.secondaryCta}
              </GithubLink>
            </div>
          </div>

          <HeroBot />

          <ul className="space-y-3 justify-self-start text-base text-muted lg:justify-self-end">
            {hero.beats.map((b) => (
              <li key={b}>
                <a href="#how-it-works" className="transition-colors hover:text-fg">
                  {b}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Install band (sits where vercel.com has its logo strip) */}
        <section id="install" aria-label="Install" className={`${container} grid items-center gap-6 pb-6 lg:grid-cols-[1fr_minmax(0,520px)_1fr] lg:gap-x-8`}>
          <p className="max-w-[24rem] text-sm leading-6 text-muted lg:order-1">{install.smallPrint}</p>
          <CopyBlock label={install.label} commands={install.commands} block="hero" className="lg:order-2" />
          <p className="font-mono text-[13px] text-subtle lg:order-3 lg:justify-self-end">
            v{site.version} · MIT
          </p>
        </section>

        {/* 3. The problem */}
        <Feature
          id="problem"
          heading={problem.heading}
          aside={
            <>
              <Lead strong={problem.leadStrong} rest={problem.leadRest} />
              <SideList label={problem.listLabel} items={problem.list} />
            </>
          }
        >
          <Window title={problem.windowTitle}>
            <ResponsiveTable columns={problem.columns} rows={problem.rows} caption="Built-in Claude Code options and why they fall short" />
          </Window>
        </Feature>

        {/* 4. How it works */}
        <Feature
          id="how-it-works"
          heading={how.heading}
          flip
          aside={
            <>
              <ol className="space-y-6">
                {how.steps.map((s, i) => (
                  <li key={s.title} className="flex gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-fg font-mono text-[12px] text-white">
                      {i + 1}
                    </span>
                    <p className="text-[15px] leading-6 text-muted">
                      <span className="font-medium text-fg">{s.title}</span> {s.body}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-t border-line pt-4 text-sm text-muted">{how.after}</p>
            </>
          }
        >
          <Window title="Round trip">
            <RoundTrip
              lanes={how.diagram.lanes}
              keyLine={how.diagram.key}
              handoff={how.diagram.handoff}
              run={how.diagram.run}
              resumed={how.diagram.resumed}
              carry={how.diagram.carry}
              sync={how.diagram.sync}
              everyReply={how.diagram.everyReply}
              home={how.diagram.home}
              same={how.diagram.same}
            />
          </Window>
        </Feature>

        {/* 5. What goes along */}
        <Feature
          id="what-goes-along"
          heading={goesAlong.heading}
          aside={
            <>
              <Lead strong={goesAlong.leadStrong} rest={goesAlong.leadRest} />
              <SideList label={goesAlong.listLabel} items={goesAlong.list} />
            </>
          }
        >
          <Window title={goesAlong.windowTitle}>
            <div className="grid sm:grid-cols-2">
              {[
                { col: goesAlong.goes, Icon: PlusIcon, tone: "text-accent" },
                { col: goesAlong.stays, Icon: MinusIcon, tone: "text-subtle" },
              ].map(({ col, Icon, tone }, idx) => (
                <div key={col.title} className={`p-5 sm:p-6 ${idx === 1 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}>
                  <h3 className="text-[13px] text-muted">{col.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {col.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[15px] leading-6 text-fg">
                        <Icon className={`mt-1 size-4 shrink-0 ${tone}`} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Window>
        </Feature>

        {/* 6. Two modes */}
        <Feature
          id="modes"
          heading={modes.heading}
          flip
          aside={
            <>
              <Lead strong={modes.leadStrong} rest={modes.leadRest} />
              <SideList label={modes.listLabel} items={modes.list} mono />
            </>
          }
        >
          <Window title={modes.windowTitle}>
            <table className="hidden w-full text-left text-sm sm:table">
              <caption className="sr-only">Full resume compared with summary mode</caption>
              <thead>
                <tr className="border-b border-line">
                  <td className="w-[22%]" />
                  <th scope="col" className="bg-accent-soft/60 px-5 py-3 align-top">
                    <span className="flex items-center gap-2 text-[15px] font-medium text-fg">
                      {modes.columns[1]}
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] font-medium text-white">{modes.defaultBadge}</span>
                    </span>
                    <span className="mt-0.5 block font-mono text-[12px] font-normal text-muted">{modes.commands[0]}</span>
                  </th>
                  <th scope="col" className="px-5 py-3 align-top">
                    <span className="block text-[15px] font-medium text-fg">{modes.columns[2]}</span>
                    <span className="mt-0.5 block font-mono text-[12px] font-normal text-muted">{modes.commands[1]}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {modes.rows.map((r) => (
                  <tr key={r[0]} className="border-b border-line last:border-0">
                    <th scope="row" className="px-5 py-4 align-top text-[13px] font-normal text-muted">
                      {r[0]}
                    </th>
                    <td className="bg-accent-soft/60 px-5 py-4 align-top text-fg">{r[1]}</td>
                    <td className="px-5 py-4 align-top text-muted">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="divide-y divide-line sm:hidden">
              {[1, 2].map((c) => (
                <div key={c} className={`p-4 ${c === 1 ? "bg-accent-soft/60" : ""}`}>
                  <p className="flex items-center gap-2 text-[15px] font-medium text-fg">
                    {modes.columns[c]}
                    {c === 1 && <span className="rounded-full bg-accent px-2 py-0.5 text-[11px] text-white">{modes.defaultBadge}</span>}
                  </p>
                  <p className="font-mono text-[12px] text-muted">{modes.commands[c - 1]}</p>
                  <dl className="mt-3 space-y-2 text-sm">
                    {modes.rows.map((r) => (
                      <div key={r[0]}>
                        <dt className="text-[12px] text-subtle">{r[0]}</dt>
                        <dd className="text-fg">{r[c]}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </Window>
        </Feature>

        {/* 7. Safety (Vercel's "Recently shipped" bento) */}
        <section id="safety" aria-labelledby="safety-h" className={`${container} mt-32 md:mt-44`}>
          <h2 id="safety-h" className="display text-[40px] text-fg sm:text-[56px]">
            {safety.heading}
          </h2>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            <SafetyCard card={safety.cards[0]} tall corner visual={<BranchesVisual />} />
            <SafetyCard card={safety.cards[1]} />
            <SafetyCard card={safety.cards[2]} />
          </ul>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            <SafetyCard card={safety.cards[3]} />
            <SafetyCard card={safety.cards[4]} tall visual={<ChecklistVisual items={safety.cards[4].chips} />} />
            <SafetyCard card={safety.cards[5]} />
          </ul>
          <p className="mt-5 text-sm text-muted">{safety.footnote}</p>
        </section>

        {/* 8. Commands */}
        <section id="commands" aria-labelledby="commands-h" className={`${container} mt-32 grid gap-x-5 gap-y-10 md:mt-44 lg:grid-cols-12`}>
          <h2 id="commands-h" className="display text-[40px] text-fg sm:text-[56px] lg:col-span-4">
            {commands.heading}
          </h2>
          <div className="lg:col-span-8">
            <Window title="Reference">
              <table className="w-full text-left text-sm">
                <caption className="sr-only">Skyhop commands</caption>
                <thead className="sr-only">
                  <tr>
                    <th scope="col">{commands.columns[0]}</th>
                    <th scope="col">{commands.columns[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {commands.rows.map(([cmd, desc]) => (
                    <tr key={cmd} className="flex flex-col border-b border-line last:border-0 sm:table-row">
                      <th scope="row" className="whitespace-nowrap px-5 pb-1 pt-4 font-mono text-[13px] font-normal text-fg sm:w-[220px] sm:py-4">
                        {cmd}
                      </th>
                      <td className="px-5 pb-4 text-muted sm:py-4">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Window>
          </div>
        </section>

        {/* 9. FAQ */}
        <section id="faq" aria-labelledby="faq-h" className={`${container} mt-32 grid gap-x-5 gap-y-10 md:mt-44 lg:grid-cols-12`}>
          <h2 id="faq-h" className="display text-[40px] text-fg sm:text-[56px] lg:col-span-4">
            {faq.heading}
          </h2>
          <div className="lg:col-span-8">
            <Faq items={faq.items} />
          </div>
        </section>

        {/* 10. Final call to action */}
        <section aria-labelledby="cta-h" className={`${container} my-40 flex flex-col items-center gap-y-6 text-center md:my-56`}>
          <h2 id="cta-h" className="display text-[40px] text-fg sm:text-[56px]">
            {cta.heading}
          </h2>
          <CopyBlock label={install.label} commands={install.commands} block="cta" className="w-full max-w-[520px]" />
          <GithubLink where="cta" href={site.repo} className={pillLight}>
            <GithubIcon className="size-4" />
            {cta.github}
          </GithubLink>
        </section>
      </main>

      {/* 11. Footer */}
      <footer className="border-t border-line">
        <div className={`${container} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-6`}>
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm text-muted">{col.title}</h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"github" in l && l.github ? (
                      <GithubLink where={`footer-${l.label}`} href={l.href} className="text-fg transition-colors hover:text-muted">
                        {l.label}
                      </GithubLink>
                    ) : (
                      <a href={l.href} className="text-fg transition-colors hover:text-muted">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`${container} flex flex-col gap-4 pb-10 sm:flex-row sm:items-end sm:justify-between`}>
          <div className="flex items-center gap-2 text-fg">
            <SkyhopMark className="size-5" />
            <span className="text-sm font-semibold">{site.name}</span>
            <span className="font-mono text-[12px] text-subtle">v{site.version}</span>
          </div>
          <p className="max-w-xl text-[13px] leading-5 text-muted sm:text-right">{footer.disclaimer}</p>
        </div>
      </footer>
    </>
  );
}
