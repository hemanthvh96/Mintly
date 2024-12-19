import { useAuth } from "@/contexts/AuthContext";
import CreditCard from "../icons/credit-card";

const Greeting = () => {
  const { user } = useAuth();
  return (
    <section className="greeting bg-primary-foreground">
      <div className="container mx-auto p-4 flex flex-row items-start gap-5">
        <div className="credit-card hidden sm:block">
          <CreditCard height="100px" width="150px" />
        </div>
        <div className="custom-greeting grid grid-rows-[auto_auto] gap-4 w-full sm:w-max">
          <p className="font-medium text-2xl sm:text-3xl leading-tight">
            Good Morning,{" "}
            <span className="text-primary">{user?.firstName}</span>
          </p>
          <div className="grid sm:grid-flow-col auto-cols-auto gap-4">
            <a className="hover:text-primary">
              Card Details (Account ending in 2589)
              <span className="pl-2 hidden sm:inline">|</span>
            </a>
            <a className="hover:text-primary">
              Freeze Account <span className="pl-2 hidden sm:inline">|</span>
            </a>
            <a className="hover:text-primary">View your FICO Credit Score</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
