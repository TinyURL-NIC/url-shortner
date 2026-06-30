/**
 * A single analytics stat card.
 *
 * Props:
 *   label  — string  — e.g. "Total Clicks"
 *   value  — string | number  — e.g. "1,248"
 *   icon   — Lucide icon component
 */
const AnalyticsCard = ({ label, value, icon: Icon }) => {
  return (
    <div
      className="
        bg-white rounded-2xl px-5 py-5
        border border-gray-100 shadow-sm
        hover:shadow-md hover:-translate-y-0.5
        transition-all duration-200
      "
    >
      <div className="flex items-start justify-between gap-3">
        {/* Text */}
        <div className="min-w-0">
          <p className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            {label}
          </p>
          <p className="mt-2 text-3xl font-bold text-[#08244D] tabular-nums">
            {value}
          </p>
        </div>

        {/* Icon bubble */}
        {Icon && (
          <div className="shrink-0 h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center">
            <Icon size={18} className="text-[#F97316]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsCard;