import "./reset.css";
import "./style.scss";
import useSelect from "./helpers/useSelect";

document.addEventListener("DOMContentLoaded", () => {
  const { handleSelectChange } = useSelect();

  handleSelectChange("week");
});
