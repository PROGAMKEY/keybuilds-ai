export function Footer() {
  return (
    <footer
      className="px-6 sm:px-10 pt-16 pb-10 border-t mt-12"
      style={{ borderColor: "rgba(237, 233, 223, 0.08)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-12 gap-y-8 gap-x-6 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-baseline gap-3 mb-2">
              <span
                className="editorial-italic"
                style={{
                  color: "#EDE9DF",
                  fontSize: "1.75rem",
                  fontWeight: 400,
                }}
              >
                Key
              </span>
              <span
                className="font-heading font-black"
                style={{
                  color: "#EDE9DF",
                  fontSize: "1.25rem",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                }}
              >
                Scales
              </span>
              <span
                className="inline-block ml-1"
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  backgroundColor: "#3E8E6B",
                  alignSelf: "flex-end",
                  marginBottom: "0.4rem",
                }}
                aria-hidden
              />
            </div>
            <p
              className="editorial-italic max-w-md"
              style={{ color: "rgba(237, 233, 223, 0.55)", fontSize: "1.05rem", lineHeight: 1.5 }}
            >
              I don&rsquo;t sell AI hype. I sell AI you can ship — and the time
              it buys you back.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 md:text-right space-y-1">
            <div className="mono-caps" style={{ color: "rgba(237, 233, 223, 0.45)" }}>
              Personal brand
            </div>
            <a
              href="https://keybuilds.ai"
              className="block font-heading"
              style={{ color: "#3E8E6B", fontSize: "1.1rem" }}
            >
              keybuilds.ai
            </a>
            <div className="mono-caps pt-3" style={{ color: "rgba(237, 233, 223, 0.45)" }}>
              Consultancy
            </div>
            <a
              href="https://keystouch.com"
              className="block font-heading"
              style={{ color: "#3E8E6B", fontSize: "1.1rem" }}
            >
              keystouch.com
            </a>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t mono-caps flex flex-col sm:flex-row gap-2 sm:justify-between"
          style={{
            borderTopColor: "rgba(237, 233, 223, 0.08)",
            color: "rgba(237, 233, 223, 0.35)",
          }}
        >
          <span>&copy; 2026 Key Scales</span>
          <span>Issue 01 / Vol. I</span>
        </div>
      </div>
    </footer>
  );
}
