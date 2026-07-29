const links = [
  {
    label: "哔哩哔哩",
    hint: "@KrKree",
    icon: "bilibili",
    href: "https://space.bilibili.com/107947700",
  },
  {
    label: "X / Twitter",
    hint: "@krkree113",
    icon: "x",
    href: "https://x.com/krkree113",
  },
  {
    label: "小红书",
    hint: "KrKree",
    icon: "xiaohongshu",
    href: "https://www.xiaohongshu.com/user/profile/66b304bd000000001d020da6",
  },
  {
    label: "QQ",
    hint: "3232612893",
    icon: "qq",
    href: "https://wpa.qq.com/msgrd?v=3&uin=3232612893&site=qq&menu=yes",
  },
  {
    label: "电子邮箱",
    hint: "hughsupre@gmail.com",
    icon: "mail",
    href: "mailto:hughsupre@gmail.com",
  },
  {
    label: "个人网站",
    hint: "krkree.com",
    icon: "globe",
    href: "https://krkree.com",
  },
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
          <span className="handle">@KrKree</span>
          <button className="round-button" type="button" aria-label="更多选项">
            <span>•••</span>
          </button>
        </header>

        <div className="identity">
          <div className="avatar-shell">
            <img className="avatar-photo" src="/avatar.png" alt="KrKree 的头像" />
          </div>
          <h1 id="profile-name">KrKree</h1>
          <p className="bio">葛城リーリヤP担当、旮旯给木萌新</p>
        </div>

        <nav aria-label="我的链接">
          <ul className="link-list">
            {links.map((link, index) => (
              <li key={link.label}>
                <a
                  className="link-card"
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className={`link-icon icon-${link.icon}`} aria-hidden="true">
                    <span className="icon-mark" />
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
      </section>
    </main>
  );
}
