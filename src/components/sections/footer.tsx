export function Footer() {
  return (
    <footer
      className="py-8 px-4 border-t"
      style={{ borderColor: "rgba(237, 233, 223, 0.06)" }}
    >
      <div className="max-w-lg mx-auto text-center space-y-2">
        <p
          className="text-xs"
          style={{ color: "rgba(237, 233, 223, 0.35)" }}
        >
          &copy; 2026 Key Scales. I don&rsquo;t sell AI hype. I sell AI you can
          ship.
        </p>
        <p
          className="text-[11px]"
          style={{ color: "rgba(237, 233, 223, 0.25)" }}
        >
          Personal brand:{" "}
          <a
            href="https://keybuilds.ai"
            className="underline underline-offset-2"
            style={{ color: "#3E8E6B" }}
          >
            keybuilds.ai
          </a>
          {" · "}
          Consultancy:{" "}
          <a
            href="https://keystouch.com"
            className="underline underline-offset-2"
            style={{ color: "#3E8E6B" }}
          >
            keystouch.com
          </a>
        </p>
      </div>
    </footer>
  );
}
