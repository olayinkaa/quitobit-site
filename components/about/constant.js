import { BiReceipt, BiCubeAlt, BiImages, BiShieldAlt2 } from "react-icons/bi";

export const SERVICES_LEFT = [
    {
        id:1,
        title:"Payment Applications."
    },
    {
        id:2,
        title:"Risk Analysis Using Artificial Intelligence."
    }, 
    {
        id:3,
        title:"Bills Payment Engine."
    }, 
    {
        id:4,
        title:"Data Analytics."
    }, 
    {
        id:5,
        title:"Terminal Management System."
    }, 
    {
        id:6,
        title:"Agency Banking Services."
    }, 
    {
        id:7,
        title:"Secured Military Web Applications."
    }, 
    {
        id:8,
        title:"Card Switch."
    },
    {
        id:9,
        title:"Transport Fare Solutions and Traffic Management Solutions.."
    },

]

export const SERVICES_RIGHT = [
    {
        id:1,
        title: "Payment Application",
        description: "EMV Application for Point of Sale and Mobile Point of Sale (Windows and Linux based)",
        icon: <BiReceipt fontSize={50} className="text-blue-500" />
    }, 
    {
        id:2,
        title: "Global Security Standards",
        description: "Global Card Scheme Certification (MTIP and ADVT) for all our terminals.",
        icon: <BiCubeAlt fontSize={50} className="text-blue-500" />

    }, 
    {
        id:3,
        title: "Supported Transactions",
        description: "ICC, NFC, MAG SWIPE, QR CODE, USSD and WALLET ENGINES.",
        icon: <BiImages fontSize={50} className="text-blue-500" />
    }, 
    {
        id:4,
        title: "Third Party Integrations",
        description: "Custom Implementation with Global Card Switches (Postillion and Transware Online).",
        icon: <BiShieldAlt2 fontSize={50} className="text-blue-500" />
    },
]
