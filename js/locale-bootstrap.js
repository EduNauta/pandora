        (function () {
            var KEY = 'pandora-locale';
            function readLocale() {
                try {
                    var s = localStorage.getItem(KEY);
                    return s === 'es' || s === 'ie' ? s : 'es';
                } catch (_) { return 'es'; }
            }
            function paintLocale(loc) {
                document.querySelectorAll('.template-language-btn[data-locale]').forEach(function (btn) {
                    var on = btn.getAttribute('data-locale') === loc;
                    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
                });
                document.documentElement.lang = loc === 'es' ? 'es' : 'en';
                if (document.body) {
                    document.body.classList.remove('pandora-locale-ie', 'pandora-locale-es');
                    document.body.classList.add(loc === 'es' ? 'pandora-locale-es' : 'pandora-locale-ie');
                }
            }
            var early = readLocale();
            var bootShellMarked = false;
            function markBootShell() {
                if (!document.body || bootShellMarked) return;
                bootShellMarked = true;
                document.body.classList.add('pandora-booting');
            }
            window.__pandoraEarlyLocale = early;
            window.__pandoraLocaleQueue = null;
            document.addEventListener('click', function (e) {
                var btn = e.target.closest('.template-language-btn[data-locale]');
                if (!btn) return;
                var loc = btn.getAttribute('data-locale') === 'es' ? 'es' : 'ie';
                paintLocale(loc);
                window.__pandoraEarlyLocale = loc;
                try { localStorage.setItem(KEY, loc); } catch (_) {}
                if (typeof window.__pandoraApplyLocale === 'function') {
                    window.__pandoraApplyLocale(loc);
                } else {
                    window.__pandoraLocaleQueue = loc;
                }
            }, true);
            function bootPaint() {
                if (!document.querySelector('.template-language-btn[data-locale]')) {
                    requestAnimationFrame(bootPaint);
                    return;
                }
                markBootShell();
                paintLocale(early);
            }
            bootPaint();
        })();
