const bootLines = [
    '[ OK ] Initializing security operations portfolio...',
    '[ OK ] Loading FortiGate / SSL VPN case files...',
    '[ OK ] Mounting Linux recovery notes...',
    '[ OK ] Indexing GitBook and Paycoin contents...',
    '[ OK ] Verifying resume profile: HONG SEONGWON',
    '',
    '  >> Welcome, HONG SEONGWON',
    '  >> Portfolio Console v2026 ready',
    '',
];
const bootEl = document.getElementById('bootText');
let bi = 0,
    bj = 0,
    buf = '';
function bootTick() {
    if (bi >= bootLines.length) {
        setTimeout(() => document.getElementById('boot').classList.add('done'), 450);
        return;
    }
    const line = bootLines[bi];
    if (bj < line.length) {
        buf += line[bj++];
        bootEl.textContent = buf + '▌';
        setTimeout(bootTick, line.startsWith('[') ? 8 : 18);
    } else {
        buf += '\n';
        bootEl.textContent = buf;
        bi++;
        bj = 0;
        setTimeout(bootTick, 75);
    }
}
bootTick();
function pad(n) {
    return String(n).padStart(2, '0');
}
function nowKst() {
    const d = new Date();
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())} KST`;
}
setInterval(() => {
    document.getElementById('clock').textContent = nowKst();
}, 1000);
document.getElementById('clock').textContent = nowKst();
const logs = [
    'fw01: policy check complete — SSL VPN group access matrix indexed',
    'linux: xfs_repair note mounted — PowerEdge R450 recovery case verified',
    'gitbook: card.payprotocol.io / help.payprotocol.io ownership verified',
    'youtube: Paycoin channel contents indexed — shorts & 16:9 videos',
    'ai-lab: AI asset management dashboard deployed — csv import and risk scoring enabled',
    'runbook: FortiGate VPN account guide loaded — MFA required',
    'drm: document security workflow indexed — export approval process found',
    'lb: safe.payprotocol.io VIP + SSL offloading case available',
    'isms: endpoint and workplace security guide mapped',
];
const liveLogs = document.getElementById('liveLogs');
let li = 0;
function pushLog() {
    const row = document.createElement('div');
    row.className = 'log-row text-fg';
    row.innerHTML = `<span class="text-dim">[${nowKst().slice(11, 19)}]</span> <span class="${li % 3 === 0 ? 'text-accent' : 'text-mid'}">${logs[li % logs.length]}</span>`;
    liveLogs.appendChild(row);
    while (liveLogs.children.length > 6) liveLogs.removeChild(liveLogs.firstChild);
    li++;
}
for (let i = 0; i < 4; i++) pushLog();
setInterval(pushLog, 1700);
const projects = [
    {
        id: 'CASE-012',
        title: 'AI 기반 IT 자산관리 자동 분류 시스템',
        cat: ['ops', 'security', 'content'],
        period: '2026',
        severity: 'LOW',
        tools: ['HTML', 'CSS', 'JavaScript', 'CSV Import', 'AI Rules', 'Asset Dashboard'],
        summary:
            'IT 자산 데이터를 CSV로 업로드하면 자산 유형, 사용 상태, 점검 필요 여부, 리스크 등급을 자동 분류하고 대시보드 형태로 시각화하는 AI 기반 IT 자산관리 웹 솔루션을 제작했습니다.',
        impact: 'IT 자산 현행화, 불용자산 식별, 보안 점검 우선순위 산정, 자산관리 업무 자동화 가능성을 포트폴리오 프로젝트로 구현',
    },
    {
        id: 'CASE-001',
        title: 'FortiGate 기반 L4 분리 및 무중단 배포',
        cat: ['network', 'security'],
        period: '2025.05.28',
        severity: 'HIGH',
        tools: ['FortiGate', 'Virtual Server', 'SSL Offloading', 'Rolling Deploy'],
        summary:
            'safe.payprotocol.io 서비스 중단 없이 백엔드 서버 신규 버전을 배포하기 위해 특정 Real Server를 L4 로드밸런서 구성에서 분리하고, 배포·검증 후 재등록하는 롤링 배포 구조를 수행했습니다.',
        impact: '서비스 중단 없이 백엔드 서버 교체 및 기능 개선, 인증서·방화벽 정책·VIP 구조 유지',
    },
    {
        id: 'CASE-002',
        title: 'PCI BO 사이트 로드밸런싱 및 접근통제 작업',
        cat: ['network', 'security'],
        period: '2024.10.01~10.07',
        severity: 'HIGH',
        tools: ['FortiGate', 'Real Server', 'Health Check', 'VIP', 'SSL Certificate'],
        summary:
            'SSL 인증서 Import, Real Server 구성, HTTP Health Check, HTTPS Virtual Server 생성, 방화벽 정책 생성 및 로그 확인을 통해 PCI BO 사이트 로드밸런싱을 구현했습니다.',
        impact: '로드밸런싱 구현 및 서버 로그 확인, 허가받은 사용자만 접근 가능한 보안 구조 검토',
    },
    {
        id: 'CASE-003',
        title: 'SSL-VPN 서버 접속 장애 분석 및 정책 수정',
        cat: ['network', 'security'],
        period: '2026',
        severity: 'MEDIUM',
        tools: ['FortiGate', 'SSL VPN', 'SSH', 'Routing'],
        summary:
            'SSL-VPN 연결 후 10.10.30.30 서버 SSH 접속이 timeout 되는 장애를 서버 게이트웨이, 방화벽, FortiGate 정책 순서로 분석했습니다. Outgoing Interface 설정 오류를 확인해 실제 서버 대역 기준 정책으로 수정했습니다.',
        impact: 'VPN 사용자 내부 서버 접근 장애 원인 식별 및 FortiGate 정책 기준 정비',
    },
    {
        id: 'CASE-004',
        title: 'PowerEdge R450 / Rocky Linux EPP 서버 긴급 복구',
        cat: ['linux', 'ops'],
        period: '2025.11.03',
        severity: 'CRITICAL',
        tools: ['Rocky Linux 8.6', 'XFS', 'xfs_repair', 'Emergency Mode'],
        summary:
            'XFS 파일시스템 손상으로 Emergency Mode에 진입한 내부망 관리 서버에 콘솔 접속 후 /home 볼륨 상태를 확인하고 xfs_repair를 수행했습니다.',
        impact: 'Emergency Mode 해제, /home 마운트 복구, 네트워크 인터페이스 확인까지 복구 절차 수행',
    },
    {
        id: 'CASE-005',
        title: 'Linux OS 보안설정 및 서버 인수인계 가이드',
        cat: ['linux', 'security'],
        period: '2024.09.21',
        severity: 'MEDIUM',
        tools: ['Linux', 'SSH', 'SELinux', 'sudoers', 'bashrc', 'crond'],
        summary:
            '로케일·타임존, KVM 디스크 마운트, yum 설정, 불필요 계정 삭제, 서비스 계정 권한, SSH 취약 알고리즘 비활성화, PermitRootLogin no, 세션 타임아웃 등 OS 보안 설정 기준을 문서화했습니다.',
        impact: '서버 운영 일관성 확보 및 신규 담당자 인수인계 가능 수준의 기준 정리',
    },
    {
        id: 'CASE-006',
        title: 'FortiGate UTM 정책 생성 및 운영 표준화',
        cat: ['network', 'security'],
        period: '2025',
        severity: 'MEDIUM',
        tools: ['FortiGate', 'IPv4 Policy', 'TCP Service', 'Policy Order'],
        summary:
            '운영서버 접근을 위한 출발지·도착지·서비스 포트·스케줄·정책 순서 기준을 정리해 방화벽 정책 생성 절차를 표준화했습니다.',
        impact: '정책 생성 시 누락·순서 오류를 줄이는 운영 가이드 확보',
    },
    {
        id: 'CASE-007',
        title: '임직원 보안 가이드북 및 SESP 보안 교육자료 제작',
        cat: ['security'],
        period: '2024.10',
        severity: 'MEDIUM',
        tools: ['Canva', 'ISMS', 'SESP', 'DRM', 'DLP'],
        summary:
            'PC 보안, 업무환경 보안, DRM, 매체 승인, 파일 반출, 출력 워터마크, 외부 네트워크 접근 안내 등 임직원 대상 보안 인식 제고 자료를 제작했습니다.',
        impact: '신규 입사자 및 임직원의 보안 솔루션 이해도와 예외처리 신청 프로세스 인지 강화',
    },
    {
        id: 'CASE-008',
        title: '그룹웨어 회의실 예약 시스템 개선 기획',
        cat: ['ops'],
        period: '2025',
        severity: 'LOW',
        tools: ['Groupware', 'Process Design', 'Resource Management'],
        summary:
            '후너스빌딩 실제 회의실 구성에 맞춰 회의실 정보를 정비하고, 다날핀테크·페이프로토콜·제프 3개 법인 간 통합 예약 DB 연동을 기획했습니다.',
        impact: '예약 충돌 방지 및 공유 자원 운영 효율 개선 방향 도출',
    },
    {
        id: 'CASE-009',
        title: '근태관리대장 Excel 자동화 운영 매뉴얼',
        cat: ['ops'],
        period: '2025',
        severity: 'LOW',
        tools: ['Excel', 'VBA', 'S1ESP', 'Attendance Data'],
        summary:
            '근태 Raw 데이터 자동 불러오기, DB 시트 누적, 출결부 자동 업데이트, 개인별/전체 근태 분석 기능을 갖춘 근태관리대장 사용법을 문서화했습니다.',
        impact: '월별 근태 데이터 처리와 분석 업무의 반복 작업 감소',
    },
    {
        id: 'CASE-010',
        title: 'PayProtocol GitBook Help Center 웹페이지 구축',
        cat: ['ops', 'content'],
        period: '2025.02~05',
        severity: 'LOW',
        tools: ['GitBook', 'Figma', 'Canva', 'Notion'],
        summary:
            'card.payprotocol.io 및 help.payprotocol.io GitBook 웹페이지 개발과 콘텐츠 구성을 100% 담당했습니다. 카드 서비스 소개, 사용법, FAQ, 사용자 안내 문서를 서비스 흐름에 맞춰 정리했습니다.',
        impact: '사용자 가이드 접근성 향상 및 서비스 안내 체계 구축',
    },
    {
        id: 'CASE-011',
        title: 'Paycoin YouTube 채널 운영 및 영상 콘텐츠 제작',
        cat: ['content'],
        period: '2025',
        severity: 'LOW',
        tools: ['YouTube', 'Canva', 'Video Editing', 'Shorts'],
        summary:
            'Paycoin 유튜브 채널을 직접 관리하며 쇼츠 영상과 16:9 형식의 안내·홍보 영상을 포함해 약 24편의 영상 제작 및 편집에 참여했습니다.',
        impact: '복잡한 서비스 기능을 일반 사용자가 이해하기 쉬운 영상 콘텐츠로 전환',
    },
];
const runbooks = {
    '보안·네트워크': [
        'Fortigate VPN계정 생성 가이드',
        'Fortigate UTM 정책 생성 매뉴얼',
        'FortiClient VPN BO 연결 매뉴얼',
        'FortiClient VPN 재택 원격 연결 매뉴얼',
        'OpenConnect VPN 연결 가이드',
        'OpenConnect VPN RDP 연결 가이드',
        'RDP 원격 접속 세팅 - macOS',
        'PCI BO 접속 매뉴얼',
        'Windows Hosts 파일 수정 가이드',
    ],
    '보안솔루션·교육': [
        '임직원 보안 가이드북',
        'PC보안 가이드북 / SESP',
        'Payprotocol DRM 매뉴얼',
        '보안솔루션 설치 매뉴얼',
        '신규 입사자 보안 솔루션 OJT 자료',
    ],
    '서버·인프라': [
        '리눅스 OS 보안설정 가이드',
        '서버 긴급 복구 보고서',
        '10.10.30.30 서버 점검 보고서',
        'FortiGate L4 분리 및 무중단 배포 보고',
        '서버 로드밸런싱 작업 보고',
    ],
    'IT 운영·사용자지원': [
        '신규 PC 세팅 매뉴얼',
        '복합기 사용 매뉴얼 (Apeos C3567)',
        'Google Gmail 데이터 백업 안내',
        'Gmail 백업 파일(mbox) 복원 안내',
        '근태관리대장 사용 매뉴얼 v1.0',
        '그룹웨어 회의실 예약 시스템 개선 기획서',
    ],
    'Paycoin 콘텐츠·GitBook': [
        'PayProtocol Card GitBook 웹페이지 구축',
        'PayProtocol Help Center GitBook 웹페이지 구축',
        'Paycoin YouTube 채널 운영',
        'Paycoin Shorts 영상 제작',
        'Paycoin 16:9 가이드 영상 제작',
        '서비스 FAQ 및 사용자 가이드 콘텐츠 구성',
    ],
};
const skills = [
    ['FortiGate / Firewall', '방화벽 정책, VIP, NAT, SSL VPN, 로드밸런싱, 정책 우선순위 기반 트래픽 분석', 90],
    ['Linux Server', 'Rocky Linux, XFS 복구, SSH 보안설정, 계정·권한·로그 기준 설정', 76],
    ['Endpoint Security', 'EPP/ESP/DRM/S1ESP, 문서보안, 매체승인, 파일반출, 출력 워터마크', 82],
    ['Google Workspace / IAM', '계정 생성·회수·권한변경, 2단계 인증, 메일 백업·복원, 라이선스 정비', 78],
    ['IT Operations', '신규 PC 세팅, OA 장애 대응, 그룹웨어, 회의실/근태/업무시스템 개선', 84],
    [
        'GitBook / Contents',
        'PayProtocol Card·Help Center GitBook 구축, Paycoin YouTube 채널 운영, 쇼츠·16:9 영상 제작',
        86,
    ],
    ['Documentation / AI', 'Notion, GitBook, Canva, ChatGPT, Claude 기반 운영 매뉴얼·웹 포트폴리오 제작', 92],
    [
        'AI Asset Management',
        'CSV 기반 IT 자산 데이터 업로드, 자산 유형 자동 분류, 리스크 등급 산정, 대시보드 시각화 프로토타입 제작',
        88,
    ],
];

const linkMap = {
    'Fortigate VPN계정 생성 가이드': './pdf/Fortigate_VPN계정_생성_가이드.pdf',
    'Fortigate UTM 정책 생성 매뉴얼': './pdf/Fortigate_UTM_정책_생성_메뉴얼_.pdf',
    'FortiClient VPN BO 연결 매뉴얼': './pdf/FortiClient_(VPN)_BO연결_메뉴얼_.pdf',
    'FortiClient VPN 재택 원격 연결 매뉴얼': './pdf/FortiClient_(VPN)_재택_원격_연결_메뉴얼_.pdf',
    'OpenConnect VPN 연결 가이드': './pdf/OpenConnect(VPN)_연결_가이드.pdf',
    'OpenConnect VPN RDP 연결 가이드': './pdf/OpenConnect(VPN)_RDP연결_가이드_.pdf',
    'RDP 원격 접속 세팅 - macOS': './pdf/RDP(원격_접속_세팅)_-_MAC_OS_.pdf',
    'PCI BO 접속 매뉴얼': './pdf/_PCI_BO_접속_메뉴얼_.pdf',
    'Windows Hosts 파일 수정 가이드': './pdf/Windows_Hosts_파일_수정_가이드_(그룹웨어_접속_방법_안내)_.pdf',
    '임직원 보안 가이드북': './pdf/임직원_보안_가이드북_인사총무팀_홍성원.pdf',
    'PC보안 가이드북 / SESP': './pdf/PC보안_가이드북_ESP_인사총무팀_홍성원.pdf',
    'Payprotocol DRM 매뉴얼': './pdf/Payprotocol_DRM_메뉴얼_.pdf',
    '보안솔루션 설치 매뉴얼': './pdf/보안솔루션_설치_메뉴얼.pdf',
    '신규 입사자 보안 솔루션 OJT 자료': './pdf/보안솔루션_설치_메뉴얼.pdf',
    '리눅스 OS 보안설정 가이드': './pdf/리눅스OS_보안설정_가이드(홍성원).pdf',
    '서버 긴급 복구 보고서': './pdf/서버_긴급_복구_보고서_(PowerEdge_R450__Rocky_Linux_8.6epp_서버).pdf',
    '10.10.30.30 서버 점검 보고서': './pdf/10.10.30.30_서버_점검_보고서.pdf',
    'FortiGate L4 분리 및 무중단 배포 보고': './pdf/FortiGate_기반L4분리및무중단배포작업.pdf',
    '서버 로드밸런싱 작업 보고': './pdf/서버로드밸런싱_작업_인사총무팀_홍성원.pdf',
    '신규 PC 세팅 매뉴얼': './pdf/신규_PC_세팅_매뉴얼_.pdf',
    '복합기 사용 매뉴얼 (Apeos C3567)': './pdf/복합기_사용_메뉴얼_(Apeos_C3567)_.pdf',
    'Google Gmail 데이터 백업 안내': './pdf/Google_Gmail(지메일)_데이터_백업_안내.pdf',
    'Gmail 백업 파일(mbox) 복원 안내': './pdf/Gmail_백업_파일(mbox)_복원_안내.pdf',
    '근태관리대장 사용 매뉴얼 v1.0': './pdf/근태관리대장_사용_매뉴얼_v1.0.pdf',
    '그룹웨어 회의실 예약 시스템 개선 기획서': './pdf/그룹웨어_회의실_예약_시스템_개선_기획서_.pdf',
    'PayProtocol Card GitBook 웹페이지 구축': 'https://card.payprotocol.io/',
    'PayProtocol Help Center GitBook 웹페이지 구축': 'https://help.payprotocol.io/',
};
function renderRunbookItem(it, i) {
    const href = linkMap[it];
    const num = `<span class="font-mono text-[10px] text-dim">${String(i + 1).padStart(2, '0')}</span>`;
    if (href) {
        return `<li class="row-hover py-2 px-2 text-sm"><a class="flex gap-3 items-start text-fg/75 hover:text-accent transition" href="${href}" target="_blank" rel="noopener">${num}<span>${it}</span><span class="ml-auto font-mono text-[10px] text-accent/70">OPEN</span></a></li>`;
    }
    return `<li class="row-hover flex gap-3 py-2 px-2 text-sm opacity-70">${num}<span class="text-fg/75">${it}</span><span class="ml-auto font-mono text-[10px] text-dim">NO PDF</span></li>`;
}
function sevClass(s) {
    return s === 'CRITICAL'
        ? 'text-accent3'
        : s === 'HIGH'
          ? 'text-accent2'
          : s === 'MEDIUM'
            ? 'text-accent4'
            : 'text-mid';
}
function renderProjects() {
    const grid = document.getElementById('projectGrid');
    grid.innerHTML = projects
        .map(
            (p, i) =>
                `<article class="project-card reveal corner border border-line bg-surface p-6 hover:bg-surface2 transition-colors ${i < 2 ? 'col-span-12 lg:col-span-6' : 'col-span-12 md:col-span-6 lg:col-span-4'}" data-cat="${p.cat.join(' ')}" data-search="${(p.title + p.summary + p.tools.join(' ') + p.impact).toLowerCase()}"><span class="c1"></span><span class="c2"></span><div class="flex items-center justify-between mb-4"><span class="font-mono text-[10px] text-dim uppercase tracking-widest">// ${p.id}</span><span class="font-mono text-[10px] ${sevClass(p.severity)}">◆ ${p.severity}</span></div><div class="font-mono text-[11px] text-accent mb-2">${p.period}</div><h3 class="font-bold text-fg leading-tight mb-4 ${i < 2 ? 'text-2xl md:text-3xl' : 'text-xl'}">${p.title}</h3><p class="text-mid text-sm leading-7 mb-5">${p.summary}</p><div class="flex flex-wrap gap-1.5 mb-5">${p.tools.map((t) => `<span class="font-mono text-[10px] px-2 py-1 border border-line2 text-mid">${t}</span>`).join('')}</div><div class="border-l-2 border-accent bg-accent/5 p-3 text-sm text-fg/75 leading-6"><span class="font-mono text-accent">→</span> ${p.impact}</div></article>`
        )
        .join('');
    setTimeout(initReveal, 0);
}
function renderRunbooks() {
    const grid = document.getElementById('runbookGrid');
    grid.innerHTML = Object.entries(runbooks)
        .map(
            ([cat, items], idx) =>
                `<details ${idx === 0 ? 'open' : ''} class="reveal col-span-12 md:col-span-6 lg:col-span-3 corner border border-line bg-surface p-6"><span class="c1"></span><span class="c2"></span><summary class="flex items-start justify-between gap-4"><div><div class="font-mono text-[10px] uppercase tracking-widest text-accent">runbook category</div><h3 class="mt-2 text-xl font-bold text-fg">${cat}</h3></div><div class="flex items-center gap-2"><span class="font-mono text-[11px] text-dim">${items.length}</span><span class="chev font-mono text-accent">›</span></div></summary><ul class="mt-5 pt-4 border-t border-line2 space-y-1">${items.map((it, i) => renderRunbookItem(it, i)).join('')}</ul></details>`
        )
        .join('');
}
function renderSkills() {
    document.getElementById('skillList').innerHTML = skills
        .map(
            ([name, note, level]) =>
                `<div class="row-hover border border-line bg-surface p-4 grid md:grid-cols-12 gap-4 items-center"><div class="md:col-span-3 font-bold text-fg">${name}</div><div class="md:col-span-6 text-sm text-mid leading-6">${note}</div><div class="md:col-span-3 flex items-center gap-3"><div class="h-1.5 bg-line2 flex-1 overflow-hidden"><div class="h-full bg-accent" style="width:${level}%"></div></div><span class="font-mono text-xs text-accent w-9 text-right">${level}</span></div></div>`
        )
        .join('');
}
function initReveal() {
    const io = new IntersectionObserver(
        (entries) =>
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('in');
            }),
        { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
}
renderProjects();
renderRunbooks();
renderSkills();
initReveal();
const filters = document.querySelectorAll('.tag-filter');
const search = document.getElementById('projectSearch');
let activeFilter = 'all';
function applyFilter() {
    const q = search.value.toLowerCase();
    document.querySelectorAll('.project-card').forEach((card) => {
        const cats = card.dataset.cat;
        const txt = card.dataset.search;
        const okFilter = activeFilter === 'all' || cats.includes(activeFilter);
        const okSearch = !q || txt.includes(q);
        card.classList.toggle('hide', !(okFilter && okSearch));
    });
}
filters.forEach((btn) =>
    btn.addEventListener('click', () => {
        filters.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilter();
    })
);
search.addEventListener('input', applyFilter);
