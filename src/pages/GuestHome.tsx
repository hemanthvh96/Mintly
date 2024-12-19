import BankCrypto from "../assets/guesthome.jpg";
import { Button } from "@/components/ui/button";

const GuestHome = () => {
  return (
    <div className="guest-home w-full">
      <section className="hero w-full grid grid-cols-2 gap-4 h-[calc(100vh-73px)]">
        <div className="px-10 flex flex-col gap-10 justify-center">
          <div>
            <h1 className="font-medium text-4xl mb-8 tracking-wide text-center">
              From <span className="text-primary">Crypto</span> to Cart,
              <span className="block">Pay Instantly with Our Card!</span>
            </h1>
            <p>
              Discover the future of payments with seamless crypto transactions.
              Shop, pay bills, and earn rewards using your favorite digital
              currencies.
            </p>
            <p></p>
          </div>
          <Button className="self-center">Get Your Card Now</Button>
        </div>
        <div className="rounded-lg truncate items-center">
          <img src={BankCrypto} className="h-full" />
        </div>
      </section>
    </div>
  );
};

export default GuestHome;
