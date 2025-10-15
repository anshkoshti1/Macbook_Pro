import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="info">
        <p>
          ‡Includes instant cashback and No Cost EMI. <br /> No Cost EMI is
          available with the purchase of an{" "}
          <span className="underline cursor-pointer">eligible product</span>{" "}
          made using qualifying cards on 3-, 6-, 9- or 12-month tenures from
          most leading card issuers. The 9- and 12-month tenures of No Cost EMI
          are available until 23 October 2025. Eligible AirPods, HomePod, Beats
          and the iPhone Air MagSafe Battery are available with No Cost EMI on
          3- and 6-month tenures only. Monthly pricing is rounded to the nearest
          rupee. Exact pricing will be provided by your card issuer, subject to
          your card issuer’s terms and conditions. Minimum order spend applies
          as per your card issuer’s threshold. No Cost EMI is not available to
          business customers and cannot be combined with Apple Store for
          Education or Corporate Employee Purchase Plan pricing. Card
          eligibility is subject to terms and conditions between you and your
          card issuer. Offer may be revised or withdrawn at any time without any
          prior notice.{" "}
          <span className="underline cursor-pointer">Terms apply.</span> <br />
          Instant cashback is available with the purchase of an{" "}
          <span className="underline cursor-pointer">eligible product</span>
          with qualifying American Express, Axis Bank and ICICI Bank cards only.
          Minimum transaction value of ₹10001 applies.{" "}
          <span className="underline cursor-pointer">Click here</span> to see
          instant cashback amounts and eligible devices. Instant cashback is
          available for up to two orders per rolling 90-day period with an
          eligible card. Card eligibility is subject to terms and conditions
          between you and your card issuer. Total transaction value is
          calculated after any trade-in credit or eligible discount is applied.
          Any subsequent order adjustment(s) or cancellation(s) may result in
          instant cashback being recalculated, and any refund may be adjusted to
          account for instant cashback clawback; this may result in no refund
          being made to you. Offer may be revised or withdrawn at any time
          without any prior notice.{" "}
          <span className="underline cursor-pointer">
            Additional terms apply
          </span>
          . Instant cashback is not available to business customers and cannot
          be combined with Apple Store for Education or Corporate Employee
          Purchase Plan pricing. Multiple separate orders cannot be combined for
          instant cashback. <br /> 1. Testing conducted by Apple in July 2025
          using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods
          firmware and iOS 26. Noise reduction was tested in accordance with IEC
          60268-24. Comparison made against the best-selling wireless in-ear
          headphones commercially available at the time of testing. Performance
          depends on device settings, environment and many other factors. <br />{" "}
          A subscription is required for Apple TV+. <br />
          Features are subject to change. Some features, applications and
          services may not be available in all regions or all languages.
        </p>
      </div>

      <hr />

      <div className="info">
        <p>
          More ways to shop:{" "}
          <span className="underline cursor-pointer">Find an Apple Store</span>{" "}
          or <span className="underline cursor-pointer">other retailer</span>{" "}
          near you. Or call{" "}
          <span className="underline cursor-pointer">000800 040 1966</span>.
        </p>
        <img src="/logo.svg" alt="Apple logo" />
      </div>

      <hr />

      <div className="links">
        <div className="flex justify-center items-end gap-1">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
        </div>

        <ul>
          {footerLinks.map((link) => (
            <li key={link.label}>
              <a href={link.link}>{link.label}</a>
            </li>
          ))}
        </ul>

        <p>India</p>
      </div>
    </footer>
  );
};

export default Footer;
