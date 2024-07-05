import React, {useContext, useEffect, useState} from "react";
import Button from "../Button";
import {ArrowDown, BackArrow} from "../svg-icons/icons";
import {useNavigate} from "react-router-dom";
import AppContext from "../../context/context";
import Dialog from "../Dialog";

const Divider = () => (
  <div className="flex justify-center my-4 h-1 bg-semi-gray w-20 absolute top-[80px] md:top-[100px] z-10 left-0 right-0 mx-auto rounded-full">
    <div className="w-16 border-t-4 border-gray-400 rounded-full"/>
  </div>
);

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-0 rounded-0">
    <button
      className="w-full text-left py-3 px-4 rounded-full border-2px border font-medium focus:outline-none flex justify-between items-center mb-3"
      onClick={onClick}
    >
      {title}
      <span
        className={`transform transition-transform ${isOpen ? "rotate-180" : ""
          }`}
      >
        <ArrowDown className="w-5 h-5"/>
      </span>
    </button>
    {isOpen && (
      <div className="px-4 py-2 bg-white mb-6 border-0">{content}</div>
    )}
  </div>
);

const PurchasePageComponent = () => {
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState(null);
  const appCtx = useContext(AppContext)
  const [cancelConfirm, setCancelConfirm] = useState(false)

  useEffect(() => {
    if (!appCtx.buyDetails) {
      navigate("/")
    }
  }, [navigate, appCtx.buyDetails])

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handlePurchase = (e) => {
    e.preventDefault()
    appCtx.goldPurchase()
    navigate("/")
  }

  return (
    <div className="max-w-full mx-auto p-0">
      <div className="pb-20">
        <div className="relative">
          <div className="flex-row h-28 bg-[#2b2b2b] relative">
            <div className="flex h-[75px] md:h-[95px] justify-between items-center px-4">
              <button className="flex justify-center items-center rounded-full w-[30px] h-[30px] bg-[#2b2b2b]" type="button" onClick={() => navigate("/buy")}>
                <BackArrow />
              </button>
              {appCtx.buyDetails && <button className="flex text-white justify-center items-center rounded w-[80px] h-[30px] bg-red-500" type="button" onClick={() => {
                setCancelConfirm(true)
              }}>
                Cancel
              </button>}
            </div>
          </div>
          <div className="rounded-t-3xl h-10 bg-white absolute w-full -bottom-1 left-0 z-10">

          </div>
        </div>
        <Divider />

        {cancelConfirm && <Dialog size={"md:w-4/12"}>
          <div className={"w-full mt-2"}>

            <h2 className="text-xl font-semibold mb-4">Confirm..!</h2>
            <div className="mb-4">Are you sure you want to cancel the investment plan?</div>
            <div className="flex justify-end space-x-4">
              <button
                  className={"px-4 py-2 bg-gray-500 text-white rounded mr-2"}
                  onClick={() => {
                    setCancelConfirm(false)
                  }}>
                Close
              </button>

              <button
                  className={"px-4 py-2 bg-red-500 text-white rounded mr-2"}
                  onClick={() => {
                    appCtx.updateContext({buyDetails: null})
                    navigate("/buy")
                    setCancelConfirm(false)
                  }}>
                Cancel
              </button>
            </div>
          </div>
        </Dialog>}

        <div className="px-4 max-w-3xl mx-auto pb-32">
          <h1 className="text-xl md:text-2xl font-medium text-center mb-4">
            Before your first purchase, read this
          </h1>

          <AccordionItem
            title="Our Fees"
            content={
              <p>
                We pride ourselves on our transparent fee structure: <br />
                <br />
                1% Insurance & Storage fee. <br />
                Our Buy-Sell Spread (difference between purchase and sale price)
                ranges between 1.5-2.1%, based on supplier rates. <br />
                <br />
                Traditionally, gold shops have high premiums and buy back your gold
                up to 20-30% lower than market buying rates. We consistently strive
                to offer one of the industry's most competitive rates.
              </p>
            }
            isOpen={openSection === "fees"}
            onClick={() => toggleSection("fees")}
          />
          <AccordionItem
            title="Our company and team"
            content={
              <p>
                Sugar Wallet has over 10,000 signed up users globally. Our team is
                ex Google, Microsoft, KPMG employees. <br />
                <br />
                Registered in New Zealand in 2021. We're a mission-driven entity.
                Our ambition is to champion financial equality globally. We envision
                a world where every individual can plan a future they dream of,
                without financial barriers. Our multicultural team operates from
                Turkey, London, India, and New Zealand. <br />
                <br />
                For added transparency, here's our official New Zealand Business
                Number: 9429048494700
              </p>
            }
            isOpen={openSection === "team"}
            onClick={() => toggleSection("team")}
          />
          <AccordionItem
            title="Transactions"
            content={
              <p>
                <b>Purchases:</b> <br />
                When you purchase gold, the money is deducted immediately from your
                card. We buy this gold in bulk daily. <br />
                <br />
                <b>Withdrawals: </b>
                <br />
                When you sell gold, the money is sent back to your given IBAN within
                1 working day. Please note, our payment can bounce - after which we
                get in touch with you for the correct Account and IBAN details.
              </p>
            }
            isOpen={openSection === "transactions"}
            onClick={() => toggleSection("transactions")}
          />

          <div className="mt-6 text-center">
            <div className="text-red-600 font-medium">Notice</div>
            <div
              className="text-red-600 p-2 mt-1 inline-block rounded flex-center"
              style={{ backgroundColor: "#EFFEFF" }}
            >
              Gold purchased by you cannot be sold in the first 15 days
            </div>
          </div>
        </div>

        <div className="w-[95%] max-w-3xl mx-auto md:py-10 md:pb-3 left-0 right-0 fixed bottom-20 z-20">
          <Button
            text={appCtx.investments.length <= 1 ? "Make Your First Purchase" : "Purchase"}
            color="bg-gray-900"
            textColor="text-white"
            onClick={handlePurchase}
          />
        </div>
      </div>
    </div>
  );
};

export default PurchasePageComponent;
