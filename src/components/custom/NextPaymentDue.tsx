import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NextPaymentDue = () => {
  const navigate = useNavigate();
  return (
    <div className="next-payment-due container rounded-lg shadow-2xl bg-white p-4 flex flex-col gap-2">
      <p className="font-medium text-base">Next Payment Due</p>
      <p className="font-medium text-2xl mb-4">Dec 30</p>
      <Button className="mb-4 w-36" onClick={() => navigate("/pay")}>
        Make Payment
      </Button>
      <div>
        <p className="font-normal">Minimum Payment Due:</p>
        <p>$35</p>
      </div>
      <div>
        <p>Last Payment:</p>
        <p>$700 on 11/01/2024</p>
      </div>
    </div>
  );
};

export default NextPaymentDue;
