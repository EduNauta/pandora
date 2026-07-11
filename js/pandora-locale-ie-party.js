/* pandora-locale-ie-party.js */
/**
 * Ireland party lore — talk, info seeds, builders (loaded after pandora-locale-ie-content.js).
 */
(function () {
    const CP_MILITANT_ONLY_BANNER = '<p class="cp-militant-only-banner" role="status">Militants only (Nv 3+). Visitors and participants do not see this directory in production.</p>';

    function buildTalkNewsFeedHtml(articles) {
        const items = Object.entries(articles).map(([slug, article]) =>
            `<li class="cp-news-item">
                <a class="cp-news-link" href="#news:${slug}" data-news-article="${slug}">
                    <time datetime="${article.datetime}">${article.dateLabel}</time>
                    <strong>${article.title}</strong>
                    <p>${article.teaser}</p>
                </a>
            </li>`
        ).join('');
        return `<ul class="cp-news-feed">${items}</ul>`;
    }

    function buildTalkForumBoardHtml(threads) {
        const items = Object.entries(threads).map(([slug, thread]) => {
            const pinned = thread.pinned ? ' cp-forum-post--pinned' : '';
            return `<li><a class="cp-forum-post${pinned}" href="#forum:${slug}" data-forum-thread="${slug}">
                <span class="cp-forum-post-title">${thread.title}</span>
                <span class="cp-forum-post-meta">${thread.meta}</span>
            </a></li>`;
        }).join('');
        return `<ul class="cp-forum-board">${items}</ul>`;
    }

    const TALK_NEWS_ARTICLES = {
        'saffron-provisional-good': {
            datetime: '2026-05-26',
            dateLabel: '26 May 2026 · 09:14',
            title: 'Organic Directorate declares saffron «provisional Good» until the Drumcondra printer is fixed',
            teaser: 'After a manifesto reprint came out entirely in highlighter ink, the Abstract Party voted 11–3 to treat saffron as the official colour of optimism.',
            body: `<p>The Organic Directorate of the <strong>Abstract Party of Principled Ambiguity (Ireland)</strong> convened an emergency session after 400 copies of the spring manifesto emerged from the Drumcondra office printer in what witnesses described as «aggressive saffron.»</p>
                <p>General Secretary Siobhán Ní Houlihan moved that saffron be recognised as <em>provisional Good</em> until toner supplies return to morally neutral territory. The motion passed 11–3, with two abstentions and one delegate voting «morally chartreuse.»</p>
                <p>Technical Ops (Paddy Pipeworks) has been instructed to source cartridges that print «hope without shouting.» Press &amp; Narrative will update brand guidelines by Friday, or whenever the printer agrees.</p>
                <p><em>Editor's note:</em> This wire replaces an earlier draft printed entirely in highlighter ink. The previous version is archived under <strong>Info → Money → Journal</strong> as exhibit J-2404.</p>`
        },
        'coalition-sausage-rolls': {
            datetime: '2026-05-25',
            dateLabel: '25 May 2026 · 16:02',
            title: 'Coalition summit deadlocked over superior sausage rolls; Good faction claims moral victory',
            teaser: 'Negotiations outside Athlone stalled when rival delegates arrived with sausage rolls from an award-winning Cork butcher.',
            body: `<p>Coalition talks at a hotel outside Athlone entered their ninth hour when delegates from a rival formation appeared with sausage rolls from an award-winning butcher in Cork. The Good faction described the pastries as «tactically superior» and demanded a recess.</p>
                <p>Coalition Desk Cillian Burke issued a communique stating the party remains willing to govern «provided the Bad brings napkins and a decent cup of tea.» The Bad faction countered that hospitality standards were «pre-conditions, not concessions.»</p>
                <p>No agreement was reached on pastry parity. Talks resume Tuesday, pending a tasting panel drawn from the Territorial and Miscellaneous coordinations.</p>`
        },
        'leaflet-typo': {
            datetime: '2026-05-24',
            dateLabel: '24 May 2026 · 11:30',
            title: 'Leaflets recalled in three counties after typo promises «against the Good, for the Bad»',
            teaser: '10,000 flyers pulled from Galway, Kerry, and Meath. Party blames autocorrect, the Bad, and a volunteer also called Autocorrect.',
            body: `<p>Comms discovered a printing error in a batch of 10,000 municipal leaflets after a Galway canvasser reported «unexpected ideological clarity» in the headline.</p>
                <p>The approved line read: <em>«For the Good, against the Bad — with nuance.»</em> The printed line read: <em>«Against the Good, for the Bad — definitely.»</em></p>
                <p>Recall operations are underway in Galway, Kerry, and Meath. The party blames autocorrect, the Bad, and a volunteer who is also called Autocorrect. Orla Lynch (Press) has requested a mandatory proofreading stare-down before the next print run.</p>`
        },
        'coat-rack-consultative': {
            datetime: '2026-05-23',
            dateLabel: '23 May 2026 · 08:45',
            title: 'HQ coat rack granted consultative status by acclamation',
            teaser: 'The Flat Above O\'Sullivan\'s Centra recognises the coat rack as observer member with veto on drafts.',
            body: `<p>In a rare unanimous vote without a staring contest, militants at HQ — The Flat Above O'Sullivan's Centra (Dublin 9) — granted the main coat rack <strong>consultative status</strong>.</p>
                <p>The rack may attend Organic Directorate sessions as observer, with veto power over draft manifestos left hanging on its pegs. Minutes record that the rack «has historically blocked more bad ideas than the Ethics Subcommittee.»</p>
                <p>First policy win of the quarter. Bad faction demanded equal peg rights for opposition scarves; motion deferred to next laundry cycle.</p>`
        },
        'treasury-q2-ledger': {
            datetime: '2026-05-22',
            dateLabel: '22 May 2026 · 19:20',
            title: 'Treasury publishes Q2 ledger; line item «toner that only prints optimism» under investigation',
            teaser: 'Auditors request explanation for €214.50 spent on yellow cartridges. Finance promises transparency after the tea break.',
            body: `<p>Public Ledger Custodian Fiachra Ledger published the party's Q2 accounts, showing a surplus of €8,468.70 after virtue-mug sales at the Ploughing Championship.</p>
                <p>Auditors flagged line item 520 (Printing): €214.50 for «toner that only prints optimism,» linked to the saffron manifesto incident. Finance desk promises full transparency after the tea break; biscuits provided by Carmel Ní Cheallaigh.</p>
                <p>Disputes may be filed via <strong>Admin → Treasury</strong>. Ledger hash (demo): <code>0xGOOD-BAD-27a3f9</code>.</p>`
        },
        'staring-contest-chairs': {
            datetime: '2026-05-21',
            dateLabel: '21 May 2026 · 14:00',
            title: 'Staring contest resolves county dispute over folding chairs borrowed from the Fête',
            teaser: 'Galway county caucus chair retains twelve chairs after three hours of silence.',
            body: `<p>A territorial dispute over twelve folding chairs borrowed from the local Fête was resolved by the party's approved conflict protocol: a three-hour staring contest.</p>
                <p>Galway county caucus chair retained custody. Minutes note «heavy ideological blinking and one sneeze» but certify the result as binding until the next parish fundraiser.</p>
                <p>Territorial coordination recommends labelling all chairs with washable Good/Bad tags before summer canvassing season.</p>`
        },
        'virtue-mugs-ploughing': {
            datetime: '2026-05-20',
            dateLabel: '20 May 2026 · 10:15',
            title: 'Virtue mugs sell out at the Ploughing Championship; proceeds earmarked for Tayto emergency fund',
            teaser: 'Mugs reading «I voted Good (probably)» fund coalition hospitality. Bad faction demands equal mug rights.',
            body: `<p>Limited edition mugs reading <em>«I voted Good (probably)»</em> sold out on day one of the Ploughing Championship. Proceeds enter the Tayto Emergency Fund for coalition hospitality.</p>
                <p>The Bad faction tabled a motion for equal mug rights and «a fair crack of the crisps.» Coalition Desk is reviewing Pantone options for a companion mug: <em>«I opposed Bad (tentatively).»</em></p>`
        },
        'forum-manifesto-colour': {
            datetime: '2026-05-19',
            dateLabel: '19 May 2026 · 07:50',
            title: 'Forum thread on Dáil list manifesto colour reaches 201 replies; green deemed «acceptable if muted»',
            teaser: 'Comms recommends Pantone Hopeful for Good and «whatever the printer does» for everything else.',
            body: `<p>Party forum thread #manifesto-colour crossed 201 replies without consensus. Comms team recommends <strong>Pantone Hopeful Green</strong> for Good-aligned materials and «whatever the printer does» for all other outputs.</p>
                <p>Seanad liaison is monitoring the thread for phrases that could become binding policy by accident. Organic Directorate may issue a colour ceasefire after toner negotiations conclude.</p>
                <p>Read the full thread in <strong>Talk → Forum</strong> (demo).</p>`
        }
    };

    const TALK_FORUM_THREADS = {
        'faq-good-bad': {
            pinned: true,
            title: 'READ FIRST: We are for the Good, against the Bad — FAQ thread',
            meta: 'Moderation · 142 replies · Last post 2h ago',
            author: 'Moderation desk',
            authorHandle: '@moderation',
            op: `<p>Welcome. This party is <strong>for the Good</strong> and <strong>against the Bad</strong>. If you are confused, that is a feature, not a bug.</p>
                <p><strong>FAQ:</strong></p>
                <ul>
                    <li><strong>What is Good?</strong> — That which the Organic Directorate has not yet voted «provisional Bad.»</li>
                    <li><strong>What is Bad?</strong> — That which the other faction brought to the coalition summit without napkins.</li>
                    <li><strong>Can I disagree?</strong> — Yes, in the forum, with acta and biscuits.</li>
                </ul>`,
            replies: [
                { author: 'Siobhán Ní Houlihan', handle: '@siobhan_nihoulihan', time: '2h ago', html: '<p>Pin renewed for Q2. Reminder: «morally chartreuse» is not an official alignment.</p>' },
                { author: 'Cillian Burke', handle: '@cillian_burke', time: 'Yesterday', html: '<p>Added coalition pastry protocol to FAQ draft. Cork rolls remain a sensitive topic.</p>' },
                { author: 'Visitor', handle: '@john_murphy', time: '3 days ago', html: '<p>Is this satire? Asking for 3,000 friends named John Murphy.</p>' }
            ]
        },
        'rename-directorate': {
            title: 'Proposal: rename «Organic Directorate» to «Directorate That Directs, With Respect»',
            meta: '@siobhan_nihoulihan · 38 replies · 5h ago',
            author: 'Siobhán Ní Houlihan',
            authorHandle: '@siobhan_nihoulihan',
            op: '<p>The current name sounds like a farmers\' co-op. Proposed name honours our commitment to direction, respect, and not sounding like a yoghurt brand.</p>',
            replies: [
                { author: 'Orla Lynch', handle: '@orla_lynch', time: '4h ago', html: '<p>Press concern: acronym DTDRWR does not fit on mugs.</p>' },
                { author: 'Paddy Pipeworks', handle: '@paddy_pipeworks', time: '5h ago', html: '<p>IT can neither confirm nor deny we already renamed the Wi-Fi SSID.</p>' }
            ]
        },
        'folding-chairs': {
            title: 'County caucus — who\'s bringing the folding chairs this time?',
            meta: 'Territorial · 67 replies · Yesterday',
            author: 'Galway Territorial',
            authorHandle: '@galway_territorial',
            op: '<p>Last Fête we «borrowed» twelve chairs. Galway won the stare-down but Kerry wants them back before Puck Fair. Sign up below.</p>',
            replies: [
                { author: 'Kerry Caucus', handle: '@kerry_caucus', time: 'Yesterday', html: '<p>We are bringing four chairs and a moral argument.</p>' }
            ]
        },
        'saffron-colour-debate': {
            title: 'Is saffron a morally acceptable manifesto colour? (serious thread)',
            meta: 'Comms · 201 replies · Yesterday',
            author: 'Orla Lynch',
            authorHandle: '@orla_lynch',
            op: `<p>Serious thread. Saffron reads as «optimism» to some and «highlighter incident» to others. Comms needs a ruling before reprint.</p>
                <p>Options on the table: Pantone Hopeful Green, muted teal, or «whatever the printer does.»</p>`,
            replies: [
                { author: 'Organic Directorate', handle: '@organic_dir', time: 'Yesterday', html: '<p>Provisional Good until toner fixed. See also wire story 26 May.</p>' },
                { author: 'Bad faction', handle: '@bad_faction', time: 'Yesterday', html: '<p>Saffron is Bad when they use it. Good when we use it. This is consistent.</p>' },
                { author: 'Fiachra Ledger', handle: '@fiachra_ledger', time: '2 days ago', html: '<p>€214.50 says saffron is expensive regardless of morality.</p>' }
            ]
        },
        'alignment-scorecard': {
            title: 'CONFIDENTIAL: Good/Bad alignment scorecard — Q2 draft',
            meta: 'Organic Directorate · 24 replies · 1h ago',
            author: 'Organic Directorate',
            authorHandle: '@organic_dir',
            op: '<p>Militants Nv 3+: draft scorecard attached. Do not screenshot. Do not tweet. Especially do not print on saffron paper.</p>',
            replies: [
                { author: 'Security', handle: '@security', time: '1h ago', html: '<p>Leak check thread opened. See related forum row.</p>' }
            ]
        },
        'sausage-roll-leak': {
            title: 'Leak check: who told the sausage-roll faction our coalition position?',
            meta: 'Security · 56 replies · Yesterday',
            author: 'Security desk',
            authorHandle: '@security',
            op: '<p>Our Athlone position reached Cork pastry circles before delegates arrived. Investigating forum DMs, printer queue, and the volunteer named Autocorrect.</p>',
            replies: [
                { author: 'Cillian Burke', handle: '@cillian_burke', time: 'Yesterday', html: '<p>Coalition Desk notes: position was «open to governing with napkins,» not secret.</p>' }
            ]
        },
        'treasury-printer': {
            title: 'Treasury thread — explain the yellow printer line item before the auditor arrives',
            meta: 'Finance · 17 replies · Yesterday',
            author: 'Fiachra Ledger',
            authorHandle: '@fiachra_ledger',
            op: `<p>Auditors want a memo on J-2404 (€214.50, «toner that only prints optimism»). Finance needs a sentence that is true and boring.</p>
                <p>Draft: «Manifesto reprint incident; cartridges disposed; saffron declared provisional Good.» Comments welcome before Thursday.</p>`,
            replies: [
                { author: 'Paddy Pipeworks', handle: '@paddy_pipeworks', time: 'Yesterday', html: '<p>Cartridges were not disposed. They achieved sentience and joined the coat rack caucus.</p>' },
                { author: 'Auditor (guest)', handle: '@auditor', time: 'Yesterday', html: '<p>Please use the official form. Also: what is a coat rack caucus?</p>' }
            ]
        },
        'tayto-crisps-column': {
            title: 'Guest column: Tayto vs Jacob\'s — coalition crisps and turnout',
            meta: 'Coalition desk · 19 replies · 2 days ago',
            author: 'Cillian Burke',
            authorHandle: '@cillian_burke',
            op: '<p>Guest column: crisp choice at coalition tables correlates with turnout. Tayto fund is not a bribe; it is «structured hospitality.»</p>',
            replies: [
                { author: 'Bad faction', handle: '@bad_faction', time: '2 days ago', html: '<p>Jacob\'s alliance still on the table if Good faction admits Cheese & Onion parity.</p>' }
            ]
        },
        'emoji-intro': {
            title: 'Introduce your collective in 3 emojis or fewer (no tricolour flags)',
            meta: 'Icebreakers · 88 replies · 3 days ago',
            author: 'Miscellaneous coordination',
            authorHandle: '@misc_coord',
            op: '<p>Icebreaker: three emojis max. No tricolour flags. Example: 🗂️☕🪑 (Abstract Collective).</p>',
            replies: [
                { author: 'Territorial', handle: '@galway_territorial', time: '3 days ago', html: '<p>🪑👀🌧️ — we have chairs, stares, and weather.</p>' }
            ]
        },
        'john-murphy-bug': {
            title: 'Bug report: forum shows 3,000 users named John Murphy online',
            meta: 'Technical · 12 replies · 4 days ago',
            author: 'Paddy Pipeworks',
            authorHandle: '@paddy_pipeworks',
            op: '<p>Online list caps at 3,000 «John Murphy» due to demo name generator. Patch scheduled. Workaround: be the John Murphy who posts first.</p>',
            replies: [
                { author: 'Moderation', handle: '@moderation', time: '4 days ago', html: '<p>Not a security issue. Culturally, however, concerning.</p>' }
            ]
        },
        'bad-wins-leaders-questions': {
            title: 'Scenario planning if the Bad wins the next Leaders\' Questions slot',
            meta: 'Strategy · 43 replies · 3 days ago',
            author: 'Niamh Ballot',
            authorHandle: '@niamh_ballot',
            op: '<p>Dáil liaison requests scenario plans if Bad faction wins the next Leaders\' Questions speaking slot. Include press lines, tea strategy, and coat rack positioning.</p>',
            replies: [
                { author: 'Orla Lynch', handle: '@orla_lynch', time: '3 days ago', html: '<p>Press line: «We are monitoring the situation with hope and a working printer.»</p>' }
            ]
        }
    };

    const PARTY_TALK_NEWS_FEED_HTML = buildTalkNewsFeedHtml(TALK_NEWS_ARTICLES);
    const PARTY_TALK_FORUM_THREADS_HTML = buildTalkForumBoardHtml(TALK_FORUM_THREADS);

    const PARTY_TALK_SOCIAL_GRID_HTML = `
                            <div class="cp-social-grid">
                                <a class="cp-social-link cp-social-link--wa" href="https://chat.whatsapp.com/ExampleAbstractPartyIE" target="_blank" rel="noopener noreferrer">
                                    <span class="cp-social-label">WhatsApp</span>
                                    <span class="cp-social-desc">Militant group chat (county chats too)</span>
                                </a>
                                <a class="cp-social-link cp-social-link--tg" href="https://t.me/abstract_party_ie" target="_blank" rel="noopener noreferrer">
                                    <span class="cp-social-label">Telegram</span>
                                    <span class="cp-social-desc">Strategy &amp; rapid alerts</span>
                                </a>
                                <a class="cp-social-link cp-social-link--ig" href="https://instagram.com/abstractparty.ie" target="_blank" rel="noopener noreferrer">
                                    <span class="cp-social-label">Instagram</span>
                                    <span class="cp-social-desc">Public account</span>
                                </a>
                                <a class="cp-social-link cp-social-link--x" href="https://x.com/AbstractPartyIE" target="_blank" rel="noopener noreferrer">
                                    <span class="cp-social-label">X</span>
                                    <span class="cp-social-desc">Public account</span>
                                </a>
                            </div>
                            <p class="template-muted" style="margin-top:12px;">Demo links — replace before production.</p>`;

    function buildTalkSplitSectionHtml(title, sectionId, introHtml, mapBodyHtml) {
        return `<h5>${title}</h5>
                    <div class="cp-section-intro">${introHtml}</div>
                    <div class="cp-map-body" data-map-body="${sectionId}" hidden aria-hidden="true">${mapBodyHtml}</div>`;
    }

    const CP_REAL_CONTENT_BANNER = '<p class="cp-real-content-banner" role="status">Official Platform 21 rule — not demo lore.</p>';

    const PLATFORM_RANK_LADDER = {
        title: 'Platform rank ladder',
        html: `${CP_REAL_CONTENT_BANNER}
                        <p>Each user has one <strong>divisible vote</strong> to split across people. Some ranks depend on <strong>Honor Points received</strong> from social votes (full units only; partial votes still count toward totals but may stay hidden).</p>
                        <ul class="cp-opciones-list">
                            <li><strong>1 — Visitor</strong> Browse public areas with limited participation.</li>
                            <li><strong>2 — User</strong> Registered account with standard platform access.</li>
                            <li><strong>3 — Member</strong> You pay membership dues; full participation rights inside the party and collectives you join.</li>
                            <li><strong>4 — Representative</strong> At least <strong>1 Honor Point</strong> received from social votes.</li>
                            <li><strong>5 — Professional</strong> You hold a position in the structure of the party or a collective.</li>
                            <li><strong>6 — Candidate</strong> You are a member of the party electoral list.</li>
                        </ul>
                        <p class="template-muted">Representative status can be reached with a single full Honor Point if enough voters assign you one; most people split votes, so climbing the ladder usually takes broader support.</p>`
    };

    function buildPlatformRankLadderSeedHtml() {
        const rank = PLATFORM_RANK_LADDER;
        return `<h5>${rank.title}</h5>${rank.html}`;
    }

    function buildPartyWikiIndexHtml() {
        return `<h5>Wiki</h5>
                            <p class="template-muted">Knowledge base — satirical party lore (demo). Official platform access levels: <strong>Wiki → Rules → Platform rank ladder</strong>.</p>
                            <ul class="cp-wiki-pages" data-wiki-index>
                                <li><a href="#wiki:party-history-vol-0" data-wiki-article="party-history-vol-0">Party History, Vol. 0: The Meeting in the Back of Flanagan's</a><span class="cp-wiki-blurb">Founding myths, missing minutes, and why the tea was always grand.</span></li>
                                <li><a href="#wiki:hq-stationery-shop" data-wiki-article="hq-stationery-shop">HQ — The Flat Above O'Sullivan's Centra</a><span class="cp-wiki-blurb">Floor plan, fire exit that opens onto ideology, and the sacred coat rack.</span></li>
                                <li><a href="#wiki:official-website" data-wiki-article="official-website">Official Website — www.we-might-have-a-site.ie</a><span class="cp-wiki-blurb">DNS propagation pending since the last electoral cycle.</span></li>
                                <li><a href="#wiki:brand-guidelines" data-wiki-article="brand-guidelines">Brand Guidelines for Virtue Signalling</a><span class="cp-wiki-blurb">Approved shades of Good (Pantone Hopeful Green), forbidden fonts of Bad.</span></li>
                                <li><a href="#wiki:coalition-matrix" data-wiki-article="coalition-matrix">Coalition Compatibility Matrix (Spoiler: Maybe)</a><span class="cp-wiki-blurb">Who we may govern with before lunch and oppose after dessert.</span></li>
                                <li><a href="#wiki:crisis-manual" data-wiki-article="crisis-manual">Crisis Manual — When the Good and Bad File Joint Lists</a><span class="cp-wiki-blurb">Press statements, blame allocation, and emergency Tayto reserves.</span></li>
                                <li><a href="#wiki:glossary-undefined" data-wiki-article="glossary-undefined">Glossary of Terms We Refuse to Define</a><span class="cp-wiki-blurb">The craic, sovereignty, progress, and «the situation».</span></li>
                            </ul>`;
    }

    function buildPartyTalkSeedHtml() {
        return {
            news: buildTalkSplitSectionHtml(
                'News',
                'news',
                '<p>Official party wire — satirical briefings from the <strong>Abstract Party of Principled Ambiguity (Ireland)</strong>. Headlines appear in the background panel; same Good/Bad ideology, different accents.</p>',
                PARTY_TALK_NEWS_FEED_HTML
            ),
            forum: buildTalkSplitSectionHtml(
                'Forum',
                'forum',
                '<p>One party board: militants and visitors, public rows and «ultrasecret» rows in a single thread list (demo). Pick a thread in the background panel — mind the craic.</p>',
                PARTY_TALK_FORUM_THREADS_HTML
            ),
            'social-media': buildTalkSplitSectionHtml(
                'Social Media',
                'social-media',
                '<p>Official channels — militant group chats and public outreach accounts. Open a link from the background panel.</p>',
                PARTY_TALK_SOCIAL_GRID_HTML
            )
        };
    }

    function buildStructureTeamHtml(title, blurb, bullets) {
        const items = bullets.map((b) => `<li>${b}</li>`).join('');
        return `<h5>${title}</h5>
                    ${CP_MILITANT_ONLY_BANNER}
                    <p class="template-muted">${blurb}</p>
                    <ul class="cp-wiki-pages" style="margin-top:10px;">${items}</ul>`;
    }

    function buildPartyStructureHtml(opts) {
        const municipalityLabel = opts && opts.municipalityLabel;
        const localSedes = (opts && opts.localSedes) || '<li>Galway — county sede (demo)</li><li>Cork — county sede (demo)</li><li>Donegal — county sede (demo)</li>';
        const candidacyPointer = municipalityLabel
            ? `<p class="template-muted" style="margin-top:10px;">Dáil and municipal candidacies: open <strong>Party → Candidacy</strong> (national list plus <strong>${municipalityLabel}</strong> municipal slate).</p>`
            : '<p class="template-muted" style="margin-top:10px;">Electoral lists (Dáil and municipal): open <strong>Party → Candidacy</strong>.</p>';
        return `<h5>Party Structure</h5>
                    ${CP_MILITANT_ONLY_BANNER}
                    <p class="template-muted">Functional chart of the Irish Abstract Party — offices, coordinations, and Dáil liaison (demo). HQ: The Flat Above O'Sullivan's Centra, Dublin 9.</p>
                    <ul class="cp-party-structure-tree">
                        <li><strong>Organic Directorate</strong><span>Executive coordination; Good/Bad alignment reviews</span>
                            <ul>
                                <li>General Secretary — Siobhán Ní Houlihan</li>
                                <li>Coalition Desk — Cillian Burke</li>
                                <li>Dáil Liaison — Niamh Ballot</li>
                                <li>Technical Ops — Paddy Pipeworks</li>
                                <li>Press &amp; Narrative — Orla Lynch</li>
                                <li>Public Ledger Custodian — Fiachra Ledger</li>
                            </ul>
                        </li>
                        <li><strong>General Directorate</strong><span>Thematic coordinations, county and municipal district nuclei, Dáil liaison</span>
                            <ul>
                                <li>Thematic coordinations (8) — min. 5% party score per seat block</li>
                                <li>Intellectual · Spiritual · Cultural · Professional</li>
                                <li>Territorial · Syndical · Miscellaneous · Coalition scones &amp; sausage rolls</li>
                                ${localSedes}
                                <li>Dáil liaison office — delegates (Nv 5), coordinators (Nv 6)</li>
                            </ul>
                        </li>
                    </ul>
                    ${candidacyPointer}`;
    }

    const PARTY_CONGRESS_CANDIDATES = {
        organic: [
            { pos: 1, name: 'Siobhán Ní Houlihan', seat: 'National list head', note: 'General Secretary · pledges toner reform before coalition dessert' },
            { pos: 2, name: 'Niamh Ballot', seat: 'Dáil liaison', note: 'Keeps staring contests within standing orders' },
            { pos: 3, name: 'Cillian Burke', seat: 'Coalition desk', note: 'Authorized to trade manifesto clauses for sausage rolls (max. 2)' },
            { pos: 4, name: 'Orla Lynch', seat: 'Press & narrative', note: 'Declared saffron «provisional Good» on all outbound wires' },
            { pos: 5, name: 'Paddy Pipeworks', seat: 'Ballot integrity & CRM', note: 'Quarantines the 3,000 John Murphy records pre-count' },
            { pos: 6, name: 'Fiachra Ledger', seat: 'Public ledger', note: 'Publishes every expense except the mystery yellow line' },
            { pos: 7, name: 'Claire Dunne', seat: 'Honor-points liaison', note: 'Explains why 50% is still a love letter in caucus math' },
            { pos: 8, name: 'Ellen Malloy', seat: 'Militant organizer', note: 'Street delegate pipeline · Nv 4 endorsements' }
        ],
        general: [
            { pos: 9, name: 'Prof. Séamus Optimum', seat: 'Intellectual coordination', note: 'Neo-Aristocratic Technocracy · models Good on spreadsheets' },
            { pos: 10, name: 'Gaia-7 Sterling', seat: 'Spiritual / eco bloc', note: 'Cosmic Eco-Accelerationism · urgent photosynthesis' },
            { pos: 11, name: 'Comrade Moss FastForward', seat: 'Cultural acceleration', note: 'Same faction · growth & urgency subcommittee' },
            { pos: 12, name: 'Duke Bluetooth of Kildare', seat: 'Professional / digital guilds', note: 'Retro-Feudalist Digital Syndicalism · Bluetooth oath' },
            { pos: 13, name: 'Guildmaster Slack O\'Brien', seat: 'Platform cooperatives', note: 'Syndical slot · feudal Slack permissions' },
            { pos: 14, name: 'Councillor-In-Waiting Brian Byrne', seat: 'Territorial populism', note: 'Sovereignist Hyperlocal · folding-chair doctrine' },
            { pos: 15, name: 'Carmel Ní Cheallaigh', seat: 'Neighborhood assemblies', note: 'Same faction · eternal neighbour status · brings biscuits' },
            { pos: 16, name: 'Countess Aldric FitzMetrics', seat: 'Miscellaneous / KPI', note: 'Scores Dáil attendance in quill ledgers' },
            { pos: 17, name: 'Lady Cordelia Benchmark', seat: 'Coalition scones', note: 'Tracks rival party sausage-roll superiority index' },
            { pos: 18, name: 'Dr. Helix Permaculture', seat: 'Food sovereignty reserve', note: 'Cosmic Eco · backup if Gaia-7 photosynthesizes late' },
            { pos: 19, name: '«Riot» Peig Mischief', seat: 'Antisystem guest quota', note: 'Revolutionary Front · manifesto footnote 47 (non-binding)' },
            { pos: 20, name: 'The Void Sister (Patricia M.)', seat: 'Manifesto reserve', note: 'Spiritual antisystem · defines terms we refuse elsewhere' }
        ]
    };

    function renderCongressCandidateRows(rows) {
        return rows.map((c) => `<tr>
                        <td>${c.pos}</td>
                        <td><strong>${c.name}</strong></td>
                        <td>${c.seat}</td>
                        <td class="cp-candidacy-note">${c.note}</td>
                    </tr>`).join('');
    }

    function buildPartyCandidacyHtml(opts = {}) {
        let scope = opts.scope;
        if (!scope) scope = opts.municipalityLabel ? 'municipales' : 'congreso';
        const territoryLabel = opts.territoryLabel || opts.municipalityLabel || '';

        if (scope === 'municipales') {
            if (!territoryLabel) {
                return `<h5>Municipal districts</h5>
                    ${CP_MILITANT_ONLY_BANNER}
                    <p class="template-muted">Pick a municipal district in the sidebar to view its open list (Nv 7).</p>`;
            }
            return `<h5>Municipal district — ${territoryLabel}</h5>
                        ${CP_MILITANT_ONLY_BANNER}
                        <p class="cp-candidacy-meta"><strong>${territoryLabel}</strong> — municipal open list (Nv 7). Same <strong>50%</strong> Organic / <strong>50%</strong> General directorate split as the national Dáil slate.</p>
                        <div class="cp-party-structure-candidacy-split">
                            <div>
                                <strong>Organic half (district)</strong>
                                <ul>
                                    <li>Siobhán Ní Houlihan — list coordinator (provisional)</li>
                                    <li>Brian Byrne — territorial lead (if ${territoryLabel} allows chairs)</li>
                                    <li>Open slot — plebiscite pending</li>
                                </ul>
                            </div>
                            <div>
                                <strong>General half (district)</strong>
                                <ul>
                                    <li>Carmel Ní Cheallaigh — neighborhood assemblies</li>
                                    <li>Lord KPI of Pembroke — district metrics</li>
                                    <li>Open slot — plebiscite pending</li>
                                </ul>
                            </div>
                        </div>
                        <p class="template-muted" style="margin-top:12px;">Statewide list: <strong>Dáil Éireann</strong> tab under <strong>Party → Candidacy</strong>.</p>`;
        }

        if (scope === 'ccaa') {
            if (!territoryLabel) {
                return `<h5>Counties</h5>
                    ${CP_MILITANT_ONLY_BANNER}
                    <p class="template-muted">Pick a county in the sidebar to view its county-council slate (demo).</p>`;
            }
            return `<h5>County — ${territoryLabel}</h5>
                    ${CP_MILITANT_ONLY_BANNER}
                    <p class="cp-candidacy-meta">County-council slate for <strong>${territoryLabel}</strong> (demo). Same <strong>50% / 50%</strong> split as Dáil lists; feeds municipal districts and national batch allocation.</p>
                    <div class="cp-party-structure-candidacy-split">
                        <div>
                            <strong>Organic half (county)</strong>
                            <ul>
                                <li>County coordinator — sede rotation across ${territoryLabel}</li>
                                <li>Dáil liaison (county) — Nv 6 plebiscite</li>
                                <li>Open slot — scone summit pending</li>
                            </ul>
                        </div>
                        <div>
                            <strong>General half (county)</strong>
                            <ul>
                                <li>Thematic coordination — cross-district coalitions</li>
                                <li>County council attendance metrics</li>
                                <li>Open slot — council veto window</li>
                            </ul>
                        </div>
                    </div>
                    <p class="template-muted" style="margin-top:12px;">Full national list: <strong>Dáil Éireann</strong> tab.</p>`;
        }

        const organicRows = renderCongressCandidateRows(PARTY_CONGRESS_CANDIDATES.organic);
        const generalRows = renderCongressCandidateRows(PARTY_CONGRESS_CANDIDATES.general);
        return `<h5>Dáil Éireann</h5>
                    ${CP_MILITANT_ONLY_BANNER}
                    <p class="cp-candidacy-meta">Official <strong>Abstract Party of Principled Ambiguity (Ireland)</strong> slate for <strong>Dáil Éireann</strong> (demo). Locked at <strong>50% Organic Directorate</strong> and <strong>50% General Directorate</strong>; coordination council may veto individual rows after the scone summit.</p>
                    <p class="template-muted">Status: plebiscite wording approved · batch allocation Q3 · 12,000 militants eligible to confirm order (Nv 7).</p>
                    <p class="cp-candidacy-bloc-title">Organic Directorate — 50% of Dáil list (positions 1–8)</p>
                    <table class="cp-contact-table cp-candidacy-congress-list">
                        <thead><tr><th>#</th><th>Candidate</th><th>Seat / role</th><th>Notes</th></tr></thead>
                        <tbody>${organicRows}</tbody>
                    </table>
                    <p class="cp-candidacy-bloc-title">General Directorate — 50% of Dáil list (positions 9–20)</p>
                    <table class="cp-contact-table cp-candidacy-congress-list">
                        <thead><tr><th>#</th><th>Candidate</th><th>Seat / bloc</th><th>Notes</th></tr></thead>
                        <tbody>${generalRows}</tbody>
                    </table>
                    <p class="template-muted" style="margin-top:14px;">Reserve bench (non-allocated): Serf Liberation Zhang, Abbess Blockchain, Dame Pilar of the Territory, Gideon Unmanager — activated if any delegate defects to the Bad after dessert.</p>
                    <p class="template-muted">County and municipal-district slates: <strong>Counties</strong> and <strong>Municipal districts</strong> tabs under <strong>Party → Candidacy</strong>.</p>`;
    }

    const demoPersonNames = {
        marina: 'Siobhán Ní Houlihan',
        iker: 'Cillian Burke',
        helena: 'Niamh Ballot',
        pau: 'Paddy Pipeworks',
        lucia: 'Orla Lynch',
        omar: 'Fiachra Ledger',
        clara: 'Claire Dunne',
        elena: 'Ellen Malloy',
        bruno: 'Councillor-In-Waiting Brian Byrne',
        carmen: 'Carmel Ní Cheallaigh',
        paloma: '«Riot» Peig Mischief',
        joao: 'Seán Forde',
        'jose-garcia': 'John Murphy',
        marc: 'Mark Pike',
        sofia: 'Sofia Andersen',
        'lucia-v': 'Lucy Wade',
        tomas: 'Tommy Reilly',
        nadia: 'Nadia El Amrani',
        pilar: 'Dame Pilar of the Territory',
        sebastian: 'Prof. Séamus Optimum',
        aldric: 'Countess Aldric FitzMetrics',
        cordelia: 'Lady Cordelia Benchmark',
        kpi: 'Lord KPI of Pembroke',
        gaia: 'Gaia-7 Sterling',
        moss: 'Comrade Moss FastForward',
        helix: 'Dr. Helix Permaculture',
        bluetooth: 'Duke Bluetooth of Kildare',
        slack: 'Guildmaster Slack O\'Brien',
        void: 'The Void Sister (Patricia M.)',
        marco: 'Marco Off-the-Books',
        gideon: 'Gideon Unmanager',
        rufus: 'Rufus «Only My Town» Byrne',
        zhang: 'Serf Liberation Zhang',
        abbess: 'Abbess Blockchain',
        terra: 'Terra Nullius Chen'
    };

    const PARTY_TEAM_SUBMODULES = {
        talk: {
            id: 'talk',
            header: 'Talk',
            sections: [
                { id: 'news', label: 'News' },
                { id: 'forum', label: 'Forum' },
                { id: 'social-media', label: 'Social Media' }
            ],
            seedHtml: buildPartyTalkSeedHtml()
        },
        info: {
            id: 'info',
            header: 'Info',
            sections: [
                {
                    id: 'structure',
                    label: 'Structure',
                    children: [
                        { id: 'party-structure', label: 'Party Structure' },
                        { id: 'contact-list', label: 'Contact list' },
                        { id: 'individual-scoreboard', label: 'Individual Scoreboard' },
                        {
                            id: 'structure-teams',
                            label: 'Teams',
                            children: [
                                { id: 'team-ideology', label: 'Ideology' },
                                { id: 'team-it', label: 'IT' },
                                { id: 'team-legal', label: 'Legal' },
                                { id: 'team-administration', label: 'Administration' },
                                { id: 'team-accounting', label: 'Accounting' },
                                { id: 'team-communication', label: 'Communication' },
                                { id: 'team-campaigning', label: 'Campaigning' },
                                { id: 'team-policy', label: 'Policy' },
                                { id: 'team-events', label: 'Events' }
                            ]
                        }
                    ]
                },
                {
                    id: 'money',
                    label: 'Money',
                    children: [
                        { id: 'financial-statement', label: 'Financial Statement' },
                        { id: 'journal', label: 'Journal' },
                        { id: 'income-expenditure', label: 'Income & Expenditure' }
                    ]
                },
                {
                    id: 'goals',
                    label: 'Goals',
                    children: [
                        { id: 'issues', label: 'Issues' },
                        { id: 'objective-tree', label: 'Objective Tree' }
                    ]
                },
                {
                    id: 'wiki',
                    label: 'Wiki',
                    children: [
                        { id: 'wiki-index', label: 'Index' },
                        {
                            id: 'rules',
                            label: 'Rules',
                            children: [
                                { id: 'platform-rank-ladder', label: 'Platform rank ladder' },
                                { id: 'rules-statutes', label: 'Statutes' }
                            ]
                        }
                    ]
                }
            ],
            seedHtml: {
                'rules-statutes': `<h5>Statutes</h5>
                            <p class="template-muted">Satirical party statutes (demo lore). Official access levels: <strong>Wiki → Rules → Platform rank ladder</strong>.</p>
                            <div class="cp-statutes-wrap">
                                <div class="cp-statutes-bg" aria-label="Sample party statutes">
                                    <h6>Title I — Denomination and Purpose</h6>
                                    <p>The Abstract Party of Principled Ambiguity (Ireland) (hereinafter «the Party») is a political organisation whose statutory purpose is to be <strong>in favour of the Good</strong> and <strong>against the Bad</strong>, without prejudice to future Ard-Fheiseanna redefining which is which.</p>
                                    <h6>Title II — Membership</h6>
                                    <p>Any person who agrees with Article I may join. Persons who disagree may also join, provided they register their disagreement in triplicate before a witness who is not related to anyone on the Dáil list. Honorary members need not exist but are encouraged for banquet seating plans.</p>
                                    <h6>Title III — Internal Democracy</h6>
                                    <p>Decisions shall be taken by majority vote, unanimity, acclamation, or whichever method produces the least paperwork. The Organic Directorate may declare a «consensus emergency» and decide by staring contest, subject to county caucus review.</p>
                                    <h6>Title IV — Financing</h6>
                                    <p>Funds shall be transparent, circular, and preferably denominated in units of moral credit (€ accepted at par). All expenditures must serve the Good or, in documented exceptions, the strategically necessary Bad.</p>
                                    <h6>Title V — Dissolution</h6>
                                    <p>Upon dissolution, remaining assets revert to the public good, the Bad (for safe disposal), or the stationery cupboard above O'Sullivan's Centra, in that order of preference.</p>
                                    <p><em>Certified abstractly at the Provisional Ard-Fheis of Indeterminate Location (back room, Athlone), revision 0.Ω.</em></p>
                                </div>
                            </div>`,
                'platform-rank-ladder': buildPlatformRankLadderSeedHtml(),
                'wiki-index': buildPartyWikiIndexHtml(),
                issues: `<h5>Issues</h5>
                            <p class="template-muted">Strategic operations repo — political and technical party issues (GitHub-style panel).</p>
                            <div class="cp-repo-bar">abstract-party-ie / strategic-operations</div>
                            <div class="cp-issues-toolbar">
                                <span>Open: 5</span>
                                <span>Closed: 12</span>
                                <span>Labels: political · technical · coalition · comms</span>
                            </div>
                            <ul class="cp-issues-list">
                                <li class="cp-issue open">
                                    <span class="cp-issue-state">OPEN</span>
                                    <div><strong>#47</strong> County council alliance talks stalled after rivals brought superior sausage rolls <div class="cp-issue-meta">opened by @coalition-desk · political</div></div>
                                    <span class="cp-issue-tag">political</span>
                                </li>
                                <li class="cp-issue open">
                                    <span class="cp-issue-state">OPEN</span>
                                    <div><strong>#46</strong> Drumcondra HQ printer outputs only saffron — manifesto drafts unreadable on cream paper <div class="cp-issue-meta">opened by @ops · technical</div></div>
                                    <span class="cp-issue-tag">technical</span>
                                </li>
                                <li class="cp-issue open">
                                    <span class="cp-issue-state">OPEN</span>
                                    <div><strong>#44</strong> Define whether «against the Bad» includes retroactive moral audits <div class="cp-issue-meta">opened by @ethics-cell · political</div></div>
                                    <span class="cp-issue-tag">political</span>
                                </li>
                                <li class="cp-issue open">
                                    <span class="cp-issue-state">OPEN</span>
                                    <div><strong>#41</strong> CRM sync duplicates 3,000 militants named «John Murphy» <div class="cp-issue-meta">opened by @data · technical</div></div>
                                    <span class="cp-issue-tag">technical</span>
                                </li>
                                <li class="cp-issue closed">
                                    <span class="cp-issue-state">CLOSED</span>
                                    <div><strong>#38</strong> Clarify logo orientation when party is morally upside-down <div class="cp-issue-meta">closed by @brand · comms</div></div>
                                    <span class="cp-issue-tag">comms</span>
                                </li>
                            </ul>`,
                'objective-tree': `<h5>Objective Tree</h5>
                            <p class="template-muted">Branch graph of strategic objectives — electoral, organizational, and reputational (Ireland).</p>
                            <div class="cp-objective-tree">
                                <ul>
                                    <li><span class="cp-tree-node cp-tree-node--root">Party strategic horizon 2026–2029</span>
                                        <ul>
                                            <li><span class="cp-tree-node">Electoral footprint</span>
                                                <ul>
                                                    <li><span class="cp-tree-node">Reach 12,000 registered participants</span></li>
                                                    <li><span class="cp-tree-node">Win 3 county councils (&lt;50k inhabitants each)</span></li>
                                                    <li><span class="cp-tree-node">Fill Dáil list (50% per directorate)</span></li>
                                                </ul>
                                            </li>
                                            <li><span class="cp-tree-node">Organizational capacity</span>
                                                <ul>
                                                    <li><span class="cp-tree-node">Open 15 functional county sedes</span></li>
                                                    <li><span class="cp-tree-node">Train 200 street delegates (Nv 4 pipeline)</span></li>
                                                    <li><span class="cp-tree-node cp-tree-node--done">Launch intranet v2 (completed)</span></li>
                                                </ul>
                                            </li>
                                            <li><span class="cp-tree-node">Coalition &amp; Dáil</span>
                                                <ul>
                                                    <li><span class="cp-tree-node">Secure 5% score in 2 thematic coordinations</span></li>
                                                    <li><span class="cp-tree-node">Sign 1 pre-electoral pact without betraying Article I</span></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>`,
                'party-structure': buildPartyStructureHtml(),
                'candidacy': buildPartyCandidacyHtml(),
                'team-ideology': buildStructureTeamHtml(
                    'Ideology',
                    'Doctrine, narrative, and coalition positioning — same abstract Good/Bad, Irish accents.',
                    [
                        '<strong>Good / Bad alignment</strong> — statutory purpose reviews and manifesto colour debates (saffron vs green)',
                        '<strong>Coalition narrative</strong> — sausage-roll diplomacy, pre-electoral pacts, and press lines',
                        '<strong>Dáil messaging</strong> — thematic coordination talking points',
                        '<strong>Organic briefs</strong> — weekly «provisional Good» declarations (see Drumcondra printer incident)'
                    ]
                ),
                'team-it': buildStructureTeamHtml(
                    'IT',
                    'Intranet, CRM, and the machinery that keeps 3,000 militants named John Murphy distinct.',
                    [
                        '<strong>Intranet v2</strong> — militant registry (Nv 3+) and collective overrides',
                        '<strong>CRM / data</strong> — duplicate-name quarantine, honor-points sync',
                        '<strong>Ops desk</strong> — Drumcondra printer (saffron-only mode), forum ghost users',
                        '<strong>Platform liaison</strong> — IDIN reserve integrations (30% ledger line)'
                    ]
                ),
                'team-legal': buildStructureTeamHtml(
                    'Legal',
                    'Statutes, compliance, and retroactive moral audits.',
                    [
                        '<strong>Party statutes</strong> — Title I–V maintenance and triplicate disagreement registry',
                        '<strong>Electoral compliance</strong> — Dáil candidacy lists, plebiscite wording, county council filings',
                        '<strong>Coalition agreements</strong> — napkin enforceability and sausage-roll clauses',
                        '<strong>Ethics backlog</strong> — issue #44: whether «against the Bad» is retroactive'
                    ]
                ),
                'team-administration': buildStructureTeamHtml(
                    'Administration',
                    'HQ, sedes, treasury handoffs, and folding-chair logistics.',
                    [
                        '<strong>HQ</strong> — Flat Above O\'Sullivan\'s Centra, Dublin 9; coat rack consultative status',
                        '<strong>County sedes</strong> — Galway, Cork, Donegal demo nuclei; chair custody protocols',
                        '<strong>Treasury liaison</strong> — public ledger custodian; virtue-mug proceeds from the Ploughing',
                        '<strong>Dáil logistics</strong> — delegate travel, banquet seating, emergency biscuits'
                    ]
                ),
                'team-accounting': buildStructureTeamHtml(
                    'Accounting',
                    'Public ledger, journal entries, and the mystery saffron toner line item.',
                    [
                        '<strong>Financial Statement</strong> — Q2 balance sheet and net position (€27,297.70 demo)',
                        '<strong>Journal</strong> — general journal; opening balance through donation J-2408',
                        '<strong>Income &amp; Expenditure</strong> — militant fees, collective dues, virtue mugs',
                        '<strong>Audits</strong> — reconcile cash to ledger hash <code>0xGOOD-BAD-27a3f9</code>'
                    ]
                ),
                'team-communication': buildStructureTeamHtml(
                    'Communication',
                    'Press, social channels, and manifesto colours the printer can actually render.',
                    [
                        '<strong>Press &amp; narrative</strong> — Orla Lynch; saffron «provisional Good» statements',
                        '<strong>Social media</strong> — WhatsApp militants, Telegram alerts, IG/TikTok/X/YouTube (.ie handles)',
                        '<strong>Forum &amp; news wire</strong> — party board threads and official satirical briefings',
                        '<strong>Brand</strong> — Pantone Hopeful Green; logo orientation when morally upside-down'
                    ]
                ),
                'team-campaigning': buildStructureTeamHtml(
                    'Campaigning',
                    'Municipal lists, leaflet runs, and folding-chair electoral logistics.',
                    [
                        '<strong>Municipal candidacies</strong> — district open lists; plebiscites pending',
                        '<strong>Dáil lists</strong> — 50% Organic / 50% General directorate split',
                        '<strong>Field ops</strong> — door knocking, chair custody, staring-contest tiebreaks',
                        '<strong>Materials</strong> — recall run for «against the Good, for the Bad» typo leaflets'
                    ]
                ),
                'team-policy': buildStructureTeamHtml(
                    'Policy',
                    'Issues repo, objective tree, and statutes that refuse to define key terms.',
                    [
                        '<strong>Strategic issues</strong> — political &amp; technical backlog (#47 sausage rolls, #46 printer)',
                        '<strong>Objective tree</strong> — 12k participants, 3 county councils, Dáil list fill',
                        '<strong>Rules corpus</strong> — Good/Bad purpose, triplicate disagreement registry',
                        '<strong>Wiki liaison</strong> — coalition matrix, crisis manual, glossary of refusal'
                    ]
                ),
                'team-events': buildStructureTeamHtml(
                    'Events',
                    'Coalition summits, Ard-Fheiseanna, and catering that wins or loses alliances.',
                    [
                        '<strong>Coalition summits</strong> — sausage-roll deadlock protocol; napkin agreements',
                        '<strong>Assemblies</strong> — consensus emergencies; staring contests',
                        '<strong>County rallies</strong> — folding-chair deployments; virtue-mug merch at the Ploughing',
                        '<strong>Dáil social</strong> — banquet seating; emergency Tayto reserves'
                    ]
                ),
                'financial-statement': `<h5>Financial Statement</h5>
                            <p class="template-muted">Balance sheet — Q2 2026, public summary (Ireland).</p>
                            <div class="cp-fin-summary">
                                <div class="cp-fin-summary-card"><span>Total assets</span><strong>€31,840.00</strong></div>
                                <div class="cp-fin-summary-card"><span>Total liabilities</span><strong>€4,542.30</strong></div>
                                <div class="cp-fin-summary-card"><span>Net position</span><strong>€27,297.70</strong></div>
                                <div class="cp-fin-summary-card"><span>Cash &amp; equivalents</span><strong>€22,120.00</strong></div>
                            </div>
                            <p class="cp-ledger-foot">Auditor note (demo): figures reconcile with journal close · Last closed 2026-05-22.</p>`,
                'income-expenditure': `<h5>Income &amp; Expenditure</h5>
                            <p class="template-muted">Income &amp; expenditure account — Q2 2026 to date (Ireland).</p>
                            <p class="cp-ledger-foot">Surplus (demo): <strong>€8,468.70</strong> · Includes virtue-mug proceeds from the Ploughing Championship.</p>`,
                journal: `<h5>Journal</h5>
                            <p class="template-muted">General journal — chronological movements, public ledger.</p>
                            <table class="cp-ledger-table">
                                <thead><tr><th>Date</th><th>Entry</th><th>Account</th><th>Debit</th><th>Credit</th><th>Memo</th></tr></thead>
                                <tbody>
                                    <tr><td>2026-05-05</td><td>J-2403</td><td>510 HQ rent</td><td class="cp-ledger-in">—</td><td class="cp-ledger-out">890.00</td><td>Flat Above O'Sullivan's Centra</td></tr>
                                    <tr><td>2026-05-08</td><td>J-2404</td><td>520 Printing</td><td class="cp-ledger-in">—</td><td class="cp-ledger-out">214.50</td><td>Saffron-only manifesto incident</td></tr>
                                    <tr><td>2026-05-18</td><td>J-2407</td><td>540 Events</td><td class="cp-ledger-in">—</td><td class="cp-ledger-out">467.80</td><td>Coalition summit catering (Athlone)</td></tr>
                                </tbody>
                            </table>
                            <p class="cp-ledger-foot">Ledger hash (demo): <code>0xGOOD-BAD-27a3f9</code> · Disputes via Admin → Treasury.</p>`
            }
        },
        admin: {
            id: 'admin',
            defaultHtml: `<h4 class="template-section-title">Admin</h4>
                        <p class="template-muted">Party administration — mirrored by every collective in the list unless that collective saves its own override. Irish militants run the same abstract machinery.</p>
                        <div class="party-admin-sections">
                            <section class="party-admin-block">
                                <h5>Membership &amp; roles</h5>
                                <p>Militant registry (Nv 3), representative plebiscites (Nv 4), delegate discipline at the Dáil (Nv 5).</p>
                                <ul>
                                    <li>Dues collection and fiduciary commitment tracking</li>
                                    <li>Intranet access rules per voted collective</li>
                                </ul>
                            </section>
                            <section class="party-admin-block">
                                <h5>Votes &amp; scores</h5>
                                <p>Social vote totals per collective, party affiliation share, congress weighting.</p>
                            </section>
                            <section class="party-admin-block">
                                <h5>Candidacies 21</h5>
                                <p>Dáil and municipal seat batches — 50% Organic Directorate / 50% General Directorate per list. Coordination council vetoes (demo).</p>
                            </section>
                            <section class="party-admin-block">
                                <h5>Moderation &amp; compliance</h5>
                                <p>IDIN-reserved moderation for illegal conduct or terms breaches (IDIN wiki).</p>
                            </section>
                        </div>`
        }
    };

    const WIKI_ARTICLES_IE = {
        'hq-stationery-shop': {
            title: "HQ — The Flat Above O'Sullivan's Centra",
            html: `<p>Floor plan includes one window, three chairs, and a fire exit that opens onto ideology.</p>
                        <p>The sacred coat rack holds exactly twelve folding chairs and one umbrella of undecided allegiance. Milk runs to O'Sullivan's are expensed under account 510.</p>`
        }
    };

    if (window.PANDORA_IE) {
        Object.assign(window.PANDORA_IE, {
            WIKI_ARTICLES: WIKI_ARTICLES_IE,
            demoPersonNames,
            buildTalkNewsFeedHtml,
            buildTalkForumBoardHtml,
            TALK_NEWS_ARTICLES,
            TALK_FORUM_THREADS,
            PLATFORM_RANK_LADDER,
            buildPlatformRankLadderSeedHtml,
            buildPartyWikiIndexHtml,
            buildPartyTalkSeedHtml,
            buildPartyStructureHtml,
            buildPartyCandidacyHtml,
            PARTY_TEAM_SUBMODULES
        });
    }
})();
