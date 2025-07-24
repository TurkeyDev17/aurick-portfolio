import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  isFeatured?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  items,
  isFeatured = false,
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl border border-neutral-700 bg-neutral-900 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full min-h-[500px]`}
    >
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-neutral-300 text-sm mb-4">{description}</p>
        <ul className="space-y-2 text-sm text-neutral-200">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-red-500 mt-1">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="#contact"
          className="block w-full rounded-lg bg-red-600 px-4 py-2 text-center text-white font-medium hover:bg-red-700 transition"
        >
          Get a free quote!
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
