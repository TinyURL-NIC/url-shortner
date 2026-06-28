import { X, Link2, Calendar, Type, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const CreateLinkModal = ({ open, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    originalUrl: "",
    customAlias: "",
    expiryDate: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.(formData);

    // Optional
    setFormData({
      title: "",
      originalUrl: "",
      customAlias: "",
      expiryDate: "",
    });

    onClose();
  };

  const previewUrl = `https://shrtnr.io/${
    formData.customAlias || "generated-code"
  }`;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden h-[95vh]">
        {/* Header */}

        <div className="border-b px-8 py-6 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#08244D]">
              Create Short Link
            </h2>

            <p className="text-gray-500 mt-1">
              Fill in the details below to generate a new shortened URL.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-gray-100 transition text-[#08244D]"
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Link Title */}

          <div>
            <label className="font-semibold text-[#08244D] flex items-center gap-2 mb-2">
              <Type size={17} />
              Link Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Product Launch"
              required
              className="w-full rounded-xl border border-gray-200 px-4 h-12 outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400 text-[#08244D]"
            />

            <p className="text-xs text-gray-400 mt-2">
              Used only inside your dashboard.
            </p>
          </div>

          {/* Original URL */}

          <div>
            <label className="font-semibold text-[#08244D] flex items-center gap-2 mb-2">
              <Link2 size={17} />
              Destination URL
            </label>

            <input
              type="url"
              name="originalUrl"
              value={formData.originalUrl}
              onChange={handleChange}
              placeholder="https://example.com/product"
              required
              className="w-full rounded-xl border border-gray-200 px-4 h-12 outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400 text-[#08244D]"
            />

            <p className="text-xs text-gray-400 mt-2">
              The URL users will be redirected to.
            </p>
          </div>

          {/* Two Column */}

          <div className="grid md:grid-cols-2 gap-5">
            {/* Custom Alias */}

            <div>
              <label className="font-semibold text-[#08244D] flex items-center gap-2 mb-2">
                <Hash size={17} />
                Custom Alias
              </label>

              <input
                type="text"
                name="customAlias"
                value={formData.customAlias}
                onChange={handleChange}
                placeholder="summer-sale"
                className="w-full rounded-xl border border-gray-200 px-4 h-12 outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400 text-[#08244D]"
              />

              <p className="text-xs text-gray-400 mt-2">
                Leave empty to generate automatically.
              </p>
            </div>

            {/* Expiry */}

            <div>
              <label className="font-semibold text-[#08244D] flex items-center gap-2 mb-2">
                <Calendar size={17} />
                Expiry Date
              </label>

              <input
                type="datetime-local"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 h-12 outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400 text-[#08244D]"
              />

              <p className="text-xs text-gray-400 mt-2">Optional.</p>
            </div>
          </div>

          {/* Preview */}
          <div className="rounded-2xl bg-[#F8F5F0] border border-orange-100 p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-4 rounded-2xl shadow-sm border">
                <QRCodeSVG
                  value={previewUrl}
                  size={150}
                  bgColor="#FFFFFF"
                  fgColor="#08244D"
                  level="H"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-500">Preview</p>

                <h3 className="mt-1 text-lg font-semibold text-[#08244D]">
                  Your short URL
                </h3>

                <p className="mt-3 font-semibold text-[#F97316] break-all">
                  {previewUrl}
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}

          <div className="flex justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="rounded-xl h-11"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-[#F97316] hover:bg-[#e36b16] rounded-xl h-11 px-6"
            >
              Create Link
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLinkModal;
