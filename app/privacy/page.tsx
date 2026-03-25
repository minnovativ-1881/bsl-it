import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream min-h-screen">
        <section className="pt-32 pb-24">
          <div className="max-w-3xl mx-auto px-6">

            <h1 className="font-serif font-light text-warm-800 text-4xl mb-10">
              Privacy Policy
            </h1>

            <div className="space-y-12 text-warm-600 leading-relaxed">

              {/* Section 1 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">1. Privacy at a Glance</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">General Information</h3>
                    <p>
                      The following information provides a simple overview of what happens to your personal data
                      when you visit this website. Personal data is any data by which you can be personally
                      identified. For detailed information on the subject of data protection, please refer to our
                      privacy policy listed below this text.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Data Collection on This Website</h3>

                    <p className="font-medium text-warm-700 mt-3 mb-1">Who is responsible for data collection on this website?</p>
                    <p>
                      Data processing on this website is carried out by the website operator. You can find their
                      contact details in the section "Information about the responsible party" in this privacy
                      policy.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">How do we collect your data?</p>
                    <p>
                      Some data is collected when you provide it to us — for example, data you enter into a
                      contact form. Other data is collected automatically or with your consent when you visit
                      the website through our IT systems. This includes primarily technical data (e.g. internet
                      browser, operating system, or time of page access). This data is collected automatically
                      as soon as you enter this website.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">What do we use your data for?</p>
                    <p>
                      Some data is collected to ensure the error-free operation of the website. Other data may
                      be used to analyze your user behavior.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">What rights do you have regarding your data?</p>
                    <p>
                      You have the right at any time to receive free information about the origin, recipient, and
                      purpose of your stored personal data. You also have the right to request the correction or
                      deletion of this data. If you have given consent to data processing, you can revoke this
                      consent at any time for the future. You also have the right to request the restriction of
                      the processing of your personal data under certain circumstances. Furthermore, you have the
                      right to lodge a complaint with the competent supervisory authority.
                    </p>
                    <p className="mt-2">
                      For this and any other questions regarding data protection, you can contact us at any time.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Analytics and Third-Party Tools</h3>
                    <p>
                      When you visit this website, your browsing behavior may be statistically analyzed. This is
                      done primarily with so-called analytics programs. Detailed information about these analytics
                      programs can be found in the following privacy policy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">2. Hosting</h2>
                <p>We host the content of our website with the following provider:</p>

                <div className="mt-4">
                  <h3 className="font-serif text-warm-800 text-xl mb-2">Vercel</h3>
                  <p>
                    The provider is Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA
                    (hereinafter "Vercel"). For details, please refer to Vercel's privacy policy:{' '}
                    <a
                      href="https://vercel.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blush-500 hover:text-blush-600 transition-colors"
                    >
                      https://vercel.com/legal/privacy-policy
                    </a>
                    .
                  </p>
                  <p className="mt-3">
                    The use of Vercel is based on Art. 6 para. 1 lit. f GDPR. We have a legitimate interest in
                    presenting our website as reliably as possible. Where a corresponding consent has been
                    requested, processing is carried out exclusively on the basis of Art. 6 para. 1 lit. a GDPR
                    and § 25 para. 1 TTDSG, insofar as the consent covers the storage of cookies or access to
                    information on the user's device within the meaning of TTDSG. Consent can be revoked at any
                    time.
                  </p>

                  <div className="mt-4">
                    <h3 className="font-serif text-warm-800 text-lg mb-2">Data Processing Agreement</h3>
                    <p>
                      We have concluded a data processing agreement (DPA) for the use of the above-mentioned
                      service. This is a contract required by data protection law that ensures Vercel processes
                      the personal data of our website visitors only in accordance with our instructions and in
                      compliance with the GDPR.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">3. General Information and Mandatory Disclosures</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Privacy</h3>
                    <p>
                      The operators of these pages take the protection of your personal data very seriously. We
                      treat your personal data confidentially and in accordance with statutory data protection
                      regulations and this privacy policy.
                    </p>
                    <p className="mt-3">
                      When you use this website, various personal data is collected. Personal data is data by
                      which you can be personally identified. This privacy policy explains what data we collect
                      and how we use it. It also explains how and for what purpose this is done.
                    </p>
                    <p className="mt-3">
                      We draw your attention to the fact that data transmission over the internet (e.g.
                      communication by email) may be subject to security vulnerabilities. Complete protection
                      of data from access by third parties is not possible.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Information about the Responsible Party</h3>
                    <p>The responsible party for data processing on this website is:</p>
                    <p className="mt-2">
                      Sarah + Timon Mann<br />
                      Rechov HaReem 16, 9090230, Israel
                    </p>
                    <p className="mt-2">
                      Phone: +49 (0)1567 8472684<br />
                      Email:{' '}
                      <a
                        href="mailto:kontakt@babyschlummerland.de"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        kontakt@babyschlummerland.de
                      </a>
                    </p>
                    <p className="mt-3">
                      Legal Notice:{' '}
                      <a
                        href="/legal"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        landoflittledreamers.com/legal
                      </a>
                    </p>
                    <p className="mt-3">
                      The responsible party is the natural or legal person who, alone or jointly with others,
                      determines the purposes and means of the processing of personal data (e.g. names, email
                      addresses, etc.).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Storage Duration</h3>
                    <p>
                      Unless a more specific storage period has been stated within this privacy policy, your
                      personal data will remain with us until the purpose for data processing no longer applies.
                      If you assert a justified request for deletion or revoke your consent to data processing,
                      your data will be deleted unless we have other legally permissible reasons for storing
                      your personal data (e.g. tax or commercial law retention periods); in the latter case,
                      the data will be deleted once these reasons cease to apply.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">General Information on the Legal Basis for Data Processing on This Website</h3>
                    <p>
                      If you have consented to data processing, we process your personal data on the basis of
                      Art. 6 para. 1 lit. a GDPR or Art. 9 para. 2 lit. a GDPR if special categories of data
                      pursuant to Art. 9 para. 1 GDPR are processed. In the event of express consent to the
                      transfer of personal data to third countries, data processing is also carried out on the
                      basis of Art. 49 para. 1 lit. a GDPR. If you have consented to the storage of cookies or
                      to access to information on your device (e.g. via device fingerprinting), data processing
                      is additionally based on § 25 para. 1 TTDSG. Consent can be revoked at any time. Where
                      your data is required for the performance of a contract or to carry out pre-contractual
                      measures, we process your data on the basis of Art. 6 para. 1 lit. b GDPR. Furthermore,
                      we process your data where required to fulfill a legal obligation on the basis of Art. 6
                      para. 1 lit. c GDPR. Data processing may also be carried out on the basis of our
                      legitimate interest pursuant to Art. 6 para. 1 lit. f GDPR. Information about the
                      relevant legal basis in each individual case is provided in the following sections of
                      this privacy policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Recipients of Personal Data</h3>
                    <p>
                      In the course of our business activities, we work with various external parties. This
                      sometimes requires the transfer of personal data to these external parties. We only share
                      personal data with external parties where this is necessary for the performance of a
                      contract, where we are legally obligated to do so (e.g. disclosure of data to tax
                      authorities), where we have a legitimate interest in the transfer pursuant to Art. 6
                      para. 1 lit. f GDPR, or where another legal basis permits the transfer. When we use
                      data processors, we only share personal data of our customers on the basis of a valid
                      data processing agreement. In the case of joint processing, a joint processing agreement
                      is concluded.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Revocation of Your Consent to Data Processing</h3>
                    <p>
                      Many data processing operations are only possible with your express consent. You can
                      revoke consent you have already given at any time. The legality of data processing that
                      took place prior to the revocation remains unaffected.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">
                      Right to Object to Data Collection in Special Cases and to Direct Marketing (Art. 21 GDPR)
                    </h3>
                    <p className="uppercase text-sm leading-relaxed">
                      WHERE DATA PROCESSING IS CARRIED OUT ON THE BASIS OF ART. 6 PARA. 1 LIT. E OR F GDPR,
                      YOU HAVE THE RIGHT AT ANY TIME TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA ON
                      GROUNDS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO APPLIES TO PROFILING BASED ON
                      THESE PROVISIONS. THE RESPECTIVE LEGAL BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND
                      IN THIS PRIVACY POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL
                      DATA UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR THE PROCESSING WHICH
                      OVERRIDE YOUR INTERESTS, RIGHTS AND FREEDOMS, OR THE PROCESSING SERVES THE ASSERTION,
                      EXERCISE OR DEFENSE OF LEGAL CLAIMS (OBJECTION PURSUANT TO ART. 21 PARA. 1 GDPR).
                    </p>
                    <p className="uppercase text-sm leading-relaxed mt-3">
                      WHERE YOUR PERSONAL DATA IS PROCESSED FOR DIRECT MARKETING PURPOSES, YOU HAVE THE RIGHT
                      TO OBJECT AT ANY TIME TO THE PROCESSING OF PERSONAL DATA CONCERNING YOU FOR SUCH
                      MARKETING; THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS CONNECTED WITH SUCH DIRECT
                      MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR
                      DIRECT MARKETING PURPOSES (OBJECTION PURSUANT TO ART. 21 PARA. 2 GDPR).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Right to Lodge a Complaint with the Competent Supervisory Authority</h3>
                    <p>
                      In the event of breaches of the GDPR, data subjects have the right to lodge a complaint
                      with a supervisory authority, in particular in the Member State of their habitual
                      residence, their place of work, or the place of the alleged breach. This right to lodge
                      a complaint exists without prejudice to any other administrative or judicial remedy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Right to Data Portability</h3>
                    <p>
                      You have the right to have data that we process automatically on the basis of your
                      consent or in fulfillment of a contract handed over to you or to a third party in a
                      commonly used, machine-readable format. If you request the direct transfer of data to
                      another responsible party, this will only be done insofar as it is technically feasible.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Access, Rectification and Deletion</h3>
                    <p>
                      Within the scope of applicable legal provisions, you have the right at any time to
                      obtain free information about your stored personal data, its origin and recipient, and
                      the purpose of data processing, and, if applicable, a right to rectification or deletion
                      of this data. For this and other questions on the subject of personal data, you can
                      contact us at any time.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Right to Restriction of Processing</h3>
                    <p>You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose. The right to restriction of processing applies in the following cases:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        If you dispute the accuracy of your personal data stored with us, we usually need time
                        to verify this. For the duration of the verification, you have the right to request
                        the restriction of the processing of your personal data.
                      </li>
                      <li>
                        If the processing of your personal data was/is unlawful, you can request the
                        restriction of data processing instead of deletion.
                      </li>
                      <li>
                        If we no longer need your personal data but you need it to exercise, defend, or assert
                        legal claims, you have the right to request restriction of processing instead of
                        deletion.
                      </li>
                      <li>
                        If you have lodged an objection pursuant to Art. 21 para. 1 GDPR, a balance must be
                        struck between your interests and ours. As long as it has not yet been determined
                        whose interests prevail, you have the right to request the restriction of processing
                        of your personal data.
                      </li>
                    </ul>
                    <p className="mt-3">
                      Where processing of your personal data has been restricted, such data may — apart from
                      being stored — only be processed with your consent or for the purpose of asserting,
                      exercising, or defending legal claims, or protecting the rights of another natural or
                      legal person, or for reasons of important public interest of the European Union or a
                      Member State.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">SSL/TLS Encryption</h3>
                    <p>
                      For security reasons and to protect the transmission of confidential content, such as
                      orders or inquiries that you send to us as the site operator, this site uses SSL or TLS
                      encryption. You can recognize an encrypted connection by the fact that the address bar
                      of the browser changes from "http://" to "https://" and by the lock symbol in your
                      browser line.
                    </p>
                    <p className="mt-3">
                      When SSL or TLS encryption is activated, the data you transmit to us cannot be read by
                      third parties.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Objection to Promotional Emails</h3>
                    <p>
                      The use of contact details published as part of our legal notice obligation for the
                      purpose of sending unsolicited advertising and information materials is hereby expressly
                      prohibited. The operators of this site reserve the right to take legal action in the
                      event of unsolicited promotional information being sent, for example by spam emails.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">4. Data Collection on This Website</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Cookies</h3>
                    <p>
                      Our website uses so-called "cookies". Cookies are small data packets that do no damage
                      to your device. They are either stored temporarily for the duration of a session
                      (session cookies) or permanently (persistent cookies) on your device. Session cookies
                      are automatically deleted at the end of your visit. Persistent cookies remain stored on
                      your device until you delete them yourself or until they are automatically deleted by
                      your web browser.
                    </p>
                    <p className="mt-3">
                      Cookies can come from us (first-party cookies) or from third-party companies
                      (third-party cookies). Third-party cookies enable the integration of certain services
                      from third-party companies within websites (e.g. cookies for processing payment
                      services).
                    </p>
                    <p className="mt-3">
                      Cookies have various functions. Many cookies are technically necessary, as certain
                      website functions would not work without them. Other cookies can be used to analyze
                      user behavior or for advertising purposes.
                    </p>
                    <p className="mt-3">
                      Cookies that are required to carry out the electronic communication process, to provide
                      certain functions you have requested, or to optimize the website (e.g. cookies for
                      measuring website audiences) are stored on the basis of Art. 6 para. 1 lit. f GDPR,
                      unless another legal basis is specified. The website operator has a legitimate interest
                      in storing necessary cookies for the technically error-free and optimized provision of
                      its services. Where consent to the storage of cookies and comparable recognition
                      technologies has been requested, processing is carried out exclusively on the basis of
                      this consent (Art. 6 para. 1 lit. a GDPR and § 25 para. 1 TTDSG); consent can be
                      revoked at any time.
                    </p>
                    <p className="mt-3">
                      You can configure your browser to inform you about the setting of cookies and to allow
                      cookies only in individual cases, to exclude the acceptance of cookies for certain cases
                      or in general, and to enable the automatic deletion of cookies when closing the browser.
                      Disabling cookies may limit the functionality of this website.
                    </p>
                    <p className="mt-3">
                      You can find out which cookies and services are used on this website in this privacy
                      policy.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Contact Form</h3>
                    <p>
                      If you send us inquiries via the contact form, your details from the inquiry form,
                      including the contact details you provided there, will be stored with us for the purpose
                      of processing the inquiry and in case of follow-up questions. We do not share this data
                      without your consent.
                    </p>
                    <p className="mt-3">
                      The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your inquiry is
                      related to the performance of a contract or is necessary for carrying out pre-contractual
                      measures. In all other cases, processing is based on our legitimate interest in the
                      effective handling of inquiries directed to us (Art. 6 para. 1 lit. f GDPR) or on your
                      consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; consent can be revoked
                      at any time.
                    </p>
                    <p className="mt-3">
                      The data you enter in the contact form will remain with us until you ask us to delete it,
                      revoke your consent to storage, or the purpose for data storage no longer applies (e.g.
                      after your inquiry has been fully processed). Mandatory legal provisions — in particular
                      retention periods — remain unaffected.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Inquiry by Email, Phone, or Fax</h3>
                    <p>
                      If you contact us by email, phone, or fax, your inquiry including all resulting personal
                      data (name, inquiry) will be stored and processed by us for the purpose of handling your
                      request. We do not share this data without your consent.
                    </p>
                    <p className="mt-3">
                      The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your inquiry is
                      related to the performance of a contract or is necessary for carrying out pre-contractual
                      measures. In all other cases, processing is based on our legitimate interest in the
                      effective handling of inquiries directed to us (Art. 6 para. 1 lit. f GDPR) or on your
                      consent (Art. 6 para. 1 lit. a GDPR) if this has been requested; consent can be revoked
                      at any time.
                    </p>
                    <p className="mt-3">
                      Data sent to us via contact inquiries will remain with us until you ask us to delete it,
                      revoke your consent to storage, or the purpose for data storage no longer applies (e.g.
                      after your request has been fully processed). Mandatory legal provisions — in particular
                      statutory retention periods — remain unaffected.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Participation in Affiliate Partner Programs</h3>
                    <p>
                      Within our online offering, we use industry-standard tracking measures on the basis of
                      our legitimate interests (i.e. interest in the analysis, optimization, and economic
                      operation of our online offering) pursuant to Art. 6 para. 1 lit. f GDPR, insofar as
                      these are necessary for the operation of the affiliate system. The following information
                      explains the technical background to users.
                    </p>
                    <p className="mt-3">
                      The services offered by our contract partners can also be advertised and linked to on
                      other websites (so-called affiliate links or after-buy systems, e.g. when links to third
                      parties are offered after a contract has been concluded). The operators of the respective
                      websites receive a commission when users follow the affiliate links and subsequently take
                      up the offers.
                    </p>
                    <p className="mt-3">
                      In summary, it is necessary for our online offering that we can track whether users who
                      are interested in affiliate links and/or the offers available from us subsequently take
                      up those offers via the affiliate links or our online platform. For this purpose, the
                      affiliate links and our offers are supplemented with certain values that can be part of
                      the link or otherwise set, e.g. in a cookie. These values include in particular the
                      source website (referrer), time, an online identifier of the operators of the website on
                      which the affiliate link was located, an online identifier of the respective offer, an
                      online identifier of the user, as well as tracking-specific values such as advertising
                      material ID, partner ID, and categorizations.
                    </p>
                    <p className="mt-3">
                      The online identifiers of users used by us are pseudonymous values. This means the online
                      identifiers themselves do not contain personal data such as names or email addresses.
                      They only help us to determine whether the same user who clicked on an affiliate link or
                      was interested in an offer through our online platform subsequently took up the offer,
                      e.g. concluded a contract with the provider. However, the online identifier is personal
                      in the sense that the partner company and ourselves have the online identifier together
                      with other user data. Only in this way can the partner company inform us whether that
                      user took up the offer and we can, for example, pay out the bonus.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Amazon Partner Program</h3>
                    <p>
                      On the basis of our legitimate interests (i.e. interest in the economic operation of our
                      online offering within the meaning of Art. 6 para. 1 lit. f GDPR), we participate in
                      the Amazon EU partner program, which is designed to provide a medium for websites
                      through which advertising revenue can be earned by placing advertisements and links to
                      Amazon.de (so-called affiliate system). As an Amazon partner, we earn from qualifying
                      purchases.
                    </p>
                    <p className="mt-3">
                      Amazon uses cookies to be able to trace the origin of orders. Among other things, Amazon
                      can recognize that you clicked the partner link on this website and subsequently
                      purchased a product on Amazon.
                    </p>
                    <p className="mt-3">
                      For more information about Amazon's data use and opt-out options, please refer to
                      Amazon's privacy policy:{' '}
                      <a
                        href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010
                      </a>
                      .
                    </p>
                    <p className="mt-3 text-sm">
                      Note: Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or one of its
                      affiliated companies.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">"Baby Sleep Check / Sleep Analysis"</h3>

                    <p className="font-medium text-warm-700 mt-3 mb-1">1) Purpose and process of data processing</p>
                    <p>When you use our <strong>Baby Sleep Check (Sleep Analysis)</strong>, we process your details in order to:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>send you an <strong>automated evaluation as guidance</strong> (results email), and</li>
                      <li>send you <strong>further helpful emails</strong> about baby sleep afterwards (e.g. tailored tips based on your results).</li>
                    </ul>
                    <p className="mt-2">
                      <strong>Important:</strong> The evaluation is a <strong>general guide</strong> and does not
                      replace <strong>medical advice or diagnosis</strong>.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">2) What data we process</p>
                    <p>Depending on what you enter, we process in particular:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Email address (required)</li>
                      <li>First name (if provided)</li>
                      <li>Baby's name (if provided/optional)</li>
                      <li>Information from the check (e.g. sleep times, naps, wake windows, time to fall asleep, night wakings, subjective rating)</li>
                    </ul>
                    <p className="mt-2">Additionally, we store (for the meaningful delivery of matching follow-ups) typical result fields such as:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Age in months (or age group)</li>
                      <li>"Main issue"/focus area (key)</li>
                      <li>Score/status per area</li>
                    </ul>

                    <p className="font-medium text-warm-700 mt-4 mb-1">3) Legal basis</p>
                    <p>
                      Processing is based on your <strong>consent</strong> (Art. 6 para. 1 lit. a GDPR). You
                      can revoke your consent <strong>at any time</strong> (e.g. via the unsubscribe link in
                      any email).
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">4) Email dispatch via KlickTipp</p>
                    <p>
                      For sending and managing emails, we use <strong>KlickTipp</strong> as our service
                      provider (email marketing/CRM). KlickTipp processes data on our behalf. KlickTipp states
                      that data is processed <strong>exclusively within the EU</strong>.{' '}
                      <a
                        href="https://www.klicktipp.com/de/marketing-suite/datenschutz-dsgvo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        KlickTipp Privacy &amp; GDPR
                      </a>
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">5) Automated evaluation using AI (OpenAI)</p>
                    <p>
                      For the automated evaluation, we use an AI service from <strong>OpenAI</strong>. In doing
                      so, the content you have entered (and, if applicable, intermediate result values) is
                      transmitted to OpenAI for the purpose of generating the evaluation, and a text output is
                      returned.
                    </p>
                    <p className="mt-2">
                      OpenAI processes this data for us as a <strong>data processor</strong> under a Data
                      Processing Addendum.{' '}
                      <a
                        href="https://openai.com/policies/data-processing-addendum/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        OpenAI DPA
                      </a>
                    </p>
                    <p className="mt-2">
                      OpenAI also states that <strong>API data is not used for training</strong> their models
                      by default, and that content may be stored for up to 30 days for abuse monitoring
                      purposes (unless otherwise agreed).
                    </p>
                    <p className="mt-2">
                      <strong>Note on sensitive data:</strong> Please do not enter any medical diagnoses,
                      illnesses, or other health data in free text fields. The evaluation is not designed for
                      this purpose.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">6) Recipients / third-country transfers</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        <strong>KlickTipp</strong> (email dispatch, contact management) —{' '}
                        <a
                          href="https://www.klicktipp.com/de/marketing-suite/datenschutz-dsgvo/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blush-500 hover:text-blush-600 transition-colors"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <strong>OpenAI</strong> (AI evaluation) —{' '}
                        <a
                          href="https://openai.com/policies/data-processing-addendum/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blush-500 hover:text-blush-600 transition-colors"
                        >
                          DPA
                        </a>
                      </li>
                    </ul>
                    <p className="mt-2">
                      Where processing or transfers outside the EEA are required for OpenAI, this is carried
                      out on the basis of appropriate safeguards (e.g. Standard Contractual Clauses or an
                      adequacy decision) according to the DPA.
                    </p>

                    <p className="font-medium text-warm-700 mt-4 mb-1">7) Storage duration</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>We store your data for as long as necessary for the purposes stated above, or until you revoke your consent.</li>
                      <li>Workflow/system logs (e.g. in n8n) are regularly deleted after 30 days.</li>
                      <li>For OpenAI, the retention periods mentioned above apply within the scope of the service (typically up to 30 days for API content, unless otherwise agreed).</li>
                    </ul>

                    <p className="font-medium text-warm-700 mt-4 mb-1">8) Your rights</p>
                    <p>
                      You have the right at any time to access, rectification, deletion, restriction of
                      processing, data portability, and objection — as well as the right to lodge a complaint
                      with a supervisory authority.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="font-serif text-warm-800 text-2xl mb-4">5. Newsletter</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">Newsletter Data</h3>
                    <p>
                      If you would like to receive the newsletter offered on this website, we require an email
                      address from you as well as information that allows us to verify that you are the owner
                      of the provided email address and that you consent to receiving the newsletter. Further
                      data is not collected or is collected only on a voluntary basis. We use this data
                      exclusively for sending the requested information and do not pass it on to third parties.
                    </p>
                    <p className="mt-3">
                      The processing of the data entered into the newsletter registration form is carried out
                      exclusively on the basis of your consent (Art. 6 para. 1 lit. a GDPR). You can revoke
                      your consent to the storage of data, the email address, and their use for sending the
                      newsletter at any time, for example via the "Unsubscribe" link in the newsletter. The
                      legality of data processing operations that have already taken place remains unaffected
                      by the revocation.
                    </p>
                    <p className="mt-3">
                      The data stored with us for the purpose of receiving the newsletter will be stored by
                      us or the newsletter service provider until you unsubscribe from the newsletter, and
                      deleted from the newsletter distribution list after you unsubscribe or once the purpose
                      ceases to apply. We reserve the right to delete or block email addresses from our
                      newsletter distribution list at our own discretion within the scope of our legitimate
                      interest pursuant to Art. 6 para. 1 lit. f GDPR.
                    </p>
                    <p className="mt-3">
                      Data stored with us for other purposes remains unaffected.
                    </p>
                    <p className="mt-3">
                      After you unsubscribe from the newsletter distribution list, your email address may be
                      stored by us or the newsletter service provider in a suppression list if this is
                      necessary to prevent future mailings. The data from the suppression list is used solely
                      for this purpose and is not merged with other data. This serves both your interest and
                      our interest in complying with legal requirements when sending newsletters (legitimate
                      interest within the meaning of Art. 6 para. 1 lit. f GDPR). Storage in the suppression
                      list is not limited in time.{' '}
                      <strong>
                        You may object to the storage if your interests outweigh our legitimate interest.
                      </strong>
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-warm-800 text-xl mb-2">How We Use KlickTipp</h3>
                    <p>
                      (1) For online communication with you, we use the services of KLICK-TIPP LIMITED,
                      15 Cambridge Court, 210 Shepherd's Bush Road, London W6 7NJ, United Kingdom.
                      The representative of KLICK-TIPP LIMITED within the meaning of Article 27 GDPR is
                      Waterton Knowledge Center WKC UG, Friedrichstr. 53a, 15537 Erkner, represented by
                      Ulf Castelle. We obtain these services through a principal contract with Digistore24 GmbH,
                      St.-Godehard-Straße 32, 31139 Hildesheim. Digistore24 is a reseller that procures
                      products or services such as KlickTipp and sells them to buyers without significant
                      further processing. We have additionally concluded a data processing agreement within
                      the meaning of Article 28 GDPR directly with KlickTipp. This ensures that we maintain
                      full control over the personal data processed there and that KlickTipp implements our
                      instructions accordingly.
                    </p>
                    <p className="mt-3">
                      (2) We store your contact details at KlickTipp and may process the data that we process
                      via the online marketing tools described in more detail in this privacy policy. These
                      providers are fully integrated with KlickTipp via a secure interface. It is therefore
                      possible that KlickTipp may become aware of this data — however, as mentioned above,
                      KlickTipp has no right of its own use regarding this data and is fully subject to our
                      instructions.
                    </p>
                    <p className="mt-3">
                      (3) Furthermore, at KlickTipp we have the ability to associate your personal data with
                      so-called tags. KlickTipp distinguishes two types of tags: SmartTags — when a contact
                      registers via a registration form, they automatically receive a tag with the name of the
                      relevant registration form. KlickTipp also automatically sets the tags "Email received",
                      "Email opened", "Email clicked", and "Email viewed in browser". Manual tags — in
                      addition to SmartTags, manual tags can be created to label contacts with, for example,
                      the tag "Customer" or more specifically "Product B purchased".
                    </p>
                    <p className="mt-3">
                      (4) Details about these and other options we use at KlickTipp can be found in the{' '}
                      <a
                        href="https://www.klicktipp.com/handbuch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        KlickTipp Manual
                      </a>
                      .
                    </p>
                    <p className="mt-3">
                      (5) KlickTipp's privacy policy can be found{' '}
                      <a
                        href="https://www.klicktipp.com/datenschutzerklarung/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className="mt-3">
                      (6) KlickTipp's anti-spam policy can be found{' '}
                      <a
                        href="https://www.klicktipp.com/anti-spam-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blush-500 hover:text-blush-600 transition-colors"
                      >
                        here
                      </a>
                      .
                    </p>
                    <p className="mt-3">
                      The following information provides details about the content of our newsletter, as well
                      as the registration, dispatch, and statistical evaluation procedures and your right to
                      object. By subscribing to our newsletter, you consent to receiving it and to the
                      procedures described.
                    </p>
                    <p className="mt-3">
                      Content of the newsletter: We send newsletters, emails, and other electronic
                      notifications containing promotional information (hereinafter "newsletter") only with
                      the consent of the recipients or a legal authorization. Insofar as the content of the
                      newsletter is specifically described in the context of a registration, it is decisive
                      for the users' consent. Otherwise, our newsletters contain information about our
                      services.
                    </p>
                    <p className="mt-3">
                      Double opt-in and logging: Registration for our newsletter takes place using a so-called
                      double opt-in procedure. This means that after registering you will receive an email
                      asking you to confirm your registration. This confirmation is necessary to ensure that
                      no one can register with someone else's email address. Newsletter registrations are
                      logged in order to be able to demonstrate the registration process in accordance with
                      legal requirements. This includes storing the time of registration and confirmation, as
                      well as the IP address. Changes to your data stored with the dispatch service provider
                      are also logged.
                    </p>
                    <p className="mt-3">
                      Registration data: To register for the newsletter, it is sufficient to provide your
                      email address. Optionally, we ask you to provide a name for the purpose of a personal
                      salutation in the newsletter.
                    </p>
                    <p className="mt-3">
                      The sending of the newsletter and the associated performance measurement are carried out
                      on the basis of consent from recipients pursuant to Art. 6 para. 1 lit. a, Art. 7 GDPR
                      in conjunction with § 7 para. 2 No. 3 UWG, or, where consent is not required, on the
                      basis of our legitimate interests in direct marketing pursuant to Art. 6 para. 1 lit. f
                      GDPR in conjunction with § 7 para. 3 UWG.
                    </p>
                    <p className="mt-3">
                      The logging of the registration process is carried out on the basis of our legitimate
                      interests pursuant to Art. 6 para. 1 lit. f GDPR. Our interest is directed at the use
                      of a user-friendly and secure newsletter system that serves both our business interests
                      and the expectations of users, and also allows us to demonstrate consent.
                    </p>
                    <p className="mt-3">
                      Cancellation/revocation — You can cancel receipt of our newsletter at any time, i.e.
                      revoke your consent. A link to cancel the newsletter can be found at the end of each
                      newsletter. We may store email addresses that have been unsubscribed for up to three
                      years on the basis of our legitimate interests before deleting them, in order to be able
                      to demonstrate consent that was previously given. The processing of this data will be
                      limited to the purpose of a possible defense against claims. An individual request for
                      deletion is possible at any time, provided that the prior existence of consent is
                      simultaneously confirmed.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
