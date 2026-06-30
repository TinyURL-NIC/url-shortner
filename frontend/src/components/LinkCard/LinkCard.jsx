import { ExternalLink, Copy, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import QR from "../../assets/qr-code.webp";

// `link` shape:
// { id, title, shortUrl, originalUrl, active, clicks, createdAt }

const LinkCard = ({ link }) => {
  const { id, title, shortUrl, originalUrl, active, clicks, createdAt } = link;
  const navigate = useNavigate();

  // Stop bubbling so these don't trigger the card's onClick
  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`https://${shortUrl}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    // TODO: connect to DELETE /api/links/:id
    console.log("Delete link", id);
  };

  return (
    <div
      onClick={() => navigate(`/dashboard/link/${id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/dashboard/link/${id}`)}
      className="
        group bg-white rounded-2xl p-5
        border border-gray-100 shadow-sm
        hover:shadow-md hover:-translate-y-0.5
        cursor-pointer
        transition-all duration-200
      "
    >
      <div className="flex flex-col sm:flex-row gap-5">

        {/* ── QR code ───────────────────────────────────────── */}
        <div className="shrink-0">
          <img
            src={QR}
            alt={`QR code for ${title}`}
            className="h-24 w-24 rounded-xl border border-gray-100 object-cover"
          />
        </div>

        {/* ── Main content ─────────────────────────────────── */}
        <div className="flex-1 min-w-0">

          {/* Title + status badge */}
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-[#08244D]">{title}</h3>
            <span
              className={`
                inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold
                ${active ? "bg-orange-50 text-orange-600" : "bg-gray-100 text-gray-500"}
              `}
            >
              {active ? "Active" : "Expired"}
            </span>
          </div>

          {/* Short URL — stop propagation so the <a> navigates externally, not to analytics */}
          <a
            href={`https://${shortUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
              inline-flex items-center gap-1 mt-2
              text-[#F97316] font-medium text-sm
              hover:underline
            "
          >
            {shortUrl}
            <ExternalLink size={12} className="opacity-60" />
          </a>

          {/* Original URL */}
          <p className="mt-1 text-xs text-gray-400 truncate">{originalUrl}</p>

          {/* Stats row */}
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <div>
              <p className="text-xs text-gray-400 font-medium">Clicks</p>
              <p className="text-sm font-bold text-[#08244D]">{clicks.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Created</p>
              <p className="text-sm font-bold text-[#08244D]">{createdAt}</p>
            </div>
          </div>
        </div>

        {/* ── Action buttons ────────────────────────────────── */}
        <div className="flex sm:flex-col items-center gap-1 shrink-0">
          <button
            onClick={handleCopy}
            title="Copy short URL"
            className="
              p-2 rounded-lg
              text-gray-400 hover:text-[#08244D] hover:bg-gray-50
              transition-colors
            "
          >
            <Copy size={15} />
          </button>

          <button
            onClick={handleDelete}
            title="Delete link"
            className="
              p-2 rounded-lg
              text-gray-400 hover:text-red-500 hover:bg-red-50
              transition-colors
            "
          >
            <Trash2 size={15} />
          </button>
        </div>

      </div>
    </div>
  );
};

export default LinkCard;