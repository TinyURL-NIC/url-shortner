import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// ── Custom tooltip ───────────────────────────────────────
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-lg px-4 py-3 text-left">
      <p className="text-xs text-gray-400 font-medium mb-1">{label}</p>
      <p className="text-xl font-bold text-[#08244D]">
        {payload[0].value.toLocaleString()}
        <span className="text-sm font-normal text-gray-400 ml-1">clicks</span>
      </p>
    </div>
  );
};

/**
 * AnalyticsChart
 *
 * Props:
 *   data — Array<{ day: string, clicks: number }>
 *
 * The most recent day's bar is rendered in the primary dark colour
 * to draw the eye; all earlier bars use the accent orange.
 */
const AnalyticsChart = ({ data = [] }) => {
  const lastIndex = data.length - 1;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-[#08244D]">
          Clicks — Last 7 Days
        </h3>
        <p className="text-xs text-gray-400 mt-0.5">
          Daily click activity for this link
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={data}
          barSize={32}
          margin={{ top: 4, right: 4, left: -18, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F3F4F6"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12, fontWeight: 500 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 12 }}
            width={36}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "#F8F5F0", radius: 6 }}
          />
          <Bar dataKey="clicks" radius={[6, 6, 0, 0]}>
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={index === lastIndex ? "#08244D" : "#F97316"}
                fillOpacity={index === lastIndex ? 1 : 0.75}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend hint */}
      <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#F97316] opacity-75" />
          Previous days
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-sm bg-[#08244D]" />
          Today
        </span>
      </div>
    </div>
  );
};

export default AnalyticsChart;