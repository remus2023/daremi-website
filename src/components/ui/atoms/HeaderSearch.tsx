"use client";

import { FormEvent, useState } from "react";

type HeaderSearchProps = {
  className?: string;
  placeholder?: string;
  onSubmit?: (value: string) => void;
};

export default function HeaderSearch({
  className,
  placeholder = "Caută bucătării, dormitoare, mobilier la comandă…",
  onSubmit,
}: HeaderSearchProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form className={className} onSubmit={handleSubmit} role="search">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="site-header__search-input"
        aria-label="Căutare"
      />
    </form>
  );
}
