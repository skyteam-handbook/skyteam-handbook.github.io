<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>SkyTeam Music Bot — Commands</title>
  <style>
    :root{
      --bg:#0b1220;
      --card:#0f1724;
      --muted:#9aa6bf;
      --accent:#2ea6ff;
      --good:#2ecc71;
      --warn:#ffcc00;
      --bad:#ff6b6b;
      --glass: rgba(255,255,255,0.03);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    body{background:linear-gradient(180deg,#071022 0%, #081228 60%); color:#dfe8f5; margin:0; padding:28px;}
    .wrap{max-width:980px;margin:0 auto;}
    header{display:flex;gap:16px;align-items:center;margin-bottom:20px}
    .logo{width:64px;height:64px;border-radius:12px;background:linear-gradient(135deg,#0ea5e9,#6366f1);display:flex;align-items:center;justify-content:center;font-weight:700;color:white;font-size:20px;box-shadow:0 6px 20px rgba(2,6,23,0.6)}
    h1{font-size:20px;margin:0}
    p.lead{color:var(--muted);margin-top:6px;margin-bottom:18px}
    .grid{display:grid;grid-template-columns:1fr 360px;gap:18px}
    .card{background:var(--card);padding:18px;border-radius:12px;box-shadow:0 6px 30px rgba(2,6,23,0.5);border:1px solid rgba(255,255,255,0.03)}
    .commands table{width:100%;border-collapse:collapse}
    .commands th{ text-align:left;color:var(--muted);padding:8px 10px;font-size:13px}
    .commands td{padding:10px;border-top:1px dashed rgba(255,255,255,0.03);vertical-align:top}
    code.cmd{background:var(--glass);padding:6px 10px;border-radius:8px;color:var(--accent);font-weight:600}
    .muted{color:var(--muted);font-size:13px}
    .example{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:10px;border-radius:8px;margin-top:8px;color:#dff4ff;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono";font-size:13px}
    .small{font-size:13px;color:var(--muted)}
    .note{padding:8px;border-radius:8px;background:rgba(255,255,255,0.02);margin-top:10px}
    .btn{display:inline-block;padding:8px 12px;border-radius:8px;background:var(--accent);color:#042033;text-decoration:none;font-weight:700;margin-top:8px}
    footer{margin-top:18px;color:var(--muted);font-size:13px;text-align:center}
    .right-card .section{margin-bottom:12px}
    .kbd{background:#041018;border:1px solid rgba(255,255,255,0.03);padding:6px 8px;border-radius:6px;color:var(--muted);font-size:12px}
    .green{color:var(--good);font-weight:700}
    .red{color:var(--bad);font-weight:700}
  </style>
</head>
<body>
  <div class="wrap">
    <header>
      <div class="logo">ST</div>
      <div>
        <h1>SkyTeam Music Bot — Command Reference</h1>
        <p class="lead">Quick reference for commands, config, DJ role management, and logging. Prefix is read from <code class="kbd">config.json</code> (default: <span class="kbd">+</span>).</p>
      </div>
    </header>

    <div class="grid">
      <!-- Left column: main commands -->
      <div class="card commands">
        <h3>Core commands</h3>
        <p class="small">All music commands require the DJ role (unless no DJ role is set; then only administrators may use them). Use your configured prefix (e.g. <code class="cmd">+</code>).</p>

        <table>
          <thead>
            <tr><th>Command</th><th>Description / Example</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><code class="cmd">+play &lt;query|URL&gt;</code><br><span class="muted">alias: <code class="cmd">+p</code></span></td>
              <td>
                Searches YouTube if you supply a query (e.g. <em>feel</em>), takes the first result, downloads the audio and queues it. If you pass a URL it will download that video’s audio.
                <div class="example">Example: <code>+play feel</code> → search & download; <code>+p https://www.youtube.com/watch?v=XXXX</code></div>
              </td>
            </tr>

            <tr>
              <td><code class="cmd">+skip</code> / <code class="cmd">+s</code></td>
              <td>Skip the currently playing track and start the next track in the queue. <div class="example">Example: <code>+skip</code></div></td>
            </tr>

            <tr>
              <td><code class="cmd">+stop</code></td>
              <td>Stop playback and clear the queue. The bot will remain in the channel (unless you use <code class="cmd">+leave</code>).</td>
            </tr>

            <tr>
              <td><code class="cmd">+leave</code></td>
              <td>Force the bot to disconnect from the voice channel immediately.</td>
            </tr>

            <tr>
              <td><code class="cmd">+queue</code> / <code class="cmd">+q</code></td>
              <td>Show the current queue (first N items). Example: <code>+q</code></td>
            </tr>

            <tr>
              <td><code class="cmd">+np</code></td>
              <td>Show the currently playing song (Now Playing).</td>
            </tr>

            <tr>
              <td><code class="cmd">+fm &lt;number&gt;</code></td>
              <td>Load a preset playlist. Example: <code>+p .fm1</code> or <code>+p 1</code> depending on your preset implementation. (Presets can be defined in the code.)</td>
            </tr>

            <tr>
              <td><code class="cmd">+setdjrole &lt;roleID&gt;</code></td>
              <td><strong>Admin-only</strong> — sets the server's DJ role (stored in <code>djroles.json</code>). Example: <code>+setdjrole 987654321012345678</code></td>
            </tr>

            <tr>
              <td><code class="cmd">+fm</code></td>
              <td>Shows the preset list or queue depending on implementation. Example: <code>+fm</code> to list preset stations.</td>
            </tr>

            <tr>
              <td><code class="cmd">+tts &lt;text&gt;</code></td>
              <td>Speak a short TTS message in the voice channel (if your bot build includes TTS). Example: <code>+tts Hello team!</code></td>
            </tr>

            <tr>
              <td><code class="cmd">+vol &lt;1-100&gt;</code></td>
              <td>Set playback volume (1–100). Some builds also support fading. Example: <code>+vol 75</code></td>
            </tr>

            <tr>
              <td><code class="cmd">+join</code></td>
              <td>Make the bot join your current voice channel (if implemented as separate command).</td>
            </tr>

          </tbody>
        </table>

        <div class="note">
          <strong>Behavior notes:</strong>
          <ul class="small">
            <li>The bot <em>searches YouTube</em> automatically when you send a query (non-URL). That prevents "not a valid URL" errors.</li>
            <li>Audio is downloaded before playback — downloaded files are stored in <code class="kbd">downloads/</code> then auto-deleted to keep the latest <strong>20</strong> files.</li>
            <li>If playback fails with FFmpeg, make sure <code class="kbd">ffmpeg</code> and <code class="kbd">yt-dlp</code> are installed and executable on your server and the bot process can access them.</li>
          </ul>
        </div>
      </div>

      <!-- Right column: config & notes -->
      <aside class="card right-card">
        <div class="section">
          <h4>Config & files</h4>
          <div class="small">
            <p><strong>config.json</strong> should contain:</p>
            <pre class="example">{
  "token": "YOUR_BOT_TOKEN",
  "prefix": "+",
  "logChannel": "LOG_CHANNEL_ID",
  "downloadFolder": "downloads",
  "maxDownloads": 20
}</pre>
            <p><strong>djroles.json</strong> is used to store per-server DJ role IDs. Start it as an empty object:</p>
            <pre class="example">{}</pre>
          </div>
        </div>

        <div class="section">
          <h4>DJ & Admin rules</h4>
          <p class="small">Only users with the configured DJ role can use music commands. If a DJ role is not set, the bot falls back to admin-only access. Set the role with:</p>
          <div class="example"><code class="cmd">+setdjrole &lt;ROLE_ID&gt;</code></div>
        </div>

        <div class="section">
          <h4>Logging</h4>
          <p class="small">Song plays are logged into the channel ID you set in <code class="kbd">config.json</code>. The log message includes:</p>
          <ul class="small">
            <li>Song URL</li>
            <li>Requesting user</li>
            <li>Link to the trigger message</li>
          </ul>
        </div>

        <div class="section">
          <h4>Troubleshooting tips</h4>
          <ol class="small">
            <li><strong>Install ffmpeg & yt-dlp</strong> on the server and ensure they are in PATH or the code points to their executable path.</li>
            <li>If you get <em>'not a valid URL'</em> — make sure you typed a query (the bot will search) or a valid URL. The bot performs a YouTube search if your input isn't a URL.</li>
            <li>For <em>yt-dlp</em> errors — try running the same yt-dlp command on the server terminal to see raw errors (permissions, network, python requirements).</li>
            <li>Check bot permissions: it needs Connect & Speak in the voice channel, and Send Messages/View Channel for text channels.</li>
          </ol>
        </div>

      </aside>
    </div>

    <footer>
      <div class="small">If you want this doc converted to a Discord embed or a downloadable README.md, tell me and I’ll generate it.</div>
    </footer>
  </div>
</body>
</html>
