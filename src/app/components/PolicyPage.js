import Footer from "./Footer";

function SectionBlock({ section }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-slate-900">{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-base leading-7 text-slate-700">
          {paragraph}
        </p>
      ))}
      {section.bullets?.length ? (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-slate-700">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

export default function PolicyPage({ title, sections }) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 pb-16 pt-14 md:px-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          {title}
        </h1>
        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <SectionBlock key={section.heading} section={section} />
          ))}
        </div>
      </div>
      <Footer dark={false} />
    </main>
  );
}
