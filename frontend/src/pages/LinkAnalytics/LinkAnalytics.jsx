// pages/LinkAnalytics.jsx
import { useNavigate, /*useParams*/ } from "react-router-dom";
import {
  ArrowLeft,
  Copy,
  ExternalLink,
  Download,
  CheckCircle2,
  XCircle,
  Calendar,
  Clock,
  Hash,
  Link as LinkIcon,
  MousePointerClick,
  Activity,
  TrendingUp,
  BarChart3,
} from "lucide-react";

import SiteHeader from "@/components/SiteHeader/SiteHeader";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import AnalyticsCard from "@/components/AnalyticsCard/AnalyticsCard";
import AnalyticsChart from "@/components/AnalyticsChart/AnalyticsChart";
import QR from "@/assets/qr-code.webp";

// ── Mock user — replace with auth context ────────────────
const MOCK_USER = {
  name: "Aniket Roy",
  email: "aniket@example.com",
  photoURL: null,
};

// ── Mock analytics — replace with GET /api/links/:id ─────
//
// Shape matches what the backend should return.
// Swap the const for a useEffect + useState pair when wiring to an API.
const MOCK_ANALYTICS = {
  id: 1,
  title: "YouTube Campaign",
  shortUrl: "shrtnr.io/yt-sale",
  originalUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
  active: true,
  createdAt: "Jun 8, 2026",
  expiresAt: "Dec 8, 2026",
  clicks: {
    total: 1248,
    today: 36,
    week: 201,
    month: 712,
  },
  graph: [
    { day: "Mon", clicks: 24 },
    { day: "Tue", clicks: 31 },
    { day: "Wed", clicks: 15 },
    { day: "Thu", clicks: 48 },
    { day: "Fri", clicks: 65 },
    { day: "Sat", clicks: 39 },
    { day: "Sun", clicks: 36 },
  ],
};

// ─────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────
function LinkAnalytics() {
  const navigate = useNavigate();
//   const { id } = useParams(); // use `id` to fetch from API later

  // TODO: replace with:
  //   const [data, setData] = useState(null);
  //   useEffect(() => { fetch(`/api/links/${id}`).then(...) }, [id]);
  const data = MOCK_ANALYTICS;

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://${data.shortUrl}`);
  };

  const handleDownloadQR = () => {
    // TODO: generate and download QR as PNG
    console.log("Download QR for", data.shortUrl);
  };

  return (
    <>
      <SiteHeader user={MOCK_USER} isDashboard={true} />

      <div className="min-h-screen bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
          {/* ── Back navigation ───────────────────────── */}
          <button
            onClick={() => navigate("/dashboard")}
            className="
              inline-flex items-center gap-2
              text-sm font-medium text-gray-400
              hover:text-[#08244D]
              transition-colors mb-8
            "
          >
            <ArrowLeft size={15} />
            Back to Dashboard
          </button>

          {/* ── Page header ────────────────────────────── */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#08244D]">
              {data.title}
            </h1>
            <p className="mt-1.5 text-sm text-gray-400">
              Link analytics and performance overview
            </p>
          </div>

          {/* ── Main two-column layout ───────────────────────── */}
          {/*   Desktop: [340px info] [1fr analytics]            */}
          {/*   Mobile:  stacked single column                   */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 items-start">
            {/* ═══════════════════════════════════════════
                LEFT — Information card
            ═══════════════════════════════════════════ */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {/* QR code */}
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-2xl border border-gray-100 bg-gray-50">
                  <img
                    src={QR}
                    alt={`QR code for ${data.title}`}
                    className="w-44 h-44 rounded-xl object-cover"
                  />
                </div>
              </div>

              {/* Title + status */}
              <div className="flex items-center gap-2 mb-5">
                <h2 className="text-base font-bold text-[#08244D] truncate">
                  {data.title}
                </h2>
                <span
                  className={`
                    shrink-0 inline-flex items-center gap-1
                    px-2.5 py-0.5 rounded-full text-xs font-semibold
                    ${
                      data.active
                        ? "bg-orange-50 text-orange-600"
                        : "bg-gray-100 text-gray-500"
                    }
                  `}
                >
                  {data.active ? (
                    <>
                      <CheckCircle2 size={10} /> Active
                    </>
                  ) : (
                    <>
                      <XCircle size={10} /> Expired
                    </>
                  )}
                </span>
              </div>

              {/* Info rows */}
              <div className="space-y-4">
                <InfoRow icon={LinkIcon} label="Short URL">
                  <a
                    href={`https://${data.shortUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F97316] font-medium text-sm hover:underline truncate block"
                  >
                    {data.shortUrl}
                  </a>
                </InfoRow>

                <InfoRow icon={ExternalLink} label="Original URL">
                  <p className="text-gray-600 text-sm truncate">
                    {data.originalUrl}
                  </p>
                </InfoRow>

                <InfoRow icon={Calendar} label="Created">
                  <p className="text-gray-600 text-sm">{data.createdAt}</p>
                </InfoRow>

                <InfoRow icon={Clock} label="Expires">
                  <p className="text-gray-600 text-sm">{data.expiresAt}</p>
                </InfoRow>

                <InfoRow icon={Hash} label="Link ID">
                  <p className="text-gray-400 text-sm font-mono">#{data.id}</p>
                </InfoRow>
              </div>

              {/* Action buttons */}
              <div className="mt-7 space-y-2.5">
                <button
                  onClick={handleCopy}
                  className="
                    w-full flex items-center justify-center gap-2
                    bg-[#08244D] text-white
                    px-4 py-2.5 rounded-xl text-sm font-medium
                    hover:bg-[#0b2e61]
                    transition-colors
                  "
                >
                  <Copy size={14} />
                  Copy Short URL
                </button>

                <a
                  href={data.originalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full flex items-center justify-center gap-2
                    border border-gray-200 text-gray-600
                    px-4 py-2.5 rounded-xl text-sm font-medium
                    hover:bg-gray-50
                    transition-colors
                  "
                >
                  <ExternalLink size={14} />
                  Open Original URL
                </a>

                <button
                  onClick={handleDownloadQR}
                  className="
                    w-full flex items-center justify-center gap-2
                    border border-gray-200 text-gray-600
                    px-4 py-2.5 rounded-xl text-sm font-medium
                    hover:bg-gray-50
                    transition-colors
                  "
                >
                  <Download size={14} />
                  Download QR Code
                </button>
              </div>
            </div>

            {/* ═══════════════════════════════════════════
                RIGHT — Analytics panel
            ═══════════════════════════════════════════ */}
            <div className="flex flex-col gap-5">
              {/* Stat cards — 2×2 grid */}
              <div className="grid grid-cols-2 gap-4">
                <AnalyticsCard
                  label="Total Clicks"
                  value={data.clicks.total.toLocaleString()}
                  icon={MousePointerClick}
                />
                <AnalyticsCard
                  label="Today"
                  value={data.clicks.today.toLocaleString()}
                  icon={Activity}
                />
                <AnalyticsCard
                  label="Last 7 Days"
                  value={data.clicks.week.toLocaleString()}
                  icon={TrendingUp}
                />
                <AnalyticsCard
                  label="Last 30 Days"
                  value={data.clicks.month.toLocaleString()}
                  icon={BarChart3}
                />
              </div>

              {/* Bar chart */}
              <AnalyticsChart data={data.graph} />
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-start gap-3">
      {/* Icon pill */}
      <div className="mt-0.5 h-7 w-7 shrink-0 rounded-lg bg-orange-50 flex items-center justify-center">
        <Icon size={13} className="text-[#F97316]" />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide mb-0.5">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

export default LinkAnalytics;
