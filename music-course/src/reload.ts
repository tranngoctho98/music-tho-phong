import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ReloadOnPathChange = () => {
  const location = useLocation();

  useEffect(() => {
    // Gọi hàm reload() khi đường dẫn URL thay đổi
    window.location.reload();
  }, [location.pathname]);

  return null;
};

export default ReloadOnPathChange;
