import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { setLanguage } from "../redux/slices/langSlice";

const LANGUAGES = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
];

const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.currentLang);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    dispatch(setLanguage(lang));
  };

  return (
    <select
      value={currentLang}
      onChange={handleChange}
      style={{
        fontWeight: 600,
        padding: "0.5em 1em",
        borderRadius: "6px",
        border: "1px solid #ddd",
        marginLeft: "2rem",
        background: "#fff",
        color: "#40916C",
        fontSize: "1em",
        cursor: "pointer",
      }}
      aria-label="Seleccionar idioma"
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
