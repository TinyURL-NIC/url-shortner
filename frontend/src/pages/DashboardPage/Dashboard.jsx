//Dashboard.jsx
import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader/SiteHeader";
import LinkCard from "@/components/LinkCard/LinkCard";
import CreateLinkModal from "@/components/CreateLinkModal/CreateLinkModal";
import SiteFooter from "@/components/SiteFooter/SiteFooter";

// ── Mock data ────────────
// Replace with real API data / context values in production.
const MOCK_USER = {
  name: "Aniket Roy",
  email: "aniket@example.com",
  photoURL: null,
};

const MOCK_LINKS = [
  {
    id: 1,
    title: "YouTube Campaign",
    shortUrl: "shrtnr.io/yt-sale",
    originalUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
    active: true,
    clicks: 1248,
    createdAt: "Jun 8, 2026",
  },
  {
    id: 2,
    title: "Product Launch",
    shortUrl: "shrtnr.io/launch",
    originalUrl:
      "https://myproduct.com/launch-2026?utm_source=shrtnr&utm_medium=social",
    active: true,
    clicks: 3891,
    createdAt: "Jun 2, 2026",
  },
  {
    id: 3,
    title: "Newsletter — June",
    shortUrl: "shrtnr.io/nl-june",
    originalUrl: "https://mailchimp.com/campaigns/june-newsletter-2026",
    active: true,
    clicks: 547,
    createdAt: "Jun 1, 2026",
  },
  {
    id: 4,
    title: "Black Friday Deal",
    shortUrl: "shrtnr.io/bfd-23",
    originalUrl: "https://mystore.com/black-friday?year=2023",
    active: false,
    clicks: 2746,
    createdAt: "Nov 20, 2023",
  },
  {
    id: 5,
    title: "Spring Sale",
    shortUrl: "shrtnr.io/spring-24",
    originalUrl: "https://mystore.com/spring-sale-2024",
    active: false,
    clicks: 892,
    createdAt: "Mar 15, 2024",
  },
];

function Dashboard() {
  const [activeTab, setActiveTab] = useState("active");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const activeLinks = MOCK_LINKS.filter((l) => l.active);
  const expiredLinks = MOCK_LINKS.filter((l) => !l.active);
  const totalClicks = MOCK_LINKS.reduce((sum, l) => sum + l.clicks, 0);

  const displayedLinks = activeTab === "active" ? activeLinks : expiredLinks;

  return (
    <>
      <SiteHeader
        user={MOCK_USER}
        isDashboard={true}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMenuOpen(false)}
      />

      <div className="min-h-screen bg-[#F8F5F0]">
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">
          {/* ── Page header ── */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#08244D]">
                Dashboard
              </h1>
              <p className="mt-2 text-gray-500">
                Manage and track all your shortened links from one place.
              </p>
            </div>

            <Button
              onClick={()=>setOpenModal(true)}
              className="
                self-start flex items-center gap-1.5
                bg-[#F97316] hover:bg-[#e0641a]
                text-white px-5 h-11 rounded-xl font-medium shadow-sm
                transition-colors
              "
            >
              <Plus size={16} />
              Create Link
            </Button>
          </div>

          {/* ── Stat cards ─── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <StatCard label="Total Links" value={MOCK_LINKS.length} />
            <StatCard label="Active Links" value={activeLinks.length} />
            <StatCard label="Expired Links" value={expiredLinks.length} />
            <StatCard
              label="Total Clicks"
              value={totalClicks.toLocaleString()}
            />
          </div>

          {/* ── Tabs ───────── */}
          <div className="mt-12 flex items-center gap-1 w-fit bg-white border border-gray-100 rounded-xl p-1 shadow-sm">
            <TabButton
              isActive={activeTab === "active"}
              onClick={() => setActiveTab("active")}
              count={activeLinks.length}
            >
              Active Links
            </TabButton>
            <TabButton
              isActive={activeTab === "expired"}
              onClick={() => setActiveTab("expired")}
              count={expiredLinks.length}
            >
              Expired Links
            </TabButton>
          </div>

          {/* ── Link list / empty state ─────── */}
          <div className="mt-5 flex flex-col gap-4">
            {displayedLinks.length > 0 ? (
              displayedLinks.map((link) => (
                <LinkCard key={link.id} link={link} />
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      
      <CreateLinkModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={(data) => {
          console.log(data);

          // Later:
          // axios.post("/api/links", data)
        }}
      />
      </div>
      
      <SiteFooter />
    </>
  );
}

// ── Sub-components ────────────

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-2xl px-5 py-5 shadow-sm border border-gray-100">
      <p className="text-sm text-gray-400 font-medium">{label}</p>
      <p className="mt-2 text-3xl font-bold text-[#08244D]">{value}</p>
    </div>
  );
}

function TabButton({ isActive, onClick, children, count }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
        ${
          isActive
            ? "bg-[#08244D] text-white shadow-sm"
            : "text-gray-500 hover:text-[#08244D]"
        }
      `}
    >
      {children}
      <span
        className={`
          text-xs px-1.5 py-0.5 rounded-md font-semibold
          ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"}
        `}
      >
        {count}
      </span>
    </button>
  );
}

function EmptyState() {
  return (
    <div
      className="
        mt-4 flex flex-col items-center justify-center
        bg-white rounded-2xl border border-gray-100 shadow-sm
        py-16 px-8 text-center
      "
    >
      <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-4">
        {/* Link icon */}
        <svg
          className="w-7 h-7 text-[#F97316]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656
               l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0
               00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-[#08244D]">
        No links here yet
      </h3>
      <p className="mt-1 text-sm text-gray-400 max-w-xs">
        Create your first shortened link and start tracking clicks in real time.
      </p>
      <Button
        className="
          mt-6 flex items-center gap-1.5
          bg-[#F97316] hover:bg-[#e0641a]
          text-white px-5 h-10 rounded-xl text-sm font-medium
          transition-colors
        "
      >
        <Plus size={14} />
        Create Link
      </Button>
      
    </div>
  );
}

export default Dashboard;
