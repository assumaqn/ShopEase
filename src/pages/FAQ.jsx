import PageNav from "../Components/PageNav";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) and overnight shipping options are also available at checkout. Free shipping is available on orders over $100.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee on all products. Items must be in original condition with all packaging and accessories. Simply contact our support team to initiate a return.",
  },
  {
    question: "Do you offer warranties on products?",
    answer:
      "Yes! All products come with a manufacturer's warranty. Most items include a 1-2 year warranty. Extended warranty options are available at checkout for additional coverage.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! Once your order ships, you'll receive a tracking number via email. You can use this to monitor your package's journey to your doorstep.",
  },
  {
    question: "Are your products authentic?",
    answer:
      "Yes, we guarantee 100% authentic products. We work directly with manufacturers and authorized distributors. Every product comes with proper documentation and warranty cards.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship within the United States and Canada. We're working on expanding to more countries soon. Subscribe to our newsletter for updates on international shipping.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Our customer support team is available Monday-Friday, 9am-6pm EST. You can reach us via email at support@shopease.com, call us at +1 (555) 123-4567, or use our live chat feature.",
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "Orders can be cancelled or modified within 1 hour of placement. After that, the order enters our fulfillment process. Contact us immediately if you need to make changes.",
  },
  {
    question: "Do you offer price matching?",
    answer:
      "Yes! If you find a lower price on an identical product from an authorized retailer, we'll match it. Contact our sales team with proof of the lower price within 7 days of your purchase.",
  },
  {
    question: "What if I receive a damaged product?",
    answer:
      "We're sorry if that happens! Contact us within 48 hours of delivery with photos of the damage. We'll arrange for a replacement or full refund, including return shipping costs.",
  },
  {
    question: "Do you have a loyalty program?",
    answer:
      "Yes! Our ShopEase Rewards program gives you points for every purchase. Points can be redeemed for discounts on future orders. Sign up is free and automatic with your first purchase.",
  },
];

function FAQ() {
  return (
    <>
      <PageNav />
      <section className={styles["faq-section"]}>
        <di>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about shopping with ShopEase</p>
        </di>
        <Accordian />
        <p style={{ fontSize: "15px", marginTop: "15px", color: "#555" }}>
          Didn't find what you were looking for?
        </p>
        <Link to="#" style={{ color: "#0353a4", fontSize: "16px" }}>
          Contact our support team
        </Link>
      </section>
    </>
  );
}

function Accordian() {
  return (
    <div className={styles.accordian}>
      {faqs.map((faq) => (
        <span>
          <h4 style={{ fontSize: "14px", color: "#555", padding: "10px 0" }}>
            {faq.question}
          </h4>
          <ChevronDown color="#555" />
        </span>
      ))}
    </div>
  );
}

export default FAQ;
