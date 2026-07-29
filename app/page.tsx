const links = [
  { label: "作品集", hint: "Selected work", icon: "作", href: "#" },
  { label: "小红书", hint: "Notes & life", icon: "红", href: "#" },
  { label: "即刻", hint: "Daily thoughts", icon: "即", href: "#" },
  { label: "GitHub", hint: "Code & experiments", icon: "⌘", href: "#" },
  { label: "联系我", hint: "Say hello", icon: "信", href: "mailto:hello@example.com" },
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="background-photo" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="profile-card" aria-labelledby="profile-name">
        <div className="liquid-shine" aria-hidden="true" />

        <header className="topbar">
          <span className="handle">@KAI</span>
          <button className="round-button" type="button" aria-label="更多选项">
            <span>•••</span>
          </button>
        </header>

        <div className="identity">
          <div className="avatar-shell" aria-hidden="true">
            <div className="avatar">K</div>
          </div>
          <p className="eyebrow">独立创作者 · 产品设计师</p>
          <h1 id="profile-name">KAI</h1>
          <p className="bio">把复杂的问题做成简单、好用、有人情味的产品。</p>
        </div>

        <nav aria-label="我的链接">
          <ul className="link-list">
            {links.map((link, index) => (
              <li key={link.label}>
                <a className="link-card" href={link.href}>
                  <span className="link-icon" aria-hidden="true">
                    {link.icon}
                  </span>
                  <span className="link-copy">
                    <strong>{link.label}</strong>
                    <small>{link.hint}</small>
                  </span>
                  <span className="link-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <span className="link-index" aria-hidden="true">
                    0{index + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <footer className="status">
          <span className="status-dot" aria-hidden="true" />
          <span>目前接受 2026 年秋季合作</span>
        </footer>
      </section>

      <p className="background-note">背景图预留：public/background.jpg</p>
    </main>
  );
}
