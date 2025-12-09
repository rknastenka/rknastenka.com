export default function LinkPreview({ url, siteName, linkText, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 py-0.5 no-underline hover:opacity-80 transition-opacity"
    >
      {/* Icon */}
      {icon && (
        <img
          src={icon}
          alt={siteName}
          className="w-6 h-6 flex-shrink-0 object-contain rounded"
        />
      )}
      
      {/* Text Content */}
      <div className="flex items-center gap-2 flex-wrap" style={{ fontFamily: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"' }}>
        <span className="text-gray-500 dark:text-gray-400 text-xs lg:text-sm font-normal">
          {siteName}
        </span>
        <span className="font-semibold  text-xs lg:text-sm">
          {linkText}
        </span>
      </div>
    </a>
  );
}
